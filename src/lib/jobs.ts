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
      notYourJob: string[];
    };
    mustHaves: {
      skills: string[];
      behaviours: string[];
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
        "We value diligent, quality work above everything else. We're here for creativity with a purpose — content that actually performs.",
      ],
      whyExists: {
        problem: [
          "Our brand needs a consistent, high-quality content presence. Right now, content execution falls on the founders — which means it competes with everything else that matters. This role takes that entirely off our plate.",
          "You will own content output for TAL and directly support client content deliverables. If you're hired, two founders stop thinking about content execution. That is the job.",
        ],
        bandwidthFreed: [
          "You decide what gets posted and when. You execute without being told twice. You improve your output based on feedback without needing motivation to do so.",
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
        notYourJob: [
          "You do not have autonomous authority over TAL's brand voice or narrative. Strategic creative decisions stay with the founding team.",
          "Paid advertising is not your domain without explicit approval. Client commitments are never made independently.",
        ],
      },
      mustHaves: {
        skills: [
          "Proficiency in at least one professional video editing tool: Premiere Pro, DaVinci Resolve, or Final Cut Pro — not just CapCut",
          "Design proficiency: Canva, Adobe Illustrator, or Photoshop",
          "Understanding of what makes content perform — reach, retention, engagement — not just what looks good",
        ],
        behaviours: [
          "You handle feedback without getting defensive about your work",
          "Deadlines are not suggestions for you",
          "Revision requests are completed fast — slow turnaround on changes is a dealbreaker",
          'You communicate proactively. "I\'ll send it soon" is not an update.',
          "You follow content instructions precisely, even when you disagree",
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
          "Honesty about your skills and portfolio — always",
          "Fast revision turnaround — changes completed within the day",
          "Following content direction precisely, even when you'd do it differently",
          "Flagging blockers immediately — we never go silent on a problem",
        ],
        willFail: [
          "You find it hard to start without clear direction",
          "Feedback on your work feels personal rather than directional",
          "You work in bursts — sustained, consistent output drains you",
          "The credential matters more to you than the craft",
        ],
        warningText:
          "If the reflection points above feel familiar, take a moment before applying. We'd rather you self-select than both of us find out the hard way.",
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
      "You earn what you close. TAL's services are your product to sell — every client you bring in earns you a direct commission. No ceiling, no fixed salary cap. Build your pipeline. Build your income.",
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
        "TAL is a three-founder startup. We build brands, run content, and manage marketing for clients across industries. We're building a network of Strategic Growth Partners — people who represent TAL exclusively in their market, earn on every client they close, and grow as the network grows.",
        "This is a commission-based partnership. You are not an employee — you are a partner. You own your pipeline, you work exclusively with TAL, and the territory is yours. The commission percentage is discussed at interview.",
      ],
      whyExists: {
        problem: [
          "TAL's services need a dedicated outreach partner in Mumbai. Right now, business development competes with everything else the founders are doing. A Strategic Growth Partner takes that entirely off the founding team's plate — and earns directly from the clients they bring in.",
          "You identify prospects, reach out, follow up, and hand off warm leads to the founders. Everything before the sales conversation is yours. The quality of your pipeline determines the quality of your earnings.",
        ],
        bandwidthFreed: [
          "You find the right people, get them interested, and pass them over ready to close. The founders focus on delivery. You focus on growth. Your income scales with your output.",
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
        notYourJob: [
          "You do not pitch or quote prices without explicit approval from the founding team.",
          "You do not make commitments on behalf of TAL — not on timelines, not on deliverables, not on pricing.",
          "You do not operate in client-facing meetings independently.",
          "Closing deals is not your job. Getting the right people to the table is.",
        ],
      },
      mustHaves: {
        skills: [
          "Ability to write outreach messages that sound human, not templated — every message must be personalised",
          "Research ability — you can find decision-makers at any business using publicly available information",
          "Follow-up discipline — you manage a structured cadence without losing track of where each prospect stands",
          "Clear, professional written communication — your messages represent TAL externally",
        ],
        behaviours: [
          "Rejection does not slow you down. It is data, not failure.",
          "You do not wait to be told who to reach out to — you find the targets yourself.",
          "You update the tracker daily. Not weekly. Not when asked. Daily.",
          "When a lead goes warm, you escalate immediately — you do not sit on it.",
          "You follow the handoff process exactly. Founders should never have to ask for context on a lead you passed.",
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
        "You have done outreach before — formally or informally. You know what a good opening message looks like and what gets ignored. You have a system for tracking follow-ups and you use it. You do not need someone to build your prospect list for you. You find people.",
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
          "Keeping pricing and commitments within founder approval — always",
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
        "You earn directly on every client you close — no ceiling, no fixed salary cap. You work exclusively with TAL, which means the territory is yours and there is no internal competition. You have direct access to three founders who are invested in your success. We are building a national network of Strategic Growth Partners — across cities, across sectors. The people who come in now help shape how that network grows.",
    },
  },

  // ── Growth Hacker ─────────────────────────────────────────────────────────
  {
    slug: "growth-hacker",
    title: "Growth Hacker — Founder's Office",
    shortTitle: "Growth Hacker",
    department: "Founder's Office",
    type: "Full-Time / Contract",
    location: "Mumbai",
    teaser:
      "Work directly from the founder's table. Execute the things that keep this startup moving so founders can focus on what only they can do.",
    highlights: [
      "Direct-to-Interview process",
      "Real responsibility from week one",
      "Startup + consulting background preferred",
    ],
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScVm0490Kg66yFm69QK7Sm6Os53BHbzsyzp3Akh-9jD7r77og/viewform",
    pipeline: "Direct-to-Interview",
    pipelineSteps: ["Application", "Founder Interview", "Live Execution Task"],
    pipelineNote:
      "The live task will test communication clarity, your ability to build something coherent under time pressure, research speed, and how you handle ambiguity when there is no clear instruction to follow.",
    content: {
      whoWeAre: [
        "TAL is a three-founder startup. We're young, we move at an uncomfortable pace, and we hold ourselves and our team to a high standard. We are not a company where you come in, do your tasks, and go home. We are building something, and everyone in the room is expected to contribute to that.",
        "We're young, we move fast, and we hold our work to an uncomfortably high standard.",
      ],
      whyExists: {
        problem: [
          "At this stage, founder bandwidth is the single biggest bottleneck to growth. Outreach, research, decks, follow-ups, lead generation, documentation, coordination — all of it competes for the same 24 hours.",
          "This role is a direct extension of the founding team. You execute the things that keep the engine running so founders can stay focused on what only they can do. You sit close to decisions. You see how a startup actually operates. In exchange, we need you to be completely reliable.",
        ],
        bandwidthFreed: [
          "Outreach, ideation, discovery call prep, research, deck creation — you handle all of it end-to-end.",
        ],
        weeklyOutcome: [
          "Lead generation activity with clear targets. Operational systems maintained. Research and decks delivered without follow-up. Measurable output, not just effort.",
        ],
      },
      whatYouOwn: {
        items: [
          "Lead generation and outreach — LinkedIn, cold email, DMs — with clear targets and cadences",
          "Sales pitches and follow-up sequences that you manage end-to-end",
          "Market research, competitor mapping, and company-specific research on demand",
          "Deck and presentation creation that founders can walk into meetings with",
          "Maintaining trackers, workflow documentation, and operational systems",
          "Ideation and strategy support under founder supervision — you contribute ideas, not just execution",
        ],
        notYourJob: [
          "Final business decisions are not yours to make.",
          "You do not make commitments to clients without explicit approval.",
          "You do not operate in client-facing roles independently.",
          "Decisions that carry business risk are always escalated — never assumed.",
        ],
      },
      mustHaves: {
        skills: [
          "Strong written and verbal communication — your emails and messages will represent TAL externally",
          "Ability to build clean, structured, visually coherent presentations from a rough brief",
          "Research ability — find things, synthesize them, present clearly without being told where to look",
          "Creative thinking that translates into structured, executable ideas — not just concepts",
        ],
        behaviours: [
          "You follow through. If you say you will do it, it is done — on time, without a reminder.",
          "When something goes wrong, you admit it immediately and correct it. You do not explain what you were trying to do. You fix it.",
          "You take initiative. You do not wait to be assigned your next task when you can clearly see what needs doing.",
          "You communicate proactively. Silence is not a status update. If you are blocked, you say so immediately.",
          "Accountability is not something you perform — it is how you operate by default.",
        ],
        tools: [
          "Google Workspace",
          "Slack",
          "ClickUp",
          "Canva",
          "ChatGPT / Claude",
          "Google Sheets",
          "PowerPoint / Slides",
        ],
      },
      ownershipSignal:
        "You do not need babysitting. When you hit a blocker, you either solve it or flag it immediately — you do not sit on it for two days. When something goes wrong, you own it before anyone asks you to. You have a track record of doing things independently, even if that track record is from college projects, freelance work, or something you built on your own.",
      nicesToHave: {
        signal:
          "Startup, consulting, or founder's office experience — even freelance or at a small scale. You've done real outreach — cold email, LinkedIn prospecting — and you understand what works. You've built something independently that other people actually used.",
        standOut: [
          "Startup, consulting, or founder's office experience — even freelance or at a small scale",
          "You've done real outreach — cold email, LinkedIn prospecting — and you understand what works",
          "You've built something independently: a system, a tracker, a workflow, or a project others actually used",
          "Active involvement in co-curricular activities that required real coordination, not just participation",
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
        "TAL's first set of clients actively in the pipeline — with your outreach contributing directly. A documented knowledge base of ideas, systems, and research the team can use. A marketing and lead generation workflow that operates without daily founder involvement. Measurable output, not just effort.",
      worthIt:
        "You work directly with three founders from day one. You are not making chai or formatting spreadsheets in the corner. You see real decisions being made, real problems being solved, and real things being built. The responsibility is high. So is the learning. There are no corporate layers between you and the work that matters.",
    },
  },
];

export function getJob(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}

export function getAllSlugs(): string[] {
  return JOBS.map((j) => j.slug);
}
