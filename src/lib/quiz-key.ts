// The qualifier's answer key. Only /api/apply imports this file. Never import it from a
// client component, or the key ships to the browser.
//
// Each option scores 3 (what we want), 1 (reasonable but weaker) or 0. Six questions,
// so the maximum is 18. Calibrate QUALIFY_AT after the first ~20 real applications:
// aim for 30 to 50% qualifying.

import { quizFor } from "./quiz";

export const QUALIFY_AT = 13;

const METRIC: Record<string, string> = {
  c1: "Ownership",
  c2: "Judgment",
  c3: "Quality",
  c4: "Feedback",
};

const POINTS: Record<string, Record<string, number>> = {
  c1: { a: 3, b: 1, c: 1, d: 0 },
  c2: { a: 1, b: 3, c: 0, d: 0 },
  c3: { a: 1, b: 3, c: 0, d: 0 },
  c4: { a: 1, b: 3, c: 0, d: 0 },
  g1: { a: 0, b: 3, c: 0, d: 1 },
  g2: { a: 0, b: 3, c: 1, d: 0 },
  t1: { a: 0, b: 3, c: 1, d: 0 },
  t2: { a: 0, b: 3, c: 0, d: 1 },
  r1: { a: 1, b: 3, c: 0, d: 0 },
  r2: { a: 0, b: 3, c: 1, d: 1 },
  b1: { a: 0, b: 3, c: 0, d: 0 },
  b2: { a: 0, b: 3, c: 1, d: 1 },
};

export interface QuizResult {
  score: number;
  max: number;
  qualified: boolean;
  /** e.g. "Ownership 3 · Judgment 3 · Quality 1 · Feedback 3 · Track 6/6" */
  breakdown: string;
}

/** Returns null when the role has no quiz (Referral Partner) or an answer is missing. */
export function scoreQuiz(slug: string, answers: Record<string, string>): QuizResult | null {
  const questions = quizFor(slug);
  if (!questions.length) return null;
  if (questions.some((q) => !(answers[q.id] in (POINTS[q.id] ?? {})))) return null;

  const parts: string[] = [];
  let track = 0;
  let score = 0;
  for (const q of questions) {
    const pts = POINTS[q.id][answers[q.id]];
    score += pts;
    if (METRIC[q.id]) parts.push(`${METRIC[q.id]} ${pts}`);
    else track += pts;
  }
  const trackMax = (questions.length - Object.keys(METRIC).length) * 3;
  parts.push(`Track ${track}/${trackMax}`);
  const max = questions.length * 3;
  return { score, max, qualified: score >= QUALIFY_AT, breakdown: parts.join(" · ") };
}
