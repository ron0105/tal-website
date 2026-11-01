// ─── Work (/work) and case-study pages ───────────────────────────────────────
// Rebuild master prompt section 5.6. The cases themselves live in content/work/*.md.

import { TODO } from "./common";

export const WORK_PAGE = {
  meta: {
    title: "Real businesses. Real results.",
    description: "Clinics, restaurants, brands and startups: what our team built for them and what changed, as Problem, What we did and Result.",
  },
  h1: "Real businesses. Real results.",
  sub: "Clinics, restaurants, brands and startups. Here's what we built for them and what changed.",
  stats: [
    { value: "100+", label: "brands our team has worked with", source: "Across our team and advisors" },
    { value: "₹1 crore+", label: "revenue uplift the work contributed to", source: `Media.net, $125K. ${TODO("confirm conversion")}`, href: "/work/media-net" },
    { value: "20 of 30", label: "top dentists losing enquiries: we found the gap", source: "Our own Clinic Leads Finder", href: "/work/clinic-leads-finder" },
  ],
  filterLabel: "Filter work by industry",
  all: "All",
  firstSlug: "clinic-leads-finder",
  // The contextual CTA under the cards, per filter (spec: "After each filter group")
  ctas: {
    All: { text: "Not sure where you fit? Get a free business check", href: "/tools#free-check" },
    "Clinics & Healthcare": { text: "Run a clinic? Get a free clinic check", href: "/sectors/clinics#free-check" },
    "Restaurants & Hospitality": { text: "Run a restaurant or café? Get a free restaurant check", href: "/sectors/restaurants#free-check" },
    "D2C & Retail": { text: "Run a D2C brand? Get a free store check", href: "/sectors/d2c#free-check" },
    "Startups & B2B": { text: "Have a startup idea? Take the Idea Score Test", href: "/sectors/founders#free-check" },
    "Large Companies": { text: "Run a larger business? Book a free call", href: "/call" },
  } as Record<string, { text: string; href: string }>,
  // Case-study pages end with the CTA for the matching sector
  sectorFor: {
    "Clinics & Healthcare": "clinics",
    "Restaurants & Hospitality": "restaurants",
    "D2C & Retail": "d2c",
    "Startups & B2B": "founders",
  } as Record<string, string>,
  logos: {
    clients: "Our clients",
    clientsTodo: TODO("confirm which logos are TAL's own clients"),
    team: "Where our team has worked",
  },
  caseLabels: { problem: "Problem", did: "What we did", result: "Result", detail: "The detail", back: "All our work" },
  whatsapp: "Hi TAL, I saw your work and want similar results for my business.",
};
