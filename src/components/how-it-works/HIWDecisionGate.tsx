"use client";

import Link from "next/link";
import { AnimateOnScroll, AnimatedLine } from "@/components/shared/AnimateOnScroll";

const outcomes = [
  {
    label: "Build.",
    description:
      "The idea is validated. Real customers confirmed the problem. At least one paid or pre-committed. The unit economics work. You know exactly what to build and who to build it for.",
    gets: "A build brief — scope, target customer profile, pricing, and a 90-day roadmap.",
  },
  {
    label: "Pivot.",
    description:
      "The core idea has signal — but something is wrong. The wrong customer, the wrong price, the wrong framing. We tell you exactly what changed and what to test next. A new direction, not a dead end.",
    gets: "A pivot brief — defined direction change, what to retest, and a new sprint plan.",
  },
  {
    label: "Kill.",
    description:
      "The evidence doesn't support building this. No one confirmed the problem strongly enough. Nobody paid. The economics don't work at any realistic price. A clean stop saves months and capital.",
    gets: "A kill memo — why, what we learned, and what (if anything) is worth keeping.",
  },
];

export default function HIWDecisionGate() {
  return (
    <section
      style={{
        paddingTop: "clamp(5rem, 10vh, 8rem)",
        paddingBottom: "clamp(7rem, 14vh, 11rem)",
        background: "var(--bg-secondary)",
      }}
    >
      <AnimatedLine className="mb-20 opacity-50" />
      <div className="layout-grid px-6 md:px-10">

        <AnimateOnScroll>
          <p className="label-eyebrow mb-8">Stage 6 — Decision Gate</p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            Every sprint ends
            <br />
            <span style={{ color: "var(--text-muted)" }}>with a clear answer.</span>
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.8,
              color: "var(--text-body)",
              maxWidth: "560px",
              marginBottom: "clamp(5rem, 10vh, 8rem)",
            }}
          >
            The decision criteria are defined before the sprint starts — not invented at the end.
            Three outcomes are possible. All are valid.
          </p>
        </AnimateOnScroll>

        {/* Three outcomes — full width vertical stack, no cards */}
        <div>
          {outcomes.map((o, i) => (
            <AnimateOnScroll key={o.label} delay={0.08 * i}>
              <div
                style={{
                  paddingTop: "clamp(2.5rem, 5vh, 4rem)",
                  paddingBottom: "clamp(2.5rem, 5vh, 4rem)",
                }}
              >
                <AnimatedLine className="mb-12" />
                <h3
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.035em",
                    lineHeight: 1.0,
                    color: "var(--text-primary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {o.label}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "var(--text-body)",
                    maxWidth: "640px",
                    marginBottom: "2rem",
                  }}
                >
                  {o.description}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  You receive&thinsp;→&thinsp;
                  <span
                    style={{
                      fontWeight: 600,
                      textTransform: "none",
                      letterSpacing: "0",
                      color: "var(--text-primary)",
                    }}
                  >
                    {o.gets}
                  </span>
                </p>
              </div>
            </AnimateOnScroll>
          ))}

          {/* closing CTA — plain, no container */}
          <AnimateOnScroll>
            <div
              style={{
                paddingTop: "clamp(3rem, 6vh, 5rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              <AnimatedLine className="mb-12" />
              <p
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "var(--text-primary)",
                  maxWidth: "480px",
                }}
              >
                Bring us a problem worth solving.
              </p>
              <Link href="/work-with-us" className="btn-primary">
                Start a Validation Sprint
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
