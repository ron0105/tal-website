// ─── Careers Data ────────────────────────────────────────────────────────────
// Single source of truth for /careers. Applications go through
// /careers/[slug]/apply → /api/apply → the careers sheet.
//
// TAL Founder's Office Cohort (Rohan, Oct 7 2026): one program, four tracks. Everyone
// starts with a paid 15-day training sprint on real TAL assignments; the people who
// perform move into a paid full-time internship. Everyone who completes training gets
// a certificate, free. No pay-per-project roles on the page; freelancers are brought in
// off-page only when a client Build needs one. Referral Partner stays as a side door.
// The figures (15 days, ₹3,000 stipend, 3 months at ₹10K + bonus, 10% referral) are
// shared on the call, not on the page (Rohan, Oct 8 2026). Training is unpaid from Oct 8 2026
// (Rohan); only the internship is paid.

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
  nextStart: "late October",
  location: "CBD Belapur, Navi Mumbai · on-site",
};

export const GROUPS: Record<RoleGroup, { label: string; line: string; crumb: string }> = {
  cohort: {
    crumb: "Founder's Office Cohort",
    label: "Choose your track",
    line: "You work across every track and go deepest in the one you choose.",
  },
  partner: {
    crumb: "Referral",
    label: "Prefer to work with us as a partner?",
    line: "Introduce business owners who want to win more customers from their enquiries, and earn a commission on every one who signs.",
  },
};

export const STATUS_LABEL: Record<RoleStatus, string> = {
  open: "Open now",
};

// The cohort's steps. Kept here so the careers page, every track page and the
// apply flow describe the process identically. Copy rule (Rohan, Oct 8 2026): positive,
// simple professional English, and no figures (pay, durations, counts) anywhere on the page.
export const HIRING_STEPS: Step[] = [
  { name: "Apply", detail: "Share a few details, a short work sample and your answers to some real work situations." },
  { name: "Shortlist", detail: "Rohan reads every application on Friday and selects the next cohort." },
  { name: "Call", detail: "A short conversation about your work, your goals and how you like to work." },
  { name: "Training", detail: "Hands-on training on real TAL assignments, with a certificate on completion." },
  { name: "Internship", detail: "A paid, full-time internship with a performance bonus. Strong performers are offered a permanent role." },
];

// Drives the reply-by date shown after applying and written to the sheet. Not shown as a number.
export const REPLY_PROMISE_DAYS = 7;

const COHORT_PAY = {
  headline: "Training with a certificate, then a paid full-time internship",
  detail: [
    "Training: real assignments on TAL's own work, with daily feedback and a certificate on completion.",
    "Internship: full-time and paid, with a bonus for calls booked and clients won.",
    "Strong performers are offered a permanent role.",
  ],
};

const COHORT_COMMON = {
  group: "cohort" as const,
  status: "open" as const,
  statusNote: `Next cohort starts ${COHORT.nextStart}`,
  type: "Full-time",
  location: COHORT.location,
  pay: COHORT_PAY,
};

const COHORT_WHY =
  "TAL is a consulting firm based in Navi Mumbai that helps businesses turn more of their enquiries into customers. Rohan leads the work, AI handles much of the execution, and the Founder's Office Cohort is how new people learn the craft: by doing real work alongside him from the first week.";

const COHORT_NOTES = [
  "Your priorities are set by a weekly scorecard, so your work grows with the business",
  "Training assignments are on TAL's own work. Client work begins in the internship, with Rohan reviewing everything before it is shared",
  "You work from our office in CBD Belapur, Navi Mumbai, so you receive feedback the same day",
];

export const JOBS: Job[] = [
  // ── Cohort tracks ─────────────────────────────────────────────────────────
  {
    ...COHORT_COMMON,
    slug: "growth",
    title: "Growth track",
    shortTitle: "Growth",
    teaser:
      "Find businesses that can win more customers from their enquiries, start the conversation and book check-up calls. You learn how a consulting firm wins clients by doing it yourself.",
    highlights: [
      "Work closely with the founder",
      "Outreach, pitching and sales, supported by AI",
      "A bonus for every call booked and client won",
    ],
    content: {
      whyExists: [
        COHORT_WHY,
        "The Growth track drives the business forward: finding the right businesses, writing to them personally and bringing them onto a call.",
      ],
      whatYouDo: [
        "Build lead lists with AI and identify where each business can handle enquiries better",
        "Write and send personal WhatsApp and LinkedIn messages",
        "Book short check-up calls and prepare notes before each one",
        "Keep a clear, up-to-date record of replies and calls",
      ],
      portfolio: [
        "An outreach campaign you wrote, sent and measured",
        "A researched list of businesses, each with a clear opportunity identified",
        "Call notes and a pitch you helped deliver",
      ],
      youllFit: [
        "You enjoy starting conversations and sound natural doing it",
        "You use ChatGPT or Claude regularly and can show something you made with it",
        "You like taking ownership of outcomes",
      ],
      worthKnowing: COHORT_NOTES,
      tools: ["ChatGPT or Claude", "WhatsApp", "LinkedIn", "Google Sheets"],
    },
    workSample: {
      prompt:
        "Choose a clinic or real estate business in Mumbai. Using any AI tools you like, identify one way it could win more customers from its enquiries, write the WhatsApp message you would send the owner, and draft one Instagram post for them. Share all three, along with the tools you used.",
      hint: "Name the business so we can see your research. We are most interested in your own judgement.",
      answerType: "text",
    },
  },
  {
    ...COHORT_COMMON,
    slug: "content",
    title: "Content track",
    shortTitle: "Content",
    teaser:
      "Turn ideas, client results and Rohan's sessions into posts and short videos that bring in enquiries. You learn how to create content that drives business results.",
    highlights: [
      "Plan, shoot, edit and publish on real channels",
      "Hooks and scripts reviewed by the founder",
      "A content portfolio backed by real results",
    ],
    content: {
      whyExists: [
        COHORT_WHY,
        "The Content track builds TAL's own channels first, then the content plans TAL delivers for clients.",
      ],
      whatYouDo: [
        "Plan monthly content around the questions customers ask",
        "Write hooks and scripts, and shoot and edit short videos",
        "Design posts and carousels, and publish them on schedule",
        "Track performance and share the results at the weekly review",
      ],
      portfolio: [
        "A content series planned, made and published on TAL's channels",
        "Short videos with hooks you wrote and tested, along with their results",
        "A monthly content plan for a real business",
      ],
      youllFit: [
        "You have made short videos or posts that have been published",
        "You focus on a strong opening that holds attention",
        "You welcome feedback and use it to improve",
      ],
      worthKnowing: COHORT_NOTES,
      tools: ["CapCut, Premiere or DaVinci", "Canva or Figma", "ChatGPT or Claude"],
    },
    workSample: {
      prompt:
        "Share a few short videos or posts you have made. For one of them, explain the opening hook and why you chose it. Then write one hook for a TAL post about how faster replies help businesses win more customers.",
      hint: "Instagram, YouTube or Google Drive links all work. Please make sure they are viewable.",
      answerType: "links",
    },
  },
  {
    ...COHORT_COMMON,
    slug: "research",
    title: "Research track",
    shortTitle: "Research",
    teaser:
      "Study businesses and markets to understand how they handle enquiries and where they can improve. You learn the groundwork behind every consulting pitch and audit.",
    highlights: [
      "Mystery-shopper audits of real businesses",
      "Market research that shapes TAL's direction",
      "Analysis you can present in any interview",
    ],
    content: {
      whyExists: [
        COHORT_WHY,
        "The Research track gives TAL its insight. Every audit, pitch and proposal starts with your work.",
      ],
      whatYouDo: [
        "Contact businesses as a customer by call, WhatsApp, form and Instagram, and record how quickly they reply",
        "Build lead lists that are ready for outreach, checked row by row",
        "Research markets and competitors, and summarise the findings in a clear brief",
      ],
      portfolio: [
        "A mystery-shopper audit of a real business's enquiry response",
        "A market or competitor study with a clear recommendation",
        "Lead lists that led to booked calls",
      ],
      youllFit: [
        "You have a strong eye for detail",
        "You are comfortable contacting a business as a customer",
        "You can turn detailed findings into a clear summary",
      ],
      worthKnowing: COHORT_NOTES,
      tools: ["Google Sheets", "Google Maps", "ChatGPT or Claude"],
    },
    workSample: {
      prompt:
        "Choose a clinic near you. Find its website, Google rating and every way it accepts enquiries. If you like, send it an enquiry and record how quickly it replies. Share what you found and the one change that would help it win more patients.",
      hint: "Bullet points are fine. Please include the clinic's name and area.",
      answerType: "text",
    },
  },
  {
    ...COHORT_COMMON,
    slug: "build",
    title: "Build track",
    shortTitle: "Build",
    teaser:
      "Use AI tools to build the websites, landing pages and WhatsApp automations TAL offers. You learn to ship real products quickly, whatever your background.",
    highlights: [
      "Build websites and automations with AI",
      "Tools used by a real business",
      "A portfolio of live projects",
    ],
    content: {
      whyExists: [
        COHORT_WHY,
        "The Build track creates the systems behind TAL's offer: pages that bring in enquiries and automations that reply to each one.",
      ],
      whatYouDo: [
        "Build landing pages and websites with AI coding tools",
        "Set up WhatsApp auto-replies, follow-ups and lead sheets",
        "Build internal tools that save the team time",
      ],
      portfolio: [
        "A landing page built and launched, with a live link",
        "A WhatsApp reply and follow-up flow, tested end to end",
        "An internal tool the team uses every day",
      ],
      youllFit: [
        "You have built something that works, however small",
        "You build with AI tools and review what they produce",
        "You test thoroughly, including the unusual cases",
      ],
      worthKnowing: COHORT_NOTES,
      tools: ["Claude or Cursor", "WordPress, Webflow or Next.js", "make.com", "Google Sheets"],
    },
    workSample: {
      prompt:
        "Share something you have built, such as a website, an automation or a tool, and explain how you used AI to build it. If you are just getting started, build a one-page website for a local business with any AI tool and share the link.",
      hint: "Tell us which parts you built yourself and which parts the AI built.",
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
    statusNote: "Earn a commission on every client you introduce who signs",
    type: "Commission",
    location: "Anywhere in India",
    teaser:
      "You know business owners who would benefit from replying to their enquiries faster. Introduce them to us and earn a commission on every one who signs.",
    highlights: [
      "Simple, warm introductions",
      "Refer whenever it suits you",
      "Designed for CAs, agencies and tool sellers",
    ],
    pay: {
      headline: "A commission on each client's first payment",
      detail: [
        "A meaningful payout for a single introduction.",
        "Paid promptly once the client's payment reaches us.",
        "Refer as many clients as you like.",
      ],
    },
    content: {
      whyExists: [
        "We help businesses that grow through enquiries turn more of them into customers, with a website people can find, regular content, and AI follow-ups that reply on their behalf.",
        "The best clients come through people they already trust. If you advise, supply or work with business owners, you are that trusted person, and this role rewards the relationships you have built.",
      ],
      whatYouDo: [
        "Identify business owners who could respond to enquiries faster, whether on WhatsApp, calls or website forms",
        "Make a warm introduction by message or email, and we take it from there",
        "Stay as involved as you like. We keep you updated on every introduction",
      ],
      goodLooksLike: [
        "A steady flow of warm introductions",
        "Owners who already see the value of faster follow-up",
        "Clients who thank you for the introduction",
      ],
      youllFit: [
        "You are a CA, an ad or design agency, a WhatsApp tool seller, an equipment dealer or a consultant",
        "You speak with business owners regularly",
        "You recommend people you would put your name behind",
      ],
      worthKnowing: [
        "This is a commission-based role, best suited to people who already meet business owners through their work",
        "Warm introductions to people you know work best",
      ],
    },
    workSample: {
      prompt:
        "Tell us the type of business you know best, and how you would introduce TAL to an owner you have in mind. Names are optional.",
      hint: "A short paragraph is plenty.",
      answerType: "text",
    },
    steps: [
      { name: "Apply", detail: "A short form about the business owners you know." },
      { name: "Call", detail: "A brief call to agree how introductions work." },
      { name: "Start referring", detail: "Earn a commission on each client's first payment, paid promptly." },
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
