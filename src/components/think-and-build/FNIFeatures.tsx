"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const questions = [
  "Is this idea worth pursuing?",
  "Who is the real customer?",
  "What problem are you solving?",
  "How will this make money?",
  "What should you build first?",
];

export default function FNIFeatures() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-6 block text-accent">Clarity</span>
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
            What we help you figure out
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questions.map((q, i) => (
            <AnimateOnScroll key={i} delay={i * 0.07}>
              <div className="relative p-8 pb-14 rounded-2xl border border-border-subtle bg-bg-secondary overflow-hidden card-interactive" style={{ minHeight: "180px" }}>
                <p className="relative text-xl md:text-2xl font-bold font-poppins leading-tight text-primary">
                  {q}
                </p>

                {/* Decorative number — anchored to bottom-right, never overlaps */}
                <span
                  className="absolute bottom-2 right-5 font-black font-poppins select-none pointer-events-none"
                  style={{
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    color: "var(--border-color)",
                    userSelect: "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
