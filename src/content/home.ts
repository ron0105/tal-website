// ─── Home (/) ────────────────────────────────────────────────────────────────
// Rebuild master prompt section 5.1, word for word, with Rohan's Nov 1 2026 decisions:
// capacity is 5 clients a month (prompt said 4), and no prices on the site (FAQ "Is this costly?").

import { CAPACITY_LINE } from "./common";

export const HOME = {
  meta: {
    title: "The Adda Labs · More customers for your business. Guaranteed.",
    description:
      "We build your website, run your Instagram and set up WhatsApp automation, all aimed at one number: paying customers. For businesses in Mumbai and across India.",
  },
  hero: {
    eyebrow: "Consulting + systems · Mumbai",
    h1: "More customers for your business. Guaranteed.",
    sub: "We build your website, run your Instagram and set up WhatsApp automation, all aimed at one number: paying customers.",
    primary: "Book a Free Call",
    ghost: "See Our Work",
    microline: CAPACITY_LINE,
    diagramLabel: "The Enquiry System: get noticed, get enquiries, convert every lead",
    diagram: [
      { title: "Get noticed", sub: "Instagram content and ads" },
      { title: "Get enquiries", sub: "A website that builds trust" },
      { title: "Convert every lead", sub: "WhatsApp replies and follow-ups" },
    ],
  },
  trust: {
    label: "Our team has worked with",
    brands: ["Atomberg", "Pilgrim", "DHL Express India", "ONGC", "Media.net", "Accenture"],
  },
  problem: {
    eyebrow: "The problem",
    title: "Most enquiries are lost after the first message.",
    body: "You post on Instagram. You have a website. People message you on WhatsApp. But most never become customers. They ask the price, go quiet, and nobody follows up.",
    exhibitLabel: "Illustration",
    // Bar lengths only show the shape of the leak. They are not data, so no numbers beyond "100 enquiries".
    bars: [
      { label: "100 enquiries", width: 100 },
      { label: "Replied late", width: 62 },
      { label: "Never followed up", width: 34 },
      { label: "Few customers", width: 12 },
    ],
    closing: "The problem is not marketing. It's what happens after the enquiry.",
  },
  system: {
    eyebrow: "The system",
    title: "Three parts, one goal: no lead left behind.",
    cards: [
      { title: "Get noticed", body: "Instagram content and ads that bring the right people." },
      { title: "Get enquiries", body: "A website that builds trust and makes contact easy." },
      { title: "Convert every lead", body: "WhatsApp replies, booking and follow-ups that run on their own, even at 2 AM." },
    ],
    link: "See how we do it",
  },
  sectors: {
    eyebrow: "Who we help",
    title: "Built for businesses that grow on enquiries.",
    body: "Whatever you sell, the problem is the same. We fix it in a way that fits your industry.",
    other: "Don't see your industry?",
    otherLink: "Talk to us anyway",
  },
  results: {
    eyebrow: "Results",
    title: "Real businesses. Real numbers.",
    stats: [
      { value: "100+", label: "brands our team has worked with", source: "Across our team and advisors", href: "/work" },
      { value: "99%", label: "orders delivered on time, up from 70–75%, in 3 months", source: "SP Green Markethub", href: "/work/sp-green-markethub" },
      { value: "₹12 lakh+", label: "recovered from idle stock", source: "Team work at ONGC", href: "/work#ongc" },
    ],
    link: "See all our work",
  },
  faq: {
    title: "Questions owners ask us.",
    items: [
      { q: "We tried an agency before and it didn't work.", a: "Most agencies stop at posts and likes. We measure enquiries and customers, and we report them every month." },
      { q: "Is this costly?", a: "We share the price on the free call, once we know what you need. We'll tell you honestly if it's worth it for you." },
      { q: "Do I have to come on camera?", a: "No. We can work with or without your face." },
      // From the 14-Day Full Diary Plan (how-we-work/Sales call script, Grand Slam build - Clinics)
      { q: "How soon will I see results?", a: "In 14 days. Your system goes live and every enquiry gets a reply within 2 minutes, any hour. You see the change in a day 1 vs day 14 reply-time report." },
      { q: "I'm not good with tech.", a: "You don't need to be. We set everything up and run it." },
    ],
  },
  whatsapp: "Hi TAL, I want more customers for my business.",
};
