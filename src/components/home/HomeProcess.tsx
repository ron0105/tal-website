"use client";

import Link from "next/link";
import { AnimateOnScroll, AnimatedLine } from "@/components/shared/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "You bring the idea.",
    body: "No pitch deck. No business plan needed. Just tell us the problem you want to solve, including what you're still figuring out. That\'s exactly where we start.",
  },
  {
    n: "02",
    title: "We do the research.",
    body: "We use our 6-stage process: real customer conversations, demand testing, market signal analysis. All to give you a clear picture of where your idea stands.",
  },
  {
    n: "03",
    title: "You get a clear path forward.",
    body: "Build with confidence. Refine the approach. Or redirect your energy to something with a stronger signal. That alone saves months of time and real capital in the process.",
  },
];

export default function HomeProcess() {
  return (
    <section
      style={{
        paddingTop: "clamp(5rem, 10vh, 8rem)",
        paddingBottom: "clamp(5rem, 10vh, 8rem)",
        background: "var(--bg)",
      }}
    >
      <AnimatedLine />
      <div className="layout-grid px-6 md:px-10 mt-20">

        <AnimateOnScroll>
          <p className="label-eyebrow mb-8">How it works</p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              color: "var(--text-primary)",
              marginBottom: "clamp(3.5rem, 7vh, 6rem)",
            }}
          >
            Three steps.
            <br />
            <span style={{ color: "var(--text-muted)" }}>One confident decision.</span>
          </h2>
        </AnimateOnScroll>

        {/* Steps — full width, no side-by-side */}
        <div>
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.n} delay={0.1 * i}>
              <div
                style={{
                  paddingTop: "clamp(2rem, 4vh, 3.5rem)",
                  paddingBottom: "clamp(2rem, 4vh, 3.5rem)",
                  display: "flex",
                  gap: "2.5rem",
                  alignItems: "flex-start",
                }}
              >
                <AnimatedLine className="absolute top-0 left-0" />
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    fontVariantNumeric: "tabular-nums",
                    flexShrink: 0,
                    paddingTop: "0.5rem",
                  }}
                >
                  {step.n}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.1,
                      color: "var(--text-primary)",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "var(--text-body)",
                      maxWidth: "540px",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}

          <AnimateOnScroll>
            <div
              style={{
                paddingTop: "clamp(2.5rem, 5vh, 4rem)",
              }}
            >
              <AnimatedLine className="mb-12" />
              <Link href="/how-it-works" className="btn-ghost">
                Explore the full 6-stage process →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
