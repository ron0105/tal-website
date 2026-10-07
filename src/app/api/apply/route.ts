import { getJob, REPLY_PROMISE_DAYS } from "@/lib/jobs";
import { Application, MIN_FILL_MS, validate } from "@/lib/applications";

// Receives an application from /careers/[slug]/apply and forwards it to the
// careers Apps Script web app, which writes the row to the hiring sheet and sends
// the confirmation email. The webhook URL and token stay server-side, so the
// browser never learns where the sheet lives.

const PAUSED =
  "Applications are paused for a moment. Please email rohan@theaddalabs.com and we'll take it from there.";

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "That didn't come through properly." }, { status: 400 });
  }
  // Coerce every field, so a hand-crafted request can't crash validation with a non-string
  const str = (k: string) => (typeof raw[k] === "string" ? (raw[k] as string) : "");
  const body: Application = {
    role: str("role"),
    name: str("name"),
    email: str("email"),
    phone: str("phone"),
    city: str("city"),
    profileLink: str("profileLink"),
    sampleLinks: str("sampleLinks"),
    answer: str("answer"),
    fullTime: raw.fullTime === true,
    startWhen: str("startWhen"),
    source: str("source"),
    talentPool: raw.talentPool === true,
    consent: raw.consent === true,
    website: str("website"),
    startedAt: Number(raw.startedAt) || 0,
  };

  // Bots get a quiet success so they don't learn what tripped them.
  if (body.website || !body.startedAt || Date.now() - body.startedAt < MIN_FILL_MS) {
    return Response.json({ ok: true });
  }

  const job = getJob(String(body.role));
  if (!job) return Response.json({ ok: false, error: "That role isn't open." }, { status: 400 });

  const errors = validate(body, job);
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, error: "A few answers need another look.", errors }, { status: 400 });
  }

  const url = process.env.HIRING_WEBHOOK_URL;
  const token = process.env.HIRING_WEBHOOK_TOKEN;
  if (!url || !token) {
    console.error("[apply] HIRING_WEBHOOK_URL or HIRING_WEBHOOK_TOKEN is not set");
    return Response.json({ ok: false, error: PAUSED }, { status: 503 });
  }

  const payload = {
    token,
    role: job.slug,
    roleTitle: job.title,
    name: body.name.trim(),
    email: body.email.trim().toLowerCase(),
    phone: body.phone.trim(),
    city: body.city.trim(),
    profileLink: body.profileLink.trim(),
    sampleLinks: body.sampleLinks.trim(),
    workSamplePrompt: job.workSample.prompt,
    answer: body.answer.trim(),
    // The sheet's "Hours" column now records full-time availability
    hours: job.group === "cohort" ? `Full-time, on-site · start ${body.startWhen.toLowerCase()}` : "Not applicable",
    source: body.source,
    talentPool: body.talentPool,
    consent: true,
    replyDays: REPLY_PROMISE_DAYS,
  };

  try {
    // Apps Script answers a POST with a redirect to its output; fetch follows it.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: AbortSignal.timeout(20_000),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      console.error("[apply] webhook rejected the application", res.status, data.error);
      return Response.json({ ok: false, error: PAUSED }, { status: 502 });
    }
  } catch (err) {
    console.error("[apply] webhook unreachable", err);
    return Response.json({ ok: false, error: PAUSED }, { status: 502 });
  }

  return Response.json({ ok: true });
}
