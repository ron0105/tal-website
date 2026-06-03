"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "Understand your business",
    body: "We start by listening: your team, your customers, your daily operations. No assumptions.",
  },
  {
    n: "02",
    title: "Find what's not working",
    body: "We identify the specific gaps causing confusion, dropped leads, or things that depend too much on you.",
  },
  {
    n: "03",
    title: "Set simple systems",
    body: "We create clear processes your team can actually follow, without needing you to explain everything.",
  },
  {
    n: "04",
    title: "Help your team use them",
    body: "We stay involved until the systems are running on their own and your business feels easier to manage.",
  },
];

export default function HomeTimeline() {
  return (
    <section className="padding-section bg-bg-secondary border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll>
          <span className="label-eyebrow mb-8 block">How we work</span>
          <h2 className="text-section-title mb-16">
            Simple steps.
            <br />
            <span className="text-muted">Real results.</span>
          </h2>
        </AnimateOnScroll>

        <div className="relative">
          <div
            className="absolute hidden md:block"
            style={{ left: "27px", top: 0, bottom: 0, width: "1px", background: "var(--border-subtle)" }}
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.n} delay={i * 0.08}>
                <div className="relative md:pl-20 flex items-start gap-5 md:gap-0">
                  <div
                    className="w-14 h-14 flex-shrink-0 hidden md:flex items-center justify-center text-sm font-black absolute left-0 top-0"
                    style={{
                      background: "var(--bg)",
                      border: "1.5px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {step.n}
                  </div>
                  <span className="text-2xl font-black md:hidden flex-shrink-0" style={{ color: "var(--text-muted)", minWidth: "2.5rem" }}>
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight" style={{ color: "var(--text-primary)" }}>
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
