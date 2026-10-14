import { Answers, EMPTY_ANSWERS, MIN_FILL_MS, QUESTIONS, answerLines, phoneDigits, scoreLead, validContact } from "@/lib/call";

// Receives a lead from /call and forwards it to the Apps Script inside the TAL ₹50L tracker,
// which adds (or updates) the lead's row on the Leads tab. The webhook URL stays server-side.
// The score is worked out again here, so the tracker never trusts a number sent by the browser.
// Script: 01-tal/tal/how-we-work/.send-page/tracker-web-leads.gs

// Same slow-Google allowance as /api/apply (LESSONS L68): from Vercel, the reply can take ~20s
export const maxDuration = 60;

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  const str = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "");

  // Bots get a quiet success so they don't learn what tripped them
  const startedAt = Number(raw.startedAt) || 0;
  if (str(raw.website) || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return Response.json({ ok: true, saved: true });
  }

  const contact = { name: str(raw.name, 80), phone: str(raw.phone, 20), company: str(raw.company, 120) };
  if (Object.keys(validContact(contact)).length) return Response.json({ ok: false }, { status: 400 });

  const sent = (typeof raw.answers === "object" && raw.answers ? raw.answers : {}) as Record<string, unknown>;
  const answers: Answers = { ...EMPTY_ANSWERS };
  for (const q of QUESTIONS) answers[q.id] = str(sent[q.id], q.kind === "text" ? 300 : 200);
  if (QUESTIONS.some((q) => !q.optional && !answers[q.id])) return Response.json({ ok: false }, { status: 400 });

  const url = process.env.LEADS_WEBHOOK_URL;
  if (!url) {
    console.error("[lead] LEADS_WEBHOOK_URL is not set");
    return Response.json({ ok: true, saved: false });
  }

  const { score, band } = scoreLead(answers);
  const payload = {
    token: process.env.LEADS_WEBHOOK_TOKEN || "",
    name: contact.name,
    phone: phoneDigits(contact.phone),
    company: contact.company,
    business: answers.business,
    score,
    band,
    summary: answerLines(answers).join(" · "),
  };

  // Apps Script runs doPost, then answers with a 302 to its output. A 302 already means the
  // row was written, so only an explicit { ok: false } counts as a failure (LESSONS L68).
  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "manual",
      signal: AbortSignal.timeout(40_000),
    });
  } catch (err) {
    console.error("[lead] webhook unreachable", err);
    return Response.json({ ok: true, saved: false });
  }

  if (res.status >= 300 && res.status < 400) {
    const next = res.headers.get("location");
    if (next) {
      try {
        const out = await fetch(next, { signal: AbortSignal.timeout(8_000) });
        const data = (await out.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
        if (data && data.ok === false) {
          console.error("[lead] webhook rejected the lead", data.error);
          return Response.json({ ok: true, saved: false });
        }
      } catch (err) {
        console.warn("[lead] lead accepted; reading the script's reply failed", err);
      }
    }
    return Response.json({ ok: true, saved: true });
  }

  const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
  if (!res.ok || !data.ok) {
    console.error("[lead] webhook rejected the lead", res.status, data.error);
    return Response.json({ ok: true, saved: false });
  }
  return Response.json({ ok: true, saved: true });
}
