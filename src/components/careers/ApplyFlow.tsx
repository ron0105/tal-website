"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Job, REPLY_PROMISE_DAYS } from "@/lib/jobs";
import {
  ANSWER_MAX,
  Application,
  FieldErrors,
  HOURS_OPTIONS,
  SOURCE_OPTIONS,
  STEP_FIELDS,
  emptyApplication,
  replyByDate,
  validate,
} from "@/lib/applications";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const STEPS = ["About you", "Your work", "Send it"];

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

const inputClass =
  "w-full px-4 py-3 text-base outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(14,107,104,0.18)]";

// ─── Main flow ───────────────────────────────────────────────────────────────

export default function ApplyFlow({ job }: { job: Job }) {
  const draftKey = `tal-apply-${job.slug}`;
  const [app, setApp] = useState<Application>(() => emptyApplication(job.slug));
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [restored, setRestored] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

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
    const first = STEP_FIELDS.flat().find((f) => e[f]);
    if (first) requestAnimationFrame(() => document.getElementById(first)?.focus());
  };

  const next = () => {
    const e = validate(app, job, STEP_FIELDS[step]);
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
      const firstBad = STEP_FIELDS.findIndex((fields) => fields.some((f) => e[f]));
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
          className="p-10 md:p-14 rounded-[4px]"
          style={{ background: "var(--brand)", color: "#fff" }}
        >
          <p className="label-eyebrow mb-6" style={{ color: "var(--accent-on-brand)" }}>
            Application received
          </p>
          <h2 className="mb-6" style={{ color: "#fff" }}>
            Thank you, {app.name.trim().split(" ")[0]}.
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "560px" }}>
            Your application for {job.title} is in. A confirmation is on its way to{" "}
            <strong style={{ color: "#fff" }}>{app.email}</strong>. You&apos;ll hear from us by{" "}
            <strong style={{ color: "var(--accent-on-brand)" }}>{replyByDate(REPLY_PROMISE_DAYS)}</strong>, whatever
            the answer.
          </p>
          <div className="grid sm:grid-cols-3 gap-px mb-10" style={{ background: "rgba(255,255,255,0.12)" }}>
            {[
              ["Friday", "Rohan reads every application and picks a shortlist."],
              ["Next week", "Shortlisted people get a 20-minute call."],
              ["Then", job.group === "cohort" ? "The 15-day training sprint, paid, with a certificate." : "A short agreement, and you start referring."],
            ].map(([when, what]) => (
              <div key={when} className="p-5" style={{ background: "var(--brand)" }}>
                <p className="font-poppins text-lg mb-1" style={{ color: "var(--accent-on-brand)" }}>
                  {when}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {what}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center text-sm font-bold"
            style={{ color: "#fff", borderBottom: "1px solid var(--accent-on-brand)", paddingBottom: 2 }}
          >
            Back to all roles →
          </Link>
        </motion.div>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <div ref={topRef} className="scroll-mt-32">
      {/* Progress */}
      <ol className="grid grid-cols-3 gap-2 mb-10" aria-label="Application progress">
        {STEPS.map((label, i) => (
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
          Welcome back. We kept your answers from last time on this device.
        </p>
      )}

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (step < STEPS.length - 1) next();
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
            {step === 0 && (
              <>
                <div>
                  <h2 className="text-section-title mb-3" style={{ color: "var(--text-primary)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                    First, a little about you.
                  </h2>
                  <p className="text-base" style={{ color: "var(--text-muted)" }}>
                    Two minutes. We only ask what we need to reply.
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

            {step === 1 && (
              <>
                <div>
                  <h2 className="text-section-title mb-4" style={{ color: "var(--text-primary)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                    Now, show us your work.
                  </h2>
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

            {step === 2 && (
              <>
                <div>
                  <h2 className="text-section-title mb-3" style={{ color: "var(--text-primary)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                    Last step. Then it&apos;s with us.
                  </h2>
                  <p className="text-base" style={{ color: "var(--text-muted)" }}>
                    Two quick questions, and your OK to keep your application on file.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-7">
                  <Field id="hours" label="Time you can give" error={errors.hours}>
                    <select id="hours" className={inputClass} style={inputStyle}
                      value={app.hours} onChange={(e) => set("hours", e.target.value)}
                      aria-invalid={!!errors.hours} aria-describedby={describedBy("hours")}>
                      <option value="">Choose one</option>
                      {HOURS_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field id="source" label="How did you find us?" error={errors.source}>
                    <select id="source" className={inputClass} style={inputStyle}
                      value={app.source} onChange={(e) => set("source", e.target.value)}
                      aria-invalid={!!errors.source} aria-describedby={describedBy("source")}>
                      <option value="">Choose one</option>
                      {SOURCE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>

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
            {step < STEPS.length - 1 ? "Continue →" : status === "sending" ? "Sending…" : "Send my application →"}
          </button>
        </div>
      </form>
    </div>
  );
}
