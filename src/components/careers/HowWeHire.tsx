"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { HIRING_STEPS, REPLY_PROMISE_DAYS } from "@/lib/jobs";

export default function HowWeHire() {
  return (
    <section
      id="how-we-hire"
      className="py-24 md:py-32 scroll-mt-20"
      style={{ background: "var(--brand)" }}
    >
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-14 max-w-2xl">
          <span className="label-eyebrow mb-5 block" style={{ color: "rgba(255,255,255,0.5)" }}>
            How the cohort works
          </span>
          <h2 className="mb-4" style={{ color: "#FFFFFF" }}>
            Five steps. No quizzes. A real answer in a week.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "520px" }}>
            We judge real work, not interview polish. Every track follows the same
            path, so you always know where you stand.
          </p>
        </AnimateOnScroll>

        <ol
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {HIRING_STEPS.map((s, i) => (
            <li key={s.name} className="list-none" style={{ background: "var(--brand)" }}>
              <AnimateOnScroll delay={i * 0.06} className="h-full">
                <div className="card-lift-dark p-7 h-full" style={{ background: "var(--brand)" }}>
                  <p
                    className="font-poppins text-3xl mb-4"
                    style={{ color: "var(--accent-on-brand)", fontWeight: 500 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2" style={{ color: "#FFFFFF" }}>{s.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {s.detail}
                  </p>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ol>

        <AnimateOnScroll delay={0.2}>
          <p
            className="mt-10 text-base leading-relaxed max-w-2xl pl-5"
            style={{ color: "rgba(255,255,255,0.85)", borderLeft: "2px solid var(--accent-on-brand)" }}
          >
            <strong style={{ color: "var(--accent-on-brand)" }}>
              Everyone hears back within {REPLY_PROMISE_DAYS} days.
            </strong>{" "}
            If it&apos;s not a fit this time, we tell you plainly and keep your work
            on file for the next role.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
