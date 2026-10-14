import { book } from "@/lib/cal";
import { phoneE164, validContact } from "@/lib/call";

// Books the time a hot lead picked from their 3 offers. Cal.com checks it's still free.
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

  try {
    const result = await book({ start, name: contact.name, email, phone: phoneE164(contact.phone), notes: str(raw.notes, 1500) });
    return Response.json({ ok: result === "booked", result });
  } catch (err) {
    console.error("[book] Cal.com unreachable", err);
    return Response.json({ ok: false, result: "failed" });
  }
}
