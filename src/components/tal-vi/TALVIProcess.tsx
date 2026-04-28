"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { TimelineProcessVisual } from "@/components/visuals";

const steps = [
  {
    n: "01",
    title: "Diagnostic",
    duration: "Week 1",
    body: "We audit your current state across all three pillars. We start with what exists and map the gaps.",
    output: "Infrastructure audit report",
  },
  {
    n: "02",
    title: "Blueprint",
    duration: "Week 1–2",
    body: "We design the full infrastructure map — what to build, in what order, and why. No surprises.",
    output: "Full infrastructure blueprint",
  },
  {
    n: "03",
    title: "Sprints",
    duration: "Weeks 2–8",
    body: "We build in focused two-week sprints. Each sprint delivers a working system that runs without us.",
    output: "Delivered systems (per sprint)",
  },
  {
    n: "04",
    title: "Documentation",
    duration: "Ongoing",
    body: "Every system is documented in plain language. Your team can use it without needing to call us.",
    output: "Operational playbooks",
  },
  {
    n: "05",
    title: "Governance",
    duration: "Final phase",
    body: "We set the review cadence, metrics, and triggers. You know when something needs attention.",
    output: "Governance framework",
  },
];

export default function TALVIProcess() {
  return (
    <section
      className="padding-section border-t border-border-subtle bg-background"
    >
      <div className="layout-grid">

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — sticky header */}
          <div className="md:sticky md:top-24">
            <AnimateOnScroll>
              <span className="label-eyebrow block mb-6">03 — How We Work</span>
              <h2 className="text-section-title text-foreground mb-6">
                Five phases.
                <br />
                <span className="text-muted">No ad-hoc work.</span>
              </h2>
              <p className="text-base leading-relaxed mb-4 text-muted">
                No reactive task lists. Every engagement follows a defined process with clear outputs.
              </p>
              <p className="text-base leading-relaxed mb-10 text-body">
                You own everything we build. You don't need us to keep it running.
              </p>
              <div className="aspect-[4/3] w-full bg-bg-secondary border border-border-subtle p-6 mb-10 flex flex-col justify-center items-center text-center">
                <TimelineProcessVisual />
              </div>
              <Link
                href="/work-with-us"
                className="btn-primary"
              >
                Book a Diagnostic
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Right — step list */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.n} delay={0.07 * i}>
                <div
                  className={`flex gap-6 py-8 ${i < steps.length - 1 ? "border-b border-border-subtle" : ""}`}
                >
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 flex items-center justify-center text-xs font-black flex-shrink-0 tracking-wider"
                      style={{ border: "1px solid var(--border-color)", background: "var(--bg-secondary)", color: "var(--text-primary)", borderRadius: "0px" }}
                    >
                      {step.n}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 mt-2 min-h-[24px]"
                        style={{ background: "var(--border-color)" }}
                      />
                    )}
                  </div>

                  <div className="pb-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3
                        className="text-subsection text-foreground"
                      >
                        {step.title}
                      </h3>
                      <span
                        className="text-xs font-medium text-muted px-2 py-0.5"
                        style={{ border: "1px solid var(--border-subtle)", borderRadius: "0px" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-3 text-muted">
                      {step.body}
                    </p>
                    <div className="flex items-center gap-2">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-muted" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                      </svg>
                      <span className="text-xs font-medium text-muted">
                        {step.output}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
