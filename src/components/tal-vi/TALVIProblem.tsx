"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const mistakes = [
  {
    action: "Hire people",
    before: "before roles are clear",
    result: "Everyone does everything. Nothing gets owned.",
  },
  {
    action: "Run ads",
    before: "before positioning is locked",
    result: "Spend without signal. Visibility without traction.",
  },
  {
    action: "Add tools",
    before: "before processes exist",
    result: "Automation of chaos. Not efficiency.",
  },
  {
    action: "Raise funding",
    before: "before the model is clean",
    result: "More capital. Same problems. Faster burn.",
  },
];

export default function TALVIProblem() {
  return (
    <section
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg)" }}
    >
      <div className="layout-grid">

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="lg:col-span-6">
            <AnimateOnScroll>
              <span className="label-eyebrow block mb-8">Infrastructure Rationale</span>
              <h2 className="text-section-title mb-12">
                Growing too fast,
                <br />
                <span className="text-muted">too soon.</span>
              </h2>
              <div className="flex flex-col gap-8 mb-12">
                <p className="body-copy">
                  Growth doesn&apos;t fix a fragile foundation. It amplifies it.
                  Every new hire, new channel, and new feature compounds the gaps
                  you ignored while moving fast.
                </p>
                <p className="body-copy !text-muted border-l-2 border-border-subtle pl-8">
                  TAL VI is for businesses where the idea works, but the team, the
                  tools, and the story haven&apos;t kept up. We build the foundation
                  so you can scale with confidence.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-16 bg-bg-secondary p-8 border border-border-subtle italic">
                <p className="text-xl font-black tracking-tight leading-relaxed">
                  &ldquo;Growth amplifies weaknesses. Structure prevents collapse.&rdquo;
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: mistake table */}
          <AnimateOnScroll delay={0.15} className="lg:col-span-6">
            <div className="border border-border-subtle bg-bg-secondary overflow-hidden">
              <div className="px-8 py-6 border-b border-border-subtle bg-bg-lift/30">
                <span className="label-eyebrow">
                  Diagnostic: Failure Mode Table
                </span>
              </div>
              <div className="flex flex-col">
                {mistakes.map((m, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 border-b border-border-subtle last:border-0"
                  >
                    <div className="col-span-5 p-6 border-r border-border-subtle bg-bg-lift/10">
                      <p className="text-xs font-black uppercase text-text-primary tracking-widest leading-none mb-1">ACTION</p>
                      <p className="text-sm font-bold text-body">{m.action} {m.before}</p>
                    </div>
                    <div className="col-span-7 p-6 italic">
                      <p className="text-xs font-black uppercase text-muted tracking-widest leading-none mb-1">SYSTEM FAILURE</p>
                      <p className="text-sm font-bold text-muted">{m.result}</p>
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
