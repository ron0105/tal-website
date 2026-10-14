// Server-side only: one way to talk to the Apps Script inside the TAL ₹50L tracker.
// Script: 01-tal/tal/how-we-work/.send-page/tracker-web-leads.gs (actions: lead, slots, book).

export type TrackerReply = { ok?: boolean; error?: string; [key: string]: unknown };

// Apps Script runs doPost, then answers with a 302 to a one-time URL holding its output, and from
// Vercel the POST can take ~20s (LESSONS L68). So: a long timeout, and we take the redirect hop
// ourselves. Returns the script's JSON, "sent" if it ran but the reply couldn't be read,
// or null if it never reached the script.
export async function callTracker(payload: Record<string, unknown>, timeoutMs = 40_000): Promise<TrackerReply | "sent" | null> {
  const url = process.env.LEADS_WEBHOOK_URL;
  if (!url) {
    console.error("[tracker] LEADS_WEBHOOK_URL is not set");
    return null;
  }

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: process.env.LEADS_WEBHOOK_TOKEN || "", ...payload }),
      redirect: "manual",
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (err) {
    console.error("[tracker] unreachable", err);
    return null;
  }

  if (res.status >= 300 && res.status < 400) {
    const next = res.headers.get("location");
    if (!next) return "sent";
    try {
      const out = await fetch(next, { signal: AbortSignal.timeout(8_000) });
      return ((await out.json().catch(() => null)) as TrackerReply | null) ?? "sent";
    } catch (err) {
      console.warn("[tracker] ran, but reading the reply failed", err);
      return "sent";
    }
  }

  // No redirect (e.g. a local stand-in): read the answer directly
  return ((await res.json().catch(() => null)) as TrackerReply | null) ?? { ok: false, error: `status ${res.status}` };
}
