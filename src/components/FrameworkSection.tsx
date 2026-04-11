"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Problem Framing",
    description:
      "Define the problem with surgical precision. A poorly framed problem is an unsolvable one. We separate root causes from symptoms, and the real market pain from the founder's interpretation of it.",
    output: "Problem Statement Document",
  },
  {
    number: "02",
    title: "Assumption Mapping",
    description:
      "Every business model rests on assumptions. We surface them all — about the customer, the behavior change required, the willingness to pay, the distribution channel — and rank them by criticality and uncertainty.",
    output: "Assumption Risk Matrix",
  },
  {
    number: "03",
    title: "Research & Validation",
    description:
      "Structured primary research. Interviews, observation, behavioral data, demand proxies. Not to confirm, but to challenge. Evidence collected against the highest-risk assumptions first.",
    output: "Validation Evidence Report",
  },
  {
    number: "04",
    title: "Business Model Structuring",
    description:
      "A viable business is a system. We model the unit economics, the retention logic, the acquisition pathway, and the revenue mechanism — before any product exists.",
    output: "Business Model Canvas + Unit Economics",
  },
  {
    number: "05",
    title: "Frugal Pilot",
    description:
      "The smallest experiment that can answer the biggest question. Designed to stress-test demand, willingness to pay, and the core value proposition — with minimum resources and maximum signal.",
    output: "Pilot Design + Results Analysis",
  },
  {
    number: "06",
    title: "Decision Gate",
    description:
      "Build, Pivot, or Kill. The gate is defined before the sprint begins. If the evidence crosses the threshold — build. If not, either restructure the hypothesis or close the experiment with clarity.",
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
              <span style={{ color: "#444" }}>One standard.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-end"
          >
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#666" }}>
              Every engagement runs through the same six-stage process. No
              shortcuts. The framework is designed to eliminate the most
              expensive mistake in entrepreneurship: building the wrong thing
              with conviction.
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
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
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
