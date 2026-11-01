// ─── Book a Free Call (/call) ────────────────────────────────────────────────
// Rebuild master prompt section 5.9. The existing flow (CallFlow: questions, lead score, times
// from Rohan's calendar) is kept, as the prompt allows; only the words around it change.

export const CALL_PAGE = {
  meta: {
    title: "Book a free 20-minute call",
    description: "A free 20-minute call with The Adda Labs. No sales pressure. We'll tell you honestly what will work for your business.",
  },
  h1: "Let's see if we can help.",
  sub: "A free 20-minute call. No sales pressure. We'll tell you honestly what will work.",
  stepsTitle: "What happens on the call",
  steps: [
    "You tell us about your business",
    "We show you where you're losing customers",
    "If we're a fit, we suggest a plan; if not, we tell you who can help.",
  ],
  whatsapp: "Hi TAL, I'd like to book a free call.",
};
