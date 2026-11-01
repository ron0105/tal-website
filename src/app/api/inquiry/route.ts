import { callTracker } from "@/lib/tracker";
import { indianMobile } from "@/lib/phone";
import { MIN_FILL_MS } from "@/lib/call";

// Free Business Check (and its sector versions) and the Idea Score Test. Same destination as
// /call: the tracker's Inbound tab, through its Apps Script, using the row shape the script
// already writes (name, phone, company, business, score, band, summary), so nothing changes
// on the sheet side. "band" says which form it came from.

export const maxDuration = 60;

const FORMS = { "free-check": "Free Business Check", "idea-score": "Idea Score Test" } as const;
type Form = keyof typeof FORMS;

export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

  // Honeypot and a minimum fill time: bots get a quiet success
  const startedAt = Number(raw.startedAt) || 0;
  if (str(raw.website) || !startedAt || Date.now() - startedAt < MIN_FILL_MS / 2) {
    return Response.json({ ok: true, saved: true });
  }

  const form = str(raw.form) as Form;
  const name = str(raw.name, 80);
  const phone = indianMobile(str(raw.phone, 20));
  if (!(form in FORMS) || name.length < 2 || !phone) return Response.json({ ok: false }, { status: 400 });

  const business = str(raw.business, 120);
  const sector = str(raw.sector, 40) || "Not given";
  const lines = [
    `Form: ${FORMS[form]}`,
    business && `Business: ${business}`,
    str(raw.city, 80) && `City: ${str(raw.city, 80)}`,
    str(raw.link, 300) && `Link: ${str(raw.link, 300)}`,
    form === "idea-score" && `Idea score: ${Number(raw.score) || 0}/10`,
    str(raw.risks, 400) && `Risks: ${str(raw.risks, 400)}`,
    str(raw.utm, 400) && `Source: ${str(raw.utm, 400)}`,
  ].filter(Boolean);

  const reply = await callTracker({
    name,
    phone,
    company: business || name,
    business: sector,
    score: form === "idea-score" ? Number(raw.score) || 0 : 0,
    band: FORMS[form],
    summary: lines.join(" · "),
  });
  const saved = reply === "sent" || (reply !== null && reply.ok === true);
  if (!saved) console.error("[inquiry] tracker didn't save the lead", reply);
  return Response.json({ ok: true, saved });
}
