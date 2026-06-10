"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "We listen",
    desc: "We spend time with you, your team, and your numbers. Nothing assumed.",
  },
  {
    num: "02",
    title: "We map",
    desc: "We identify what to build, fix, or strengthen, and in what order.",
  },
  {
    num: "03",
    title: "We build",
    desc: "Clear systems and strategies your team can own and run.",
  },
  {
    num: "04",
    title: "You grow",
    desc: "More revenue, better margins, a business that runs without you in every detail.",
  },
];

export default function FBProcess() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-14">
          <span className="label-eyebrow mb-4 block text-accent">How We Work</span>
          <h2
            className="font-poppins mb-3"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            No agency mindset. No fluff.
          </h2>
        </AnimateOnScroll>

        {/* Trust signals */}
        <div className="grid md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle mb-16">
          {[
            { stat: "50%", label: "upfront, always. We don't bill by the hour — you pay for outcomes, not effort." },
            { stat: "30 days", label: "credit-back window. Start with any entry service and it counts toward the full build." },
            { stat: "Zero", label: "discounts. We price what it's worth. What you get in return is our full attention." },
          ].map((item) => (
            <div key={item.stat} className="bg-background p-8">
              <p
                className="font-poppins mb-3"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em", color: "var(--accent)" }}
              >
                {item.stat}
              </p>
              <p className="text-sm leading-relaxed text-muted">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-0 mb-16 relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "var(--border-subtle)", zIndex: 0 }}
          />

          {steps.map((step, i) => (
            <AnimateOnScroll key={step.num} delay={i * 0.1} className="relative z-10">
              <div className="flex flex-col items-center text-center px-4 pt-2">
                {/* Circle */}
                <div
                  className="w-20 h-20 rounded-full flex flex-col items-center justify-center border-2 mb-6 shrink-0"
                  style={{
                    background: i === steps.length - 1 ? "var(--accent)" : "var(--background)",
                    borderColor: i === steps.length - 1 ? "var(--accent)" : "var(--border-subtle)",
                  }}
                >
                  <span
                    className="text-[10px] font-black uppercase tracking-widest block"
                    style={{ color: i === steps.length - 1 ? "var(--bg)" : "var(--text-muted)" }}
                  >
                    Step
                  </span>
                  <span
                    className="text-xl font-black leading-none"
                    style={{ color: i === steps.length - 1 ? "var(--bg)" : "var(--text-primary)" }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: i === steps.length - 1 ? "var(--accent)" : "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-[160px]">{step.desc}</p>
              </div>

              {/* Arrow between steps (mobile: hidden; desktop: show between items) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-10 -right-3 z-20 items-center justify-center w-6 h-6 rounded-full bg-bg-secondary">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary" style={{ padding: "14px 36px" }}>
              Start the conversation
            </Link>
            <Link href="/how-we-work" className="btn-ghost" style={{ padding: "14px 36px" }}>
              See the full process
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
