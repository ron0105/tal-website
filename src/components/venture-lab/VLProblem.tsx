"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function VLProblem() {
  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <AnimateOnScroll>
              <span className="label-eyebrow block mb-6">The real problem</span>
              <h2 className="text-section-title text-white mb-6">
                Most ideas fail
                <br />
                <span style={{ color: "#2a2a2a" }}>too early.</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#999" }}>
                Not because the market was too small. Not because the idea was
                bad. Because the founder built the wrong version of it — for
                the wrong customer, at the wrong price — before checking.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#777" }}>
                Six months of building. One launch day. Zero paying customers.
                That is the cost of skipping validation.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#555" }}>
                A Validation Sprint takes 4–6 weeks. It answers the questions
                that most founders skip. It costs a fraction of what a failed
                build does.
              </p>

              <div className="mt-10 pl-5 py-1" style={{ borderLeft: "2px solid #2563EB" }}>
                <p
                  className="text-base font-semibold"
                  style={{ color: "#888", letterSpacing: "-0.01em" }}
                >
                  &ldquo;The real risk is not that the market rejects you.
                  <br />It&apos;s that you never found out what they actually wanted.&rdquo;
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.15}>
            <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px" }}>
              <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="label-eyebrow" style={{ color: "#333" }}>
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
                  style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                >
                  <div className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-xs" style={{ color: "#888" }}>{row.right}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span className="text-xs" style={{ color: "#666" }}>{row.wrong}</span>
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
