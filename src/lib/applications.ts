// Shared by the apply form (client) and /api/apply (server) so both enforce the
// same rules. No server-only imports here.

import type { Job } from "./jobs";
import { quizFor } from "./quiz";

export interface Application {
  role: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  profileLink: string;
  sampleLinks: string;
  answer: string;
  /** Qualifier answers, question id → option id. Scored on the server only. */
  quiz: Record<string, string>;
  /** Cohort only: confirms full-time, on-site availability. */
  fullTime: boolean;
  startWhen: string;
  source: string;
  /** Opt-in: keep me for future cohorts and paid work if I'm not picked. */
  talentPool: boolean;
  consent: boolean;
  /** Honeypot. Real people never see or fill it. */
  website: string;
  /** When the draft was first started (ms). Used to drop instant bot submissions. */
  startedAt: number;
}

export type FieldErrors = Partial<Record<keyof Application, string>>;

// Full-time only for the cohort (Rohan, Oct 7 2026), so there's no hours question.
export const START_OPTIONS = ["Immediately", "Later this month", "Next month"];

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
    quiz: {},
    fullTime: false,
    startWhen: "",
    source: "",
    talentPool: false,
    consent: false,
    website: "",
    startedAt: Date.now(),
  };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Each step only checks its own fields, so the form can stop people at the step
// where the problem is instead of after the whole thing. Cohort tracks get the
// qualifier step; Referral Partner doesn't.
export type StepKey = "about" | "work" | "quiz" | "send";
export interface ApplyStep {
  key: StepKey;
  label: string;
  fields: (keyof Application)[];
}

export function applySteps(withQuiz: boolean): ApplyStep[] {
  return [
    { key: "about" as const, label: "About you", fields: ["name", "email", "phone", "city", "profileLink"] as (keyof Application)[] },
    { key: "work" as const, label: "Your work", fields: ["sampleLinks", "answer"] as (keyof Application)[] },
    ...(withQuiz ? [{ key: "quiz" as const, label: "How you think", fields: ["quiz"] as (keyof Application)[] }] : []),
    { key: "send" as const, label: "Send it", fields: ["fullTime", "startWhen", "source", "consent"] as (keyof Application)[] },
  ];
}

export function validate(a: Application, job: Job, fields?: (keyof Application)[]): FieldErrors {
  const e: FieldErrors = {};
  const check = (f: keyof Application) => !fields || fields.includes(f);
  const phoneDigits = a.phone.replace(/\D/g, "");

  if (check("name") && a.name.trim().length < 2) e.name = "Please add your full name.";
  if (check("email") && !EMAIL_RE.test(a.email.trim())) e.email = "Please check your email address.";
  if (check("phone") && (phoneDigits.length < 10 || phoneDigits.length > 13))
    e.phone = "Please add a valid phone number.";
  if (check("city") && a.city.trim().length < 2) e.city = "Please add your city.";
  if (check("profileLink") && a.profileLink.length > 300) e.profileLink = "Please share a single link.";

  if (check("sampleLinks") && job.workSample.answerType === "links" && a.sampleLinks.trim().length < 4)
    e.sampleLinks = "Please add a link to your work.";
  if (check("sampleLinks") && a.sampleLinks.length > 1500) e.sampleLinks = "Please choose your best few links.";
  if (check("answer") && a.answer.trim().length < ANSWER_MIN)
    e.answer = "Please add a little more detail to your answer.";
  if (check("answer") && a.answer.length > ANSWER_MAX) e.answer = "Please shorten your answer slightly.";

  const questions = quizFor(job.slug);
  if (check("quiz") && questions.some((q) => !a.quiz?.[q.id]))
    e.quiz = "Please answer every question. Take as long as you need.";

  const cohort = job.group === "cohort";
  if (cohort && check("fullTime") && !a.fullTime)
    e.fullTime = "Please confirm you can work full-time, on-site.";
  if (cohort && check("startWhen") && !START_OPTIONS.includes(a.startWhen)) e.startWhen = "Please choose the closest option.";
  if (check("source") && !SOURCE_OPTIONS.includes(a.source)) e.source = "Please choose the closest option.";
  if (check("consent") && !a.consent) e.consent = "Please give your consent so we can store your application.";

  return e;
}

/** The Friday Rohan reads this application: the coming Friday, or next week's if it's already Friday or the weekend. */
export function reviewFriday(from = new Date()): string {
  const d = new Date(from);
  const day = d.getDay(); // 0 Sun ... 5 Fri, 6 Sat
  const add = day <= 4 ? 5 - day : 12 - day;
  d.setDate(d.getDate() + add);
  return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
}

/** The date we promise a reply by, as shown to the applicant. */
export function replyByDate(days: number, from = new Date()): string {
  const d = new Date(from);
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
}
