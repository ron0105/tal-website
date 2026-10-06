// Shared by the apply form (client) and /api/apply (server) so both enforce the
// same rules. No server-only imports here.

import type { Job } from "./jobs";

export interface Application {
  role: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  profileLink: string;
  sampleLinks: string;
  answer: string;
  hours: string;
  source: string;
  consent: boolean;
  /** Honeypot. Real people never see or fill it. */
  website: string;
  /** When the draft was first started (ms). Used to drop instant bot submissions. */
  startedAt: number;
}

export type FieldErrors = Partial<Record<keyof Application, string>>;

export const HOURS_OPTIONS = [
  "Under 10 hours a week",
  "10 to 20 hours a week",
  "20+ hours a week",
];

export const SOURCE_OPTIONS = [
  "Instagram",
  "LinkedIn",
  "A friend or referral",
  "Google",
  "Internshala",
  "Other",
];

export const ANSWER_MIN = 40;
export const ANSWER_MAX = 3000;
/** Anything faster than this from first keystroke to submit is a bot, not a person. */
export const MIN_FILL_MS = 10_000;

export function emptyApplication(role: string): Application {
  return {
    role,
    name: "",
    email: "",
    phone: "",
    city: "",
    profileLink: "",
    sampleLinks: "",
    answer: "",
    hours: "",
    source: "",
    consent: false,
    website: "",
    startedAt: Date.now(),
  };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Each step only checks its own fields, so the form can stop people at the step
// where the problem is instead of after the whole thing.
export const STEP_FIELDS: (keyof Application)[][] = [
  ["name", "email", "phone", "city", "profileLink"],
  ["sampleLinks", "answer"],
  ["hours", "source", "consent"],
];

export function validate(a: Application, job: Job, fields?: (keyof Application)[]): FieldErrors {
  const e: FieldErrors = {};
  const check = (f: keyof Application) => !fields || fields.includes(f);
  const phoneDigits = a.phone.replace(/\D/g, "");

  if (check("name") && a.name.trim().length < 2) e.name = "Please add your full name.";
  if (check("email") && !EMAIL_RE.test(a.email.trim())) e.email = "That email doesn't look right.";
  if (check("phone") && (phoneDigits.length < 10 || phoneDigits.length > 13))
    e.phone = "Add a phone number with at least 10 digits.";
  if (check("city") && a.city.trim().length < 2) e.city = "Which city are you based in?";
  if (check("profileLink") && a.profileLink.length > 300) e.profileLink = "Keep this to one link.";

  if (check("sampleLinks") && job.workSample.answerType === "links" && a.sampleLinks.trim().length < 4)
    e.sampleLinks = "Add at least one link to your work.";
  if (check("sampleLinks") && a.sampleLinks.length > 1500) e.sampleLinks = "That's a lot of links. Pick your best few.";
  if (check("answer") && a.answer.trim().length < ANSWER_MIN)
    e.answer = `A little more, please. At least ${ANSWER_MIN} characters.`;
  if (check("answer") && a.answer.length > ANSWER_MAX) e.answer = `Please keep it under ${ANSWER_MAX} characters.`;

  if (check("hours") && !HOURS_OPTIONS.includes(a.hours)) e.hours = "Pick the closest option.";
  if (check("source") && !SOURCE_OPTIONS.includes(a.source)) e.source = "Pick the closest option.";
  if (check("consent") && !a.consent) e.consent = "We need your OK to store your application.";

  return e;
}

/** The date we promise a reply by, as shown to the applicant. */
export function replyByDate(days: number, from = new Date()): string {
  const d = new Date(from);
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
}
