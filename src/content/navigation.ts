// ─── Site navigation and the words around every page ─────────────────────────
// One file for the header, mobile menu, sticky bar and footer (rebuild spec sections 3 and 5).
// `ready: false` keeps a link hidden until its page ships, so no menu ever points at a 404.
// Flip it to true in the same PR that builds the page.

export type NavLink = { label: string; href: string; ready?: boolean };

export const SECTORS: NavLink[] = [
  { label: "Clinics & Doctors", href: "/sectors/clinics" },
  { label: "Real Estate", href: "/sectors/real-estate" },
  { label: "Restaurants & Cafés", href: "/sectors/restaurants" },
  { label: "D2C Brands", href: "/sectors/d2c" },
  { label: "Startup Founders", href: "/sectors/founders" },
];

export const WHO_WE_HELP: NavLink = { label: "Who We Help", href: "/sectors" };

// Desktop: Who We Help ▾ · Pricing · Work · Free Tools · About, then the Book a Free Call button
export const MAIN_NAV: NavLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Work", href: "/work" },
  { label: "Free Tools", href: "/tools" },
  { label: "About", href: "/about" },
];

export const CALL_CTA: NavLink = { label: "Book a Free Call", href: "/call" };

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  { title: "Who We Help", links: SECTORS },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "How we work", href: "/how-we-work" },
      { label: "Lab Notes", href: "/lab-notes" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    // Builders' section: reached only from here and from Careers, never from buyer pages
    title: "Grow With TAL",
    links: [
      { label: "Live Projects", href: "/live-projects?src=site" },
      { label: "Training", href: "/training" },
      { label: "Events", href: "/events" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

// Small words used across the frame of every page
export const CHROME = {
  brandLine: "We help businesses that grow on enquiries turn more of them into customers.",
  stickyCall: "Book a Call",
  whatsappLabel: "Chat on WhatsApp",
  allSectors: "All industries",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  // The legal details stay exactly as they were on the live site
  copyright: "TAL Consulting LLP / The Adda Labs",
  legalLine: "LLPIN ACZ-3000 · Mumbai, India · Grievance officer: Rohan Tiwarekar, rohan@theaddalabs.com",
};

// The message WhatsApp opens with, per page (spec section 5). Longest matching path wins;
// pages not listed use the default in lib/site.ts.
export const WHATSAPP_MESSAGES: Record<string, string> = {
  "/sectors/clinics": "Hi TAL, I run a clinic and want more bookings.",
  "/sectors/real-estate": "Hi TAL, I sell property and want more site visits.",
  "/sectors/restaurants": "Hi TAL, I run a restaurant and want more regulars.",
  "/sectors/d2c": "Hi TAL, I run a D2C brand and want more repeat buyers.",
  "/sectors/founders": "Hi TAL, I have a startup idea and want to test it before I build.",
  "/pricing": "Hi TAL, I'd like a free audit of my business.",
  "/work": "Hi TAL, I saw your work and want similar results for my business.",
  "/tools": "Hi TAL, I want a free check of my business.",
};

export function whatsappTextFor(pathname: string): string | undefined {
  const match = Object.keys(WHATSAPP_MESSAGES)
    .filter((p) => pathname === p || pathname.startsWith(`${p}/`))
    .sort((a, b) => b.length - a.length)[0];
  return match ? WHATSAPP_MESSAGES[match] : undefined;
}

// Pages for builders: the buyer sticky bar stays off here, and the chat guide stays on
export const BUILDER_ROUTES = ["/grow", "/live-projects", "/training", "/events", "/careers"];

export const isBuilderRoute = (pathname: string) => BUILDER_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));

export const live = (links: NavLink[]) => links.filter((l) => l.ready !== false);
