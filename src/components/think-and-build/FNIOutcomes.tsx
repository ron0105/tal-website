"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const outcomes = [
  "Clear direction",
  "Better decision-making",
  "Reduced risk",
  "Structured next steps",
];

export default function FNIOutcomes() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-6 block text-accent">Outcomes</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            What you walk away with
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="p-10 rounded-2xl bg-bg-secondary border border-border-subtle flex items-center gap-6 group hover:border-accent transition-all">
                <div className="w-12 h-12 rounded-full bg-white border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-xl md:text-2xl font-bold text-primary">
                  {item}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
