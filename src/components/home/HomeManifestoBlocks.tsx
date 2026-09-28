"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";

const plans = [
  {
    type: "One-time setup",
    price: "₹25,000 – ₹1,00,000",
    description:
      "We come in, identify the gaps, and set up the systems. One clear project with a defined scope and a clear end point.",
    tags: ["Team structure", "Process design", "Communication clarity"],
  },
  {
    type: "Ongoing support",
    price: "₹15,000 – ₹50,000 / month",
    description:
      "We work with you month to month, refining systems, tracking what works, and adjusting as your business grows.",
    tags: ["Monthly check-ins", "System refinement", "Growth support"],
    highlight: true,
  },
  {
    type: "International clients",
    price: "Pricing on request",
    description:
      "We work with businesses globally. Pricing is shared after a brief conversation to understand your business and what you need.",
    tags: ["USD / GBP / EUR", "Tailored scope", "Remote-first"],
  },
];

export default function HomeManifestoBlocks() {
  return (
    <section id="pricing" className="padding-section bg-background border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-8 block">Pricing</span>
          <h2>
            Simple, clear pricing.
            <br />
            <span className="text-muted">No surprises.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle">
          {plans.map((plan, i) => (
            <AnimateOnScroll key={plan.type} delay={i * 0.08}>
              <div
                className="h-full flex flex-col gap-6 p-8 md:p-10"
                style={{ background: plan.highlight ? "var(--bg-secondary)" : "var(--bg)" }}
              >
                <span className="label-eyebrow">{plan.type}</span>
                <p
                  style={{
                    fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    color: "var(--text-primary)",
                  }}
                >
                  {plan.price}
                </p>
                <p className="text-base leading-relaxed flex-1" style={{ color: "var(--text-body)" }}>
                  {plan.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {plan.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold px-3 py-1.5"
                      style={{
                        background: "var(--bg-lift)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
