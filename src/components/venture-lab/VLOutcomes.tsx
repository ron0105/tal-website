"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const outcomes = [
  {
    decision: "Build",
    title: "The idea holds up. Build it.",
    body: "You get a clear build brief: what to build, who to build it for, what to charge, and which assumptions to keep testing. No ambiguity about what version one should be.",
  },
  {
    decision: "Pivot",
    title: "Something needs to change. Here's what.",
    body: "The core idea has signal — but something is wrong. We tell you exactly what: the wrong customer, the wrong price, the wrong problem framing. A new direction, not a dead end.",
  },
  {
    decision: "Kill",
    title: "The market doesn't support it. Stop now.",
    body: "A clean stop is not a failure. It is capital preserved and time protected. You leave with a clear explanation of why — and what, if anything, is worth taking from the wreckage.",
  },
];

export default function VLOutcomes() {
  return (
    <section
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-secondary)" }}
    >
      <div className="layout-grid">

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">Every sprint ends here</span>
            <h2 className="text-section-title text-foreground">
              Three possible
              <br />
              <span className="text-muted">outcomes.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
              The criteria for each decision are defined before the sprint
              starts — not invented at the end. What you find is the evidence.
              What you decide is the outcome. No surprises.
            </p>
          </AnimateOnScroll>
        </div>

        <div
          className="grid md:grid-cols-3"
          style={{ border: "1px solid var(--border-color)", gap: "1px", background: "var(--border-color)" }}
        >
          {outcomes.map((o, i) => (
            <AnimateOnScroll key={o.decision} delay={0.08 * i}>
              <div
                className="flex flex-col gap-5 p-7 md:p-8 h-full"
                style={{ background: "var(--bg)" }}
              >
                <span
                  className="text-xs font-black tracking-widest uppercase"
                  style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
                >
                  {o.decision}
                </span>
                <h3
                  className="text-subsection text-foreground leading-snug"
                >
                  {o.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {o.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.25} className="mt-12">
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8"
            style={{ border: "1px solid var(--border-color)", background: "var(--bg)" }}
          >
            <div>
              <p
                className="font-black tracking-tight mb-2"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Start your validation sprint.
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Tell us the problem. We&apos;ll tell you if it&apos;s worth building.
              </p>
            </div>
            <Link href="/work-with-us" className="flex-shrink-0 btn-primary">
              Start a Sprint
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
