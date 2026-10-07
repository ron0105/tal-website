import { getJob, REPLY_PROMISE_DAYS } from "@/lib/jobs";
import { Application, MIN_FILL_MS, validate } from "@/lib/applications";
import { scoreQuiz } from "@/lib/quiz-key";

// Receives an application from /careers/[slug]/apply and forwards it to the
// careers Apps Script web app, which writes the row to the hiring sheet and sends
// the confirmation email. The webhook URL and token stay server-side, so the
// browser never learns where the sheet lives.

// Room for the Apps Script round trip (POST, then reading its reply)
export const maxDuration = 30;

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
    // Keep only string → string pairs; anything else is ignored rather than trusted
    quiz: Object.fromEntries(
      Object.entries(typeof raw.quiz === "object" && raw.quiz ? (raw.quiz as Record<string, unknown>) : {})
        .filter(([k, v]) => typeof k === "string" && typeof v === "string")
        .slice(0, 20),
    ) as Record<string, string>,
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

  // Score the qualifier here, on the server, so the answer key never reaches the browser
  const quiz = job.group === "cohort" ? scoreQuiz(job.slug, body.quiz) : null;
  if (job.group === "cohort" && !quiz) {
    return Response.json({ ok: false, error: "Please answer all the quick questions." }, { status: 400 });
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
    talentPool: job.group === "cohort" && body.talentPool,
    // A plain number, so the sheet can colour-scale and sort it (out of quiz.max = 18)
    score: quiz ? quiz.score : "",
    qualified: quiz ? quiz.qualified : true,
    breakdown: quiz ? quiz.breakdown : "",
    consent: true,
    replyDays: REPLY_PROMISE_DAYS,
  };

  // Apps Script runs doPost first, then answers with a 302 to a one-time URL holding
  // its output. We take that hop ourselves: a 302 already means the row was written and
  // the confirmation sent, so a slow or failed read of the output must not tell the
  // applicant it failed (they'd apply twice). Only an explicit { ok: false } is a no.
  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "manual",
      signal: AbortSignal.timeout(15_000),
    });
  } catch (err) {
    console.error("[apply] webhook unreachable", err);
    return Response.json({ ok: false, error: PAUSED }, { status: 502 });
  }

  if (res.status >= 300 && res.status < 400) {
    const next = res.headers.get("location");
    if (next) {
      try {
        const out = await fetch(next, { signal: AbortSignal.timeout(8_000) });
        const data = (await out.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
        if (data && data.ok === false) {
          console.error("[apply] webhook rejected the application", data.error);
          return Response.json({ ok: false, error: PAUSED }, { status: 502 });
        }
        if (!data) console.warn("[apply] application accepted; couldn't read the script's reply", out.status);
      } catch (err) {
        console.warn("[apply] application accepted; reading the script's reply failed", err);
      }
    }
    return Response.json({ ok: true });
  }

  // No redirect (e.g. a local stand-in webhook): read the answer directly
  const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
  if (!res.ok || !data.ok) {
    console.error("[apply] webhook rejected the application", res.status, data.error);
    return Response.json({ ok: false, error: PAUSED }, { status: 502 });
  }

  return Response.json({ ok: true });
}
