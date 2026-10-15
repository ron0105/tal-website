// TAL Live Projects: a paid 15-day programme for students, being tested for demand (Oct 2026).
// /live-projects walks students through 7 questions, recommends a track, and offers a seat.
// Answers are saved without a name; contact details only on a reservation with consent.
// Brief: 01-tal/tal/how-we-work/Paid live-project programme - brief (draft).md

// The one number the test depends on. Change it here and the page and the questions follow.
export const FEE_INR = 4999;
export const SEATS_PER_ROUND = 6;

// Step 2 after a seat request: a reservation fee that secures the seat, is adjusted against the
// programme fee, and is refundable until the round begins. Until DEPOSIT_URL holds a Razorpay
// payment link, the button records the request and the founder sends the link on WhatsApp.
export const DEPOSIT_INR = 1999;
export const DEPOSIT_URL = "";
export const depositLabel = () => `₹${DEPOSIT_INR.toLocaleString("en-IN")}`;

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

export type TrackId = "research" | "build" | "growth" | "content";

export const TRACKS: Record<TrackId, { name: string; line: string; projects: string[] }> = {
  research: {
    name: "Research",
    line: "Find out how real businesses answer a new customer, and where they lose them.",
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
  growth: {
    name: "Growth",
    line: "Find businesses that need help, and write the outreach that starts the conversation.",
    projects: [
      "A researched list of businesses, each with one clear gap you found",
      "An outreach sequence for them, reviewed line by line with the founder",
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
};

export const NAME_OPTIONS = ["TAL Live Projects"];

export type QuestionId = "course" | "goal" | "style" | "format" | "when" | "price" | "fairPrice" | "namePick" | "note";

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
    id: "style",
    title: "Which sounds most like you?",
    options: ["I like finding things out", "I like making things", "I like talking to people", "I like telling stories"],
  },
  {
    id: "format",
    title: "How would you like to do it?",
    options: ["On-site in Navi Mumbai", "Remote", "Either works"],
  },
  {
    id: "when",
    title: "When could you give it 15 days?",
    options: ["December break", "January", "Summer 2027", "Not sure yet"],
    pairedWith: "format",
  },
  {
    id: "price",
    title: `Your seat: ${feeLabel()}. Ready to reserve yours?`,
    lead: "Two real projects, three reviews with the founder, a certificate that names your work, and a route to a paid internship.",
    options: ["Yes, I'm in", "Yes, once I see the dates", PRICE_LOWER],
  },
  {
    id: "fairPrice",
    title: "Which fee works for you?",
    options: ["Up to ₹1,999", "₹2,000 to ₹2,999", "₹3,000 to ₹3,999", "₹4,000 to ₹4,999"],
    pairedWith: "price",
    showIf: (a) => a.price === PRICE_LOWER,
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
    id: "note",
    title: "Last one. What do you want to be able to do by day 15?",
  },
];

export const isAsked = (q: Question, a: Answers) => !q.showIf || q.showIf(a);

// Screens: format and timing share one screen, and so do the fee and the fair price
export const SCREENS: QuestionId[][] = [["course"], ["goal"], ["style"], ["format", "when"], ["price", "fairPrice"], ["note"]];

export type Answers = Record<QuestionId, string>;
export const emptyAnswers = (): Answers => ({
  course: "", goal: "", style: "", format: "", when: "", price: "", fairPrice: "", namePick: "", note: "",
});

export const NOTE_MAX = 600;

export function recommendTrack(a: Answers): TrackId {
  const i = QUESTIONS.find((q) => q.id === "style")!.options!.indexOf(a.style);
  return STYLE_TRACKS[i] ?? "research";
}

// Every asked question needs one of its options; a skipped one must be blank. The note is
// free text and optional.
export function validAnswers(a: Answers): boolean {
  return QUESTIONS.every((q) => {
    if (!q.options) return a[q.id].length <= NOTE_MAX;
    return isAsked(q, a) ? q.options.includes(a[q.id]) : a[q.id] === "";
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
  if (c.name.trim().length < 2) e.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email.trim())) e.email = "Please check your email address.";
  if (c.phone.replace(/\D/g, "").length < 10) e.phone = "Please add a number we can WhatsApp.";
  if (c.college.trim().length < 2) e.college = "Please add your college.";
  if (!c.consent) e.consent = "Please tick this so we can save your details.";
  return e;
}
