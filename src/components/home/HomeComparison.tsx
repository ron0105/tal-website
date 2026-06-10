"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";

export default function HomeComparison() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32 border-y border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-6 block text-accent">Why it matters</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            The difference is in how things run.
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle rounded-2xl overflow-hidden">
          <div className="bg-background p-10 md:p-16 flex flex-col h-full">
            <span className="text-[10px] font-black uppercase tracking-widest mb-8 text-muted block">Where most businesses start</span>
            <ul className="flex flex-col gap-6">
              {[
                "Owner is the decision point for most things",
                "Roles and responsibilities are informal",
                "Customer follow-ups depend on memory",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-lg font-medium text-muted">
                  <span className="mt-1.5 w-4 h-px bg-border-subtle block shrink-0" style={{ background: "var(--border-subtle)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background p-10 md:p-16 flex flex-col h-full">
            <span className="text-[10px] font-black uppercase tracking-widest mb-8 text-accent block">After working with us</span>
            <ul className="flex flex-col gap-6">
              {[
                "Team runs independently on clear systems",
                "Every role has defined ownership",
                "Customer pipeline is tracked and consistent",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-lg font-bold text-body">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
