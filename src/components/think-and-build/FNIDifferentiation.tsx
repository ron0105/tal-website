"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const points = [
  "Not just advice",
  "Not random brainstorming",
  "Not “build and see”",
];

export default function FNIDifferentiation() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <div className="max-w-3xl">
          <AnimateOnScroll className="mb-12">
            <span className="label-eyebrow mb-6 block text-accent">Differentiation</span>
            <h2
              className="font-poppins mb-10"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              How this is different
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-8">
            {points.map((point, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="flex items-center gap-6">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <p className="text-2xl md:text-3xl font-bold text-primary italic">
                    {point}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.4} className="mt-16 pt-12 border-t border-border-subtle">
            <p className="text-2xl md:text-3xl font-bold text-primary leading-tight">
              We bring <span className="text-accent underline decoration-2 underline-offset-4">structured thinking before action.</span>
            </p>
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-muted italic">
              This is where our thinking comes from.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
