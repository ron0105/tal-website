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

          <div className="lg:col-span-6">
            <AnimateOnScroll>
              <span className="label-eyebrow block mb-8">System Rationale</span>
              <h2 className="text-section-title mb-12">
                Failed ideas
                <br />
                <span className="text-muted">started too early.</span>
              </h2>
              <div className="flex flex-col gap-8 mb-12">
                <p className="body-copy">
                  Not because the idea was bad, but because the founder built the
                  wrong version of it: for the wrong people, at the wrong price,
                  long before they checked.
                </p>
                <p className="body-copy !text-muted border-l-2 border-border-subtle pl-8">
                  Six months of building. One launch day. Zero paying customers.
                  That is the cost of skipping validation.
                </p>
                <p className="body-copy">
                  A Validation Sprint takes 4–6 weeks. It answers the questions
                  that most founders skip. It costs a fraction of what a failed
                  build does.
                </p>
              </div>

              <div className="mt-16 bg-bg-secondary p-8 border border-border-subtle italic">
                <p className="text-xl font-black tracking-tight leading-relaxed">
                  &ldquo;The real risk is not that the market rejects you. 
                  It&apos;s that you never found out what they actually wanted.&rdquo;
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.15} className="lg:col-span-6">
            <div className="border border-border-subtle bg-bg-secondary overflow-hidden">
              <div className="px-8 py-6 border-b border-border-subtle bg-bg-lift/30">
                <span className="label-eyebrow">
                  Diagnostic: Validated vs Skipped
                </span>
              </div>
              <div className="flex flex-col">
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
                    key={i}
                    className="grid grid-cols-2 border-b border-border-subtle last:border-0"
                  >
                    <div className="p-6 border-r border-border-subtle bg-bg-lift/5">
                      <div className="flex items-start gap-4">
                        <span className="text-[10px] font-black p-1 bg-text-primary text-background leading-none mt-1">PASS</span>
                        <span className="text-sm font-bold text-body italic tracking-tight">{row.right}</span>
                      </div>
                    </div>
                    <div className="p-6 opacity-40">
                      <div className="flex items-start gap-4">
                        <span className="text-[10px] font-black p-1 border border-text-muted text-muted leading-none mt-1">FAIL</span>
                        <span className="text-sm font-bold text-muted tracking-tight">{row.wrong}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
