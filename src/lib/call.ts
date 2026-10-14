// Settings for /call, the one link Rohan sends to anyone who wants to talk to TAL.
// Two values are filled in once, by hand, after setup:
//   videoId  the YouTube ID of Rohan's 2-minute hello (upload as Unlisted)
//   calLink  the Cal.com booking link, the part after cal.com/ (e.g. "rohan-tal/20min")
// Until calLink is set, hot leads fall back to WhatsApp too, so the page works from day one.
// Questions, points and bands all live here so they can be changed in one place.
// Plan: 01-tal/tal/how-we-work/Client flow and lead scoring - plan (draft).md

export const CALL = {
  videoId: "",
  calLink: "rohan-tal/20-minute-call-with-tal",
  whatsapp: "918169315080",
  minutes: 20,
};

export type QuestionId = "business" | "team" | "help" | "change" | "start" | "budget" | "decides";

export type Question = {
  id: QuestionId;
  label: string;
  short: string; // how the answer is labelled in the booking notes, the WhatsApp message and the tracker
  kind: "one" | "many" | "text";
  options: string[];
  other?: string; // the option that opens a free-text box
  points?: Record<string, number>;
  optional?: boolean;
};

export const QUESTIONS: Question[] = [
  {
    id: "business",
    label: "What kind of business do you run?",
    short: "Business",
    kind: "one",
    options: ["Clinic or healthcare", "Real estate", "Factory or B2B", "Shop, salon or café", "Something else"],
    other: "Something else",
  },
  {
    id: "team",
    label: "How big is the team?",
    short: "Team",
    kind: "one",
    options: ["Just me", "2 to 10", "11 to 50", "More than 50"],
    points: { "Just me": 5, "2 to 10": 10, "11 to 50": 15, "More than 50": 15 },
  },
  {
    id: "help",
    label: "What would you like help with?",
    short: "Wants help with",
    kind: "many",
    options: [
      "Planning the next growth step",
      "A website people can find on Google",
      "Regular posts that bring enquiries",
      "Replying to and following up on enquiries",
      "Not sure yet, want an outside view",
    ],
  },
  {
    id: "change",
    label: "What's the one thing you'd most like to change in the next 3 months?",
    short: "Wants to change",
    kind: "text",
    options: [],
    optional: true,
  },
  {
    id: "start",
    label: "When would you like to start?",
    short: "Start",
    kind: "one",
    options: ["This month", "In 1 to 3 months", "Just exploring"],
    points: { "This month": 25, "In 1 to 3 months": 15, "Just exploring": 5 },
  },
  {
    id: "budget",
    label: "What are you planning to invest in this?",
    short: "Budget",
    kind: "one",
    options: ["Under ₹25K", "₹25K to ₹1L", "₹1L to ₹3L", "More than ₹3L", "Not sure yet"],
    points: { "Under ₹25K": 5, "₹25K to ₹1L": 15, "₹1L to ₹3L": 25, "More than ₹3L": 30, "Not sure yet": 10 },
  },
  {
    id: "decides",
    label: "Who makes the final decision?",
    short: "Decides",
    kind: "one",
    options: ["Me", "Me with a partner", "Someone else"],
    points: { Me: 20, "Me with a partner": 15, "Someone else": 5 },
  },
];

// One answer per question. "many" answers are joined with " + " so every answer is a plain string.
export type Answers = Record<QuestionId, string>;

export const EMPTY_ANSWERS: Answers = { business: "", team: "", help: "", change: "", start: "", budget: "", decides: "" };

export const MANY_SEP = " + ";

const FIT_BUSINESS = ["Clinic or healthcare", "Real estate", "Factory or B2B"];

// ─── Score ───────────────────────────────────────────────────────────────────

export type Band = "Hot" | "Warm" | "Early";

export const HOT_FROM = 70;
export const WARM_FROM = 40;

export function scoreLead(a: Answers): { score: number; band: Band } {
  let score = 0;
  for (const q of QUESTIONS) if (q.points) score += q.points[a[q.id]] ?? 0;
  // Fit: the customer types in the 6-week test, plus someone who wants more than one lever looked at
  if (FIT_BUSINESS.includes(a.business)) score += 5;
  const help = a.help ? a.help.split(MANY_SEP) : [];
  if (help.length >= 2 || help.includes("Not sure yet, want an outside view")) score += 5;
  if (a.change.trim()) score += 5;
  score = Math.min(score, 100);
  const band: Band = score >= HOT_FROM ? "Hot" : score >= WARM_FROM ? "Warm" : "Early";
  return { score, band };
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export type Contact = { name: string; phone: string; company: string };

export const EMPTY_CONTACT: Contact = { name: "", phone: "", company: "" };

export function phoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

// Cal.com's phone field wants +countrycode; a bare 10-digit number is taken as Indian
export function phoneE164(phone: string): string {
  const d = phoneDigits(phone);
  return d.length === 10 ? `+91${d}` : `+${d}`;
}

export function validContact(c: Contact): Partial<Record<keyof Contact, string>> {
  const errors: Partial<Record<keyof Contact, string>> = {};
  if (c.name.trim().length < 2) errors.name = "Please add your name.";
  const d = phoneDigits(c.phone);
  if (d.length < 10 || d.length > 13) errors.phone = "Please add a WhatsApp number we can reach you on.";
  if (c.company.trim().length < 2) errors.company = "Please add your business name or website.";
  return errors;
}

// Minimum time on the page before a submission counts, so bots that fill instantly are ignored
export const MIN_FILL_MS = 8_000;

// ─── Text helpers ────────────────────────────────────────────────────────────

// One line per answer, used for the Cal.com notes, the WhatsApp message and the tracker
export function answerLines(a: Answers): string[] {
  return QUESTIONS.filter((q) => a[q.id]).map((q) => `${q.short}: ${a[q.id]}`);
}

export function whatsappLink(text: string): string {
  return `https://wa.me/${CALL.whatsapp}?text=${encodeURIComponent(text)}`;
}
