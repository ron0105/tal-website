// ─── Sectors (/sectors and /sectors/[slug]) ──────────────────────────────────
// Rebuild master prompt sections 5.2 and 5.3. One template, one entry per sector.
// From the prompt's table: H1, daily pain line, system name, system parts, proof, free check.
// Written new under the copy rules (section 4): each page's leak title, its 3 problem cards in
// the owner's words, and its 3 FAQs. None of them states a number or a result.
// Proof is never borrowed from another sector; a sector with none says so plainly.

export type Proof =
  | { kind: "stat"; value: string; label: string; source: string; href: string }
  | { kind: "links"; items: { text: string; href: string }[] }
  | { kind: "todo"; text: string };

export type Sector = {
  slug: string;
  name: string;
  cardResult: string; // one-line result on Home and /sectors cards
  h1: string;
  pain: string;
  checkName: string; // "Free Clinic Check"
  checkButton: string; // hero button
  leakTitle: string;
  problems: { title: string; body: string }[];
  systemName: string;
  systemParts: string[];
  proof: Proof;
  faqs: { q: string; a: string }[];
  whatsapp: string;
  meta: { title: string; description: string };
};

export const SECTORS_DATA: Sector[] = [
  {
    slug: "clinics",
    name: "Clinics & Doctors",
    cardResult: "More patient bookings, no extra staff",
    h1: "More patients. Less chasing.",
    pain: "Patients find you on Google, send a message, and then disappear.",
    checkName: "Free Clinic Check",
    checkButton: "Get a Free Clinic Check",
    leakTitle: "Patients are lost between the message and the booking.",
    problems: [
      { title: "“They message at night. We reply the next day.”", body: "By then the patient has booked with the clinic that answered first." },
      { title: "“They ask the fee, then go quiet.”", body: "Nobody follows up, so a patient who was ready to book just drifts away." },
      { title: "“Our Google listing is old.”", body: "Wrong timings, no website link, few new reviews. Patients pick the clinic that looks active." },
    ],
    systemName: "Clinic Booking System",
    systemParts: [
      "Website with doctors, services and reviews",
      "Google listing fixed and kept active",
      "WhatsApp auto-reply that books 24/7",
      "Visit reminders",
      "Follow-ups for patients who didn't book",
    ],
    proof: {
      kind: "stat",
      value: "20 of 30",
      label: "top-rated dentists we checked were losing enquiries; 10 had no website on Google",
      source: "Our own Clinic Leads Finder",
      href: "/work/clinic-leads-finder",
    },
    faqs: [
      { q: "Will this work with my receptionist?", a: "Yes. WhatsApp replies and reminders run on their own, and your staff see every booking. They spend less time on the phone, not more." },
      { q: "Is it okay to message patients on WhatsApp?", a: "We only message people who contacted you first or booked with you, and every message is about their visit." },
      { q: "I'm not good with tech.", a: "You don't need to be. We set everything up and run it." },
    ],
    whatsapp: "Hi TAL, I run a clinic and want more bookings.",
    meta: { title: "More patient bookings for clinics", description: "WhatsApp replies that book 24/7, a Google listing that stays active, reminders and follow-ups. The Clinic Booking System for clinics in Mumbai and across India." },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    cardResult: "Every lead gets a call",
    h1: "Every lead gets a call. More site visits.",
    pain: "Portal leads go cold within hours when nobody calls back.",
    checkName: "Free Lead Check",
    checkButton: "Get a Free Lead Check",
    leakTitle: "Leads go cold before anyone calls them back.",
    problems: [
      { title: "“We pay for portal leads. Half never pick up.”", body: "When the call comes hours later, the buyer has already spoken to three other projects." },
      { title: "“My team calls the hot ones and forgets the rest.”", body: "Leads that weren't ready this week never hear from you again." },
      { title: "“Site visits get booked, then people don't come.”", body: "No reminder, no directions, no follow-up, so the slot goes empty." },
    ],
    systemName: "Site Visit System",
    systemParts: [
      "Project landing pages",
      "Instant WhatsApp reply to every portal lead",
      "AI voice agent for first calls",
      "Site-visit booking and reminders",
      "Follow-up for leads who went quiet",
    ],
    // No real estate case in HQ yet (client records, Nov 1). Said plainly, never borrowed from another sector.
    proof: { kind: "todo", text: "No real estate case on the site yet. Your project could be the first, and you'd see the day 1 vs day 14 reply-time report for yourself." },
    faqs: [
      { q: "Will an AI voice agent put buyers off?", a: "It makes the first call, fast, so no lead waits. Your team takes over for the conversations that need a person." },
      { q: "Does it work with portal leads?", a: "Yes. Every portal lead gets an instant WhatsApp reply, then a first call." },
      { q: "I'm not good with tech.", a: "You don't need to be. We set everything up and run it." },
    ],
    whatsapp: "Hi TAL, I sell property and want more site visits.",
    meta: { title: "More site visits for real estate", description: "Instant WhatsApp replies to every portal lead, an AI voice agent for first calls, and site-visit reminders. The Site Visit System for real estate in Mumbai and India." },
  },
  {
    slug: "restaurants",
    name: "Restaurants & Cafés",
    cardResult: "More regulars",
    h1: "More tables filled. More regulars.",
    pain: "People visit once, enjoy it, and never come back.",
    checkName: "Free Restaurant Check",
    checkButton: "Get a Free Restaurant Check",
    leakTitle: "Happy guests leave and you never hear from them again.",
    problems: [
      { title: "“People love the food but don't come back.”", body: "There's no simple way to remind them, so they go wherever they saw last." },
      { title: "“We post on Instagram but tables stay empty.”", body: "Posts get likes, but nothing turns a like into a booking." },
      { title: "“We don't know our numbers.”", body: "Which offer worked? Who came back? Without a simple report, every month is a guess." },
    ],
    systemName: "Regulars System",
    systemParts: [
      "Instagram content and launch campaigns",
      "Google reviews system",
      "WhatsApp list for offers",
      "Loyalty and referral programme",
      "Simple monthly numbers report",
    ],
    proof: {
      kind: "links",
      items: [
        { text: "90-day growth plan for The Glück Bistro", href: "/work/gluck-bistro" },
        { text: "Cocktail menu launch for Bayroute", href: "/work/bayroute" },
      ],
    },
    faqs: [
      { q: "Do I have to come on camera?", a: "No. We can work with or without your face." },
      { q: "Will guests mind getting WhatsApp messages?", a: "Only guests who join your WhatsApp list get offers, and they can leave anytime." },
      { q: "How will I know it's working?", a: "You get a simple monthly numbers report you can read in 2 minutes." },
    ],
    whatsapp: "Hi TAL, I run a restaurant and want more regulars.",
    meta: { title: "More regulars for restaurants and cafés", description: "Instagram launches, Google reviews, a WhatsApp offers list and loyalty, with a simple monthly report. The Regulars System for restaurants and cafés in Mumbai and India." },
  },
  {
    slug: "d2c",
    name: "D2C Brands",
    cardResult: "Customers who buy again",
    h1: "Customers who buy again and again.",
    pain: "Ad costs keep rising and most buyers order only once.",
    checkName: "Free Store Check",
    checkButton: "Get a Free Store Check",
    leakTitle: "You pay to win a customer, then let them go after one order.",
    problems: [
      { title: "“Every sale costs more in ads.”", body: "When most buyers order once, you pay to find a new customer for every sale." },
      { title: "“People skip our ads.”", body: "A polished ad looks like an ad. The first 2 seconds decide whether anyone watches." },
      { title: "“We never hear from buyers after delivery.”", body: "No follow-up, no reason to come back, no win-back offer." },
    ],
    systemName: "Repeat Buyer System",
    systemParts: [
      "Short video ads made for the first 2 seconds",
      "Product page and Amazon copy",
      "WhatsApp and email follow-ups after purchase",
      "Win-back offers",
      "Monthly performance review",
    ],
    proof: {
      kind: "links",
      items: [
        { text: "Video ads for Pilgrim and Eh Maaya", href: "/work/performance-ads" },
        { text: "Daily ads and Amazon content for Cosmic Byte", href: "/work/cosmic-byte" },
      ],
    },
    faqs: [
      { q: "Do you run the ads too?", a: "We make the short video ads and review performance with you every month." },
      { q: "We sell on Amazon. Does this help?", a: "Yes. We write your product page and Amazon copy as part of the system." },
      { q: "I'm not good with tech.", a: "You don't need to be. We set everything up and run it." },
    ],
    whatsapp: "Hi TAL, I run a D2C brand and want more repeat buyers.",
    meta: { title: "Repeat buyers for D2C brands", description: "Short video ads for the first 2 seconds, Amazon copy, and WhatsApp follow-ups and win-back offers after purchase. The Repeat Buyer System for D2C brands in India." },
  },
  {
    slug: "founders",
    name: "Startup Founders",
    cardResult: "Know before you spend lakhs",
    h1: "Know if your idea will work before you spend lakhs.",
    pain: "Most founders build first and talk to customers later.",
    checkName: "Idea Score Test",
    checkButton: "Take the Idea Score Test",
    leakTitle: "Founders spend on building before they know anyone will buy.",
    problems: [
      { title: "“Everyone I asked loved the idea.”", body: "Friends are kind. Real customers show it with time or money." },
      { title: "“I'll find customers once it's built.”", body: "By then the savings are spent, and changing course costs months." },
      { title: "“I don't know what to charge.”", body: "A price picked at random can make a good idea look like a bad business." },
    ],
    systemName: "Idea Check (14 days)",
    systemParts: [
      "Customer interviews",
      "Market and competitor check",
      "Pricing test",
      "Honest verdict: build, change or drop",
      "Next-step plan",
    ],
    proof: {
      kind: "links",
      items: [{ text: "First pilot customers and pricing for Trace Resource", href: "/work/trace-resource" }],
    },
    faqs: [
      { q: "What if the answer is “drop it”?", a: "Then you've saved the lakhs you would have spent building. You also get the reasons, and what would have to change." },
      { q: "How long does it take?", a: "14 days of customer talks, a market check and an honest answer: build it or drop it." },
      { q: "What if I'm not happy with the result?", a: "A clear answer, or your money back." },
    ],
    whatsapp: "Hi TAL, I have a startup idea and want to test it before I build.",
    meta: { title: "Test your startup idea in 14 days", description: "Customer interviews, a market check and a pricing test, then an honest verdict: build, change or drop. The 14-day Idea Check for founders in India." },
  },
];

export const getSector = (slug: string) => SECTORS_DATA.find((s) => s.slug === slug);

export const SECTORS_HUB = {
  meta: { title: "Who we help", description: "Clinics, real estate, restaurants, D2C brands and startup founders: see what we set up for each, and what changed for others like you." },
  h1: "Your industry. Our system.",
  sub: "Pick your business to see what we set up and what changed for others like you.",
};

// Labels for the template's section eyebrows
export const SECTOR_LABELS = {
  wrong: "What's going wrong",
  setup: "What we set up",
  proof: "Proof",
  check: "Free check",
  faq: "Questions",
  proofTitle: "What we've done for businesses like yours.",
  faqTitle: "Questions owners ask us.",
  checkTitle: (name: string) => `Get your ${name}.`,
  checkBody: "We check your Google listing, website and WhatsApp replies for gaps that lose customers. Report sent on WhatsApp.",
};
