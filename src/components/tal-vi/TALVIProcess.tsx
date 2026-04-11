"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "Diagnostic",
    duration: "Week 1",
    body: "We audit your current state across all three pillars — structural, digital, and narrative. No assumptions. No templates. We start with what exists and map the gaps.",
    output: "Infrastructure audit report",
  },
  {
    n: "02",
    title: "Blueprint",
    duration: "Week 1–2",
    body: "We design the full infrastructure map — what to build, in what order, and why. You see the complete picture before any execution begins. No surprises mid-engagement.",
    output: "Full infrastructure blueprint",
  },
  {
    n: "03",
    title: "Sprints",
    duration: "Weeks 2–8",
    body: "We build in focused two-week sprints. Each sprint delivers one complete system — not a draft, not a recommendation. A working output that runs without us.",
    output: "Delivered systems (per sprint)",
  },
  {
    n: "04",
    title: "Documentation",
    duration: "Ongoing",
    body: "Every system we build is documented in plain language. Your team can use it, your hires can follow it, and your next operator won't need to call us to understand it.",
    output: "Operational playbooks",
  },
  {
    n: "05",
    title: "Governance",
    duration: "Final phase",
    body: "We set the review cadence, the metrics to watch, and the trigger conditions for each system. You know when something needs attention and exactly what to do about it.",
    output: "Governance framework",
  },
];

export default function TALVIProcess() {
  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — sticky header */}
          <div className="md:sticky md:top-24">
            <AnimateOnScroll>
              <span className="label-eyebrow block mb-6">03 — How We Work</span>
              <h2 className="text-section-title text-white mb-6">
                Five phases.
                <br />
                <span style={{ color: "#2a2a2a" }}>No ad-hoc work.</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#999" }}>
                No reactive task lists. No random marketing. Every engagement
                follows a defined process — diagnostic to governance — with clear
                outputs at each stage.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: "#555" }}>
                At the end, you own everything we built. You don&apos;t need us to
                keep it running.
              </p>
              <Link
                href="/work-with-us"
                className="btn-primary"
                style={{ background: "#6366F1" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#818CF8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#6366F1")}
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
                  className="flex gap-6 py-8"
                  style={{
                    borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 flex items-center justify-center text-xs font-black flex-shrink-0"
                      style={{
                        background: "rgba(99,102,241,0.1)",
                        color: "#6366F1",
                        borderRadius: "2px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {step.n}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 mt-2"
                        style={{ background: "rgba(99,102,241,0.1)", minHeight: "24px" }}
                      />
                    )}
                  </div>

                  <div className="pb-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3
                        className="text-subsection text-white"
                      >
                        {step.title}
                      </h3>
                      <span
                        className="text-xs font-medium"
                        style={{
                          color: "#555",
                          border: "1px solid rgba(255,255,255,0.06)",
                          padding: "2px 8px",
                          borderRadius: "2px",
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#999" }}>
                      {step.body}
                    </p>
                    <div className="flex items-center gap-2">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                      </svg>
                      <span className="text-xs font-medium" style={{ color: "#555" }}>
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
