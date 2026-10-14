// Server-side only: talks to Cal.com and picks which times a hot lead is offered.
// Rohan's rule (Oct 14, 2026): never show the open calendar. The page offers 3 hand-picked times
// spread over the next few days, so the diary always looks busy, whatever is really free.

import { CALL } from "@/lib/call";

const API = "https://api.cal.com/v2";
const TZ = "Asia/Kolkata";
const [USERNAME, EVENT_SLUG] = CALL.calLink.split("/");

export type Offer = { start: string; label: string };

// Small seeded random, so the same lead sees the same 3 times on a reload the same day.
// Fresh times on every refresh would give the game away.
function seeded(seedText: string) {
  let h = 2166136261;
  for (const ch of seedText) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function istDate(d: Date): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(d); // YYYY-MM-DD
}

export function offerLabel(start: string): string {
  const d = new Date(start);
  const day = new Intl.DateTimeFormat("en-IN", { timeZone: TZ, weekday: "short", day: "numeric", month: "short" }).format(d);
  const time = new Intl.DateTimeFormat("en-IN", { timeZone: TZ, hour: "numeric", minute: "2-digit", hour12: true })
    .format(d)
    .replace(/\s?(am|pm)/i, (m) => ` ${m.trim().toLowerCase()}`);
  return `${day} · ${time}`;
}

async function freeSlots(): Promise<Record<string, { start: string }[]>> {
  // From tomorrow: a same-day offer looks like an empty diary
  const from = new Date(Date.now() + 24 * 3600 * 1000);
  const to = new Date(Date.now() + 10 * 24 * 3600 * 1000);
  const url = `${API}/slots?eventTypeSlug=${EVENT_SLUG}&username=${USERNAME}&start=${istDate(from)}&end=${istDate(to)}&timeZone=${TZ}`;
  const res = await fetch(url, { headers: { "cal-api-version": "2024-09-04" }, cache: "no-store", signal: AbortSignal.timeout(10_000) });
  if (!res.ok) throw new Error(`slots ${res.status}`);
  const body = (await res.json()) as { data?: Record<string, { start: string }[]> };
  return body.data ?? {};
}

// 3 times on 3 different days, chosen from the first 4 open days, one random time each.
// If fewer days are open, the rest come from the same days at least 2 hours apart.
export async function offerTimes(seedText: string, count = 3): Promise<Offer[]> {
  const slots = await freeSlots();
  const rand = seeded(`${seedText}|${istDate(new Date())}`);
  const days = Object.keys(slots)
    .sort()
    .filter((d) => slots[d].length)
    .slice(0, 4);

  const pickDays = [...days];
  while (pickDays.length > count) pickDays.splice(Math.floor(rand() * pickDays.length), 1);

  const picked: string[] = [];
  for (const d of pickDays) picked.push(slots[d][Math.floor(rand() * slots[d].length)].start);

  const gapOk = (s: string) => picked.every((p) => Math.abs(new Date(p).getTime() - new Date(s).getTime()) >= 2 * 3600 * 1000);
  for (const d of days) {
    if (picked.length >= count) break;
    const spare = slots[d].map((s) => s.start).filter(gapOk);
    if (spare.length) picked.push(spare[Math.floor(rand() * spare.length)]);
  }

  return picked
    .sort()
    .slice(0, count)
    .map((start) => ({ start, label: offerLabel(start) }));
}

export type BookingInput = { start: string; name: string; email: string; phone: string; notes: string };

// Books straight into Cal.com, so the lead never opens the calendar itself.
// Cal.com still sends its own confirmation email with the video link.
export async function book(b: BookingInput): Promise<"booked" | "taken" | "failed"> {
  const res = await fetch(`${API}/bookings`, {
    method: "POST",
    headers: { "cal-api-version": "2024-08-13", "Content-Type": "application/json" },
    body: JSON.stringify({
      start: new Date(b.start).toISOString(),
      eventTypeSlug: EVENT_SLUG,
      username: USERNAME,
      attendee: { name: b.name, email: b.email, timeZone: TZ, phoneNumber: b.phone, language: "en" },
      bookingFieldsResponses: { notes: b.notes },
    }),
    signal: AbortSignal.timeout(20_000),
  });
  if (res.ok) return "booked";
  if (res.status === 409) return "taken";
  console.error("[book] Cal.com refused the booking", res.status, (await res.text()).slice(0, 300));
  return "failed";
}
