// ─── Job Data ────────────────────────────────────────────────────────────────
// Single source of truth for every role on /careers.
// Add a role by adding an object to JOBS. Applications go through
// /careers/[slug]/apply → /api/apply → the hiring sheet, so there is no form URL here.
//
// Every role except Founder's Office is paid for results or per project, never a fixed
// salary: people join the bench now and get paid when real client work exists. That's
// what lets TAL recruit ahead of demand without adding monthly cost. Founder's Office is
// the one stipend role, kept small and tied to a weekly scorecard (Rohan, Oct 7 2026).

export type RoleGroup = "grow" | "build";
export type RoleStatus = "open" | "bench";

export interface Job {
  slug: string;
  title: string;
  shortTitle: string;
  group: RoleGroup;
  status: RoleStatus;
  /** One line on when paid work starts. Shown next to the status pill. */
  statusNote: string;
  type: string;
  location: string;
  teaser: string;
  highlights: string[];
  pay: {
    headline: string;
    detail: string[];
  };
  content: {
    whyExists: string[];
    whatYouDo: string[];
    goodLooksLike: string[];
    youllFit: string[];
    /** Honest notes on how the role works, framed positively (hiring email rule 6). */
    worthKnowing: string[];
    tools?: string[];
  };
  workSample: {
    prompt: string;
    hint: string;
    /** "links" adds a required links field above the written answer. */
    answerType: "text" | "links";
  };
}

export const GROUPS: Record<RoleGroup, { label: string; line: string }> = {
  grow: {
    label: "Grow with us",
    line: "Bring in clients. You earn on what you bring in, with no cap.",
  },
  build: {
    label: "Build with us",
    line: "Deliver client work. Paid per project, scored on quality.",
  },
};

export const STATUS_LABEL: Record<RoleStatus, string> = {
  open: "Open now",
  bench: "Joining the bench",
};

// Same five steps for every role. Kept here so the careers page, every role page
// and the apply flow describe the process identically.
export const HIRING_STEPS = [
  { name: "Apply", detail: "Basics plus one short work sample. About 30 minutes." },
  { name: "Shortlist", detail: "Rohan reads every application on Fridays and picks the top 5 per role." },
  { name: "Call", detail: "20 minutes. What you've done, what you want, how you work." },
  { name: "Paid trial", detail: "One small real project, paid at the role's rate and scored." },
  { name: "Join the bench", detail: "You get work as clients come in. Good work gets more of it." },
];

export const REPLY_PROMISE_DAYS = 7;

export const JOBS: Job[] = [
  // ── Grow ──────────────────────────────────────────────────────────────────
  {
    slug: "founders-office",
    title: "Founder's Office (Growth)",
    shortTitle: "Founder's Office",
    group: "grow",
    status: "open",
    statusNote: "Starts late October, paid from week one",
    type: "Stipend + bonus",
    location: "Mumbai, on-site",
    teaser:
      "Work directly with Rohan on whatever moves TAL forward this week: outreach, research, content and operations. AI does the heavy lifting. You decide what to point it at, and you own the result.",
    highlights: [
      "Work side by side with the founder",
      "AI does the execution, you drive it",
      "Stipend plus a bonus on calls booked and clients won",
    ],
    pay: {
      headline: "₹10,000 a month, plus a bonus for every call booked and client won",
      detail: [
        "The stipend is paid monthly. Bonus rates are written into your offer letter.",
        "A 3-month engagement to start, reviewed together at day 45.",
        "Strong work here is the first route into a permanent role at TAL.",
      ],
    },
    content: {
      whyExists: [
        "TAL helps businesses that grow on enquiries turn more of them into customers. It's run by Rohan, with AI doing most of the execution.",
        "This role is his right hand. One person who can research, write, reach out and keep things moving, with AI as leverage, gets more done than a team of specialists waiting on each other.",
      ],
      whatYouDo: [
        "Build lead lists with AI and check each business for a real enquiry gap",
        "Send personal WhatsApp and LinkedIn messages and book 15-minute check-up calls",
        "Turn client work and Rohan's sessions into posts and short videos",
        "Prepare research and notes before calls, and keep every tracker current",
      ],
      goodLooksLike: [
        "20 or more personal messages on a working day",
        "Check-up calls booked every week",
        "Content shipped on the day it was planned",
        "A Friday scorecard that's up to date without anyone asking",
      ],
      youllFit: [
        "You use ChatGPT or Claude every day and can show something you built with it",
        "You write clearly and quickly in English; Hindi or Marathi is a plus",
        "You switch between tasks without dropping quality",
        "You'd rather own an outcome than wait for instructions",
      ],
      worthKnowing: [
        "Your week is shaped by a scorecard, not a fixed job description, so priorities move as the business does",
        "You work in person with Rohan at the Mumbai office, so feedback comes the same day",
      ],
      tools: ["ChatGPT or Claude", "Google Sheets", "WhatsApp", "Canva"],
    },
    workSample: {
      prompt:
        "Pick a clinic or real estate business in Mumbai. Using any AI tools you like: find one reason it's probably losing enquiries, write the WhatsApp message you'd send the owner, and draft one Instagram post for them. Share all three, and the tools you used.",
      hint: "Name the business so we can see your research. Show your own judgement, not just the AI's first draft.",
      answerType: "text",
    },
  },
  {
    slug: "referral-partner",
    title: "Referral Partner",
    shortTitle: "Referral Partner",
    group: "grow",
    status: "open",
    statusNote: "Paid on every client you send who signs",
    type: "Commission",
    location: "Anywhere in India",
    teaser:
      "You already know business owners who lose customers because nobody replies to their enquiries fast enough. Introduce them to us, and earn on every one who signs.",
    highlights: [
      "10% of the client's first payment",
      "No targets, no hours",
      "Made for CAs, agencies and tool sellers",
    ],
    pay: {
      headline: "10% of the client's first payment",
      detail: [
        "On a typical Build, that's a five-figure payout for one introduction.",
        "Paid within 7 days of the client's payment reaching us.",
        "No cap on how many clients you send.",
      ],
    },
    content: {
      whyExists: [
        "We help businesses that grow on enquiries turn more of them into customers, using a website people can find, regular posts, and AI follow-ups that reply for you.",
        "The best clients come through people they already trust. If you advise, supply or work alongside business owners, you're that person. This role pays you for the trust you've built.",
      ],
      whatYouDo: [
        "Spot owners who are losing enquiries: slow WhatsApp replies, missed calls, forms nobody answers",
        "Make a warm introduction by message or email. We take it from there",
        "Stay in the loop if you want to. We keep you posted on every introduction",
      ],
      goodLooksLike: [
        "One or two warm introductions a month",
        "Owners who already know they have a follow-up problem",
        "Your clients thank you for the introduction",
      ],
      youllFit: [
        "You're a CA, ad or design agency, WhatsApp tool seller, equipment dealer or consultant",
        "You speak to business owners every week",
        "You only recommend people you'd put your name behind",
      ],
      worthKnowing: [
        "This is commission only, so it suits people who already meet owners as part of their work",
        "Warm introductions to people you know work far better than cold lists",
      ],
    },
    workSample: {
      prompt:
        "Tell us the type of business you know best, and how you'd introduce TAL to one owner you have in mind (no names needed).",
      hint: "3 to 5 sentences is plenty.",
      answerType: "text",
    },
  },
  {
    slug: "strategic-growth-partner",
    title: "Strategic Growth Partner",
    shortTitle: "Growth Partner",
    group: "grow",
    status: "open",
    statusNote: "Paid from your first booked call",
    type: "Commission + per call",
    location: "Mumbai / Navi Mumbai, or remote",
    teaser:
      "Find clinics, real estate firms and B2B businesses that are losing enquiries, start the conversation, and book them onto a 15-minute check-up call with us. You earn when you book, and again when they buy.",
    highlights: [
      "A fixed fee for every qualified call you book",
      "Commission on every client who pays",
      "Scripts, lead lists and a proven offer from day one",
    ],
    pay: {
      headline: "A fee per qualified call, plus commission on every sale",
      detail: [
        "You're paid for each qualified call you book, whether or not it closes.",
        "On top of that, commission on the first payment of every client you bring in.",
        "Exact rates are shared on the shortlist call and written into your agreement.",
      ],
    },
    content: {
      whyExists: [
        "TAL sells three things: an Enquiry Leak Audit, an Enquiry Engine Build, and a monthly Growth Partner plan. The offer is clear and easy to show in a 15-minute check-up. What we need is more people starting those conversations.",
        "You do the outreach and booking. Rohan runs the call and the delivery. You get paid at both ends.",
      ],
      whatYouDo: [
        "Work through lead lists of clinics, real estate firms and B2B businesses",
        "Send short, personal WhatsApp and LinkedIn messages using our tested openers",
        "Book interested owners onto a 15-minute check-up call",
        "Log every conversation so nothing slips",
      ],
      goodLooksLike: [
        "20 or more personal messages on a working day",
        "Replies that turn into booked calls within the week",
        "Owners who arrive on the call already knowing why they're there",
      ],
      youllFit: [
        "You can start a conversation with a stranger without sounding like a script",
        "You follow up without being pushy",
        "You like being paid on output, not hours",
      ],
      worthKnowing: [
        "There is no fixed salary. Your income grows with the calls you book and the clients who buy",
        "Twenty thoughtful messages beat five hundred copied ones, and that's how we measure it",
      ],
      tools: ["WhatsApp", "LinkedIn", "Google Sheets"],
    },
    workSample: {
      prompt:
        "Pick any clinic or real estate business in Mumbai. Write the first WhatsApp message you'd send the owner to get a 15-minute call. Then tell us in one line why it would work.",
      hint: "Keep the message under 60 words. Name the business so we can see your research.",
      answerType: "text",
    },
  },

  // ── Build ─────────────────────────────────────────────────────────────────
  {
    slug: "researcher",
    title: "Researcher",
    shortTitle: "Researcher",
    group: "build",
    status: "open",
    statusNote: "Paid per list and per audit, starting this month",
    type: "Per project",
    location: "Remote",
    teaser:
      "Build lead lists that are actually worth messaging, and act as a mystery customer: call, WhatsApp and fill in forms to measure how fast a business replies.",
    highlights: [
      "₹6,000 per Enquiry Leak Audit",
      "Paid per verified lead list",
      "Remote, flexible hours",
    ],
    pay: {
      headline: "₹6,000 per audit, plus a fee per verified lead list",
      detail: [
        "An audit is about 6 to 8 hours of work spread across two weeks.",
        "Lead lists are paid per verified list, agreed before you start.",
        "Paid within 7 days of the work being accepted.",
      ],
    },
    content: {
      whyExists: [
        "Our Enquiry Leak Audit shows a business exactly how many customers it loses through slow or missed replies. That only works if someone tests it like a real customer would, at different times, on every channel.",
        "The same eye for detail makes great lead lists: real businesses with a real gap, not scraped names.",
      ],
      whatYouDo: [
        "Contact a business as a customer by call, WhatsApp, form and Instagram at 5 different times",
        "Record reply times and follow-ups in our audit sheet",
        "Build lead lists from Google Maps and websites, checking each business for a real enquiry gap",
      ],
      goodLooksLike: [
        "Every test logged with time, channel and exact reply",
        "Lists where every row is worth a personal message",
        "Notes that point to the one thing costing the business customers",
      ],
      youllFit: [
        "You notice small things other people miss",
        "You're comfortable calling a business and playing a customer",
        "You hand in work on the day you said you would",
      ],
      worthKnowing: [
        "Every list gets checked row by row, because each row becomes a personal message",
        "You get a clear checklist for the first audit, then room to work your own way",
      ],
      tools: ["Google Sheets", "Google Maps", "WhatsApp"],
    },
    workSample: {
      prompt:
        "Pick a clinic near you. Find its website, Google rating and every way it takes enquiries. If you like, send it an enquiry and time the reply. Tell us what you found, and the one thing that's probably losing it patients.",
      hint: "Bullet points are fine. Include the clinic's name and area.",
      answerType: "text",
    },
  },
  {
    slug: "video-and-post-editor",
    title: "Video & Post Editor",
    shortTitle: "Editor",
    group: "build",
    status: "open",
    statusNote: "Paid per client, monthly, as clients join",
    type: "Per client, monthly",
    location: "Remote",
    teaser:
      "Turn raw phone footage and photos from clinics, real estate firms and local brands into posts and short videos that make people enquire.",
    highlights: [
      "₹12,000 to ₹15,000 per client, per month",
      "Clear briefs and hooks from us",
      "Remote, work your own hours",
    ],
    pay: {
      headline: "₹12,000 to ₹15,000 per client, per month",
      detail: [
        "Each client is about 8 posts and 4 short videos a month.",
        "Take on as many clients as you can deliver well.",
        "Paid monthly, within 7 days of the month's work being approved.",
      ],
    },
    content: {
      whyExists: [
        "Our content plans give businesses regular posts built around what their customers actually ask. We write the plan and the hooks. You make it look and feel worth stopping for.",
      ],
      whatYouDo: [
        "Edit short videos from raw client footage, with captions and a strong first 3 seconds",
        "Design static posts and carousels from our briefs and the client's brand",
        "Turn feedback around within a day",
      ],
      goodLooksLike: [
        "Every video earns the next 3 seconds",
        "Posts that look like the client, not like a template",
        "No missed delivery dates",
      ],
      youllFit: [
        "You've edited short-form video that's been posted, not just practised",
        "You care about the hook more than the transitions",
        "You take feedback without taking it personally",
      ],
      worthKnowing: [
        "We set the plan and the hooks, and you bring the craft that makes them land",
        "The work is steady and short-form, across several clients at once",
      ],
      tools: ["Premiere Pro, DaVinci or CapCut", "Canva or Figma"],
    },
    workSample: {
      prompt:
        "Share 2 or 3 short videos or posts you've made. For one of them, tell us the hook in the first 3 seconds and why you chose it.",
      hint: "Instagram, YouTube or Drive links all work. Make sure they're viewable.",
      answerType: "links",
    },
  },
  {
    slug: "web-developer",
    title: "Web Developer",
    shortTitle: "Web Developer",
    group: "build",
    status: "bench",
    statusNote: "Paid work starts with our first Build",
    type: "Per project",
    location: "Remote",
    teaser:
      "Build fast, clear websites and landing pages for businesses that run on enquiries. Every page has one job: make it easy for a customer to get in touch.",
    highlights: [
      "₹30,000 per site",
      "Real client sites, not practice projects",
      "Remote, project by project",
    ],
    pay: {
      headline: "₹30,000 per site",
      detail: [
        "A typical site is 4 to 6 pages, built from our structure and copy.",
        "Half when you start, half when the site goes live.",
        "Bench members are booked first when a Build is signed.",
      ],
    },
    content: {
      whyExists: [
        "Our Enquiry Engine Build gives a business a website people can find and a way to reply to every enquiry fast. The website is where that starts, and it has to load fast, read clearly and convert.",
      ],
      whatYouDo: [
        "Build sites and landing pages in WordPress, Webflow or Next.js from our structure and copy",
        "Set up enquiry forms, WhatsApp buttons and basic tracking",
        "Hand over a site the owner can update without calling you",
      ],
      goodLooksLike: [
        "Pages that load in under 2 seconds on a phone",
        "Every form and button tested before handover",
        "Live on the date we agreed",
      ],
      youllFit: [
        "You have at least 3 live business sites you can show",
        "You think about the person using the site, not just the code",
        "You flag problems early instead of the day before launch",
      ],
      worthKnowing: [
        "We look for sites that real businesses use today, so live work matters more than practice projects",
        "Short daily updates keep the client calm, so we ask for them on every Build",
      ],
      tools: ["WordPress or Webflow", "Next.js (a plus)", "Google Analytics"],
    },
    workSample: {
      prompt:
        "Share 1 to 3 live sites you built. Pick one and tell us what you'd change to get the owner more enquiries.",
      hint: "Tell us which parts you built yourself.",
      answerType: "links",
    },
  },
  {
    slug: "automation-builder",
    title: "Automation Builder",
    shortTitle: "Automation Builder",
    group: "build",
    status: "bench",
    statusNote: "Paid work starts with our first Build",
    type: "Per project",
    location: "Remote",
    teaser:
      "Set up the WhatsApp auto-replies, follow-ups and reminders that make sure no enquiry goes unanswered, and one sheet where every enquiry lands.",
    highlights: [
      "₹20,000 per setup",
      "WhatsApp tools + make.com",
      "Remote, project by project",
    ],
    pay: {
      headline: "₹20,000 per setup",
      detail: [
        "A setup covers the auto-reply, 3 follow-ups, reminders and the lead sheet.",
        "Half when you start, half when it's live and tested.",
        "Bench members are booked first when a Build is signed.",
      ],
    },
    content: {
      whyExists: [
        "Most businesses lose customers in the gap between an enquiry and a reply. Our Build closes that gap with automations that answer in seconds and follow up until the customer books.",
      ],
      whatYouDo: [
        "Set up WhatsApp auto-replies and follow-up sequences in WATI, Interakt or AiSensy",
        "Connect forms, WhatsApp and calls into one lead sheet with make.com",
        "Test every path end to end and document it for the owner",
      ],
      goodLooksLike: [
        "A test enquiry gets a reply in under a minute, on every channel",
        "Every enquiry lands in the sheet, with nothing lost",
        "A one-page guide the owner can actually follow",
      ],
      youllFit: [
        "You've built automations that run for a real business today",
        "You test the edge cases nobody asked about",
        "You can explain what you built in plain words",
      ],
      worthKnowing: [
        "Automations you've run for a real business count for far more than tutorials",
        "Reliable beats clever here: the owner has to trust it on a busy Saturday",
      ],
      tools: ["WATI, Interakt or AiSensy", "make.com", "Google Sheets"],
    },
    workSample: {
      prompt:
        "Describe one automation you've built: what triggers it, the steps, and what it saved the business. Link a Loom or screenshots if you have them.",
      hint: "If you don't have a link, write \"none\" in the links box and describe it in detail.",
      answerType: "links",
    },
  },
];

export function getJob(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}

export function getAllSlugs(): string[] {
  return JOBS.map((j) => j.slug);
}

export function jobsByGroup(group: RoleGroup): Job[] {
  return JOBS.filter((j) => j.group === group);
}
