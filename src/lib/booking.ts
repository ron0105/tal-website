// Server-side only: which times a hot lead is offered, and booking the one they pick.
// Both go through the tracker's Apps Script, which reads and writes Rohan's Google Calendar directly
// (no Cal.com since Oct 14, 2026). Rohan's rule: never show the open calendar. The page offers
// 3 hand-picked times spread over the next few days, so the diary always looks busy.

import { callTracker } from "@/lib/tracker";

const TZ = "Asia/Kolkata";

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

// The script takes ~20s to answer from Vercel, so keep its list for a few minutes. The page also
// asks for times early (while the lead is still answering), so this is usually warm by the end.
let cache: { at: number; slots: string[] } | null = null;
const CACHE_MS = 5 * 60 * 1000;

async function freeSlots(): Promise<string[]> {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.slots;
  const reply = await callTracker({ action: "slots" });
  if (!reply || reply === "sent" || !reply.ok || !Array.isArray(reply.slots)) throw new Error("no slots from tracker");
  const slots = (reply.slots as unknown[]).filter((s): s is string => typeof s === "string").sort();
  cache = { at: Date.now(), slots };
  return slots;
}

export async function warmSlots(): Promise<void> {
  await freeSlots().catch(() => undefined);
}

// 3 times on 3 different days, chosen from the first 4 open days, one random time each.
// If fewer days are open, the rest come from the same days at least 2 hours apart.
export async function offerTimes(seedText: string, count = 3): Promise<Offer[]> {
  const all = await freeSlots();
  const rand = seeded(`${seedText}|${istDate(new Date())}`);
  const byDay: Record<string, string[]> = {};
  for (const s of all) (byDay[istDate(new Date(s))] ??= []).push(s);
  const days = Object.keys(byDay).sort().slice(0, 4);

  const pickDays = [...days];
  while (pickDays.length > count) pickDays.splice(Math.floor(rand() * pickDays.length), 1);

  const picked: string[] = [];
  for (const d of pickDays) picked.push(byDay[d][Math.floor(rand() * byDay[d].length)]);

  const gapOk = (s: string) => picked.every((p) => Math.abs(new Date(p).getTime() - new Date(s).getTime()) >= 2 * 3600 * 1000);
  for (const d of days) {
    if (picked.length >= count) break;
    const spare = byDay[d].filter(gapOk);
    if (spare.length) picked.push(spare[Math.floor(rand() * spare.length)]);
  }

  return picked
    .sort()
    .slice(0, count)
    .map((start) => ({ start, label: offerLabel(start) }));
}

export type BookingInput = { start: string; name: string; email: string; phone: string; company: string; notes: string };

// Puts the call in Rohan's Google Calendar with a Meet link and the lead as a guest, so Google sends
// them a real calendar invite and both calendars are blocked. The tracker row moves to "Call booked".
export async function book(b: BookingInput): Promise<"booked" | "taken" | "failed"> {
  const reply = await callTracker({ action: "book", ...b }, 50_000);
  if (reply && reply !== "sent" && reply.ok) {
    cache = null; // that slot is gone; the next lead gets a fresh list
    return "booked";
  }
  if (reply && reply !== "sent" && reply.error === "taken") {
    cache = null;
    return "taken";
  }
  // "sent" means the script ran but we couldn't read whether it booked: don't promise either way
  console.error("[book] tracker didn't confirm the booking", reply);
  return "failed";
}
