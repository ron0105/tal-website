"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const steps = [
  {
    number: "01",
    title: "Problem Framing",
    description:
      "We work with you to define the real problem underneath your idea, not just the symptom. Separating the root cause from assumptions is what makes the rest of the process work.",
    output: "Problem Statement Document",
  },
  {
    number: "02",
    title: "Assumption Mapping",
    description:
      "Every idea rests on assumptions about your customer, their behaviour, and their willingness to pay. We surface all of them, rank by risk level, and decide together which ones to test first.",
    output: "Assumption Risk Matrix",
  },
  {
    number: "03",
    title: "Research & Validation",
    description:
      "We conduct real customer research: interviews, observation, demand signals. All of it aimed at testing your highest-risk assumptions first. Our goal is not to confirm what you hope is true, but to find out what is actually true.",
    output: "Validation Evidence Report",
  },
  {
    number: "04",
    title: "Business Model Structuring",
    description:
      "We map out how the business actually makes money: unit economics, how customers come in, stay, and pay. All of this before building a single feature, so you go into product development with a model that already works.",
    output: "Business Model Canvas + Unit Economics",
  },
  {
    number: "05",
    title: "Frugal Pilot",
    description:
      "We design the leanest possible test that answers your most important question. You get real market feedback on demand, price, and value, without overcommitting time or money.",
    output: "Pilot Design + Results Analysis",
  },
  {
    number: "06",
    title: "Decision Gate",
    description:
      "Build, Refine, or Redirect. We define what success looks like before the sprint begins. So when the evidence is in, your next move is clear, objective, and yours to own.",
    output: "Decision Memo + Next-step Roadmap",
  },
];

export default function FrameworkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="framework"
      ref={ref}
      className="px-6 md:px-10 py-28 md:py-36"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
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
                Our Framework
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: "#F0F0F0", letterSpacing: "-0.025em" }}
            >
              Six stages.
              <br />
              <span style={{ color: "#444" }}>One clear outcome.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-end"
          >
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#666" }}>
              Every engagement runs through the same six-stage process, tried, tested, and refined. It&apos;s designed to make sure you build the right thing with confidence, not just the first thing that feels right.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group cursor-pointer"
              onClick={() => setActive(active === i ? null : i)}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="flex items-start gap-6 py-7 transition-colors duration-200"
                style={{ paddingLeft: "0", paddingRight: "0" }}
              >
                {/* Number */}
                <div
                  className="flex-shrink-0 w-10 pt-0.5 text-xs font-semibold tabular-nums"
                  style={{
                    color: active === i ? "#2563EB" : "#333",
                    transition: "color 0.2s",
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className="text-base md:text-lg font-semibold tracking-tight transition-colors duration-200"
                      style={{
                        color: active === i ? "#F0F0F0" : "#999",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <div
                      className="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300"
                      style={{
                        transform: active === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={active === i ? "#2563EB" : "#333"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: active === i ? "auto" : 0,
                      opacity: active === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="pt-4 pb-2">
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "#666" }}
                      >
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-medium"
                          style={{ color: "#333" }}
                        >
                          Output:
                        </span>
                        <span
                          className="text-xs font-semibold px-2.5 py-1"
                          style={{
                            background: "rgba(37,99,235,0.08)",
                            color: "#2563EB",
                            borderRadius: "4px",
                          }}
                        >
                          {step.output}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>
      </div>
    </section>
  );
}
