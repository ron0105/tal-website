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
      "Own our brand's content output end-to-end — video, design, social. If you need a brief for every post or a reminder to hit deadlines, this is not for you.",
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
        "We value diligent, quality work above everything else. If you're looking for a relaxed creative environment where ideas are praised regardless of output — this is not that place.",
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
          "Lying about your skills or portfolio",
          "Slow revision turnarounds — changes take more than a day without reason",
          "Not following content instructions even when corrected",
          "Going silent instead of flagging a blocker",
        ],
        willFail: [
          "You need a detailed brief before starting any piece of content",
          "You become attached to your creative output and resist changes from the team",
          "You cannot sustain a high-output workflow week after week",
          "You are here primarily for the work experience line on your resume",
        ],
        warningText:
          "If any of the above sounds like you — please do not apply. We mean this. We will part ways immediately, no matter what stage of the process we're at.",
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
    type: "Full-Time",
    location: "Mumbai",
    teaser:
      "Build TAL's outreach pipeline from the ground up. If you need a lead list handed to you or a script to read from, this is not the role. If you can find anyone, anywhere, and get them talking — read on.",
    highlights: [
      "20 qualified contacts per week — minimum",
      "Direct reporting to founding team",
      "Full Pipeline hiring process",
    ],
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSekSDNezQM4NbMeD1G95LvwIsMtHEmLOy0ioO3DnfCVnOsX2A/viewform",
    pipeline: "Full Pipeline",
    pipelineSteps: ["Application", "Screening Round", "Execution Task", "Final Interview"],
    pipelineNote:
      "The execution task will test your ability to find real prospects, write outreach that gets responses, and manage a follow-up sequence without hand-holding. Speed, precision, and communication clarity all count.",
    content: {
      whoWeAre: [
        "TAL is a three-founder startup. We build brands, run content, and manage marketing for clients across industries. We move fast, we hold high standards, and we are not looking for people who need motivation to do their job.",
        "This role sits at the front of TAL's commercial engine. You are the first contact most prospects will ever have with us. That means how you show up reflects directly on what we are building.",
      ],
      whyExists: {
        problem: [
          "TAL needs a consistent, active pipeline of warm leads. Right now, outreach competes with everything else the founders are doing. This role takes that entirely off the founding team's plate.",
          "You will be responsible for identifying prospects, reaching out, following up, and handing off warm leads to the founders. Everything before the sales conversation is yours. The quality of your handoffs determines the quality of TAL's client pipeline.",
        ],
        bandwidthFreed: [
          "You find the right people, get them interested, and pass them over ready to close. Founders stop spending time on cold outreach entirely.",
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
          "Weekly reporting — a Friday 4 PM report covering contacts reached, responses received, and pipeline status",
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
          "Sending templated messages and calling it personalised outreach",
          "Letting leads go cold because you did not follow up on time",
          "Updating the tracker only when asked",
          "Quoting prices or making commitments without founder approval",
        ],
        willFail: [
          "You need a pre-built lead list to start working",
          "Rejection affects your motivation or output",
          "You prefer relationship-based selling and struggle with cold contact",
          "You are uncomfortable with targets and weekly accountability",
        ],
        warningText:
          "If any of the above sounds like you — please do not apply. We mean this. We will part ways immediately, no matter what stage of the process we're at.",
      },
      ninetyDays:
        "A live, active outreach pipeline with documented contacts, response rates, and at least three warm leads handed off to the founding team. A follow-up system that runs without founder involvement. A weekly report cadence that operates on time, every time.",
      worthIt:
        "You work directly with three founders and see exactly how a startup builds its commercial pipeline from zero. Your work has a direct, visible impact on TAL's revenue. There are no layers between you and the outcome. If you are good at this, it will be obvious — and it will be rewarded.",
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
        "This is not a fun startup. It is a serious one, run by people who happen to be young.",
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
          "Denial of fault when things go wrong",
          "Explaining your thought process instead of correcting the mistake",
          "Lack of due diligence — work submitted without proper checking",
          "Going silent or avoiding contact when something breaks",
        ],
        willFail: [
          "You are looking for a structured role with clearly defined tasks and fixed hours",
          "You need constant direction to know what to do next",
          "You avoid accountability when things go wrong",
          "You are here to complete an internship and add a line to your LinkedIn",
        ],
        warningText:
          "If any of the above sounds like you — please do not apply. We mean this. We will end the engagement regardless of the stage we are at.",
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
