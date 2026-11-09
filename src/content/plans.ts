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
    // Same offer as /pricing (Nov 3 2026): the 20-minute audit call, not the /tools report form
    name: "Free Audit",
    for: "Any business owner",
    get: "20-minute call: what's not working, how it should work, and what to fix, in order",
    promise: "Yours to keep, whether or not we ever work together",
    price: "Free",
    cta: "Book a Free Audit",
    ctaHref: "/call",
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

// /pricing is the free audit page (Rohan, Nov 3 2026): copy from the pricing copy doc, word for word,
// with a partner's "free audit, no strings attached" feedback already in it. The plans above stay
// for the Home preview. Still no prices on the site (Rohan, Nov 1 2026).
export const PLANS_PAGE = {
  meta: {
    title: "Free audit: see where your leads get lost",
    description: "Every engagement with The Adda Labs starts with a free 20-minute audit of your website, Instagram and WhatsApp. No strings attached.",
  },
  eyebrow: "Free audit",
  h1: "Get a free audit of your business. No strings attached.",
  sub: "Every engagement with us starts the same way: an audit. We look at how your leads come in and where they get lost. Then we tell you what's off, how it should work, and what to fix.",
  subKeep: "You get a clear picture and fixes you can use, whether or not we ever work together.",
  cta: "Book a free audit",
  microline: "Free · 20 minutes · The findings are yours",
  // Hero visual: an example of what an audit finds, labelled as an example (not a client)
  sample: {
    title: "Audit: a dental clinic",
    badge: "Example",
    offLabel: "What's off",
    fixLabel: "Fix",
    orderLabel: "What to fix, in order:",
    items: [
      { channel: "Website", off: "The contact form goes to an inbox nobody checks on weekends.", fix: "Send every form to WhatsApp, with an instant reply." },
      { channel: "Instagram", off: "DMs asking \"price?\" get a reply the next day.", fix: "Auto-reply with prices and a booking link." },
      { channel: "WhatsApp", off: "No follow-up when someone goes quiet.", fix: "Two follow-ups, on day 1 and day 3." },
    ],
    order: ["Website", "WhatsApp", "Instagram"],
  },
  howTitle: "How it works",
  steps: [
    { title: "Book a 20-minute call." },
    { title: "We go through your website, Instagram and WhatsApp.", channels: ["Website", "Instagram", "WhatsApp"] },
    { title: "We show you:", points: ["What's not working", "How it should work", "What to fix, in order"] },
  ] as { title: string; channels?: string[]; points?: string[] }[],
  yourCall: "Then it's your call.",
  paths: ["Do it yourself", "Hand it to your team", "Let us handle it"],
  pricingTitle: "What about pricing?",
  pricingBody: [
    "There's no price list, because every business needs something different.",
    "The audit is free. If you want us to set things up and run them for you, we'll tell you what that involves and what it costs, once we've seen your business.",
  ],
  priceRows: [
    { label: "The audit", value: "Free" },
    { label: "Setting things up and running them", value: "Once we've seen your business" },
  ],
  faqTitle: "Questions",
  faqs: [
    { q: "Is it really free?", a: "Yes. Free, 20 minutes, and the findings are yours to keep." },
    { q: "Will you try to sell me something?", a: "No. If we can help, we'll say how. If not, you still leave knowing what to fix." },
    { q: "Who is it for?", a: "Clinics, real estate, restaurants, D2C brands and founders: any business that gets leads on its website, Instagram or WhatsApp." },
  ],
  closeTitle: "Connect with us",
};

export const PLANS_PREVIEW = {
  eyebrow: "How to start",
  title: "Start free. Grow when it works.",
  link: "How pricing works",
};
