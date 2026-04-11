"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const cases = [
  {
    id: "01",
    sector: "Consumer Tech",
    stage: "Pre-validation",
    hypothesis:
      "Urban millennials will pay a premium for curated, delivered home-cooked meals from vetted home cooks.",
    process: [
      { step: "Problem Framing", outcome: "Confirmed: convenience + trust + quality gap in existing options." },
      { step: "Assumption Mapping", outcome: "Critical assumption: willingness to pay ₹300+ per meal for an unknown cook." },
      { step: "Research", outcome: "18 in-depth interviews. Only 6 of 18 willing to pay above ₹200. Core trust barrier uncovered." },
      { step: "Decision Gate", outcome: "Pivot. Reframed around known-network meal sharing, not anonymous delivery." },
    ],
    decision: "Pivot",
    decisionColor: "#F59E0B",
    insight:
      "The market existed. The pricing model didn't. A pivot saved 18 months of wrong execution.",
  },
  {
    id: "02",
    sector: "B2B SaaS",
    stage: "Pilot phase",
    hypothesis:
      "Small accounting firms will pay for an AI-assisted compliance automation tool at ₹2,000/month.",
    process: [
      { step: "Problem Framing", outcome: "Real pain confirmed: compliance errors cost ₹50K+ per incident." },
      { step: "Assumption Mapping", outcome: "Risk: existing workflow inertia. Benefit must be 10x clearer than the switch cost." },
      { step: "Research", outcome: "8 firms tested a manual-process simulation. 6 would pay. 2 required proof of error reduction." },
      { step: "Pilot", outcome: "3-firm pilot. Error rate reduced 78%. All 3 converted. NPS: 71." },
    ],
    decision: "Build",
    decisionColor: "#22C55E",
    insight:
      "The pricing held. The value proposition was sharper than the founders assumed. Build proceeded with a clear retention thesis.",
  },
  {
    id: "03",
    sector: "EdTech",
    stage: "Concept",
    hypothesis:
      "Parents of Class 6–8 students will pay for personalised AI tutoring at ₹1,500/month.",
    process: [
      { step: "Problem Framing", outcome: "Crowded market. Differentiation unclear." },
      { step: "Assumption Mapping", outcome: "Critical: parents trust AI over human tutors. Assumption rated as High Risk." },
      { step: "Research", outcome: "12 parent interviews. 11 of 12: 'Only if a human is involved.' Demand for AI-only did not exist at price." },
      { step: "Decision Gate", outcome: "Kill. Demand for pure-AI tutoring at premium price not validated. Reformulate." },
    ],
    decision: "Kill",
    decisionColor: "#EF4444",
    insight:
      "No market shame in this decision. The founders preserved ₹40 lakh and 14 months.",
  },
];

const decisionStyle: Record<string, string> = {
  Build: "rgba(34,197,94,0.1)",
  Pivot: "rgba(245,158,11,0.1)",
  Kill: "rgba(239,68,68,0.1)",
};

export default function CaseThinkingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const current = cases[active];

  return (
    <section
      ref={ref}
      className="px-6 md:px-10 py-28 md:py-36"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "#0A0A0A",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#2563EB" }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#555", letterSpacing: "0.14em" }}
              >
                Case Thinking
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: "#F0F0F0", letterSpacing: "-0.025em" }}
            >
              How decisions
              <br />
              <span style={{ color: "#444" }}>are made here.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-end"
          >
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#666" }}>
              We don&apos;t share case studies. We share decision logic. These are
              thinking frameworks applied to real hypotheses — outcomes are
              secondary to the reasoning process.
            </p>
          </motion.div>
        </div>

        {/* Case selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-8"
        >
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer"
              style={{
                border:
                  active === i
                    ? "1px solid rgba(37,99,235,0.3)"
                    : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
                background: active === i ? "rgba(37,99,235,0.06)" : "transparent",
                color: active === i ? "#2563EB" : "#555",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: cases[i].decisionColor }}
              />
              {c.sector}
            </button>
          ))}
        </motion.div>

        {/* Active case */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Left */}
          <div
            className="p-8 md:p-10"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "12px",
              background: "#0D0D0D",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-xs font-semibold tabular-nums"
                style={{ color: "#2563EB" }}
              >
                Case {current.id}
              </span>
              <span
                className="text-xs font-medium px-2.5 py-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "#555",
                  borderRadius: "4px",
                }}
              >
                {current.stage}
              </span>
            </div>

            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#333" }}
            >
              Hypothesis
            </p>
            <p
              className="text-base leading-relaxed mb-8 font-medium"
              style={{ color: "#C0C0C0" }}
            >
              &ldquo;{current.hypothesis}&rdquo;
            </p>

            {/* Decision badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2.5"
              style={{
                background: decisionStyle[current.decision],
                borderRadius: "8px",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: current.decisionColor }}
              />
              <span
                className="text-sm font-bold"
                style={{ color: current.decisionColor }}
              >
                Decision: {current.decision}
              </span>
            </div>

            {/* Insight */}
            <div
              className="mt-6 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#333" }}
              >
                Key Insight
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {current.insight}
              </p>
            </div>
          </div>

          {/* Right — Process */}
          <div
            className="p-8 md:p-10"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "12px",
              background: "#0D0D0D",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-8"
              style={{ color: "#333" }}
            >
              Decision Process
            </p>
            <div className="flex flex-col gap-0">
              {current.process.map((p, i) => (
                <div key={p.step} className="flex gap-5 relative">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 mt-0.5"
                      style={{
                        background: i === current.process.length - 1 ? current.decisionColor : "#2563EB",
                      }}
                    />
                    {i < current.process.length - 1 && (
                      <div
                        className="w-px flex-1 my-1"
                        style={{ background: "rgba(255,255,255,0.06)", minHeight: "32px" }}
                      />
                    )}
                  </div>
                  <div className="pb-6">
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ color: "#555" }}
                    >
                      {p.step}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                      {p.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
