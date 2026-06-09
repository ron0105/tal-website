"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const outcomes = [
  {
    title: "A decision you can stand behind",
    body: "Go, don't go, or pivot — with the reasoning written down. No more lying awake re-arguing both sides at 2am.",
  },
  {
    title: "Evidence, not enthusiasm",
    body: "What real customers said, what the market actually looks like, what people will pay. Useful for investors. More useful for you.",
  },
  {
    title: "A next-90-days plan",
    body: "If it's a go: what to build first, who to sell to first, what to charge. If it's a no: what you learned, and what's worth exploring instead.",
  },
];

export default function NIOutcome() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-14 max-w-2xl">
          <span className="label-eyebrow mb-5 block" style={{ color: "var(--accent)" }}>What you walk away with</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--text-primary)",
            }}
          >
            Either way, you win.
          </h2>
          <p className="text-base leading-relaxed mt-5" style={{ color: "var(--text-muted)", maxWidth: "480px" }}>
            A validated idea is worth building. An invalidated one just saved you a year of your life. There&apos;s no version of this where knowing less was better.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((o, i) => (
            <AnimateOnScroll key={o.title} delay={i * 0.08}>
              <div className="pt-6" style={{ borderTop: "3px solid var(--accent)" }}>
                <h3 className="font-bold text-lg mb-3" style={{ color: "var(--text-primary)" }}>{o.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{o.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
