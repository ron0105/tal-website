"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Job, REPLY_PROMISE_DAYS } from "@/lib/jobs";
import {
  ANSWER_MAX,
  Application,
  FieldErrors,
  SOURCE_OPTIONS,
  START_OPTIONS,
  applySteps,
  emptyApplication,
  replyByDate,
  reviewFriday,
  validate,
} from "@/lib/applications";
import { quizFor, shuffled } from "@/lib/quiz";
import RohanNote from "./RohanNote";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Field primitives ────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid var(--border-color)",
  color: "var(--text-primary)",
  borderRadius: "var(--radius-btn)",
};

function Field({
  id,
  label,
  hint,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
        {label}
        {optional && (
          <span className="font-normal ml-2" style={{ color: "var(--text-muted)" }}>
            optional
          </span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-xs -mt-1" style={{ color: "var(--text-muted)" }}>
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-semibold" style={{ color: "var(--accent-hover)" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function CheckBox({
  id,
  checked,
  onChange,
  error,
  describedBy,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  describedBy?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 rounded-sm border" style={{ borderColor: error ? "var(--accent)" : "var(--border-color)", background: "#fff" }}>
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <input id={id} type="checkbox" className="mt-1 w-4 h-4 flex-shrink-0 accent-[var(--brand)]"
          checked={checked} onChange={(e) => onChange(e.target.checked)}
          aria-invalid={!!error} aria-describedby={describedBy} />
        <span className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
          {children}
        </span>
      </label>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-semibold mt-2 ml-7" style={{ color: "var(--accent-hover)" }}>
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 text-base outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(14,107,104,0.18)]";

// ─── Main flow ───────────────────────────────────────────────────────────────

export default function ApplyFlow({ job }: { job: Job }) {
  const draftKey = `tal-apply-${job.slug}`;
  const cohort = job.group === "cohort";
  const [app, setApp] = useState<Application>(() => emptyApplication(job.slug));
  const [step, setStep] = useState(0);
  const steps = applySteps(cohort);
  const current = steps[step].key;
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [restored, setRestored] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // Option order is shuffled per applicant (seeded by when they started), so answers
  // can't be passed around as "pick b, b, a".
  const questions = useMemo(
    () => quizFor(job.slug).map((q, i) => ({ ...q, options: shuffled(q.options, app.startedAt + i * 7919) })),
    [job.slug, app.startedAt],
  );
  const answered = questions.filter((q) => app.quiz?.[q.id]).length;
  // Their first name, once they've given it, so later steps talk to them directly
  const first = app.name.trim().split(/\s+/)[0] ?? "";
  const hi = (text: string) => (first ? `${text}, ${first.charAt(0).toUpperCase()}${first.slice(1)}` : text);
  const pick = (qid: string, oid: string) => {
    setApp((a) => ({ ...a, quiz: { ...a.quiz, [qid]: oid } }));
    if (errors.quiz) setErrors((e) => ({ ...e, quiz: undefined }));
  };

  // A per-device draft, so a 30-minute work sample survives a closed tab. Storage
  // can be blocked (private mode), so every access is guarded and optional.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(draftKey);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<Application>;
        setApp((a) => ({ ...a, ...saved, role: job.slug, website: "" }));
        setRestored(true);
      }
    } catch {}
  }, [draftKey, job.slug]);

  useEffect(() => {
    if (status === "sent") return;
    try {
      localStorage.setItem(draftKey, JSON.stringify({ ...app, website: "" }));
    } catch {}
  }, [app, draftKey, status]);

  const set = <K extends keyof Application>(key: K, value: Application[K]) => {
    setApp((a) => ({ ...a, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  // Put the cursor in the first field that needs fixing, so nobody hunts for the error
  const focusFirstError = (e: FieldErrors) => {
    const first = steps.flatMap((st) => st.fields).find((f) => e[f]);
    if (first) requestAnimationFrame(() => document.getElementById(first)?.focus());
  };

  const next = () => {
    const e = validate(app, job, steps[step].fields);
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError(e);
    setStep((s) => s + 1);
    scrollTop();
  };

  const back = () => {
    setStep((s) => Math.max(0, s - 1));
    scrollTop();
  };

  const submit = async () => {
    const e = validate(app, job);
    setErrors(e);
    if (Object.keys(e).length) {
      // Jump to the first step that still has a problem
      const firstBad = steps.findIndex((st) => st.fields.some((f) => e[f]));
      if (firstBad >= 0) setStep(firstBad);
      // Wait out the step transition before focusing
      setTimeout(() => focusFirstError(e), 400);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(app),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      try {
        localStorage.removeItem(draftKey);
      } catch {}
      scrollTop();
    } catch (err) {
      setServerMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("failed");
    }
  };

  const describedBy = (id: keyof Application, hint = false) =>
    [hint ? `${id}-hint` : "", errors[id] ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;

  // ── Sent ──────────────────────────────────────────────────────────────────
  if (status === "sent") {
    return (
      <div ref={topRef} className="scroll-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="p-7 md:p-12 rounded-[6px] flex flex-col gap-8"
          style={{ background: "#fff", border: "1px solid var(--border-color)", boxShadow: "0 18px 40px -24px rgba(20,32,30,0.25)" }}
        >
          <h2 style={{ color: "var(--text-primary)", fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
            {hi("Thank you")}.
          </h2>
          <RohanNote>
            <p className="mb-3">
              I&apos;ve got your application for the {job.title}. I&apos;ll read it myself on{" "}
              <strong style={{ color: "var(--text-primary)" }}>{reviewFriday()}</strong>, and you&apos;ll hear from me
              by <strong style={{ color: "var(--text-primary)" }}>{replyByDate(REPLY_PROMISE_DAYS)}</strong>, whatever the
              answer.
            </p>
            <p>
              A copy is on its way to <strong style={{ color: "var(--text-primary)" }}>{app.email}</strong>. If you think of
              anything you wish you&apos;d added, just reply to that email.
            </p>
          </RohanNote>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              ["Friday", "I read every application and pick a shortlist."],
              ["Next week", "Shortlisted people get a 20-minute call with me."],
              ["Then", job.group === "cohort" ? "The 15-day training sprint, paid, with a certificate." : "A short agreement, and you start referring."],
            ].map(([when, what]) => (
              <div key={when} className="p-5 rounded-[6px]" style={{ background: "var(--bg)" }}>
                <p className="font-poppins text-lg mb-1" style={{ color: "var(--brand)" }}>
                  {when}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {what}
                </p>
              </div>
            ))}
          </div>
          <Link href="/careers" className="text-sm font-bold self-start" style={{ color: "var(--brand)" }}>
            ← Back to careers
          </Link>
        </motion.div>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <div
      ref={topRef}
      className="scroll-mt-32 p-6 md:p-10 rounded-[6px]"
      style={{ background: "#fff", border: "1px solid var(--border-color)", boxShadow: "0 18px 40px -24px rgba(20,32,30,0.25)" }}
    >
      {/* Progress */}
      <ol className={`grid ${steps.length === 4 ? "grid-cols-4" : "grid-cols-3"} gap-2 mb-10`} aria-label="Application progress">
        {steps.map(({ label }, i) => (
          <li key={label} className="flex flex-col gap-2" aria-current={i === step ? "step" : undefined}>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border-color)" }}>
              <motion.div
                className="h-full"
                style={{ background: i < step ? "var(--brand)" : "var(--accent)" }}
                initial={false}
                animate={{ width: i < step ? "100%" : i === step ? "50%" : "0%" }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </div>
            <span
              className="text-[11px] font-bold uppercase tracking-widest"
              style={{ color: i === step ? "var(--text-primary)" : "var(--text-muted)" }}
            >
              {i + 1}. {label}
            </span>
          </li>
        ))}
      </ol>

      {restored && step === 0 && (
        <p className="text-sm mb-6 px-4 py-3 rounded-sm" style={{ background: "var(--bg-lift)", color: "var(--text-body)" }}>
          Welcome back. Your answers from last time are still here.
        </p>
      )}

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (step < steps.length - 1) next();
          else submit();
        }}
      >
        {/* Honeypot: hidden from people and screen readers, tempting to bots */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={app.website}
            onChange={(e) => set("website", e.target.value)}
          />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex flex-col gap-7"
          >
            {current === "about" && (
              <>
                <RohanNote>
                  Hi, I&apos;m Rohan. I started TAL, and I read every application myself, on Fridays. There are no
                  trick questions here. Show me how you think, and you&apos;ll hear back from me within a week,
                  whatever the answer.
                </RohanNote>
                <div>
                  <h2 className="text-section-title mb-3" style={{ color: "var(--text-primary)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                    First, a little about you.
                  </h2>
                  <p className="text-base" style={{ color: "var(--text-muted)" }}>
                    Two minutes. I only ask what I need to reply to you.
                  </p>
                </div>
                <Field id="name" label="Full name" error={errors.name}>
                  <input id="name" className={inputClass} style={inputStyle} autoComplete="name"
                    value={app.name} onChange={(e) => set("name", e.target.value)}
                    aria-invalid={!!errors.name} aria-describedby={describedBy("name")} />
                </Field>
                <div className="grid sm:grid-cols-2 gap-7">
                  <Field id="email" label="Email" error={errors.email}>
                    <input id="email" type="email" className={inputClass} style={inputStyle} autoComplete="email"
                      value={app.email} onChange={(e) => set("email", e.target.value)}
                      aria-invalid={!!errors.email} aria-describedby={describedBy("email")} />
                  </Field>
                  <Field id="phone" label="Phone (WhatsApp)" error={errors.phone}>
                    <input id="phone" type="tel" className={inputClass} style={inputStyle} autoComplete="tel"
                      value={app.phone} onChange={(e) => set("phone", e.target.value)}
                      aria-invalid={!!errors.phone} aria-describedby={describedBy("phone")} />
                  </Field>
                </div>
                <Field id="city" label="City" error={errors.city}>
                  <input id="city" className={inputClass} style={inputStyle} autoComplete="address-level2"
                    value={app.city} onChange={(e) => set("city", e.target.value)}
                    aria-invalid={!!errors.city} aria-describedby={describedBy("city")} />
                </Field>
                <Field id="profileLink" label="LinkedIn or portfolio" optional
                  hint="One link that shows who you are." error={errors.profileLink}>
                  <input id="profileLink" type="url" inputMode="url" className={inputClass} style={inputStyle}
                    placeholder="https://"
                    value={app.profileLink} onChange={(e) => set("profileLink", e.target.value)}
                    aria-invalid={!!errors.profileLink} aria-describedby={describedBy("profileLink", true)} />
                </Field>
              </>
            )}

            {current === "work" && (
              <>
                <div>
                  <h2 className="text-section-title mb-4" style={{ color: "var(--text-primary)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                    {hi("Thanks")}. Now show me your work.
                  </h2>
                  <p className="text-base mb-4" style={{ color: "var(--text-muted)" }}>
                    For the {job.shortTitle} {cohort ? "track" : "role"}, this is what I&apos;d like to see.
                  </p>
                  <div className="p-6 rounded-sm" style={{ background: "var(--bg-lift)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--brand)" }}>
                      Your work sample
                    </p>
                    <p className="text-base leading-relaxed font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                      {job.workSample.prompt}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {job.workSample.hint}
                    </p>
                  </div>
                </div>
                {job.workSample.answerType === "links" && (
                  <Field id="sampleLinks" label="Links to your work" hint="One per line." error={errors.sampleLinks}>
                    <textarea id="sampleLinks" rows={3} className={inputClass} style={inputStyle}
                      value={app.sampleLinks} onChange={(e) => set("sampleLinks", e.target.value)}
                      aria-invalid={!!errors.sampleLinks} aria-describedby={describedBy("sampleLinks", true)} />
                  </Field>
                )}
                <Field id="answer" label="Your answer" error={errors.answer}>
                  <textarea id="answer" rows={10} className={inputClass} style={{ ...inputStyle, lineHeight: 1.6 }}
                    maxLength={ANSWER_MAX}
                    value={app.answer} onChange={(e) => set("answer", e.target.value)}
                    aria-invalid={!!errors.answer} aria-describedby={describedBy("answer")} />
                  <p className="text-xs text-right -mt-1" style={{ color: "var(--text-muted)" }}>
                    {app.answer.length} / {ANSWER_MAX} · saved on this device as you type
                  </p>
                </Field>
              </>
            )}

            {current === "quiz" && (
              <>
                <div>
                  <h2 className="text-section-title mb-3" style={{ color: "var(--text-primary)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                    {first ? `Six real situations, ${first.charAt(0).toUpperCase()}${first.slice(1)}.` : "Six real situations."}
                  </h2>
                  <p className="text-base" style={{ color: "var(--text-muted)" }}>
                    Each one is something that actually happens here. Pick what you&apos;d really do, not what
                    sounds best. There&apos;s no time limit.
                  </p>
                  <p className="text-xs font-semibold mt-3" style={{ color: "var(--brand)" }}>
                    {answered} of {questions.length} answered
                  </p>
                </div>
                <div id="quiz" tabIndex={-1} className="flex flex-col gap-8 outline-none">
                  {questions.map((q, qi) => (
                    <fieldset key={q.id} className="flex flex-col gap-3">
                      <legend className="text-base font-semibold leading-relaxed mb-3" style={{ color: "var(--text-primary)" }}>
                        <span style={{ color: "var(--accent)" }}>{qi + 1}.</span> {q.prompt}
                      </legend>
                      {q.options.map((o) => {
                        const on = app.quiz?.[q.id] === o.id;
                        return (
                          <label
                            key={o.id}
                            className="flex items-start gap-3 p-4 rounded-sm border cursor-pointer transition-colors"
                            style={{ background: on ? "var(--bg-lift)" : "#fff", borderColor: on ? "var(--brand)" : "var(--border-color)" }}
                          >
                            <input type="radio" name={q.id} value={o.id} checked={on} onChange={() => pick(q.id, o.id)}
                              className="mt-1 flex-shrink-0 accent-[var(--brand)]" />
                            <span className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{o.text}</span>
                          </label>
                        );
                      })}
                    </fieldset>
                  ))}
                </div>
                {errors.quiz && (
                  <p role="alert" className="text-sm font-semibold" style={{ color: "var(--accent-hover)" }}>
                    {errors.quiz}
                  </p>
                )}
              </>
            )}

            {current === "send" && (
              <>
                <div>
                  <h2 className="text-section-title mb-3" style={{ color: "var(--text-primary)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                    {hi("Nearly there")}.
                  </h2>
                  <p className="text-base" style={{ color: "var(--text-muted)" }}>
                    {cohort
                      ? "Confirm you can do it full-time, then your OK to keep your application on file."
                      : "One quick question, and your OK to keep your application on file."}
                  </p>
                </div>

                {cohort && (
                  <CheckBox id="fullTime" checked={app.fullTime} onChange={(v) => set("fullTime", v)}
                    error={errors.fullTime} describedBy={describedBy("fullTime")}>
                    <strong style={{ color: "var(--text-primary)" }}>I can work full-time, on-site in CBD Belapur, Navi Mumbai</strong>, Monday
                    to Friday, for the 15-day training and the internship after it. This cohort isn&apos;t open to
                    part-time applicants.
                  </CheckBox>
                )}

                <div className="grid sm:grid-cols-2 gap-7">
                  {cohort && (
                    <Field id="startWhen" label="When can you start?" error={errors.startWhen}>
                      <select id="startWhen" className={inputClass} style={inputStyle}
                        value={app.startWhen} onChange={(e) => set("startWhen", e.target.value)}
                        aria-invalid={!!errors.startWhen} aria-describedby={describedBy("startWhen")}>
                        <option value="">Choose one</option>
                        {START_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                  )}
                  <Field id="source" label="How did you find us?" error={errors.source}>
                    <select id="source" className={inputClass} style={inputStyle}
                      value={app.source} onChange={(e) => set("source", e.target.value)}
                      aria-invalid={!!errors.source} aria-describedby={describedBy("source")}>
                      <option value="">Choose one</option>
                      {SOURCE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>

                {cohort && (
                  <CheckBox id="talentPool" checked={app.talentPool} onChange={(v) => set("talentPool", v)}>
                    <strong style={{ color: "var(--text-primary)" }}>Keep me in TAL&apos;s talent pool.</strong> If I&apos;m
                    not picked for this cohort, contact me about future cohorts and paid work that fits me.
                    <span style={{ color: "var(--text-muted)" }}> Optional.</span>
                  </CheckBox>
                )}

                <div className="p-5 rounded-sm border" style={{ borderColor: errors.consent ? "var(--accent)" : "var(--border-color)", background: "#fff" }}>
                  <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
                    <input id="consent" type="checkbox" className="mt-1 w-4 h-4 flex-shrink-0 accent-[var(--brand)]"
                      checked={app.consent} onChange={(e) => set("consent", e.target.checked)}
                      aria-invalid={!!errors.consent} aria-describedby={describedBy("consent")} />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                      I agree that TAL Consulting LLP can store my application to assess me for this and similar
                      roles. It&apos;s kept for 6 months, and I can ask for it to be deleted at any time by emailing
                      rohan@theaddalabs.com. See the{" "}
                      <Link href="/privacy" target="_blank" className="underline underline-offset-4" style={{ color: "var(--brand)" }}>
                        privacy notice
                      </Link>
                      .
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" role="alert" className="text-xs font-semibold mt-2 ml-7" style={{ color: "var(--accent-hover)" }}>
                      {errors.consent}
                    </p>
                  )}
                </div>

                {status === "failed" && (
                  <p role="alert" className="text-sm px-4 py-3 rounded-sm" style={{ background: "#F8EBE2", color: "var(--accent-hover)" }}>
                    {serverMessage} Your answers are still here, so you can try again.
                  </p>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between gap-4 mt-10 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          {step > 0 ? (
            <button type="button" onClick={back} className="btn-ghost" style={{ padding: "12px 22px" }}>
              ← Back
            </button>
          ) : (
            <Link href={`/careers/${job.slug}`} className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
              ← Back to the role
            </Link>
          )}
          <button
            type="submit"
            className="btn-primary"
            style={{ padding: "13px 28px", opacity: status === "sending" ? 0.7 : 1 }}
            disabled={status === "sending"}
          >
            {step < steps.length - 1 ? "Continue →" : status === "sending" ? "Sending…" : "Send my application →"}
          </button>
        </div>
      </form>
    </div>
  );
}
