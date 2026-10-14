import { book } from "@/lib/booking";
import { phoneDigits, validContact } from "@/lib/call";

// Room for the tracker's slow reply (~20s from Vercel)
export const maxDuration = 60;

// Books the time a hot lead picked from their 3 offers, straight into Rohan's Google Calendar.
// The tracker script checks it's still free first.
export async function POST(request: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, result: "failed" }, { status: 400 });
  }
  const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const contact = { name: str(raw.name, 80), phone: str(raw.phone, 20), company: str(raw.company, 120) };
  const email = str(raw.email, 120);
  const start = str(raw.start, 40);

  if (Object.keys(validContact(contact)).length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || isNaN(Date.parse(start))) {
    return Response.json({ ok: false, result: "failed" }, { status: 400 });
  }

  const result = await book({
    start: new Date(start).toISOString(),
    name: contact.name,
    email,
    phone: phoneDigits(contact.phone),
    company: contact.company,
    notes: str(raw.notes, 1500),
  });
  return Response.json({ ok: result === "booked", result });
}
