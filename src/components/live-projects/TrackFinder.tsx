"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ReserveStep from "./ReserveStep";
import { useVariant } from "./VariantContext";
import {
  Answers,
  Contact,
  ContactErrors,
  NOTE_MAX,
  PRICE_LOWER,
  QUESTIONS,
  QuestionId,
  SCREENS,
  SEATS_PER_ROUND,
  TRACKS,
  TrackId,
  emptyAnswers,
  depositLabel,
  emptyContact,
  feeLabel,
  isAsked,
  recommendTrack,
  validateContact,
} from "@/lib/live-projects";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const inputStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid var(--border-color)",
  color: "var(--text-primary)",
  borderRadius: "var(--radius-btn)",
};
const inputClass =
  "w-full px-4 py-3 text-base outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(14,107,104,0.18)]";

const question = (id: QuestionId) => QUESTIONS.find((q) => q.id === id)!;

function Options({ id, value, onPick }: { id: QuestionId; value: string; onPick: (v: string) => void }) {
  const q = question(id);
  return (
    <div className="grid sm:grid-cols-2 gap-3" role="group" aria-label={q.title}>
      {q.options!.map((o) => {
        const on = value === o;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={on}
            onClick={() => onPick(o)}
            className="text-left px-5 py-4 text-base transition-colors"
            style={{
              borderRadius: "var(--radius-btn)",
              border: `1px solid ${on ? "var(--brand)" : "var(--border-color)"}`,
              background: on ? "var(--brand)" : "#fff",
              color: on ? "#fff" : "var(--text-primary)",
              fontWeight: on ? 600 : 500,
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{label}</label>
      {children}
      {error && <p role="alert" className="text-xs font-semibold" style={{ color: "var(--accent-hover)" }}>{error}</p>}
    </div>
  );
}

export default function TrackFinder() {
  // Neither value is rendered, so creating them on first render is safe for hydration
  const [sessionId] = useState(() => (typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2, 14) + "-lp"));
  const { variant } = useVariant();
  const book = variant === "a";
  // The sheet already stores the session id on every row, so the variant rides in its first
  // letter ("a-", "b-", "c-"). Filter the Session column by that prefix to split the variants.
  const session = `${variant}-${sessionId}`;
  const [startedAt] = useState(() => Date.now());

  const [step, setStep] = useState(0); // 0..SCREENS.length-1 = questions, SCREENS.length = result
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [track, setTrack] = useState<TrackId>("research");
  const [contact, setContact] = useState<Contact>(emptyContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [website, setWebsite] = useState(""); // honeypot
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [failure, setFailure] = useState("");
  const top = useRef<HTMLDivElement>(null);

  const total = SCREENS.length;
  const onResult = step === total;
  const shown = (a: Answers) => (SCREENS[step] ?? []).filter((id) => isAsked(question(id), a));
  const screen = shown(answers);

  const go = (n: number) => {
    setStep(n);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const post = (body: Record<string, unknown>) =>
    fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session, variant, startedAt, website, answers, ...body }),
      keepalive: true,
    });

  const finish = (a: Answers) => {
    setTrack(recommendTrack(a));
    go(total);
    // Fire and forget: the answers are the demand data, whether or not they reserve
    post({ stage: "answers" }).catch(() => {});
  };

  const pick = (id: QuestionId, v: string) => {
    const next = { ...answers, [id]: v };
    if (id === "price" && v !== PRICE_LOWER) next.fairPrice = "";
    setAnswers(next);
    // Screens with one question move on by themselves
    if (shown(next).length === 1) setTimeout(() => go(step + 1), 220);
  };

  const screenDone = screen.every((id) => id === "note" || answers[id]);

  async function reserve(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validateContact(contact);
    setErrors(e);
    if (Object.keys(e).length) return;
    setSending(true);
    setFailure("");
    try {
      const res = await post({ stage: "reserve", track, contact });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: ContactErrors };
      if (data.ok) {
        setDone(true);
        top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        if (data.errors) setErrors(data.errors);
        setFailure(data.error || "Please try again in a moment.");
      }
    } catch {
      setFailure("Please check your connection and try again.");
    }
    setSending(false);
  }

  const setC = <K extends keyof Contact>(k: K, v: Contact[K]) => {
    setContact((x) => ({ ...x, [k]: v }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const t = TRACKS[track];

  return (
    <div ref={top} className="scroll-mt-28 p-6 md:p-10" style={{ background: "#fff", border: "1px solid var(--border-color)", borderRadius: "var(--radius-card)" }}>
      {/* Progress */}
      <div className="flex items-center justify-between mb-3">
        <span className="label-eyebrow" style={{ color: "var(--brand)" }}>
          {onResult ? "Your track" : `Question ${step + 1} of ${total}`}
        </span>
        {step > 0 && !done && (
          <button type="button" onClick={() => go(step - 1)} className="text-sm underline underline-offset-4" style={{ color: "var(--text-muted)" }}>
            ← Back
          </button>
        )}
      </div>
      <div className="h-1 w-full mb-8 overflow-hidden" style={{ background: "var(--border-subtle)", borderRadius: 2 }}>
        <div className="h-full transition-all duration-500" style={{ width: `${(Math.min(step, total) / total) * 100}%`, background: "var(--accent)" }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={done ? "done" : step}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          {!onResult && (
            <div className="flex flex-col gap-8">
              {screen.map((id) => (
                <div key={id}>
                  <h3 className={question(id).lead ? "mb-2" : "mb-5"} style={{ color: "var(--text-primary)" }}>{question(id).title}</h3>
                  {question(id).lead && <p className="body-copy mb-5">{question(id).lead}</p>}
                  {id === "note" ? (
                    <>
                      <textarea
                        rows={4}
                        maxLength={NOTE_MAX}
                        className={inputClass}
                        style={inputStyle}
                        aria-label={question(id).title}
                        placeholder="For example: run a market study on my own, build a website with AI, pitch to a business owner."
                        value={answers.note}
                        onChange={(e) => setAnswers((a) => ({ ...a, note: e.target.value }))}
                      />
                      <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>Optional. We use it to shape your projects.</p>
                    </>
                  ) : (
                    <Options id={id} value={answers[id]} onPick={(v) => pick(id, v)} />
                  )}
                </div>
              ))}
              {screen.length > 1 || screen[0] === "note" ? (
                <div>
                  <button
                    type="button"
                    className="btn-primary"
                    style={{ padding: "13px 28px", opacity: screenDone ? 1 : 0.5 }}
                    disabled={!screenDone}
                    onClick={() => (step === total - 1 ? finish(answers) : go(step + 1))}
                  >
                    {step === total - 1 ? "Reveal my track →" : "Next →"}
                  </button>
                </div>
              ) : null}
            </div>
          )}

          {onResult && !done && (
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-3" style={{ color: "var(--text-primary)" }}>
                  Your track: <span style={{ color: "var(--accent)" }}>{t.name}.</span>
                </h3>
                <p className="body-copy mb-5">{t.line}</p>
                <p className="label-eyebrow mb-3">You leave with</p>
                <ul className="flex flex-col gap-3 mb-5">
                  {t.projects.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                      <span style={{ color: "var(--accent)" }} aria-hidden="true">→</span>{p}
                    </li>
                  ))}
                  <li className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                    <span style={{ color: "var(--accent)" }} aria-hidden="true">→</span>
                    Three founder reviews to learn from, a certificate that names your work, and, for top performers, an invitation to interview for a paid internship
                  </li>
                </ul>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>Prefer another track?</span>
                  {(Object.keys(TRACKS) as TrackId[]).filter((id) => id !== track).map((id) => (
                    <button key={id} type="button" onClick={() => setTrack(id)} className="text-sm px-3 py-1.5"
                      style={{ border: "1px solid var(--border-color)", borderRadius: "var(--radius-btn)", color: "var(--brand)" }}>
                      {TRACKS[id].name}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={reserve} noValidate className="flex flex-col gap-6 pt-8" style={{ borderTop: "1px solid var(--border-color)" }}>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                    {book ? "Book your seat in round 1" : "Apply for round 1"}
                  </p>
                  <p className="text-sm mb-2" style={{ color: "var(--text-body)" }}>
                    Built around what you told us: {answers.goal} · {answers.format} · {answers.when}.
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {SEATS_PER_ROUND} seats a round.{" "}
                    {book
                      ? `Next you pay ${depositLabel()} by UPI. Everyone who is not shortlisted gets it back in full.`
                      : `Applying is free. If you are shortlisted, the fee is ${feeLabel()}, covered by the guarantee.`}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="lp-name" label="Your name" error={errors.name}>
                    <input id="lp-name" className={inputClass} style={inputStyle} autoComplete="name"
                      value={contact.name} onChange={(e) => setC("name", e.target.value)} />
                  </Field>
                  <Field id="lp-email" label="Email" error={errors.email}>
                    <input id="lp-email" type="email" className={inputClass} style={inputStyle} autoComplete="email"
                      value={contact.email} onChange={(e) => setC("email", e.target.value)} />
                  </Field>
                  <Field id="lp-phone" label="WhatsApp number" error={errors.phone}>
                    <input id="lp-phone" type="tel" className={inputClass} style={inputStyle} autoComplete="tel"
                      value={contact.phone} onChange={(e) => setC("phone", e.target.value)} />
                  </Field>
                  <Field id="lp-college" label="College" error={errors.college}>
                    <input id="lp-college" className={inputClass} style={inputStyle} autoComplete="organization"
                      value={contact.college} onChange={(e) => setC("college", e.target.value)} />
                  </Field>
                </div>

                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden"
                  value={website} onChange={(e) => setWebsite(e.target.value)} />

                <div>
                  <label htmlFor="lp-consent" className="flex items-start gap-3 cursor-pointer">
                    <input id="lp-consent" type="checkbox" className="mt-1 w-4 h-4 flex-shrink-0 accent-[var(--brand)]"
                      checked={contact.consent} onChange={(e) => setC("consent", e.target.checked)} />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                      Save my details so TAL can contact me about this programme. I can ask for them to be deleted at
                      any time. See the <Link href="/privacy" className="underline underline-offset-4">privacy notice</Link>.
                    </span>
                  </label>
                  {errors.consent && (
                    <p role="alert" className="text-xs font-semibold mt-2 ml-7" style={{ color: "var(--accent-hover)" }}>{errors.consent}</p>
                  )}
                </div>

                {failure && <p role="alert" className="text-sm font-semibold" style={{ color: "var(--accent-hover)" }}>{failure}</p>}

                <div className="flex flex-wrap items-center gap-4">
                  <button type="submit" className="btn-primary" style={{ padding: "13px 28px" }} disabled={sending}>
                    {sending ? "Saving…" : book ? "Book my seat →" : "Submit my application →"}
                  </button>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>This step is free.</span>
                </div>
              </form>
            </div>
          )}

          {done && (
            <div>
              <h3 className="mb-4" style={{ color: "var(--text-primary)" }}>
                {book ? "Your details are in" : "Your application is in"}, {contact.name.trim().split(/\s+/)[0]}.
              </h3>
              <p className="body-copy mb-6">
                {book
                  ? `Your ${t.name} seat request is saved, and a confirmation is on its way to ${contact.email.trim()}.`
                  : `Your ${t.name} application is saved, and a confirmation is on its way to ${contact.email.trim()}. We'll be in touch once we've read it. Applying is free. If you're shortlisted, the fee is ${feeLabel()}, covered by the guarantee.`}
              </p>

              {book && <ReserveStep session={session} phone={contact.phone.trim()} post={(body) => post({ track, contact, ...body })} />}

              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Share this page with a friend who wants the same head start.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
