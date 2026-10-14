import { callTracker } from "@/lib/tracker";
import { Answers, EMPTY_ANSWERS, MIN_FILL_MS, QUESTIONS, answerLines, phoneDigits, scoreLead, validContact } from "@/lib/call";

// Receives a lead from /call and forwards it to the Apps Script inside the TAL ₹50L tracker,
// which adds (or updates) the lead's row on the Inbound tab. The webhook URL stays server-side.
// The score is worked out again here, so the tracker never trusts a number sent by the browser.

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

  const { score, band } = scoreLead(answers);
  const reply = await callTracker({
    name: contact.name,
    phone: phoneDigits(contact.phone),
    company: contact.company,
    business: answers.business,
    score,
    band,
    summary: answerLines(answers).join(" · "),
  });
  // "sent" = the script ran (it writes before replying), so the lead is saved
  const saved = reply === "sent" || (reply !== null && reply.ok === true);
  if (!saved) console.error("[lead] tracker didn't save the lead", reply);
  return Response.json({ ok: true, saved });
}
