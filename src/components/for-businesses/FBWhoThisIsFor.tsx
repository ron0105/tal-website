"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const fits = [
  "You run a business and want the online presence to match the quality of what you do",
  "You are tired of things falling through the cracks because there is no system",
  "You want someone to actually build it, not just recommend it",
  "You want a consistent, professional presence without managing three different vendors",
  "You want it done in weeks, not months",
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-0.5 shrink-0" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function FBWhoThisIsFor() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <AnimateOnScroll>
            <span className="label-eyebrow mb-6 block text-accent">Who this is for</span>
            <h2
              className="font-poppins mb-5"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              Who This Is For
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We work with established businesses that are ready to professionalise and grow, not just advise.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="rounded-2xl border border-border-subtle overflow-hidden">
              <div className="flex flex-col gap-px bg-border-subtle">
                {fits.map((item, i) => (
                  <div key={i} className="bg-background px-8 py-5 flex items-start gap-4">
                    <CheckIcon />
                    <p className="text-base font-semibold text-body">{item}</p>
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
