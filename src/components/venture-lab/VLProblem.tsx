"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function VLProblem() {
  return (
    <section
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg)" }}
    >
      <div className="layout-grid">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <AnimateOnScroll>
              <span className="label-eyebrow block mb-6">The real problem</span>
              <h2 
                className="text-foreground mb-8"
                style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em" }}
              >
                Failed ideas
                <br />
                <span className="text-muted">started too early.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-body)" }}>
                Not because the idea was bad, but because the founder built the
                wrong version of it: for the wrong people, at the wrong price,
                long before they checked.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-body)" }}>
                Six months of building. One launch day. Zero paying customers.
                That is the cost of skipping validation.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
                A Validation Sprint takes 4–6 weeks. It answers the questions
                that most founders skip. It costs a fraction of what a failed
                build does.
              </p>

              <div
                className="mt-10 pl-5 py-1"
                style={{ borderLeft: "2px solid var(--text-primary)" }}
              >
                <p
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-body)", letterSpacing: "-0.01em" }}
                >
                  &ldquo;The real risk is not that the market rejects you.
                  <br />It&apos;s that you never found out what they actually wanted.&rdquo;
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.15}>
            <div style={{ border: "1px solid var(--border-color)", background: "var(--bg-secondary)" }}>
              <div className="px-6 py-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <span className="label-eyebrow">
                  Validated vs Skipped
                </span>
              </div>
              {[
                {
                  right: "Talked to 15 real customers first",
                  wrong: "Assumed the problem existed",
                },
                {
                  right: "Ran a demand test before building",
                  wrong: "Built for 6 months, then found out",
                },
                {
                  right: "Tested pricing with real users",
                  wrong: "Hoped the numbers would work out",
                },
                {
                  right: "Built exactly what was validated",
                  wrong: "Built everything, prioritised nothing",
                },
              ].map((row, i) => (
                <div
                  key={row.right}
                  className="grid grid-cols-2 gap-4 px-6 py-4"
                  style={{ borderBottom: i < 3 ? "1px solid var(--border-subtle)" : "none" }}
                >
                  <div className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-xs" style={{ color: "var(--text-body)" }}>{row.right}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: "var(--text-muted)" }}>
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{row.wrong}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
