// The qualifier's questions and options, safe to send to the browser: no scores here.
// Scores live in quiz-key.ts, which only the /api/apply route imports, so the answer
// key never reaches the page. Every option is plausible on purpose; the old quiz failed
// because the right answers were obvious (227 applicants, ~80% passing).

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
}

const COMMON: QuizQuestion[] = [
  {
    id: "c1",
    prompt:
      "It's 6pm. A task Rohan gave you this morning is 70% done and due at 10am tomorrow. You also just noticed a typo in a post that's already live on TAL's Instagram. What do you do?",
    options: [
      { id: "a", text: "Fix the live typo now, since it takes two minutes, then finish the task tonight or early tomorrow" },
      { id: "b", text: "Finish the task first, because it's what you were asked to do" },
      { id: "c", text: "Message Rohan and ask which one he wants done first" },
      { id: "d", text: "Leave the typo; a post gets buried within a day anyway" },
    ],
  },
  {
    id: "c2",
    prompt: "You're given a vague brief: \"Find us some good clinics to contact.\" What's your first move?",
    options: [
      { id: "a", text: "Start building the list right away and adjust it as you go" },
      { id: "b", text: "Ask two or three specific questions (which area, what size, what makes a clinic a good fit), then start" },
      { id: "c", text: "Wait until someone writes a clearer brief" },
      { id: "d", text: "Pull 200 clinics from Google Maps so there's plenty to choose from" },
    ],
  },
  {
    id: "c3",
    prompt: "You used AI to draft a message to a clinic owner. Before you send it, what matters most?",
    options: [
      { id: "a", text: "That it sounds professional and covers everything" },
      { id: "b", text: "That the detail about their clinic is correct and it reads like a person wrote it" },
      { id: "c", text: "That it explains all three of TAL's services" },
      { id: "d", text: "That it goes out fast, because speed wins in outreach" },
    ],
  },
  {
    id: "c4",
    prompt: "Your work comes back with \"this isn't it\" and no other detail. What do you do?",
    options: [
      { id: "a", text: "Redo it from scratch with a different approach" },
      { id: "b", text: "Ask what missed (the goal, the tone or the facts), then fix that part" },
      { id: "c", text: "Explain your reasoning, since you know why you made it that way" },
      { id: "d", text: "Make a few small edits and send it back" },
    ],
  },
];

const TRACK: Record<string, QuizQuestion[]> = {
  growth: [
    {
      id: "g1",
      prompt: "A clinic owner replies to your WhatsApp: \"Send details.\" What do you send?",
      options: [
        { id: "a", text: "TAL's full brochure as a PDF" },
        { id: "b", text: "One line on the problem you noticed at their clinic, and a 15-minute call offered at two specific times" },
        { id: "c", text: "The price list, so they can decide quickly" },
        { id: "d", text: "A detailed message explaining everything TAL does" },
      ],
    },
    {
      id: "g2",
      prompt: "You sent 50 messages and got 1 reply. What do you change first?",
      options: [
        { id: "a", text: "Send the same message to 200 more people" },
        { id: "b", text: "Rewrite the first line so it's about their business, and test it against the old one on the next 20" },
        { id: "c", text: "Switch from WhatsApp to email" },
        { id: "d", text: "Add a discount to the message" },
      ],
    },
  ],
  content: [
    {
      id: "t1",
      prompt: "A clinic's reel gets lots of views but zero enquiries. What's the most likely problem?",
      options: [
        { id: "a", text: "The audio wasn't trending enough" },
        { id: "b", text: "It entertained, but never told the viewer what to do or why to contact the clinic" },
        { id: "c", text: "It was posted at the wrong time of day" },
        { id: "d", text: "It was too short to build trust" },
      ],
    },
    {
      id: "t2",
      prompt: "What should the first 3 seconds of a clinic's reel do?",
      options: [
        { id: "a", text: "Show the clinic's logo so people know who it is" },
        { id: "b", text: "Name a problem the viewer has, in their own words" },
        { id: "c", text: "Open with upbeat trending music" },
        { id: "d", text: "Introduce the doctor and their qualifications" },
      ],
    },
  ],
  research: [
    {
      id: "r1",
      prompt: "You're testing how fast a clinic replies to enquiries. What's the fairest test?",
      options: [
        { id: "a", text: "Send one WhatsApp message and time the reply" },
        { id: "b", text: "Contact them on three channels at different times of day, and note each reply time" },
        { id: "c", text: "Read their Google reviews for complaints about response time" },
        { id: "d", text: "Call once around lunchtime" },
      ],
    },
    {
      id: "r2",
      prompt: "Your list of 40 clinics has 6 duplicates and 4 that have closed. What do you do?",
      options: [
        { id: "a", text: "Send it anyway; 30 good rows is still useful" },
        { id: "b", text: "Remove them, note why in a column, and check whether your source is unreliable" },
        { id: "c", text: "Quietly remove them and hand it in" },
        { id: "d", text: "Start over with a different source" },
      ],
    },
  ],
  build: [
    {
      id: "b1",
      prompt: "A clinic's contact form seems to work, but enquiries \"go missing\". Where do you look first?",
      options: [
        { id: "a", text: "Redesign the form so it's easier to fill in" },
        { id: "b", text: "Submit a test enquiry and trace where it actually lands: email, spam, or a sheet nobody opens" },
        { id: "c", text: "Add a chatbot to the site" },
        { id: "d", text: "Move the site to a better platform" },
      ],
    },
    {
      id: "b2",
      prompt: "You built a page with AI and it looks right. What do you check before calling it done?",
      options: [
        { id: "a", text: "Nothing; if it looks right, it is right" },
        { id: "b", text: "That it works on a phone, every button and form does something, and it loads fast" },
        { id: "c", text: "That the code is clean and well organised" },
        { id: "d", text: "That the colours match the brand guide" },
      ],
    },
  ],
};

export function quizFor(slug: string): QuizQuestion[] {
  const track = TRACK[slug];
  return track ? [...COMMON, ...track] : [];
}

/** Same applicant, same order; different applicants, different orders. */
export function shuffled<T>(items: T[], seed: number): T[] {
  const out = [...items];
  let s = seed % 2147483647 || 1;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
