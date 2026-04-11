"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "Problem Framing",
    subtitle: "Define exactly what problem you're solving.",
    duration: "2–3 days",
    description:
      "Before anything else, we make sure the problem is real. We help you separate what you think the problem is from what customers actually experience. Many ideas fail here — not because the product is bad, but because it solves the wrong version of the problem.",
    whatHappens: [
      "1:1 founder session to map your assumptions",
      "Customer pain hypothesis written in plain language",
      "Problem statement refined and stress-tested",
      "Scope defined: what we're testing and what we're not",
    ],
    output: "Problem Statement Document",
    question: "Are we solving the right problem?",
  },
  {
    n: "02",
    title: "Assumption Mapping",
    subtitle: "List everything you're assuming to be true.",
    duration: "2–3 days",
    description:
      "Every business idea rests on assumptions. 'People will pay ₹500/month.' 'They'll switch from their current solution.' 'Referrals will drive growth.' We list all of these, then rank them by risk. The riskiest assumptions get tested first.",
    whatHappens: [
      "Full assumption list across customer, product, and revenue",
      "Each assumption scored by risk and uncertainty",
      "High-risk assumptions flagged for immediate testing",
      "Research questions drafted for each critical assumption",
    ],
    output: "Assumption Risk Matrix",
    question: "Which assumptions will kill us if we're wrong?",
  },
  {
    n: "03",
    title: "Research & Validation",
    subtitle: "Talk to real people. Get real answers.",
    duration: "1–2 weeks",
    description:
      "We run structured interviews and demand tests with real potential customers. Not surveys — actual conversations. We're listening for specific things: whether they have the problem, how badly they have it, what they currently do about it, and how much they'd pay to solve it.",
    whatHappens: [
      "10–15 in-depth customer interviews",
      "Demand proxy test (e.g. landing page, pre-sales)",
      "Evidence collected against each critical assumption",
      "Patterns and insights documented",
    ],
    output: "Validation Evidence Report",
    question: "Do people want this — and will they pay?",
  },
  {
    n: "04",
    title: "Business Model Structuring",
    subtitle: "Make sure the numbers actually work.",
    duration: "2–3 days",
    description:
      "A great idea with a broken business model is still a failed venture. We model your unit economics: what it costs to get a customer, what they're worth over time, and whether the whole thing becomes profitable. We do this before you build — not after.",
    whatHappens: [
      "Revenue model options mapped and compared",
      "Customer acquisition cost estimated",
      "Lifetime value and payback period modeled",
      "Breakeven point and capital requirement clarified",
    ],
    output: "Business Model + Unit Economics Model",
    question: "Does this make financial sense?",
  },
  {
    n: "05",
    title: "Frugal Pilot",
    subtitle: "Run the smallest test that gives you real data.",
    duration: "1–3 weeks",
    description:
      "A pilot is not a product. It's a designed experiment to answer one question: will people pay for this, at this price, from us? We design the smallest possible version of the experience — just enough to get real signal, without over-investing.",
    whatHappens: [
      "Pilot scope and success criteria defined",
      "Pilot designed and launched",
      "Real customers, real transactions (where possible)",
      "Data collected and analyzed",
    ],
    output: "Pilot Results + Demand Analysis",
    question: "Will people actually pay for it?",
  },
  {
    n: "06",
    title: "Decision Gate",
    subtitle: "Build it, change it, or stop — with full clarity.",
    duration: "1–2 days",
    description:
      "Every sprint ends with a decision. Not a recommendation — a decision, made on evidence. The three possible outcomes are: Build (the idea is validated, move forward), Pivot (the idea has potential but needs to change), or Kill (the evidence doesn't support building this).",
    whatHappens: [
      "All evidence reviewed against original assumptions",
      "Decision criteria assessed (defined at the start)",
      "Clear recommendation with supporting evidence",
      "Next steps defined for all three outcomes",
    ],
    output: "Decision Memo + Next-Step Roadmap",
    question: "Should we build, change, or stop?",
  },
];

export default function HIWFramework() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">The 6-Stage Framework</span>
            <h2 className="text-section-title text-white">
              What happens at
              <br />
              <span style={{ color: "#2a2a2a" }}>each stage.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: "#999" }}>
              Click any stage to see exactly what happens, what you&apos;ll do, and
              what you&apos;ll have at the end of it. Every sprint follows the same
              process — no skipping steps.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Desktop: step bar + detail panel */}
        <AnimateOnScroll>
          {/* Step selector */}
          <div className="hidden md:flex gap-0 mb-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {steps.map((step, i) => (
              <button
                key={step.n}
                onClick={() => setActive(i)}
                className="flex-1 flex flex-col gap-1 py-5 px-4 text-left cursor-pointer transition-colors duration-200 relative"
                style={{ background: "transparent", border: "none" }}
              >
                <span
                  className="text-xs font-bold tabular-nums"
                  style={{ color: active === i ? "#2563EB" : "#333" }}
                >
                  {step.n}
                </span>
                <span
                  className="text-xs font-semibold leading-snug"
                  style={{ color: active === i ? "#E0E0E0" : "#555" }}
                >
                  {step.title}
                </span>
                {active === i && (
                  <motion.div
                    layoutId="step-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: "#2563EB" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:grid grid-cols-2 gap-10 p-10"
              style={{
                background: "#0D0D0D",
                border: "1px solid rgba(255,255,255,0.06)",
                borderTop: "none",
                borderRadius: "0 0 4px 4px",
              }}
            >
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold"
                  style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB", borderRadius: "4px" }}
                >
                  Stage {steps[active].n} — {steps[active].duration}
                </div>
                <h3
                  className="text-2xl font-bold tracking-tight mb-2"
                  style={{ color: "#F0F0F0", letterSpacing: "-0.02em" }}
                >
                  {steps[active].title}
                </h3>
                <p className="text-sm font-semibold mb-5" style={{ color: "#888" }}>
                  {steps[active].subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#999" }}>
                  {steps[active].description}
                </p>
                <div
                  className="flex items-start gap-3 p-4"
                  style={{ background: "rgba(37,99,235,0.05)", borderRadius: "4px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "#2563EB" }}>Key question for this stage</p>
                    <p className="text-sm" style={{ color: "#888" }}>{steps[active].question}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#444" }}>
                  What happens
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {steps[active].whatHappens.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(37,99,235,0.06)", borderRadius: "3px" }}
                      >
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: "#888" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="flex items-center gap-3 p-4"
                  style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#444" }}>You receive</p>
                    <p className="text-sm font-semibold" style={{ color: "#D0D0D0" }}>{steps[active].output}</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-3 mt-6">
                  <button
                    disabled={active === 0}
                    onClick={() => setActive(Math.max(0, active - 1))}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold cursor-pointer transition-all duration-200 disabled:opacity-30"
                    style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", color: "#888", background: "transparent" }}
                    onMouseEnter={(e) => !e.currentTarget.disabled && ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)")}
                  >
                    ← Previous
                  </button>
                  <button
                    disabled={active === steps.length - 1}
                    onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold cursor-pointer transition-all duration-200 disabled:opacity-30"
                    style={{ background: "#2563EB", color: "#fff", borderRadius: "4px", border: "none" }}
                    onMouseEnter={(e) => !e.currentTarget.disabled && ((e.currentTarget as HTMLElement).style.background = "#3B82F6")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563EB")}
                  >
                    Next stage →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile: vertical accordion */}
          <div className="flex flex-col md:hidden">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="cursor-pointer"
                onClick={() => setActive(active === i ? -1 : i)}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center justify-between py-5 gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs font-bold tabular-nums"
                      style={{ color: active === i ? "#2563EB" : "#444" }}
                    >
                      {step.n}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: active === i ? "#F0F0F0" : "#888" }}
                    >
                      {step.title}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: active === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active === i ? "#2563EB" : "#444"} strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pb-6">
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "#999" }}>
                          {step.description}
                        </p>
                        <div className="flex flex-col gap-2.5 mb-4">
                          {step.whatHappens.map((item) => (
                            <div key={item} className="flex items-start gap-2.5 text-xs" style={{ color: "#999" }}>
                              <svg className="flex-shrink-0 mt-0.5" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                              {item}
                            </div>
                          ))}
                        </div>
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold"
                          style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB", borderRadius: "5px" }}
                        >
                          Output: {step.output}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
