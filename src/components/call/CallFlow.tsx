"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CALL,
  QUESTIONS,
  Answers,
  Band,
  Contact,
  EMPTY_ANSWERS,
  EMPTY_CONTACT,
  MANY_SEP,
  answerLines,
  scoreLead,
  validContact,
  whatsappLink,
} from "@/lib/call";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Cal.com embed ───────────────────────────────────────────────────────────

type CalFn = ((...args: unknown[]) => void) & { ns: Record<string, (...args: unknown[]) => void> };

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

// Cal.com's official loader snippet, kept as published so it matches their docs
function installCal() {
  if (window.Cal) return;
  /* eslint-disable */
  (function (C: any, A: string, L: string) { let p = function (a: any, ar: any) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api: any = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  /* eslint-enable */
}

function Calendar({ notes, name, onBooked }: { notes: string; name: string; onBooked: () => void }) {
  const started = useRef(false);
  const booked = useRef(onBooked);
  useEffect(() => {
    booked.current = onBooked;
  }, [onBooked]);

  useEffect(() => {
    // Strict mode runs effects twice in dev; one calendar is enough
    if (started.current) return;
    started.current = true;
    installCal();
    const Cal = window.Cal!;
    Cal("init", "tal-call", { origin: "https://app.cal.com" });
    const cal = Cal.ns["tal-call"];
    cal("inline", {
      elementOrSelector: "#tal-call-calendar",
      calLink: CALL.calLink,
      config: { layout: "month_view", theme: "light", notes, name },
    });
    cal("ui", {
      theme: "light",
      layout: "month_view",
      hideEventTypeDetails: false,
      cssVarsPerTheme: { light: { "cal-brand": "#0E6B68" } },
    });
    // Cal.com renamed this event; listen for both so an upgrade on their side doesn't break the hand-off
    cal("on", { action: "bookingSuccessfulV2", callback: () => booked.current() });
    cal("on", { action: "bookingSuccessful", callback: () => booked.current() });
  }, [notes, name]);

  return <div id="tal-call-calendar" className="w-full overflow-auto" style={{ minHeight: 600 }} />;
}

// ─── Small pieces ────────────────────────────────────────────────────────────

function Chip({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className="px-4 py-2.5 text-sm font-semibold transition-colors text-left"
      style={{
        borderRadius: "var(--radius-btn)",
        border: `1px solid ${on ? "var(--brand)" : "var(--border-color)"}`,
        background: on ? "var(--brand)" : "#fff",
        color: on ? "#fff" : "var(--text-body)",
      }}
    >
      {label}
    </button>
  );
}

function WAIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Main flow ───────────────────────────────────────────────────────────────

// questions: one question per screen · contact: name and number · then one ending per band
// (Hot books a time; Warm and Early hear from Rohan on WhatsApp). The band is never shown to the lead.
type Stage = "questions" | "contact" | "times" | "booked" | "asked" | "waiting";

const inputStyle = {
  background: "#fff",
  border: "1px solid var(--border-color)",
  color: "var(--text-primary)",
  borderRadius: "var(--radius-btn)",
};
const inputClass = "w-full px-4 py-3 text-base outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(14,107,104,0.18)]";

export default function CallFlow() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<Answers>(EMPTY_ANSWERS);
  const [other, setOther] = useState("");
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [errors, setErrors] = useState<Partial<Record<keyof Contact, string>>>({});
  const [honeypot, setHoneypot] = useState("");
  const [stage, setStage] = useState<Stage>("questions");
  const [band, setBand] = useState<Band>("Warm");
  const [saved, setSaved] = useState<boolean | null>(null);
  const [nudge, setNudge] = useState(false);
  const startedAt = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const q = QUESTIONS[step];
  const firstName = contact.name.trim().split(/\s+/)[0] || "";

  // "Something else" becomes whatever they typed, so the notes read naturally
  const answers: Answers = {
    ...picked,
    business: picked.business === "Something else" ? other.trim() || "Something else" : picked.business,
  };
  const lines = [
    `Name: ${contact.name.trim()}`,
    `Business name: ${contact.company.trim()}`,
    ...answerLines(answers),
  ];

  // Keep the card in view as the screens change, without jumping when it's already visible
  const moved = useRef(false);
  useEffect(() => {
    const el = cardRef.current;
    if (!moved.current) {
      moved.current = true;
      return;
    }
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.6) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, stage]);

  useEffect(() => {
    if (stage === "booked" || stage === "asked" || stage === "waiting") {
      doneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [stage]);

  const next = () => {
    if (!q.optional && !picked[q.id]) {
      setNudge(true);
      return;
    }
    setNudge(false);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setStage("contact");
  };

  const back = () => {
    setNudge(false);
    if (stage === "contact") setStage("questions");
    else if (step > 0) setStep(step - 1);
  };

  // Set while a tap is moving to the next screen, so a quick second tap can't skip a question
  const advancing = useRef(false);
  const pickOne = (opt: string) => {
    if (advancing.current) return;
    setPicked((p) => ({ ...p, [q.id]: opt }));
    setNudge(false);
    // Tapping an answer moves on by itself, except where a text box opens
    if (opt === q.other) return;
    advancing.current = true;
    setTimeout(() => {
      advancing.current = false;
      if (step < QUESTIONS.length - 1) setStep(step + 1);
      else setStage("contact");
    }, 220);
  };

  const toggleMany = (opt: string) => {
    const now = picked[q.id] ? picked[q.id].split(MANY_SEP) : [];
    const list = now.includes(opt) ? now.filter((o) => o !== opt) : [...now, opt];
    // Stored in the order shown, so the notes always read the same way
    setPicked((p) => ({ ...p, [q.id]: q.options.filter((o) => list.includes(o)).join(MANY_SEP) }));
    setNudge(false);
  };

  const submit = () => {
    const errs = validContact(contact);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const result = scoreLead(answers);
    setBand(result.band);
    setSaved(null);
    setStage(result.band === "Hot" ? "times" : "waiting");

    // Saved in the background: Google can take ~20s to answer, and nobody should wait for it.
    // If it doesn't save, the ending swaps to a WhatsApp button so the lead still reaches Rohan.
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...contact, answers, website: honeypot, startedAt: startedAt.current }),
    })
      .then((r) => r.json())
      .then((d: { saved?: boolean }) => setSaved(d.saved === true))
      .catch(() => setSaved(false));
  };

  // The tal-whatsapp-sync skill spots these two messages by their first line to move the lead in the
  // tracker. If either opening changes, update that skill's "Call page flow" table too.
  const askOnWhatsApp = whatsappLink(
    [`Hi Rohan, I'd like a ${CALL.minutes}-minute call with TAL.`, "", ...lines, "", "What times work for you?"].join("\n"),
  );
  const reminderOnWhatsApp = whatsappLink(
    [`Hi Rohan, I just booked a ${CALL.minutes}-minute call with TAL. Please send me a reminder here.`, "", ...lines].join("\n"),
  );

  const asking = stage === "questions" || stage === "contact";
  const total = QUESTIONS.length + 1;
  const at = stage === "contact" ? total : step + 1;
  const manyPicked = q.kind === "many" && picked[q.id] ? picked[q.id].split(MANY_SEP) : [];

  return (
    <div className="flex flex-col gap-14">
      {/* Hello */}
      <section>
        {CALL.videoId ? (
          <div className="relative w-full aspect-video overflow-hidden rounded-[4px]" style={{ background: "var(--bg-lift)" }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${CALL.videoId}?rel=0&modestbranding=1`}
              title="A 2-minute hello from Rohan at TAL"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ) : (
          <div
            className="flex items-start gap-5 p-6 rounded-[4px] border"
            style={{ borderColor: "var(--border-color)", background: "#fff" }}
          >
            <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
              <Image src="/founders/rohan.png" alt="Rohan, who runs TAL" fill className="object-cover object-top" sizes="80px" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
                Hi, I&apos;m Rohan. I run TAL.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                We help businesses grow with clear strategy, a strong online presence, and quick replies to every
                enquiry. A few quick answers help me see where you are, so our time together is useful from the first
                minute.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Questions, then contact: one screen at a time */}
      {asking && (
        <section ref={cardRef} className="scroll-mt-32">
          <div className="flex items-center justify-between mb-3 text-sm" style={{ color: "var(--text-muted)" }}>
            <span>
              Step {at} of {total}
            </span>
            {(step > 0 || stage === "contact") && (
              <button type="button" onClick={back} className="underline underline-offset-4">
                Back
              </button>
            )}
          </div>
          <div className="h-1 w-full mb-8 rounded-full overflow-hidden" style={{ background: "var(--border-color)" }}>
            <motion.div
              className="h-full"
              style={{ background: "var(--brand)" }}
              initial={false}
              animate={{ width: `${(at / total) * 100}%` }}
              transition={{ duration: 0.4, ease: EASE }}
            />
          </div>

          {/* Fade in only, no exit animation: the next question must appear even if animations stall */}
          {stage === "questions" ? (
            <motion.fieldset
              key={q.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="flex flex-col gap-3"
            >
              <legend className="mb-2" style={{ color: "var(--text-primary)", fontSize: "clamp(1.35rem, 3vw, 1.7rem)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
                {q.label}
              </legend>
              <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                {q.kind === "many" ? "Pick as many as you like." : q.kind === "text" ? "A line or two is plenty. You can skip this one." : "One tap."}
              </p>

              {q.kind === "text" ? (
                <textarea
                  aria-label={q.label}
                  placeholder="For example: more patient bookings from Google"
                  maxLength={300}
                  rows={3}
                  value={picked[q.id]}
                  onChange={(e) => setPicked((p) => ({ ...p, [q.id]: e.target.value }))}
                  className={inputClass}
                  style={inputStyle}
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt) => (
                    <Chip
                      key={opt}
                      label={opt}
                      on={q.kind === "many" ? manyPicked.includes(opt) : picked[q.id] === opt}
                      onClick={() => (q.kind === "many" ? toggleMany(opt) : pickOne(opt))}
                    />
                  ))}
                </div>
              )}

              {q.other && picked[q.id] === q.other && (
                <input
                  aria-label={`${q.label} Tell us in a few words`}
                  placeholder="Tell us in a few words"
                  maxLength={120}
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                />
              )}

              {(q.kind !== "one" || picked[q.id] === q.other) && (
                <div className="mt-4">
                  <button type="button" onClick={next} className="btn-primary" style={{ padding: "14px 28px", fontSize: "1rem" }}>
                    {q.kind === "text" && !picked[q.id].trim() ? "Skip" : "Next"}
                  </button>
                </div>
              )}
              {nudge && (
                <p role="alert" className="text-sm font-semibold" style={{ color: "var(--accent-hover)" }}>
                  {q.kind === "many" ? "Pick at least one to carry on." : "Pick one to carry on."}
                </p>
              )}
            </motion.fieldset>
          ) : (
            <motion.form
              key="contact"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="flex flex-col gap-4"
              noValidate
            >
              <h2 style={{ color: "var(--text-primary)", fontSize: "clamp(1.35rem, 3vw, 1.7rem)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
                Last step: where can we reach you?
              </h2>
              {(
                [
                  ["name", "Your name", "text", "name"],
                  ["phone", "WhatsApp number", "tel", "tel"],
                  ["company", "Business name or website", "text", "organization"],
                ] as const
              ).map(([key, label, type, auto]) => (
                <label key={key} className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {label}
                  </span>
                  <input
                    type={type}
                    autoComplete={auto}
                    inputMode={type === "tel" ? "tel" : undefined}
                    maxLength={key === "company" ? 120 : key === "phone" ? 20 : 80}
                    value={contact[key]}
                    onChange={(e) => setContact((c) => ({ ...c, [key]: e.target.value }))}
                    aria-invalid={Boolean(errors[key])}
                    className={inputClass}
                    style={{ ...inputStyle, borderColor: errors[key] ? "var(--accent-hover)" : "var(--border-color)" }}
                  />
                  {errors[key] && (
                    <span role="alert" className="text-sm" style={{ color: "var(--accent-hover)" }}>
                      {errors[key]}
                    </span>
                  )}
                </label>
              ))}
              {/* Hidden from people; bots fill it in */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />
              <div className="mt-2">
                <button type="submit" className="btn-primary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
                  See my next step
                </button>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                We use your answers only to plan the call and reach you about it.{" "}
                <Link href="/privacy" target="_blank" className="underline underline-offset-4">
                  Privacy notice
                </Link>
              </p>
            </motion.form>
          )}
        </section>
      )}

      {/* Hot: book straight into Rohan's free slots */}
      {stage === "times" && (
        <section ref={cardRef} className="scroll-mt-32">
          <p className="label-eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Good news{firstName ? `, ${firstName}` : ""}
          </p>
          <h2 className="mb-3" style={{ color: "var(--text-primary)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>
            Pick a time with Rohan.
          </h2>
          <p className="text-base mb-6" style={{ color: "var(--text-body)" }}>
            From what you shared, a {CALL.minutes}-minute call is the right next step. These are the times Rohan is free.
          </p>
          {CALL.calLink ? (
            <div className="flex flex-col gap-4">
              <div className="rounded-[4px] border overflow-hidden" style={{ borderColor: "var(--border-color)", background: "#fff" }}>
                <Calendar notes={lines.join("\n")} name={contact.name.trim()} onBooked={() => setStage("booked")} />
              </div>
              <button type="button" onClick={() => setStage("booked")} className="self-start text-sm font-semibold underline underline-offset-4" style={{ color: "var(--brand)" }}>
                Booked? Get your WhatsApp reminder
              </button>
            </div>
          ) : (
            <a
              href={askOnWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setStage("asked")}
              className="btn-primary"
              style={{ padding: "16px 32px", fontSize: "1rem" }}
            >
              <WAIcon />
              Pick a time on WhatsApp
            </a>
          )}
        </section>
      )}

      {/* After booking: reminder, what to expect, common questions */}
      <AnimatePresence>
        {(stage === "booked" || stage === "asked" || stage === "waiting") && (
          <motion.section
            ref={doneRef}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="scroll-mt-32 p-8 md:p-12 rounded-[4px]"
            style={{ background: "var(--brand)", color: "#fff" }}
          >
            <p className="label-eyebrow mb-5" style={{ color: "var(--accent-on-brand)" }}>
              {stage === "booked" ? "You're booked" : stage === "asked" ? "Message on its way" : `Thank you${firstName ? `, ${firstName}` : ""}`}
            </p>
            <h2 className="mb-5" style={{ color: "#fff", fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}>
              {stage === "booked"
                ? "See you soon."
                : stage === "asked"
                  ? "We'll reply with a few times."
                  : saved === false
                    ? "One tap to send us your answers."
                    : band === "Warm"
                      ? "We'll WhatsApp you a time."
                      : "We'll be in touch on WhatsApp."}
            </h2>

            {stage === "booked" ? (
              <>
                <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.82)", maxWidth: 520 }}>
                  Your confirmation is in your email. One last tap and we&apos;ll remind you on WhatsApp before the call.
                </p>
                <a
                  href={reminderOnWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 text-base font-bold mb-10"
                  style={{ background: "#fff", color: "var(--brand)", borderRadius: "var(--radius-btn)" }}
                >
                  <WAIcon />
                  Remind me on WhatsApp
                </a>
              </>
            ) : stage === "waiting" ? (
              saved === false ? (
                <>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.82)", maxWidth: 520 }}>
                    Send your answers on WhatsApp and Rohan will reply with a time that suits you both.
                  </p>
                  <a
                    href={askOnWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-4 text-base font-bold mb-10"
                    style={{ background: "#fff", color: "var(--brand)", borderRadius: "var(--radius-btn)" }}
                  >
                    <WAIcon />
                    Send on WhatsApp
                  </a>
                </>
              ) : (
                <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.82)", maxWidth: 520 }}>
                  {band === "Warm"
                    ? "Rohan will look at your answers and message you within a working day with two times for a call."
                    : "Rohan will look at your answers and message you with a good next step for where you are right now."}{" "}
                  Want to talk sooner?{" "}
                  <a href={askOnWhatsApp} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: "#fff" }}>
                    Message us on WhatsApp
                  </a>
                  .
                </p>
              )
            ) : (
              <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.82)", maxWidth: 520 }}>
                Rohan usually replies within a few hours on working days. Didn&apos;t send?{" "}
                <a href={askOnWhatsApp} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: "#fff" }}>
                  Open WhatsApp again
                </a>
                .
              </p>
            )}

            <p className="label-eyebrow mb-4" style={{ color: "var(--accent-on-brand)" }}>
              On the call
            </p>
            <div className="grid sm:grid-cols-3 gap-px mb-10" style={{ background: "rgba(255,255,255,0.14)" }}>
              {[
                ["You tell us", "How enquiries reach you today, and what happens next."],
                ["We look together", "Where more of those enquiries can turn into customers."],
                ["You take away", "2 or 3 ideas you can use straight away."],
              ].map(([when, what]) => (
                <div key={when} className="p-5" style={{ background: "var(--brand)" }}>
                  <p className="font-poppins text-lg mb-1" style={{ color: "var(--accent-on-brand)" }}>
                    {when}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {what}
                  </p>
                </div>
              ))}
            </div>

            <p className="label-eyebrow mb-4" style={{ color: "var(--accent-on-brand)" }}>
              Good to know
            </p>
            <dl className="flex flex-col gap-5" style={{ maxWidth: 620 }}>
              {[
                ["Is the call free?", `Yes. It takes ${CALL.minutes} minutes, and the ideas are yours to keep.`],
                ["Do I need to prepare?", "Nothing to prepare. If you can, have a rough idea of how many enquiries came in last week."],
                ["Who will I talk to?", "Rohan, who runs TAL. You speak to the person who does the work."],
                ["Need a different time?", "Use the link in your confirmation email, or just message us on WhatsApp."],
              ].map(([q, a]) => (
                <div key={q}>
                  <dt className="font-semibold mb-1" style={{ color: "#fff" }}>
                    {q}
                  </dt>
                  <dd className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {a}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/"
              className="inline-flex items-center text-sm font-bold mt-10"
              style={{ color: "#fff", borderBottom: "1px solid var(--accent-on-brand)", paddingBottom: 2 }}
            >
              See what TAL does →
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
