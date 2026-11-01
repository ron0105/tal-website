// ─── Plans (/pricing, and the preview on Home) ───────────────────────────────
// Rebuild master prompt section 5.4. Decision (Rohan, Nov 1 2026): no prices on the site, so the
// paid plans say "Price on the free call" where the prompt had "From ₹TODO".

export type Plan = {
  name: string;
  for: string;
  get: string;
  promise: string;
  price: string;
  highlight?: string;
  cta: string;
  ctaHref: string;
};

const ON_CALL = "Price on the free call";

export const PLANS: Plan[] = [
  {
    name: "Free Business Check",
    for: "Any business owner",
    get: "20-minute review of where you're losing enquiries, with 3 quick fixes",
    promise: "Useful even if you never hire us",
    price: "Free",
    cta: "Get My Free Check",
    ctaHref: "/tools#free-check",
  },
  {
    name: "Idea Check",
    for: "Startup founders",
    get: "14 days of customer talks, a market check and an honest answer: build it or drop it",
    promise: "A clear answer, or your money back",
    price: ON_CALL,
    cta: "Book a Free Call",
    ctaHref: "/call",
  },
  {
    name: "Growth System",
    for: "Clinics, real estate, restaurants, D2C",
    get: "Website, Instagram and WhatsApp automation, set up and run for 3 months",
    promise: "Agreed target in 90 days, or we work free until we hit it",
    price: ON_CALL,
    highlight: "Most chosen",
    cta: "Book a Free Call",
    ctaHref: "/call",
  },
  {
    name: "Growth Partner",
    for: "Businesses already doing well",
    get: "Monthly strategy, marketing and systems: like a marketing head and tech head in one",
    promise: "Monthly numbers review, cancel anytime",
    price: ON_CALL,
    cta: "Book a Free Call",
    ctaHref: "/call",
  },
];

export const PLANS_PAGE = {
  meta: {
    title: "Plans: start free, grow when it works",
    description: "Four ways to work with The Adda Labs, from a free business check to a monthly growth partner. Every plan aims at one number: paying customers.",
  },
  h1: "Pick the plan that fits where you are.",
  sub: "Start free. Pay only when you're ready.",
  bonusesTitle: "Bonuses with the Growth System",
  // The bonus stack from how-we-work/Grand Slam build - Clinics (Nov 1), each one answering a worry.
  // No rupee values: TAL keeps no prices on the site or in the offer files (Rohan, Nov 1 2026).
  bonuses: [
    "Review-request message, so happy customers leave a Google review",
    "Enquiry Follow-Up Kit: what to say at each step",
    "20-minute walkthrough and a one-page cheat sheet for your staff",
    "Day 1 vs day 14 reply-time report, so you see the change",
  ],
  compareTitle: "Compare the plans",
  compareRows: [
    { label: "For", key: "for" },
    { label: "What you get", key: "get" },
    { label: "Promise", key: "promise" },
    { label: "Price", key: "price" },
  ] as { label: string; key: keyof Plan }[],
  howWeWork: "See how we work with you",
  // Plan FAQ: every answer comes from the plan table, the guarantee or Rohan's no-prices decision
  faqTitle: "Questions about the plans",
  faqs: [
    { q: "Is the Free Business Check really free?", a: "Yes. It's a 20-minute review of where you're losing enquiries, with 3 quick fixes. It's useful even if you never hire us." },
    { q: "How much do the paid plans cost?", a: "We share the price on the free call, once we know what you need. We'll tell you honestly if it's worth it for you." },
    { q: "What does the Growth System guarantee mean?", a: "We agree a target with you, in writing, before we start. If we don't hit it in 90 days, we keep working for free until we do." },
    { q: "Can I cancel the Growth Partner plan?", a: "Yes. You can cancel anytime. Every month we review your numbers with you." },
    { q: "I'm a founder with only an idea. Which plan fits?", a: "The Idea Check. In 14 days we talk to your customers, check the market and give you an honest answer: build it or drop it. A clear answer, or your money back." },
  ],
};

export const PLANS_PREVIEW = {
  eyebrow: "How to start",
  title: "Start free. Grow when it works.",
  link: "Compare plans",
};
