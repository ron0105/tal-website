"use client";

import { AnimateOnScroll } from "../shared/AnimateOnScroll";

const businessReady = [
  "You want your team to own more so you can focus on the bigger picture",
  "You are growing and want the foundation to support it properly",
  "You want a consistent, reliable experience for every customer",
  "You know what needs to improve and want someone to drive it",
];

const ideaReady = [
  "You have an idea you believe in and want to know if the market agrees",
  "You want to validate before committing time and money",
  "You want a clear answer, not more uncertainty",
  "You want to move fast without building the wrong thing",
];

export default function HomeProblem() {
  return (
    <section className="bg-background py-24 md:py-32 border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">

        {/* Pain + Agitation — makes the reader feel the problem before self-qualifying */}
        <AnimateOnScroll className="mb-16 max-w-3xl">
          <span className="label-eyebrow mb-6 block text-accent">The problem</span>
          <h2
            className="font-poppins mb-6"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "var(--text-primary)",
            }}
          >
            Most businesses and most ideas hit the same wall.
          </h2>
          <p className="text-xl leading-relaxed text-body mb-4">
            Not from lack of effort. From lack of the right foundation at the right time.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            The business owner working 14-hour days because there is no system anyone else can run. The founder spending months building something nobody asked for. The pattern is different on the surface. Underneath, it is the same: moving before the ground was properly tested.
          </p>
        </AnimateOnScroll>

        {/* Self-qualification — reader confirms the problem is theirs */}
        <AnimateOnScroll className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-muted">
            You are in the right place if...
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <div className="border border-border-subtle rounded-2xl overflow-hidden h-full card-interactive">
              <div className="px-8 py-5 border-b border-border-subtle bg-bg-secondary">
                <span className="label-eyebrow text-accent">You run a business</span>
              </div>
              <div className="flex flex-col gap-px bg-border-subtle">
                {businessReady.map((item, i) => (
                  <div key={i} className="bg-background px-8 py-5 flex items-start gap-4">
                    <span className="text-accent font-bold text-sm shrink-0 mt-0.5">✓</span>
                    <p className="text-base font-medium text-body">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.12}>
            <div className="border border-border-subtle rounded-2xl overflow-hidden h-full card-interactive">
              <div className="px-8 py-5 border-b border-border-subtle bg-bg-secondary">
                <span className="label-eyebrow">You have a new idea</span>
              </div>
              <div className="flex flex-col gap-px bg-border-subtle">
                {ideaReady.map((item, i) => (
                  <div key={i} className="bg-background px-8 py-5 flex items-start gap-4">
                    <span className="text-accent font-bold text-sm shrink-0 mt-0.5">✓</span>
                    <p className="text-base font-medium text-body">{item}</p>
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
