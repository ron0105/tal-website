// ─── Words shared by every buyer page ────────────────────────────────────────
// Rebuild master prompt (Nov 1 2026), section 5. Edit here, not in components.
// Decisions: capacity line says 5 a month (Rohan, Nov 1: matches the ₹1 crore plan; the prompt said 4).

export const BOOK_CALL = "Book a Free Call";
export const CHAT_WHATSAPP = "Chat on WhatsApp";

// Scarcity, shown on every buyer page (spec section 4: "visible on every buyer page")
export const CAPACITY_LINE = "We take only 5 new clients every month.";

// Real signed clients only, never an estimate. The dots show once `taken` is 2 or more in this
// month; in any other month the plain line comes back, so a forgotten update can't go stale.
export const CAPACITY = { month: "2026-11", label: "November", taken: null as number | null, total: 5 };

export const GUARANTEE = {
  text: "If we don't hit the target we agree on in 90 days, we keep working for free until we do.",
  small: "Target agreed in writing before we start.",
};

export const FINAL_CTA = {
  title: "We only work with businesses we know we can help.",
  body: "Book a free 20-minute call. We'll look at your business and tell you honestly if we're the right fit.",
};

// Shown wherever a value is still waiting on TAL (spec rule 3). Every one is listed in the
// Phase 1 audit file, section 6.
export const TODO = (what: string) => `TODO: ${what}`;
