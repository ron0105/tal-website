// Analytics events (spec section 8), sent through Vercel Analytics, the tool already on the site.
// Every event carries the page and, on sector pages, the sector. Custom events show in Vercel
// only on a plan that includes them; on other plans the call is a harmless no-op.

import { track as vercelTrack } from "@vercel/analytics";

export type EventName =
  | "cta_book_call_click"
  | "cta_whatsapp_click"
  | "form_free_check_submit"
  | "form_book_call_submit"
  | "tool_lead_calculator_complete"
  | "tool_idea_score_complete"
  | "work_filter_used"
  | "sector_card_click";

type Props = Record<string, string | number | undefined>;

/** The sector for a path like /sectors/clinics, else undefined. */
export function sectorFromPath(path: string): string | undefined {
  return path.match(/^\/sectors\/([^/?#]+)/)?.[1];
}

export function track(name: EventName, props: Props = {}) {
  if (typeof window === "undefined") return;
  const page = window.location.pathname;
  const all: Props = { page, sector: sectorFromPath(page), ...props };
  const clean = Object.fromEntries(Object.entries(all).filter(([, v]) => v !== undefined && v !== "")) as Record<string, string | number>;
  vercelTrack(name, clean);
}
