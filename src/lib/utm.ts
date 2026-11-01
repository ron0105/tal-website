// UTM passthrough (spec section 8): the first visit's utm_* tags and landing page are kept for the
// browser session, so the lead's source reaches whichever form they finally submit.

const KEY = "tal_utm";
const TAGS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type Utm = Partial<Record<(typeof TAGS)[number] | "landing", string>>;

/** Called once per page load; keeps the first set of tags seen this session. */
export function captureUtm() {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const found: Utm = {};
    for (const t of TAGS) {
      const v = params.get(t);
      if (v) found[t] = v.slice(0, 100);
    }
    found.landing = window.location.pathname;
    sessionStorage.setItem(KEY, JSON.stringify(found));
  } catch {
    // Private mode or blocked storage: the lead still goes through, just without a source
  }
}

export function getUtm(): Utm {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}") as Utm;
  } catch {
    return {};
  }
}

/** One short line for the tracker row: "utm_source=ig · utm_campaign=clinics · landing=/sectors/clinics" */
export function utmLine(u: Utm): string {
  return Object.entries(u)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${v}`)
    .join(" · ");
}
