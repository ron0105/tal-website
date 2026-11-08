// ─── Home (/) ────────────────────────────────────────────────────────────────
// Rebuild master prompt section 5.1, word for word, with Rohan's Nov 1 2026 decisions:
// capacity is 5 clients a month (prompt said 4), and no prices on the site (FAQ "Is this costly?").

export const HOME = {
  meta: {
    title: "The Adda Labs · More customers for your business. Guaranteed.",
    description:
      "We build your website, run your Instagram and set up WhatsApp automation, so more of the right people become paying customers. For businesses in Mumbai and across India.",
  },
  hero: {
    eyebrow: "For clinics, real estate, restaurants and D2C brands · Mumbai",
    h1: "More customers for your business. Guaranteed.",
    sub: "We build your website, run your Instagram and set up WhatsApp automation, so more of the right people become paying customers.",
    primary: "Book a Free Call",
    ghost: "See Our Work",
    // Set this to show the click-to-play video: MP4 H.264 up to 40 MB, WEBP poster up to 200 KB,
    // `caption` is the path to a .vtt captions file. While null, the hero keeps the diagram.
    video: null as null | { src: string; poster: string; caption: string },
    videoLabel: "A short video on how we work",
    diagramLabel: "The Customer System: get noticed, get leads, convert every lead",
    diagram: [
      { title: "Get noticed", sub: "Instagram content and ads" },
      { title: "Get leads", sub: "A website that builds trust" },
      { title: "Convert every lead", sub: "WhatsApp replies and follow-ups" },
    ],
  },
  trust: {
    label: "Our team has worked with",
    brands: ["Atomberg", "Pilgrim", "DHL Express India", "ONGC", "Media.net", "Accenture"],
  },
  problem: {
    eyebrow: "The problem",
    title: "Most leads are lost after the first message.",
    body: "You post on Instagram. You have a website. People message you on WhatsApp. But most never become customers. They ask the price, go quiet, and nobody follows up.",
    exhibitLabel: "Illustration",
    // Bar lengths only show the shape of the leak. They are not data, so no numbers beyond "100 leads".
    bars: [
      { label: "100 leads", width: 100 },
      { label: "Replied late", width: 62 },
      { label: "Never followed up", width: 34 },
      { label: "Few customers", width: 12 },
    ],
    closing: "The problem is not marketing. It's what happens after someone reaches out.",
  },
  system: {
    eyebrow: "The system",
    title: "Three parts, one goal: no lead left behind.",
    cards: [
      { title: "Get noticed", body: "Instagram content and ads that bring the right people." },
      { title: "Get leads", body: "A website that builds trust and makes contact easy." },
      { title: "Convert every lead", body: "WhatsApp replies, booking and follow-ups that run on their own, even at 2 AM." },
    ],
    link: "See how we do it",
  },
  quality: {
    eyebrow: "Customer quality",
    title: "The right customers. Again and again.",
    body: "A busy inbox only helps if the people in it buy, and buy again.",
    cards: [
      { title: "Right people in", body: "Content and ads aimed at people who can afford what you sell." },
      { title: "Serious buyers first", body: "Follow-ups find out who is ready, so your team spends time where it pays." },
      { title: "Customers who return", body: "Reminders and win-back messages turn one purchase into many." },
    ],
  },
  sectors: {
    eyebrow: "Who we help",
    title: "Built for clinics, real estate, restaurants, D2C brands and founders.",
    body: "Each one gets its own system, made for how that business sells.",
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
      { q: "Will these be good customers?", a: "Before we start, we agree what a good customer looks like for you. Then we track how many you get and what they spend, and report it every month." },
      { q: "We tried an agency before and it didn't work.", a: "Most agencies stop at posts and likes. We measure leads and customers, and we report them every month." },
      { q: "Is this costly?", a: "We share the price on the free call, once we know what you need. We'll tell you honestly if it's worth it for you." },
      { q: "Do I have to come on camera?", a: "No. We can work with or without your face." },
      // From the 14-Day Full Diary Plan (how-we-work/Sales call script, Grand Slam build - Clinics)
      { q: "How soon will I see results?", a: "In 14 days. Your system goes live and every lead gets a reply within 2 minutes, any hour. You see the change in a day 1 vs day 14 reply-time report." },
      { q: "I'm not good with tech.", a: "You don't need to be. We set everything up and run it." },
    ],
  },
  whatsapp: "Hi TAL, I want more customers for my business.",
};
