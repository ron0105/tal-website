"use client";

import Link from "next/link";
import { AnimateOnScroll, AnimatedLine } from "@/components/shared/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "Talk to us",
    body: "Tell us about your business. Where you are, where you want to go, and what's getting in the way.",
  },
  {
    n: "02",
    title: "We scope the work",
    body: "We identify which service lines are relevant and what the engagement looks like. You know exactly what we are doing and why before anything starts.",
  },
  {
    n: "03",
    title: "We build it together",
    body: "We work alongside your team. Not as consultants handing over decks. As operators who help you get it done.",
  },
];

export default function TALVIHowItWorks() {
  return (
    <section
      className="padding-section"
      style={{ background: "var(--bg)" }}
    >
      <AnimatedLine className="mb-20 opacity-60" />
      <div className="layout-grid">
        <AnimateOnScroll>
          <span className="label-eyebrow block mb-6">How it works</span>
          <h2 className="text-section-title text-foreground mb-4">
            Three steps.
            <br />
            <span className="text-muted">No complexity.</span>
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col mt-16 mb-16">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.n} delay={0.08 * i}>
              <div
                className={`flex gap-10 py-10 ${i < steps.length - 1 ? "border-b border-border-subtle" : ""}`}
              >
                <span
                  className="text-lg font-black tabular-nums shrink-0 mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="body-copy max-w-[560px]">{step.body}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <Link href="/work-with-us" className="btn-primary">
            Start the conversation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
