// ─── Careers Data ────────────────────────────────────────────────────────────
// Single source of truth for /careers. Applications go through
// /careers/[slug]/apply → /api/apply → the careers sheet.
//
// TAL Founder's Office Cohort (Rohan, Oct 7 2026): one program, four tracks. Everyone
// starts with a paid 15-day training sprint on real TAL assignments; the people who
// perform move into a paid full-time internship. Everyone who completes training gets
// a certificate, free. No pay-per-project roles on the page; freelancers are brought in
// off-page only when a client Build needs one. Referral Partner stays as a side door.

export type RoleGroup = "cohort" | "partner";
export type RoleStatus = "open";

export interface Step {
  name: string;
  detail: string;
}

export interface Job {
  slug: string;
  title: string;
  shortTitle: string;
  group: RoleGroup;
  status: RoleStatus;
  /** One line on when it starts or how it pays. Shown next to the status pill. */
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
    /** Cohort tracks: the pieces you leave with. */
    portfolio?: string[];
    goodLooksLike?: string[];
    youllFit: string[];
    /** Honest notes on how it works, framed positively (hiring email rule 6). */
    worthKnowing: string[];
    tools?: string[];
  };
  workSample: {
    prompt: string;
    hint: string;
    /** "links" adds a required links field above the written answer. */
    answerType: "text" | "links";
  };
  /** Overrides HIRING_STEPS for roles that aren't part of the cohort. */
  steps?: Step[];
}

export const COHORT = {
  name: "TAL Founder's Office Cohort",
  trainingDays: 15,
  trainingStipend: "₹3,000",
  internshipPay: "₹10,000 a month + bonus",
  internshipMonths: 3,
  nextStart: "late October",
  location: "Mumbai (CBD Belapur), on-site",
};

export const GROUPS: Record<RoleGroup, { label: string; line: string; crumb: string }> = {
  cohort: {
    crumb: "Founder's Office Cohort",
    label: "Pick your track",
    line: "Everyone works across all four. Your track is where you go deepest.",
  },
  partner: {
    crumb: "Referral",
    label: "Not looking for an internship?",
    line: "Know business owners who lose enquiries? Introduce them and earn on every one who signs.",
  },
};

export const STATUS_LABEL: Record<RoleStatus, string> = {
  open: "Open now",
};

// The cohort's five steps. Kept here so the careers page, every track page and the
// apply flow describe the process identically.
export const HIRING_STEPS: Step[] = [
  { name: "Apply", detail: "Basics, one short work sample and six quick questions. About 30 minutes." },
  { name: "Shortlist", detail: "Rohan reads every application on Fridays and picks the next cohort." },
  { name: "Call", detail: "20 minutes. What you've done, what you want, how you work." },
  { name: "Training sprint", detail: `${COHORT.trainingDays} days of real TAL assignments. ${COHORT.trainingStipend} stipend and a certificate.` },
  { name: "Internship", detail: `${COHORT.internshipMonths} months full-time, ${COHORT.internshipPay}. The best stay on.` },
];

export const REPLY_PROMISE_DAYS = 7;

const COHORT_PAY = {
  headline: `${COHORT.trainingStipend} for the ${COHORT.trainingDays}-day training, then ${COHORT.internshipPay}`,
  detail: [
    `Training: ${COHORT.trainingDays} days of real assignments on TAL's own work, a ${COHORT.trainingStipend} stipend, and a certificate when you finish, whether or not you continue.`,
    `Internship: ${COHORT.internshipMonths} months full-time for the people who perform, ${COHORT.internshipPay} on calls booked and clients won.`,
    "Reviewed together at day 45. The strongest interns are offered a permanent role.",
  ],
};

const COHORT_COMMON = {
  group: "cohort" as const,
  status: "open" as const,
  statusNote: `Next cohort starts ${COHORT.nextStart}`,
  type: "Full-time · paid",
  location: COHORT.location,
  pay: COHORT_PAY,
};

const COHORT_WHY =
  "TAL is a Mumbai consulting firm that helps businesses turn more of their enquiries into customers. It's run by Rohan, with AI doing most of the execution, and the Founder's Office Cohort is how new people learn the work: by doing it, alongside him, from week one.";

const COHORT_NOTES = [
  "Your week is shaped by a scorecard, not a fixed job description, so priorities move as the business does",
  "Training assignments are on TAL's own work. Client work starts in the internship, always with Rohan reviewing before anything goes out",
  "You work in person at the Mumbai office, so feedback comes the same day",
];

export const JOBS: Job[] = [
  // ── Cohort tracks ─────────────────────────────────────────────────────────
  {
    ...COHORT_COMMON,
    slug: "growth",
    title: "Growth track",
    shortTitle: "Growth",
    teaser:
      "Find businesses that are losing enquiries, start the conversation, and book check-up calls. You learn how a consulting firm actually wins clients, by doing it.",
    highlights: [
      "Work side by side with the founder",
      "Outreach, pitching and sales, with AI doing the legwork",
      "Bonus on every call booked and client won",
    ],
    content: {
      whyExists: [
        COHORT_WHY,
        "The Growth track is the front of the business: finding the right businesses, writing to them like a person, and getting them onto a call.",
      ],
      whatYouDo: [
        "Build lead lists with AI and check each business for a real enquiry gap",
        "Write and send personal WhatsApp and LinkedIn messages",
        "Book 15-minute check-up calls and prepare notes before each one",
        "Track replies and calls so the numbers are always current",
      ],
      portfolio: [
        "An outreach campaign you wrote, sent and measured, with real reply rates",
        "A researched list of businesses with a documented enquiry gap",
        "Call notes and a pitch you helped deliver",
      ],
      youllFit: [
        "You can start a conversation with a stranger without sounding like a script",
        "You use ChatGPT or Claude every day and can show something you made with it",
        "You'd rather own an outcome than wait for instructions",
      ],
      worthKnowing: COHORT_NOTES,
      tools: ["ChatGPT or Claude", "WhatsApp", "LinkedIn", "Google Sheets"],
    },
    workSample: {
      prompt:
        "Pick a clinic or real estate business in Mumbai. Using any AI tools you like: find one reason it's probably losing enquiries, write the WhatsApp message you'd send the owner, and draft one Instagram post for them. Share all three, and the tools you used.",
      hint: "Name the business so we can see your research. Show your own judgement, not just the AI's first draft.",
      answerType: "text",
    },
  },
  {
    ...COHORT_COMMON,
    slug: "content",
    title: "Content track",
    shortTitle: "Content",
    teaser:
      "Turn ideas, client wins and Rohan's sessions into posts and short videos that make people enquire. You learn content that sells, not content that just gets likes.",
    highlights: [
      "Plan, shoot, edit and post on real channels",
      "Hooks and scripts reviewed by the founder",
      "A content portfolio with real numbers behind it",
    ],
    content: {
      whyExists: [
        COHORT_WHY,
        "The Content track builds TAL's own channels first, then the content plans TAL runs for clients.",
      ],
      whatYouDo: [
        "Plan monthly content around the questions customers actually ask",
        "Write hooks and scripts, shoot and edit short videos",
        "Design posts and carousels, and post them on schedule",
        "Track what performs and bring the numbers to the weekly review",
      ],
      portfolio: [
        "A content series planned, made and posted on TAL's channels",
        "Short videos with hooks you wrote and tested, with their numbers",
        "A monthly content plan for a real business",
      ],
      youllFit: [
        "You've made short-form video or posts that have actually been published",
        "You care more about the first 3 seconds than the transitions",
        "You take feedback without taking it personally",
      ],
      worthKnowing: COHORT_NOTES,
      tools: ["CapCut, Premiere or DaVinci", "Canva or Figma", "ChatGPT or Claude"],
    },
    workSample: {
      prompt:
        "Share 2 or 3 short videos or posts you've made. For one of them, tell us the hook in the first 3 seconds and why you chose it. Then write one hook for a TAL post about businesses losing customers to slow replies.",
      hint: "Instagram, YouTube or Drive links all work. Make sure they're viewable.",
      answerType: "links",
    },
  },
  {
    ...COHORT_COMMON,
    slug: "research",
    title: "Research track",
    shortTitle: "Research",
    teaser:
      "Dig into businesses and markets: who's losing enquiries, why, and what it's costing them. You learn the groundwork behind every consulting pitch and audit.",
    highlights: [
      "Mystery-shopper audits of real businesses",
      "Market scans that shape TAL's next move",
      "Analysis you can show in any interview",
    ],
    content: {
      whyExists: [
        COHORT_WHY,
        "The Research track is how TAL knows what it's talking about. Every audit, pitch and proposal starts with your work.",
      ],
      whatYouDo: [
        "Contact businesses as a customer by call, WhatsApp, form and Instagram, and time the replies",
        "Build lead lists that are worth messaging, checked row by row",
        "Scan markets and competitors and turn the findings into a one-page brief",
      ],
      portfolio: [
        "A mystery-shopper audit of a real business's enquiry response",
        "A market or competitor scan with a clear recommendation",
        "Lead lists that turned into booked calls",
      ],
      youllFit: [
        "You notice small things other people miss",
        "You're comfortable calling a business and playing a customer",
        "You can turn messy findings into one clear page",
      ],
      worthKnowing: COHORT_NOTES,
      tools: ["Google Sheets", "Google Maps", "ChatGPT or Claude"],
    },
    workSample: {
      prompt:
        "Pick a clinic near you. Find its website, Google rating and every way it takes enquiries. If you like, send it an enquiry and time the reply. Tell us what you found, and the one thing that's probably losing it patients.",
      hint: "Bullet points are fine. Include the clinic's name and area.",
      answerType: "text",
    },
  },
  {
    ...COHORT_COMMON,
    slug: "build",
    title: "Build track",
    shortTitle: "Build",
    teaser:
      "Use AI tools to build the websites, landing pages and WhatsApp automations TAL sells. You learn to ship real things fast, without needing a CS degree.",
    highlights: [
      "Ship websites and automations with AI",
      "Real tools used by a real business",
      "A build portfolio with live links",
    ],
    content: {
      whyExists: [
        COHORT_WHY,
        "The Build track makes the systems behind TAL's offer: pages that bring in enquiries and automations that reply to every one.",
      ],
      whatYouDo: [
        "Build landing pages and simple sites with AI coding tools",
        "Set up WhatsApp auto-replies, follow-ups and lead sheets",
        "Build small internal tools that save the team time",
      ],
      portfolio: [
        "A landing page built and shipped, with a live link",
        "A WhatsApp reply and follow-up flow, tested end to end",
        "An internal tool the team actually uses",
      ],
      youllFit: [
        "You've built something that works, even if it's small",
        "You use AI tools to build, and you check what they produce",
        "You test the edge cases nobody asked about",
      ],
      worthKnowing: COHORT_NOTES,
      tools: ["Claude or Cursor", "WordPress, Webflow or Next.js", "make.com", "Google Sheets"],
    },
    workSample: {
      prompt:
        "Share something you've built (a site, an automation or a tool) and tell us how you used AI to build it. If you haven't built anything yet, build a one-page site for a local business with any AI tool and share the link.",
      hint: "Tell us which parts you did yourself and which the AI did.",
      answerType: "links",
    },
  },

  // ── Side door ─────────────────────────────────────────────────────────────
  {
    slug: "referral-partner",
    title: "Referral Partner",
    shortTitle: "Referral Partner",
    group: "partner",
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
    steps: [
      { name: "Apply", detail: "Two minutes: tell us who you know." },
      { name: "Call", detail: "15 minutes to agree how introductions work." },
      { name: "Start referring", detail: "10% of each client's first payment, paid within 7 days of it reaching us." },
    ],
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

export function stepsFor(job: Job): Step[] {
  return job.steps ?? HIRING_STEPS;
}
