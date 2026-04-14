"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    index: "01",
    title: "Venture Validation",
    description:
      "Before you write a line of code or spend a rupee, we test your idea against real market signals — so you go into execution with genuine confidence.",
  },
  {
    index: "02",
    title: "Research & Evidence Design",
    description:
      "We build research that gives you evidence you can actually use — not just interesting insights to quote in a meeting.",
  },
  {
    index: "03",
    title: "Pilot Architecture",
    description:
      "A well-designed pilot isn\'t a half-built product. It\'s the smartest possible test to answer one question: will the right people pay the right price?",
  },
  {
    index: "04",
    title: "Decision Gate Analysis",
    description:
      "Every sprint ends with a clear recommendation: build, refine, or redirect. We set the success criteria before the experiment starts — so the outcome is always objective.",
  },
];

export default function WhatWeDoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="what-we-do"
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
                What We Do
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: "#F0F0F0", letterSpacing: "-0.025em" }}
            >
              A lab built to turn
              <br />
              <span style={{ color: "#444" }}>serious thinking</span> into smart execution.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-end"
          >
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#666" }}
            >
              The Adda Labs isn&apos;t a consulting firm — we don&apos;t hand you a slide deck and walk away. We design real experiments, run pilots, and give you evidence-backed decisions you can act on. Every engagement focuses on one question: is this idea ready to build?
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.index}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="p-8 md:p-10 group cursor-default transition-colors duration-300"
              style={{ background: "#0D0D0D" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#111111")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#0D0D0D")
              }
            >
              <div
                className="text-xs font-semibold mb-6 tabular-nums"
                style={{ color: "#2563EB", letterSpacing: "0.08em" }}
              >
                {service.index}
              </div>
              <h3
                className="text-lg font-semibold mb-4 tracking-tight"
                style={{ color: "#E0E0E0", letterSpacing: "-0.01em" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#666" }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
