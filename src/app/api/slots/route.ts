import { offerTimes } from "@/lib/cal";
import { phoneDigits } from "@/lib/call";

// Returns the 3 times a hot lead is offered. Picked here, on the server, so the full list of
// Rohan's free slots never reaches the browser.
export async function POST(request: Request) {
  let phone = "";
  try {
    const body = (await request.json()) as { phone?: unknown };
    phone = typeof body.phone === "string" ? phoneDigits(body.phone).slice(-10) : "";
  } catch {
    // no body: still offer times, just without the per-lead seed
  }
  try {
    const offers = await offerTimes(phone || "anon");
    return Response.json({ ok: offers.length > 0, offers });
  } catch (err) {
    console.error("[slots] couldn't read Cal.com slots", err);
    return Response.json({ ok: false, offers: [] });
  }
}
