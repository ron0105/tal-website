"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";

const industries = [
  "Retail", "Food & Beverage", "Professional Services",
  "Healthcare", "Education", "Real Estate",
  "Technology", "Manufacturing", "E-commerce", "Logistics",
];

export default function HomeProof() {
  return (
    <section className="bg-background py-16 md:py-20 border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">

        <AnimateOnScroll className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-muted">
            Worked with teams across
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full border border-border-subtle text-sm font-semibold text-muted"
                style={{ background: "var(--bg-secondary)" }}
              >
                {industry}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-12 pt-12 border-t border-border-subtle">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                value: "6-stage",
                label: "Structured validation framework: every idea goes through the same rigorous process.",
              },
              {
                value: "3-phase",
                label: "Business engagement model: listen, map, build. No guesswork at any step.",
              },
              {
                value: "One rule",
                label: "Understand the real problem before recommending any solution. Always.",
              },
            ].map((item) => (
              <div key={item.value}>
                <p
                  className="font-poppins mb-2"
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    letterSpacing: "-0.03em",
                    color: "var(--accent)",
                  }}
                >
                  {item.value}
                </p>
                <p className="text-sm leading-relaxed text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
