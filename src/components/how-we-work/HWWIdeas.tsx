"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const stages = [
  { n: "Stage 01", title: "Problem Framing", desc: "Find the actual problem, not just the symptom." },
  { n: "Stage 02", title: "Assumption Mapping", desc: "Turn ideas into testable statements." },
  { n: "Stage 03", title: "Research and Validation", desc: "Find who pays to solve this." },
  { n: "Stage 04", title: "Business Model Structuring", desc: "Work out how the business actually makes money." },
  { n: "Stage 05", title: "Small Test", desc: "Run the smallest test that gets you a real answer." },
  { n: "Stage 06", title: "Decision Gate", desc: "Build, pivot, or kill based on the evidence." },
];

export default function HWWIdeas() {
  return (
    <section id="for-new-ideas" className="padding-section bg-background border-t border-border-subtle">
      <div className="layout-grid">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-8 block text-accent">Think & Build</span>
          <h2 className="text-section-title">
            Six stages.
            <br />
            <span className="text-muted">One clear answer.</span>
          </h2>
          <p className="text-xl text-body mt-6 max-w-2xl">
            When you have an idea but are not sure if it will work, we run it through a structured validation process. The output is always one of three things: build, pivot, or kill.
          </p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-px bg-border-subtle border border-border-subtle mb-12">
          {stages.map((stage, i) => (
            <AnimateOnScroll key={stage.n} delay={i * 0.05}>
              <div className="bg-background p-6 md:p-8 grid md:grid-cols-[160px_1fr] gap-4 md:gap-8 items-start">
                <span className="label-eyebrow text-muted pt-1">{stage.n}</span>
                <div>
                  <p className="text-lg font-bold text-primary mb-1">{stage.title}</p>
                  <p className="text-base text-muted">{stage.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="flex flex-col sm:flex-row gap-4">
          <Link href="/think-and-build" className="btn-primary" style={{ padding: "14px 36px" }}>
            See the full framework
          </Link>
          <Link href="/contact" className="btn-ghost" style={{ padding: "14px 36px" }}>
            Talk to us about your idea
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
