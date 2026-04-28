"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { GrowthPressureVisual } from "@/components/visuals";

const mistakes = [
  {
    action: "Hire people",
    before: "before roles are clear",
    result: "Accountability gaps slow everything down.",
  },
  {
    action: "Run ads",
    before: "before positioning is locked",
    result: "Spend goes up. Traction doesn\'t come with it.",
  },
  {
    action: "Add tools",
    before: "before processes exist",
    result: "More tools, same confusion. Just faster.",
  },
  {
    action: "Raise funding",
    before: "before the model is clean",
    result: "More capital accelerates both wins and gaps.",
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
                Growing before
                <br />
                <span className="text-muted">the foundation is ready.</span>
              </h2>
              <div className="flex flex-col gap-8 mb-12">
                <p className="body-copy">
                  Growth reveals what isn't built to last. Every new hire and feature puts pressure on the gaps in your foundation.
                </p>
                <p className="body-copy !text-muted border-l-2 border-border-subtle pl-8">
                  TAL VI is for businesses where the idea works, but the structure doesn't. We build what's missing so you can scale.
                </p>
              </div>

              <div className="aspect-video bg-bg-secondary border border-border-subtle p-6 flex flex-col justify-center items-center text-center">
                <GrowthPressureVisual />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: mistake table */}
          <AnimateOnScroll delay={0.15} className="lg:col-span-6">
            <div className="border border-border-subtle bg-bg-secondary overflow-hidden">
              <div className="px-8 py-6 border-b border-border-subtle bg-bg-lift/30">
                <span className="label-eyebrow">
                  Where Growth Friction Comes From
                </span>
              </div>
              <div className="flex flex-col">
                {mistakes.map((m, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 border-b border-border-subtle last:border-0"
                  >
                    <div className="col-span-5 p-6 border-r border-border-subtle bg-bg-lift/10">
                      <p className="text-xs font-black uppercase text-text-primary tracking-widest leading-none mb-1">WHAT OFTEN HAPPENS</p>
                      <p className="text-sm font-bold text-body">{m.action} {m.before}</p>
                    </div>
                    <div className="col-span-7 p-6 italic">
                      <p className="text-xs font-black uppercase text-muted tracking-widest leading-none mb-1">WHAT IT CREATES</p>
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
