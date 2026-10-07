"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CALL, QUESTIONS, Answers, Question, answerLines, whatsappLink } from "@/lib/call";

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

function Calendar({ notes, onBooked }: { notes: string; onBooked: () => void }) {
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
      config: { layout: "month_view", theme: "light", notes },
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
  }, [notes]);

  return <div id="tal-call-calendar" className="w-full overflow-auto" style={{ minHeight: 600 }} />;
}

// ─── Small pieces ────────────────────────────────────────────────────────────

function StepHead({ n, title, note }: { n: number; title: string; note?: string }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <span
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
        style={{ background: "var(--brand)", color: "#fff" }}
        aria-hidden="true"
      >
        {n}
      </span>
      <div>
        <h2 className="text-subsection" style={{ color: "var(--text-primary)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {title}
        </h2>
        {note && (
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

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

type Stage = "questions" | "times" | "booked" | "asked";

const EMPTY: Answers = { business: "", enquiries: "", goal: "" };

export default function CallFlow() {
  const [picked, setPicked] = useState<Answers>(EMPTY);
  const [other, setOther] = useState<Answers>(EMPTY);
  const [stage, setStage] = useState<Stage>("questions");
  const [nudge, setNudge] = useState(false);
  const doneRef = useRef<HTMLDivElement>(null);

  // "Something else" becomes whatever they typed, so the notes read naturally
  const resolve = (q: Question) =>
    q.other && picked[q.id] === q.other ? other[q.id].trim() || q.other : picked[q.id];
  const answers = Object.fromEntries(QUESTIONS.map((q) => [q.id, resolve(q)])) as Answers;
  const allAnswered = QUESTIONS.every((q) => picked[q.id]);
  const lines = answerLines(answers);

  const toTimes = () => {
    if (!allAnswered) {
      setNudge(true);
      return;
    }
    setStage("times");
  };

  useEffect(() => {
    if (stage === "booked" || stage === "asked") {
      doneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [stage]);

  // The tal-whatsapp-sync skill spots these two messages by their first line to move the lead in the
  // tracker. If either opening changes, update that skill's "Call page flow" table too.
  const askOnWhatsApp = whatsappLink(
    [`Hi Rohan, I'd like a ${CALL.minutes}-minute call with TAL.`, "", ...lines, "", "What times work for you?"].join("\n"),
  );
  const reminderOnWhatsApp = whatsappLink(
    [`Hi Rohan, I just booked a ${CALL.minutes}-minute call with TAL. Please send me a reminder here.`, "", ...lines].join("\n"),
  );

  const locked = stage !== "questions";

  return (
    <div className="flex flex-col gap-14">
      {/* 1. Hello video */}
      <section>
        <StepHead n={1} title={CALL.videoId ? "Watch a 2-minute hello" : "Meet Rohan"} />
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
                On a {CALL.minutes}-minute call, we look at how enquiries reach you today, and where more of them can
                turn into customers. You leave with 2 or 3 ideas you can use straight away, whether or not we work
                together.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 2. Three questions */}
      <section>
        <StepHead n={2} title="Answer 3 quick questions" note="One tap each. This helps us make the call useful for you." />
        <div className="flex flex-col gap-8">
          {QUESTIONS.map((q) => (
            <fieldset key={q.id} disabled={locked} className="flex flex-col gap-3 transition-opacity" style={{ opacity: locked ? 0.6 : 1 }}>
              <legend className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                {q.label}
              </legend>
              <div className="flex flex-wrap gap-2">
                {q.options.map((opt) => (
                  <Chip
                    key={opt}
                    label={opt}
                    on={picked[q.id] === opt}
                    onClick={() => {
                      setPicked((p) => ({ ...p, [q.id]: opt }));
                      setNudge(false);
                    }}
                  />
                ))}
              </div>
              {q.other && picked[q.id] === q.other && (
                <input
                  aria-label={`${q.label} Tell us in a few words`}
                  placeholder="Tell us in a few words"
                  maxLength={120}
                  value={other[q.id]}
                  onChange={(e) => setOther((o) => ({ ...o, [q.id]: e.target.value }))}
                  className="w-full px-4 py-3 text-base outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(14,107,104,0.18)]"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    borderRadius: "var(--radius-btn)",
                  }}
                />
              )}
            </fieldset>
          ))}
        </div>
      </section>

      {/* 3. Pick a time */}
      <section>
        <StepHead
          n={3}
          title="Pick a time"
          note={CALL.calLink ? `${CALL.minutes} minutes, on a video call.` : "Send your answers and we'll find a time together."}
        />

        {stage === "questions" && (
          <div className="flex flex-col gap-3 items-start">
            {CALL.calLink ? (
              <button type="button" onClick={toTimes} className="btn-primary" style={{ padding: "16px 32px", fontSize: "1rem" }}>
                See open times
              </button>
            ) : (
              <a
                href={allAnswered ? askOnWhatsApp : undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!allAnswered) {
                    e.preventDefault();
                    setNudge(true);
                    return;
                  }
                  setStage("asked");
                }}
                className="btn-primary"
                style={{ padding: "16px 32px", fontSize: "1rem", cursor: "pointer" }}
              >
                <WAIcon />
                Send my answers on WhatsApp
              </a>
            )}
            {nudge && (
              <p role="alert" className="text-sm font-semibold" style={{ color: "var(--accent-hover)" }}>
                Pick one answer for each question above first.
              </p>
            )}
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              We use your answers only to set up the call and remind you about it.{" "}
              <Link href="/privacy" target="_blank" className="underline underline-offset-4">
                Privacy notice
              </Link>
            </p>
          </div>
        )}

        {stage === "times" && (
          <div className="flex flex-col gap-4">
            <div className="rounded-[4px] border overflow-hidden" style={{ borderColor: "var(--border-color)", background: "#fff" }}>
              <Calendar notes={lines.join("\n")} onBooked={() => setStage("booked")} />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <button type="button" onClick={() => setStage("booked")} className="font-semibold underline underline-offset-4" style={{ color: "var(--brand)" }}>
                Booked? Get your WhatsApp reminder
              </button>
              <button type="button" onClick={() => setStage("questions")} className="underline underline-offset-4" style={{ color: "var(--text-muted)" }}>
                Change my answers
              </button>
            </div>
          </div>
        )}
      </section>

      {/* After booking: reminder, what to expect, common questions */}
      <AnimatePresence>
        {(stage === "booked" || stage === "asked") && (
          <motion.section
            ref={doneRef}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="scroll-mt-32 p-8 md:p-12 rounded-[4px]"
            style={{ background: "var(--brand)", color: "#fff" }}
          >
            <p className="label-eyebrow mb-5" style={{ color: "var(--accent-on-brand)" }}>
              {stage === "booked" ? "You're booked" : "Message on its way"}
            </p>
            <h2 className="mb-5" style={{ color: "#fff", fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}>
              {stage === "booked" ? "See you soon." : "We'll reply with a few times."}
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
