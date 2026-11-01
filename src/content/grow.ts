// ─── Grow With TAL (/grow, /live-projects, /training, /events) ───────────────
// Rebuild master prompt section 5.10. Builders only: reached from the footer and Careers, never
// from buyer pages, and never naming clients or client work.

import { TODO } from "./common";

export const GROW = {
  meta: {
    title: "Grow With TAL: live projects, training and events",
    description: "Build real skills and meet real builders: live projects, short practical training and monthly events in Mumbai.",
  },
  h1: "Build real skills. Meet real builders.",
  cards: [
    { title: "Live Projects", body: "Learn by building real things.", href: "/live-projects?src=grow" },
    { title: "Training", body: "Skills businesses actually pay for.", href: "/training" },
    { title: "Events", body: "Meet the people building India's next businesses.", href: "/events" },
  ],
};

export const LIVE_PROJECTS_HERO = {
  eyebrow: "Grow With TAL · Live Projects",
  h1: "Learn by building real things.",
  sub: "Work on real business ideas and projects, guided by people who've built for big brands.",
  bullets: [
    "Real work for your portfolio, not fake assignments",
    "Mentors who review your work every week",
    "Top performers get paid work and job referrals",
  ],
  button: "Apply to Join",
};

export const TRAINING = {
  meta: {
    title: "Training: skills businesses actually pay for",
    description: "Short, practical courses in marketing, content, sales and automation. Learn it, then use it on a live project.",
  },
  h1: "Skills businesses actually pay for.",
  sub: "Short, practical courses in marketing, content, sales and automation. Learn it, then use it on a live project.",
  button: "See upcoming batches",
  batchesTitle: "Upcoming batches",
  batches: [] as { name: string; dates: string; mode: string }[],
  batchesTodo: TODO("batch data"),
};

export const EVENTS = {
  meta: {
    title: "Events: meet the people building India's next businesses",
    description: "Founders, owners and young talent in one room. Talks, workshops and real conversations. Monthly, in Mumbai.",
  },
  h1: "Meet the people building India's next businesses.",
  sub: "Founders, owners and young talent in one room. Talks, workshops and real conversations.",
  when: "Monthly · Mumbai",
  listTitle: "Upcoming events",
  events: [] as { name: string; date: string; place: string; href?: string }[],
  eventsTodo: TODO("first event"),
  // The demand form that already ran on /events (Oct 30 2026), kept so responses keep coming in
  formText: "Tell us what you'd want from an evening like this",
  formHref: "https://docs.google.com/forms/d/e/1FAIpQLSeV-vC7Y2Ze5irz8_13z9KhsyfbxrZCslY4ryQbgc4BtSW8Og/viewform",
};

export const CAREERS_GROW_LINK = "See everything at Grow With TAL";
