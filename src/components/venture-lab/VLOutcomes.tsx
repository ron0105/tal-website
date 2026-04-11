"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const outcomes = [
  {
    decision: "Build",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.04)",
    border: "rgba(34,197,94,0.12)",
    title: "The idea holds up. Build it.",
    body: "You get a clear build brief: what to build, who to build it for, what to charge, and which assumptions to keep testing. No ambiguity about what version one should be.",
  },
  {
    decision: "Pivot",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.04)",
    border: "rgba(245,158,11,0.12)",
    title: "Something needs to change. Here's what.",
    body: "The core idea has signal — but something is wrong. We tell you exactly what: the wrong customer, the wrong price, the wrong problem framing. A new direction, not a dead end.",
  },
  {
    decision: "Kill",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.04)",
    border: "rgba(239,68,68,0.12)",
    title: "The market doesn't support it. Stop now.",
    body: "A clean stop is not a failure. It is capital preserved and time protected. You leave with a clear explanation of why — and what, if anything, is worth taking from the wreckage.",
  },
];

export default function VLOutcomes() {
  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">Every sprint ends here</span>
            <h2 className="text-section-title text-white">
              Three possible
              <br />
              <span style={{ color: "#2a2a2a" }}>outcomes.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: "#999" }}>
              The criteria for each decision are defined before the sprint
              starts — not invented at the end. What you find is the evidence.
              What you decide is the outcome. No surprises.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {outcomes.map((o, i) => (
            <AnimateOnScroll key={o.decision} delay={0.08 * i}>
              <div
                className="flex flex-col gap-5 p-7 md:p-8 h-full"
                style={{
                  border: `1px solid ${o.border}`,
                  borderRadius: "2px",
                  background: o.bg,
                }}
              >
                <span
                  className="text-xs font-black tracking-widest uppercase"
                  style={{ color: o.color, letterSpacing: "0.12em" }}
                >
                  {o.decision}
                </span>
                <h3
                  className="text-subsection text-white leading-snug"
                >
                  {o.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  {o.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.25} className="mt-12">
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8"
            style={{ border: "1px solid rgba(37,99,235,0.15)", borderRadius: "4px", background: "rgba(37,99,235,0.03)" }}
          >
            <div>
              <p
                className="font-black tracking-tight mb-2"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "#fff", letterSpacing: "-0.02em" }}
              >
                Start your validation sprint.
              </p>
              <p className="text-sm" style={{ color: "#666" }}>
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
