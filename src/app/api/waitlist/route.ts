import { formatPhone } from "@/lib/applications";
import { callTracker } from "@/lib/tracker";
import {
  Answers,
  Contact,
  DEPOSIT_INR,
  FEE_INR,
  DEFAULT_VARIANT,
  MIN_FILL_MS,
  NOTE_MAX,
  TRACKS,
  TrackId,
  emptyAnswers,
  parseVariant,
  recommendTrack,
  validAnswers,
  validateContact,
} from "@/lib/live-projects";

// Receives the /live-projects flow and forwards it to the careers Apps Script, which writes to
// its "Live projects" tab. Two stages, matched by a random session id from the browser:
//   answers  the 7 answers, no name, sent when the recommended track is shown (drop-off data)
//   reserve  name, email, WhatsApp, college + consent, filling in that same row
// Same webhook and token as /api/apply, so nothing new to configure in Vercel.
// Variant (a, b or c, from ?v= on the page): the session id already starts with it ("b-<uuid>")
// and the sheet stores the session id, so no new column is needed. It is also sent as a
// `variant` field on every payload for any script that wants it.
// Stages a variant uses: A = answers, reserve, deposit, paid. B and C = answers, reserve.

// Same slow-Google allowance as /api/apply (LESSONS L68)
export const maxDuration = 60;

const PAUSED = "Reservations are paused for a moment. Please email rohan@theaddalabs.com and we'll add you.";

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "That didn't come through properly." }, { status: 400 });
  }
  const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

  // Bots get a quiet success so they don't learn what tripped them
  const startedAt = Number(raw.startedAt) || 0;
  if (str(raw.website) || !startedAt || Date.now() - startedAt < MIN_FILL_MS) return Response.json({ ok: true });

  const session = str(raw.session, 64);
  if (!/^[a-zA-Z0-9-]{8,64}$/.test(session)) return Response.json({ ok: false }, { status: 400 });

  const sent = (typeof raw.answers === "object" && raw.answers ? raw.answers : {}) as Record<string, unknown>;
  // The prefix of the session id wins, so a row's variant always matches its Session cell
  const variant = (session[1] === "-" ? parseVariant(session[0]) : null) ?? parseVariant(raw.variant) ?? DEFAULT_VARIANT;

  const answers: Answers = emptyAnswers();
  for (const k of Object.keys(answers) as (keyof Answers)[]) answers[k] = str(sent[k], k === "note" ? NOTE_MAX : 200);
  if (!validAnswers(answers, raw.stage === "answers")) return Response.json({ ok: false, error: "A few answers need another look." }, { status: 400 });

  const url = process.env.HIRING_WEBHOOK_URL;
  const token = process.env.HIRING_WEBHOOK_TOKEN;
  if (!url || !token) {
    console.error("[waitlist] HIRING_WEBHOOK_URL or HIRING_WEBHOOK_TOKEN is not set");
    return Response.json({ ok: false, error: PAUSED }, { status: 503 });
  }

  if (raw.stage === "answers") {
    const recommended = TRACKS[recommendTrack(answers)].name;
    return forward(url, { token, stage: "lp-answers", session, variant, ...answers, recommended, fee: FEE_INR });
  }

  if (!["reserve", "deposit", "paid"].includes(String(raw.stage))) return Response.json({ ok: false }, { status: 400 });

  const c = (typeof raw.contact === "object" && raw.contact ? raw.contact : {}) as Record<string, unknown>;
  const contact: Contact = {
    name: str(c.name, 80),
    email: str(c.email, 120).toLowerCase(),
    phone: str(c.phone, 20),
    college: str(c.college, 120),
    consent: c.consent === true,
  };
  const errors = validateContact(contact);
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, error: "A few answers need another look.", errors }, { status: 400 });
  }
  const trackId = str(raw.track) as TrackId;
  const track = TRACKS[trackId]?.name ?? TRACKS[recommendTrack(answers)].name;

  // The deposit button: marks the same row as wanting to pay (the founder sends the link)
  // "I've paid": the UPI transaction ID (optional, 12 digits) for the founder to match
  if (raw.stage === "paid") {
    const utr = str(raw.utr, 20).replace(/\s/g, "");
    if (utr && !/^\d{12}$/.test(utr)) return Response.json({ ok: false }, { status: 400 });
    const ref = str(raw.ref, 12);
    // Also a row in the Revenue tracker's Payments tab, amount blank until Rohan checks GPay.
    // Both run together and are awaited, so a serverless shutdown can't drop the tracker row.
    const [row, res] = await Promise.all([
      callTracker({ action: "lp-payment", name: contact.name, ref, utr, amount: DEPOSIT_INR, variant }),
      forward(url, { token, stage: "lp-paid", consent: true, session, variant, utr, ref, email: contact.email, deposit: DEPOSIT_INR }),
    ]);
    if (row === null || (row !== "sent" && row.ok === false)) console.error("[waitlist] tracker payment row not added", row);
    return res;
  }

  if (raw.stage === "deposit") {
    return forward(url, { token, stage: "lp-deposit", consent: true, session, variant, track, email: contact.email, deposit: DEPOSIT_INR });
  }

  return forward(url, {
    token,
    stage: "lp-reserve",
    consent: true,
    session,
    variant,
    track,
    name: contact.name,
    email: contact.email,
    phone: formatPhone(contact.phone),
    college: contact.college,
    fee: FEE_INR,
  });
}

// Apps Script answers with a 302 after it has written the row, so a redirect means saved.
// Only an explicit { ok: false } from the script counts as a failure.
async function forward(url: string, payload: Record<string, unknown>): Promise<Response> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "manual",
      signal: AbortSignal.timeout(40_000),
    });
    if (res.status >= 300 && res.status < 400) {
      const next = res.headers.get("location");
      if (next) {
        const data = await fetch(next, { signal: AbortSignal.timeout(8_000) })
          .then((r) => r.json())
          .catch(() => null);
        if (data && data.ok === false) {
          console.error("[waitlist] webhook rejected it", data.error);
          return Response.json({ ok: false, error: PAUSED }, { status: 502 });
        }
      }
      return Response.json({ ok: true });
    }
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      console.error("[waitlist] webhook rejected it", res.status, data.error);
      return Response.json({ ok: false, error: PAUSED }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] webhook unreachable", err);
    return Response.json({ ok: false, error: PAUSED }, { status: 502 });
  }
}
