"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const stages = [
  {
    n: "Stage 01",
    title: "Problem Framing",
    desc: "Find the actual problem, not just the symptom.",
  },
  {
    n: "Stage 02",
    title: "Assumption Mapping",
    desc: "Turn ideas into testable statements.",
  },
  {
    n: "Stage 03",
    title: "Research and Validation",
    desc: "Find who pays to solve this.",
  },
  {
    n: "Stage 04",
    title: "Business Model Structuring",
    desc: "Work out how the business actually makes money.",
  },
  {
    n: "Stage 05",
    title: "Small Test",
    desc: "Run the smallest test that gets you a real answer.",
  },
  {
    n: "Stage 06",
    title: "Decision Gate",
    desc: "Build, pivot, or kill based on the evidence.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cellVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const outputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 },
  },
};

export default function FNIFramework() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-6 block text-accent">The Framework</span>
          <h2
            style={{
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Six stages. One clear answer.
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Every idea goes through the same process. No shortcuts, no guessing.
          </p>
        </AnimateOnScroll>

        {/* Outer wrapper — shared border for grid + output */}
        <div className="border border-border-subtle">
          {/* 6-stage grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-px bg-border-subtle"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {stages.map((stage) => (
              <motion.div
                key={stage.n}
                variants={cellVariants}
                className="bg-background p-10 md:p-14 flex flex-col gap-5 group hover:bg-background-lift transition-colors duration-300 cursor-default"
              >
                <span className="label-eyebrow text-muted">{stage.n}</span>
                <h3
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {stage.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Output section */}
          <motion.div
            className="border-t border-border-subtle bg-background p-10 md:p-14"
            variants={outputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.h3
              className="mb-3"
              initial={{ opacity: 0, letterSpacing: "0.08em" }}
              whileInView={{ opacity: 1, letterSpacing: "-0.01em" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{
                color: "var(--text-primary)",
              }}
            >
              [ BUILD / PIVOT / KILL ]
            </motion.h3>
            <p className="text-base" style={{ color: "var(--text-muted)" }}>
              Our output: build, pivot, or kill. Every engagement ends with a clear direction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
