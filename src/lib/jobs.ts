// ─── Job Data ────────────────────────────────────────────────────────────────
// Single source of truth for all open roles.
// Add a new role by adding an object to the JOBS array.
// Swap PLACEHOLDER_GOOGLE_FORM_URL with the real Google Form link per role.

export interface Job {
  slug: string;
  title: string;
  shortTitle: string;
  department: string;
  type: string;
  location: string;
  teaser: string;
  highlights: string[];
  googleFormUrl: string;
  pipeline: string;
  pipelineSteps: string[];
  pipelineNote: string;
  content: {
    whoWeAre: string[];
    whyExists: {
      problem: string[];
      bandwidthFreed: string[];
      weeklyOutcome: string[];
    };
    whatYouOwn: {
      items: string[];
      notYourJob?: string[];
    };
    mustHaves: {
      skills: string[];
      values: string[];
      tools: string[];
    };
    ownershipSignal: string;
    nicesToHave: {
      signal: string;
      standOut: string[];
    };
    redFlags: {
      trust: string[];
      willFail: string[];
      warningText: string;
    };
    ninetyDays: string;
    worthIt: string;
  };
}

export const JOBS: Job[] = [
  // ── Content Creator ──────────────────────────────────────────────────────
  {
    slug: "content-creator",
    title: "Content Creator — In House",
    shortTitle: "Content Creator",
    department: "Creative",
    type: "Full-Time",
    location: "Mumbai",
    teaser:
      "Own our brand's content output end-to-end — video, design, social. We're here for creativity with a purpose — content that actually performs.",
    highlights: [
      "Premiere Pro / DaVinci / FCPX required",
      "High output, fast revision cycles",
      "Full Pipeline hiring process",
    ],
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc7xXmDWvHPweRjLxTPnu6yEh-t9N_gb7O3cq__9nAo_9qDMw/viewform",
    pipeline: "Full Pipeline",
    pipelineSteps: ["Application", "Screening Round", "Execution Task", "Final Interview"],
    pipelineNote:
      "The execution task will test your technical output quality, your creative thinking under a brief, and how you respond to feedback in real time. Your reaction to feedback matters as much as the work itself.",
    content: {
      whoWeAre: [
        "TAL is a three-founder startup. We're young, we move fast, and we hold our work to an unusually high standard. We build our own brand and execute content and marketing for clients. This role sits at the centre of both.",
        "We care about diligent, quality work more than anything else — and we're drawn to people who feel that same pull toward making things that actually land, not just things that get praised in a room.",
      ],
      whyExists: {
        problem: [
          "Our brand needs a consistent, high-quality content presence, and right now execution pulls focus from the founders' time on strategy and creative direction. This role takes the execution load off our plate — we'll teach you how we work, and you bring our direction to life.",
          "You'll own content execution for TAL and support client content deliverables. The creative direction and final calls on what gets posted stay with the founders; turning that direction into finished, high-quality content is the job.",
        ],
        bandwidthFreed: [
          "Once direction is set, you run with it end-to-end — no chasing, no repeated reminders. You take feedback and use it to make the next round better, because that's just how you work.",
        ],
        weeklyOutcome: [
          "Consistent content output for TAL and clients. Fresh ideas without prompting. Posting schedules that run without a reminder from anyone.",
        ],
      },
      whatYouOwn: {
        items: [
          "Short-form video creation and editing — Reels, YouTube Shorts, client videos",
          "Static content — graphics, carousels, posts across formats",
          "Posting schedules maintained consistently without reminders",
          "Trend research and content ideation — you bring ideas, not just execution",
          "Creative support on client marketing deliverables",
        ],
      },
      mustHaves: {
        skills: [
          "Video editing proficiency",
          "Photo editing proficiency",
          "Design proficiency",
          "Motion graphics",
          "Presentation skills",
          "Understanding of what makes content perform — reach, retention, engagement — not just what looks good",
        ],
        values: [
          "You take feedback as fuel for the next version, not as a knock on the last one",
          "You hit your deadlines — that's just how you operate",
          "Revisions turn around fast, because you care about getting it right",
          "You keep people in the loop — a quick \"still on it, here's where I'm at\" beats silence",
          "You follow the brief precisely, even when you'd take it a different way",
        ],
        tools: [
          "Premiere Pro",
          "DaVinci Resolve",
          "Final Cut Pro",
          "Canva",
          "Illustrator",
          "Photoshop",
          "Instagram",
          "ChatGPT / Claude",
          "Google Workspace",
        ],
      },
      ownershipSignal:
        "You have a portfolio. It is dense, spans multiple formats and genres, and shows real output — not just one or two projects. When asked to change something, you change it, then improve it. You do not send 'noted' and deliver the same thing again two days later.",
      nicesToHave: {
        signal:
          "You've created content for creators, brands, or startups with a real audience. You have measurable results — account growth, views, engagement numbers you can point to. You've worked in a fast-paced environment where priorities shift without warning and you still delivered.",
        standOut: [
          "You've created content for creators, brands, or startups with a real audience",
          "You have measurable results — account growth, views, engagement numbers you can point to",
          "You've worked in a fast-paced environment where priorities shift without warning and you still delivered",
        ],
      },
      redFlags: {
        trust: [
          "Being straight about your skills and your portfolio",
          "Fast turnarounds on revisions",
          "Following instructions as given, even when you'd do it differently",
          "Speaking up the moment something's in your way",
        ],
        willFail: [
          "Needing a brief spelled out before starting any piece of content",
          "Getting attached to your creative output and resisting changes from the team",
          "Struggling to sustain a high-output pace week after week",
          "Being here mainly for the resume line",
        ],
        warningText:
          "Read these honestly before you apply — it's how we make sure this is genuinely a good fit, for you and for us.",
      },
      ninetyDays:
        "A growing, consistent content portfolio for both TAL and our clients — one that can be used as proof of work. Measurable improvement in engagement metrics across platforms. A content workflow that operates without any founder involvement on a day-to-day basis.",
      worthIt:
        "You work directly with three founders. You have real creative ownership over a brand that is actively being built. You see your work move actual numbers. There are no corporate layers, no approval chains that take two weeks, and no busywork disguised as a learning opportunity.",
    },
  },

  // ── Strategic Growth Partner — Sales Outreach ─────────────────────────────────────────
  {
    slug: "strategic-growth-partner",
    title: "Strategic Growth Partner — Sales Outreach",
    shortTitle: "Strategic Growth Partner",
    department: "Sales",
    type: "Commission-Based",
    location: "Mumbai",
    teaser:
      "Most sales roles cap what you can make and own none of what you build. This one doesn't. You get an exclusive territory, a real product to sell, and every client you close pays you directly — no ceiling. If you're good at finding people and getting them to listen, this is the first role where that's worth what it's actually worth.",
    highlights: [
      "Commission on every client you close",
      "Exclusive territory — you represent TAL in your market",
      "Full Pipeline hiring process",
    ],
    googleFormUrl: "https://docs.google.com/forms/d/1GOw0DpClRwqnIaOa4W1_m66yN3qmNz3uWnaFwP7LXkA/viewform",
    pipeline: "Full Pipeline",
    pipelineSteps: ["Application", "Screening Round", "Execution Task", "Final Interview"],
    pipelineNote:
      "The execution task will test your ability to find real prospects, write outreach that gets responses, and manage a follow-up sequence without hand-holding. Speed, precision, and communication clarity all count.",
    content: {
      whoWeAre: [
        "We're building a network of Strategic Growth Partners — people who own a territory, represent TAL exclusively in it, and earn on every client they close. TAL is the three-founder startup behind that network: we build brands, run content, and manage marketing for clients across industries, and we need partners who can bring in the work.",
        "You're not an employee here — you're a partner. The pipeline is yours, the territory is yours, and so is what you earn from it. Commission percentage gets confirmed at interview.",
      ],
      whyExists: {
        problem: [
          "This role exists because there's real upside on the table and no one capturing it. TAL's business development competes with everything else the founders are doing — which means qualified prospects aren't getting reached. A Strategic Growth Partner closes that gap, and earns directly from every client they bring in.",
          "Everything before the sales conversation is yours to build: prospects, outreach, follow-up. The better your pipeline, the better you earn — directly, not eventually.",
        ],
        bandwidthFreed: [
          "You focus on growth, founders focus on delivery — and your income scales with your output, not with a fixed budget someone else controls.",
        ],
        weeklyOutcome: [
          "20 qualified contacts reached per week. A live tracker updated daily. At least one warm lead handed off to the founding team every week after the first month.",
        ],
      },
      whatYouOwn: {
        items: [
          "Prospecting — identifying SMEs in target sectors using LinkedIn, Google Maps, industry directories, and social platforms",
          "Cold outreach — personalised messages across LinkedIn DMs, email, and other relevant channels",
          "Follow-up sequences — structured follow-ups at Day 3, Day 7, Day 14, and Day 16 with a 4-touch maximum",
          "Lead qualification — identifying warm leads and understanding their needs before handoff",
          "Handoff — passing warm leads to the founding team via Flock with full context: contact details, interest level, and relevant package",
          "A weekly report every Friday — your pipeline, on record",
        ],
      },
      mustHaves: {
        skills: [
          "Ability to write outreach messages that sound human, not templated — every message must be personalised",
          "Research ability — you can find decision-makers at any business using publicly available information",
          "Follow-up discipline — you manage a structured cadence without losing track of where each prospect stands",
          "Clear, professional written communication — your messages represent TAL externally",
        ],
        values: [
          "Rejection is useful information — you process it and move forward without losing momentum",
          "You build your own pipeline. No one hands you a list and you don't need one to start.",
          "You keep your tracker current because it's your system, not because someone's checking",
          "A warm lead is time-sensitive and you treat it that way — you escalate the moment it's worth it",
          "Your handoffs are complete. Founders walk in with full context because you put it there.",
        ],
        tools: [
          "LinkedIn",
          "Google Maps",
          "Google Workspace",
          "Flock",
          "ChatGPT / Claude",
          "Google Sheets",
          "Email",
        ],
      },
      ownershipSignal:
        "You've found people before — formally or informally. You know what a good opening message looks like and what gets ignored. You have a system for tracking follow-ups and you use it. You don't need someone to build your prospect list for you. You find people.",
      nicesToHave: {
        signal:
          "You've done cold outreach in any context — sales, recruitment, partnerships, sponsorships — and you have results to show for it. You understand what SMEs care about and how they make buying decisions. You've worked in a fast-moving environment where targets were real and non-negotiable.",
        standOut: [
          "Prior experience in sales outreach, business development, or lead generation — even in a freelance or college context",
          "You have a response rate or conversion metric you can point to from previous outreach work",
          "You understand the service sector — gyms, salons, restaurants, creators, brands — and how they think about marketing spend",
          "You've used LinkedIn Sales Navigator, Apollo, or similar tools",
        ],
      },
      redFlags: {
        trust: [
          "Genuinely personalised outreach — every message written for that specific person",
          "Following up on time, every time — no lead goes cold",
          "Daily tracker updates — not when prompted, just always",
          "You quote within TAL's standard pricing — consistency protects the commission pool for every partner, including you",
        ],
        willFail: [
          "You find it hard to start without a list already in front of you",
          "Rejection tends to slow your momentum",
          "Cold outreach feels unnatural — you work best through warm introductions",
          "Weekly targets and pipeline reporting feel restrictive rather than motivating",
        ],
        warningText:
          "If the reflection points above feel familiar, take a moment before applying. We'd rather you self-select than both of us find out the hard way.",
      },
      ninetyDays:
        "A live, active outreach pipeline with documented contacts, response rates, and at least three warm leads handed off to the founding team. A follow-up system that runs without founder involvement. A weekly report cadence that operates on time, every time.",
      worthIt:
        "Most outreach roles, you build someone else's pipeline and collect a salary regardless of what you close. Here, you build your own — and you keep what it's worth. No ceiling, no fixed cap, no internal competition for your territory. You work directly with three founders who need your pipeline to grow as much as you do, and you're in early enough to shape what TAL's partner network looks like as it scales beyond Mumbai.",
    },
  },

  // ── Growth Hacker ─────────────────────────────────────────────────────────
  {
    slug: "growth-hacker",
    title: "Founder's Office Intern",
    shortTitle: "Founder's Office",
    department: "Founder's Office",
    type: "Internship",
    location: "Mumbai",
    teaser:
      "The founders' execution partner — outreach, research, decks, and coordination, owned end to end. A front-row seat to how a company gets built.",
    highlights: [
      "Direct-to-Interview process",
      "Real responsibility from week one",
      "Strategy + on-ground execution, both",
    ],
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScVm0490Kg66yFm69QK7Sm6Os53BHbzsyzp3Akh-9jD7r77og/viewform",
    pipeline: "Direct-to-Interview",
    pipelineSteps: ["Application", "Founder Interview", "Live Execution Task"],
    pipelineNote:
      "The live task will test communication clarity, your ability to build something coherent under time pressure, research speed, and how you handle ambiguity when there is no clear instruction to follow.",
    content: {
      whoWeAre: [
        "TAL is a three-founder startup. We're young, we move fast, and we hold ourselves and our team to a high bar. You get real ownership here — not just tasks to check off.",
        "This role sits inside the Founder's Office — the seat where strategy, sales, and operations meet. It's a force-multiplier role, not an admin desk.",
      ],
      whyExists: {
        problem: [
          "At this stage, founder bandwidth is the single biggest bottleneck to growth. Outreach, research, decks, follow-ups, coordination, client meetings, shoots — all of it competes for the same 24 hours.",
          "This role is a direct extension of the founding team — at the desk and on the ground. You take complete ownership of projects from initiation to completion: research and decks one day, a client meeting or market visit the next. You sit close to decisions. You see how a startup actually operates. In exchange, we need you to be completely reliable.",
        ],
        bandwidthFreed: [
          "Outreach, research, decks, discovery-call prep, coordination, and on-ground support — you own it end to end, so founders stay focused on what only they can do.",
        ],
        weeklyOutcome: [
          "Lead generation activity with clear targets. Trackers and systems current without prompting. Research and decks delivered meeting-ready. Every open thread followed up until it closes.",
        ],
      },
      whatYouOwn: {
        items: [
          "Outreach and lead generation — LinkedIn, cold email, DMs — with clear targets and cadences, managed end to end",
          "Research the founders can act on — markets, competitors, prospects — synthesized, not just collected",
          "Decks, dashboards, and meeting notes that founders walk into any room with",
          "Coordination across teams — tasks, timelines, and follow-ups tracked until they close",
          "Ground support when the work calls for it — client meetings, market visits, shoots",
        ],
      },
      mustHaves: {
        skills: [
          "Strong written and verbal communication — your emails and messages will represent TAL externally",
          "Ability to build clean, structured, visually coherent presentations from a rough brief",
          "Research ability — find things, synthesize them, present clearly without being told where to look",
          "Comfort switching between strategic work and hands-on execution within the same day",
        ],
        values: [
          "You do what you say you'll do. No follow-up required — it's just how you operate.",
          "When something breaks, you own it before anyone asks — fix first, explain after",
          "You see what needs doing and you do it. Initiative isn't something you turn on when prompted.",
          "You communicate before anyone has to wonder. If you're blocked, stuck, or off-track — you say so.",
        ],
        tools: [
          "Google Workspace",
          "Flock",
          "ClickUp",
          "Canva",
          "ChatGPT / Claude",
          "Google Sheets",
          "PowerPoint / Slides",
        ],
      },
      ownershipSignal:
        "You're self-directed: when you hit a blocker, you solve it or flag it immediately rather than letting it sit. When something goes wrong, you own it before anyone has to ask. You have a track record of doing things independently, even if that track record is from college projects, freelance work, or something you built on your own.",
      nicesToHave: {
        signal:
          "Startup, consulting, or founder's office experience — even freelance or at a small scale. You've done real outreach — cold email, LinkedIn prospecting — and you understand what works. You've built something independently that other people actually used.",
        standOut: [
          "Startup, consulting, or founder's office experience — even freelance or at a small scale",
          "Six months to a year in marketing, agency, or business development work — internships and freelance count",
          "You've done real outreach — cold email, LinkedIn prospecting — and you understand what works",
          "You've built something independently: a system, a tracker, a workflow, or a project others actually used",
        ],
      },
      redFlags: {
        trust: [
          "Owning mistakes immediately — no denial, no deflection",
          "Correcting first, explaining later — the fix comes before the justification",
          "Due diligence on everything before it leaves your hands",
          "Immediate communication when something breaks — no disappearing",
        ],
        willFail: [
          "You do your best work with clear task lists and defined hours",
          "Self-directing when the next step isn't specified doesn't come naturally to you",
          "Taking ownership when things break isn't your default",
          "The credential matters more to you than the contribution",
        ],
        warningText:
          "If the reflection points above feel familiar, take a moment before applying. We'd rather you self-select than both of us find out the hard way.",
      },
      ninetyDays:
        "TAL's first set of clients actively in the pipeline — with your outreach contributing directly. A documented knowledge base of ideas, systems, and research the team actually uses. A lead-generation workflow that runs without daily founder involvement.",
      worthIt:
        "You work directly with three founders from day one — mentorship here is the seating arrangement, not a programme. The internship is built to convert: do it well, and you're the obvious first hire as TAL scales. Stipend and structure are discussed openly at the first conversation — no surprises. There are no corporate layers between you and the work that matters.",
    },
  },
];

export function getJob(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}

export function getAllSlugs(): string[] {
  return JOBS.map((j) => j.slug);
}
