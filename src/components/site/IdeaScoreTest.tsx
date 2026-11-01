"use client";

import { useEffect, useRef, useState } from "react";
import { IDEA_SCORE as T } from "@/content/tools";
import { indianMobile, PHONE_ERROR } from "@/lib/phone";
import { getUtm, utmLine } from "@/lib/utm";
import { track } from "@/lib/track";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Idea Score Test (spec 5.7): 10 yes/no questions, a score out of 10 and the 3 biggest risks.
 * Results are gated by a WhatsApp number, saved to the tracker like the free check.
 */
export default function IdeaScoreTest({ sector }: { sector?: string }) {
  const [answers, setAnswers] = useState<(boolean | null)[]>(T.questions.map(() => null));
  const [stage, setStage] = useState<"questions" | "gate" | "result">("questions");
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const startedAt = useRef(0);
  // When the form first rendered in the browser; the API drops anything filled in faster than a person could
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const honeypot = useRef<HTMLInputElement>(null);

  const score = answers.filter((a) => a === true).length;
  const risks = T.questions.filter((_, i) => answers[i] === false).slice(0, 3).map((q) => q.risk);
  const allAnswered = answers.every((a) => a !== null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contact.name.trim().length < 2) return setError("Please add your name");
    if (!indianMobile(contact.phone)) return setError(PHONE_ERROR);
    setError("");
    setSending(true);
    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: "idea-score", ...contact, sector: sector ?? "founders", score, risks: risks.join(" | "), website: honeypot.current?.value, startedAt: startedAt.current, utm: utmLine(getUtm()) }),
      });
    } catch {
      // The score is theirs either way; a failed save shouldn't hide it
    }
    track("tool_idea_score_complete", { score });
    setSending(false);
    setStage("result");
  };

  const input = "w-full min-h-[48px] px-4 rounded-lg text-base outline-none";
  const inputStyle = { background: "#fff", border: "1px solid var(--border-strong)", color: "var(--text-primary)" };

  return (
    <div className="card-hover p-6 md:p-8" style={{ background: "var(--bg)" }}>
      {stage === "questions" && (
        <>
          <p className="mb-6" style={{ color: "var(--text-body)" }}>
            {T.intro}
          </p>
          <ol className="grid gap-5">
            {T.questions.map((q, i) => (
              <li key={q.q}>
                <fieldset>
                  <legend className="font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                    {i + 1}. {q.q}
                  </legend>
                  <div className="flex gap-2">
                    {[true, false].map((val) => (
                      <button
                        key={String(val)}
                        type="button"
                        aria-pressed={answers[i] === val}
                        onClick={() => setAnswers((a) => a.map((x, j) => (j === i ? val : x)))}
                        className="min-h-[44px] min-w-[72px] px-4 rounded-full text-sm font-semibold cursor-pointer"
                        style={{
                          background: answers[i] === val ? "var(--brand)" : "transparent",
                          color: answers[i] === val ? "#fff" : "var(--text-body)",
                          border: `1px solid ${answers[i] === val ? "var(--brand)" : "var(--border-strong)"}`,
                        }}
                      >
                        {val ? "Yes" : "No"}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </li>
            ))}
          </ol>
          <button type="button" className="btn-primary btn-lg mt-8" disabled={!allAnswered} onClick={() => setStage("gate")} style={!allAnswered ? { opacity: 0.5, cursor: "not-allowed" } : undefined}>
            {T.gateButton}
          </button>
        </>
      )}

      {stage === "gate" && (
        <form onSubmit={submit} noValidate className="grid gap-5">
          <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
            {T.gateTitle}
          </p>
          <p style={{ color: "var(--text-body)" }}>{T.gateBody}</p>
          <div>
            <label htmlFor="ist-name" className="block text-sm font-semibold mb-2">
              Your name
            </label>
            <input id="ist-name" autoComplete="name" className={input} style={inputStyle} value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} />
          </div>
          <div>
            <label htmlFor="ist-phone" className="block text-sm font-semibold mb-2">
              WhatsApp number
            </label>
            <input id="ist-phone" type="tel" inputMode="tel" autoComplete="tel" className={input} style={inputStyle} value={contact.phone} onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))} />
          </div>
          <div aria-hidden="true" className="absolute -left-[9999px]" style={{ width: 1, height: 1, overflow: "hidden" }}>
            <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          {error && (
            <p className="text-sm" role="alert" style={{ color: "#B42318" }}>
              {error}
            </p>
          )}
          <button type="submit" className="btn-primary btn-lg" disabled={sending}>
            {sending ? "Working it out…" : T.gateButton}
          </button>
        </form>
      )}

      {stage === "result" && (
        <div role="status">
          <p className="stat-label">{T.scoreLabel}</p>
          <p className="stat-number mt-3">{score}/10</p>
          <p className="text-lg font-bold mt-8" style={{ color: "var(--text-primary)" }}>
            {T.risksTitle}
          </p>
          {risks.length ? (
            <ol className="mt-3 grid gap-2 list-decimal pl-5" style={{ color: "var(--text-body)" }}>
              {risks.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          ) : (
            <p className="mt-3" style={{ color: "var(--text-body)" }}>
              {T.noRisks}
            </p>
          )}
          <p className="mt-8" style={{ color: "var(--text-body)" }}>
            {T.next}{" "}
            <Link href="/pricing" className="link-arrow">
              {T.nextLink}
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
