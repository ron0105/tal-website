// TAL Live Projects: a 12-day programme for students, being tested for demand (Oct 2026).
// Model as of Oct 17: 3 days of training in your track, then 2 live projects on real businesses.
// Days 1-3 training (founder review day 3), days 4-7 project one (review day 7), days 8-11
// project two, day 12 final review and certificate. The Rs 5,000 entry fee is covered by the full
// refund guarantee (3 founder reviews, 2 live projects, 1 certificate, or the full fee comes back).
// Top performers are invited to interview for a paid internship. Careers (/careers) is the free
// 15-day training on TAL's own work; both use the same 4 tracks.
// /live-projects walks students through 6 screens of questions, recommends a track, and offers a seat.
// Qualifiers (Oct 18): placement timing, focus, a short proof task and who decides on the fee sort
// applicants by intent. The sheet gets a hidden Lead column (Hot / Warm / Early, set in
// /api/waitlist); Rohan calls the Hot ones for 5 minutes.
// Answers are saved without a name; contact details only on a reservation with consent.
// Also: 4 tracks (Research, Build, Content, Growth), 20 seats a round (5 a track), UPI only.
// Three page variants (?v=a, ?v=b, ?v=c) test how we ask; the page body is the same.
// Brief: 01-tal/tal/how-we-work/Paid live-project programme - brief (draft).md

// The one number the test depends on. Change it here and the page and the questions follow.
export const FEE_INR = 5000;
export const SEATS_PER_ROUND = 20;
export const SEATS_PER_TRACK = 5;

// Honest scarcity (variant C): only the real numbers. SEATS_TAKEN counts confirmed seats and is
// changed by hand. While it is 0 no counter is shown, so the page never claims a number that
// isn't true. No countdown timers, no fake urgency.
export const CLOSE_DATE = "31 October 2026";
export const SEATS_TAKEN = 0;
export const seatsLeft = () => Math.max(SEATS_PER_ROUND - SEATS_TAKEN, 0);

// The three ways of asking, picked by ?v= on the URL. B is the default.
// a "Commitment":  Rs 999 booking amount by UPI at the last step
// b "Lower barrier": a free application, pay only if shortlisted
// c "Honest scarcity": as B, plus the real seat numbers and close date
export type Variant = "a" | "b" | "c";
export const VARIANTS: Variant[] = ["a", "b", "c"];
export const DEFAULT_VARIANT: Variant = "b";
export const parseVariant = (v: unknown): Variant | null => {
  const x = typeof v === "string" ? v.trim().toLowerCase() : "";
  return (VARIANTS as string[]).includes(x) ? (x as Variant) : null;
};

// Variant A only: a booking amount that secures the seat and counts toward the fee. It is
// refunded in full if the student is not shortlisted; the rest is paid only once shortlisted.
// Payment is by UPI only. DEPOSIT_URL stays empty (no gateway).
export const DEPOSIT_INR = 999;
export const DEPOSIT_URL = "";
export const depositLabel = () => `₹${DEPOSIT_INR.toLocaleString("en-IN")}`;
export const balanceLabel = () => `₹${(FEE_INR - DEPOSIT_INR).toLocaleString("en-IN")}`;

// UPI, no gateway: the reservation fee is paid straight to this UPI ID. Empty = not set up yet,
// and the page falls back to sending a payment link on WhatsApp.
export const UPI_ID = "rohan0105@oksbi";
// Founder's own account as interim receiver until TAL's current account is open. The payee name
// should match the bank account name, or some UPI apps show a warning.
export const UPI_PAYEE = "Rohan Tiwarekar";
// Shown as a second way to pay (any UPI app can pay a UPI number directly)
export const UPI_NUMBER = "8169315080";

// A short reference that travels in the UPI note, so each payment can be matched to its row
export const paymentRef = (session: string) => "LP-" + session.replace(/[^a-zA-Z0-9]/g, "").slice(0, 6).toUpperCase();

export function upiLink(ref: string): string {
  if (!UPI_ID) return "";
  const q = new URLSearchParams({
    pa: UPI_ID,
    pn: UPI_PAYEE,
    am: DEPOSIT_INR.toFixed(2),
    cu: "INR",
    tn: `TAL Live Projects ${ref}`,
  });
  // Spaces as %20 and a literal @ in the UPI ID: some UPI apps reject "+" and "%40"
  return `upi://pay?${q.toString().replace(/\+/g, "%20").replace(/%40/g, "@")}`;
}
export const MIN_FILL_MS = 6_000;

// Flat fee: TAL isn't GST-registered yet, so no GST is added (Rohan, Oct 14). Add "+ GST" once it is.
export const feeLabel = () => `₹${FEE_INR.toLocaleString("en-IN")}`;

export type TrackId = "research" | "build" | "content" | "growth";

export const TRACKS: Record<TrackId, { name: string; line: string; projects: string[] }> = {
  research: {
    name: "Research",
    line: "Learn how real businesses welcome a new customer, and where they can win more of them.",
    projects: [
      "A mystery-shopper audit of one real business, with every reply timed",
      "A market scan of 20 businesses, with your top 3 and one clear recommendation",
    ],
  },
  build: {
    name: "Build",
    line: "Use AI tools to build what a real business needs to win more enquiries.",
    projects: [
      "A one-page website for a real business, on a live preview link",
      "A WhatsApp reply and follow-up flow, tested end to end",
    ],
  },
  content: {
    name: "Content",
    line: "Turn the questions customers ask into posts and short videos that bring in enquiries.",
    projects: [
      "A one-month content plan for a real business",
      "Three posts or short videos, with hooks you wrote and tested",
    ],
  },
  growth: {
    name: "Growth",
    line: "Find businesses that are ready for help and start the conversation.",
    projects: [
      "A researched list of businesses, each with one clear gap you found",
      "An outreach sequence for them, reviewed line by line with the founder",
    ],
  },
};

export const NAME_OPTIONS = ["TAL Live Projects"];

export type QuestionId =
  | "course" | "goal" | "placement" | "style" | "format" | "when" | "focus" | "proof"
  | "price" | "fairPrice" | "decider" | "namePick" | "note";

export interface Question {
  id: QuestionId;
  title: string;
  options?: string[];
  // A line under the title: what they get, said before they're asked
  lead?: string;
  // Shown on the same screen as the question before it
  pairedWith?: QuestionId;
  // Only asked when this returns true; otherwise left blank
  showIf?: (a: Answers) => boolean;
}

// Kept as named lists so /api/waitlist can score against them without repeating the wording
export const PLACEMENT_OPTIONS = ["Within 3 months", "3 to 6 months", "Later than 6 months", "Not sure yet"];
export const FOCUS_OPTIONS = [
  "Fully ready, it's my top priority",
  "Ready, alongside a few other things",
  "Depends on the dates",
  "Just exploring for now",
];

// The one answer that opens the fee question. Every other answer is a yes in some form,
// and the pass line counts "Yes, I'm in" as the strong yes.
export const PRICE_LOWER = "I'd join at a lower fee";

// "style" answers map straight to a track, in this order
export const STYLE_TRACKS: TrackId[] = ["research", "build", "growth", "content"];

export const QUESTIONS: Question[] = [
  {
    id: "course",
    title: "Where are you right now?",
    options: [
      "PGDM or MBA, 1st year",
      "PGDM or MBA, 2nd year",
      "Undergrad, final year",
      "Undergrad, earlier year",
      "Recently graduated",
      "Something else",
    ],
  },
  {
    id: "goal",
    title: "What do you want most from the next 6 months?",
    options: ["A portfolio for placements", "A shot at an internship", "A switch to a new field", "Internship credit for college"],
  },
  {
    id: "placement",
    title: "When are your placements or your next big application?",
    options: PLACEMENT_OPTIONS,
    pairedWith: "goal",
  },
  {
    id: "style",
    title: "Which sounds most like you?",
    options: ["I like finding things out", "I like making things", "I like talking to people", "I like telling stories"],
  },
  {
    id: "format",
    title: "How will you join?",
    options: ["On-site in Navi Mumbai", "Remote", "Either works"],
  },
  {
    id: "when",
    title: "Which 12 days suit you best?",
    options: ["December break", "January", "Summer 2027", "Still deciding"],
    pairedWith: "format",
  },
  {
    id: "focus",
    title: "How ready are you to give these 12 days your full focus?",
    options: FOCUS_OPTIONS,
  },
  {
    id: "proof",
    title: "Name one business near you, and one thing you'd improve about how it wins customers.",
    lead: "A few lines is plenty. There's no right answer; we want to see how you think.",
  },
  {
    id: "price",
    title: `The fee is ${feeLabel()}. Where do you stand?`,
    lead: "Two live projects to show, three founder reviews to learn from, and a certificate that names your work. TAL delivers all three, or your full fee comes back.",
    options: ["Yes, I'm in", "Yes, once I see the dates", PRICE_LOWER],
  },
  {
    id: "fairPrice",
    title: "Pick the fee that fits you.",
    options: ["Up to ₹1,999", "₹2,000 to ₹2,999", "₹3,000 to ₹3,999", "₹4,000 to ₹4,999"],
    pairedWith: "price",
    showIf: (a) => a.price === PRICE_LOWER,
  },
  {
    id: "decider",
    title: "Who decides on the fee?",
    options: ["I do", "I do, with my family", "My family does"],
    showIf: (a) => a.price !== "",
  },
  {
    // Name test retired (Rohan picked "TAL Live Projects", Oct 14). Kept blank so the sheet's
    // Name pick column still lines up.
    id: "namePick",
    title: "Programme name",
    options: NAME_OPTIONS,
    showIf: () => false,
  },
  {
    // Replaced by the proof question (Oct 18). Kept blank so the sheet's Day-15 goal column
    // still lines up.
    id: "note",
    title: "What do you want to be able to do by day 12?",
    showIf: () => false,
  },
];

export const isAsked = (q: Question, a: Answers) => !q.showIf || q.showIf(a);

// Screens: goal and placement share one screen, as do format and timing
// The fee and decider questions are not a screen: they are asked on the result step, after the track is shown.
export const SCREENS: QuestionId[][] = [["course"], ["goal", "placement"], ["style"], ["format", "when"], ["focus"], ["proof"]];

export type Answers = Record<QuestionId, string>;
export const emptyAnswers = (): Answers => ({
  course: "", goal: "", placement: "", style: "", format: "", when: "", focus: "", proof: "",
  price: "", fairPrice: "", decider: "", namePick: "", note: "",
});

export const NOTE_MAX = 600;
// A real answer to the proof question is at least a sentence
export const PROOF_MIN = 40;
export const proofReady = (a: Answers) => a.proof.trim().length >= PROOF_MIN;

export function recommendTrack(a: Answers): TrackId {
  const i = QUESTIONS.find((q) => q.id === "style")!.options!.indexOf(a.style);
  return STYLE_TRACKS[i] ?? "research";
}

// Every asked question needs one of its options; a skipped one must be blank. The proof is
// free text and needs a real sentence.
// feePending: the track has been shown but the fee questions not yet answered, so price,
// fairPrice and decider may all be blank (the answers are sent again once they are answered).
export function validAnswers(a: Answers, feePending = false): boolean {
  const skipFee = feePending && a.price === "" && a.fairPrice === "" && a.decider === "";
  return QUESTIONS.every((q) => {
    if (skipFee && (q.id === "price" || q.id === "fairPrice" || q.id === "decider")) return true;
    if (!isAsked(q, a)) return a[q.id] === "";
    if (!q.options) return a[q.id].length <= NOTE_MAX && (q.id !== "proof" || proofReady(a));
    return q.options.includes(a[q.id]);
  });
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
  college: string;
  consent: boolean;
}
export type ContactErrors = Partial<Record<keyof Contact, string>>;
export const emptyContact = (): Contact => ({ name: "", email: "", phone: "", college: "", consent: false });

export function validateContact(c: Contact): ContactErrors {
  const e: ContactErrors = {};
  if (c.name.trim().length < 2) e.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email.trim())) e.email = "Check your email address.";
  if (c.phone.replace(/\D/g, "").length < 10) e.phone = "Add a number we can WhatsApp.";
  if (c.college.trim().length < 2) e.college = "Add your college.";
  if (!c.consent) e.consent = "Tick this so we can save your details.";
  return e;
}
