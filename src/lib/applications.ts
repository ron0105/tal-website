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
export const START_OPTIONS = ["Immediately", "Within 2 weeks", "Within a month"];

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
    ...(withQuiz ? [{ key: "quiz" as const, label: "Quick questions", fields: ["quiz"] as (keyof Application)[] }] : []),
    { key: "send" as const, label: "Send it", fields: ["fullTime", "startWhen", "source", "consent"] as (keyof Application)[] },
  ];
}

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

  const questions = quizFor(job.slug);
  if (check("quiz") && questions.some((q) => !a.quiz?.[q.id]))
    e.quiz = `Please answer all ${questions.length} questions. There's no time limit.`;

  const cohort = job.group === "cohort";
  if (cohort && check("fullTime") && !a.fullTime)
    e.fullTime = "This cohort is full-time and on-site only. If that changes for you, we'd love to hear from you then.";
  if (cohort && check("startWhen") && !START_OPTIONS.includes(a.startWhen)) e.startWhen = "Pick the closest option.";
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
