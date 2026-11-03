// ─── Services (/services) ────────────────────────────────────────────────────
// Rebuild master prompt section 5.5: the "how", for owners who want it. Each block lists what's
// included and ends with "This is part of the Growth System" → /pricing. The strategy block's
// items come from the Idea Check and Growth Partner plans (section 5.4).

export const SERVICES = {
  meta: {
    title: "How we get you more customers: website, social, automation",
    description: "Website design, SEO and lead capture; video shoots and page handling; WhatsApp booking, follow-ups and AI voice agents. Built and run as one system for businesses in India.",
  },
  h1: "How we get you more customers.",
  sub: "Three parts that work as one system, plus strategy and idea validation when you need a plan first.",
  partOf: "This is part of the Growth System",
  blocks: [
    { eyebrow: "Get enquiries", title: "Website", items: ["Design", "SEO", "Lead capture", "Enquiry follow-up"] },
    { eyebrow: "Get noticed", title: "Social", items: ["Video shoots", "Editing", "Page handling"] },
    { eyebrow: "Convert every lead", title: "Automation", items: ["Appointment booking", "Follow-ups", "Lead generation", "Custom AI agents", "Voice agents"] },
  ],
  strategy: {
    eyebrow: "Plan first",
    title: "Strategy and Idea Validation",
    items: [
      "Idea Check: 14 days of customer talks, a market check and an honest answer: build it or drop it",
      "Growth Partner: monthly strategy, marketing and systems, like a marketing head and tech head in one",
    ],
    link: "How pricing works",
  },
};
