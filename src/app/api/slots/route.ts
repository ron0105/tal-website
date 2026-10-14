import { offerTimes, warmSlots } from "@/lib/booking";
import { phoneDigits } from "@/lib/call";

// Room for the tracker's slow first reply (~20s from Vercel)
export const maxDuration = 60;

// Returns the 3 times a hot lead is offered. Picked here, on the server, so the full list of
// Rohan's free slots never reaches the browser. { warm: true } just fills the cache early.
export async function POST(request: Request) {
  let body: { phone?: unknown; warm?: unknown } = {};
  try {
    body = (await request.json()) as typeof body;
  } catch {
    // no body: still offer times, just without the per-lead seed
  }
  if (body.warm === true) {
    await warmSlots();
    return Response.json({ ok: true });
  }
  const phone = typeof body.phone === "string" ? phoneDigits(body.phone).slice(-10) : "";
  try {
    const offers = await offerTimes(phone || "anon");
    return Response.json({ ok: offers.length > 0, offers });
  } catch (err) {
    console.error("[slots] couldn't read free times from the tracker", err);
    return Response.json({ ok: false, offers: [] });
  }
}
