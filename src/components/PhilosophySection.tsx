"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    title: "Intellectual honesty over ego.",
    body: "A bad idea defended with confidence is still a bad idea. We separate the founder from the hypothesis, so the data can do its work.",
  },
  {
    title: "Small experiments before large commitments.",
    body: "Capital is not the bottleneck. Clarity is. A well-designed experiment costs less than a poorly-designed product.",
  },
  {
    title: "Revenue as sustainability, not vanity.",
    body: "Revenue validates demand. It is not a growth metric. The first rupee earned matters more than the tenth crore projected.",
  },
  {
    title: "Structure enables creativity.",
    body: "The framework is not a cage. It is a scaffold. Constraints produce better thinking than open fields.",
  },
  {
    title: "Data before emotion.",
    body: "Founders feel before they think. That is a feature, not a flaw — as long as the decision is ultimately made on evidence.",
  },
  {
    title: "Kill fast, learn faster.",
    body: "A clean exit from a bad idea is not failure. It is capital preservation and intellectual rigour in action.",
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
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
              Operating Philosophy
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F0F0F0", letterSpacing: "-0.025em", maxWidth: "600px" }}
          >
            How we think
            <br />
            <span style={{ color: "#444" }}>before we build.</span>
          </h2>
        </motion.div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i }}
              className="p-8 transition-colors duration-300"
              style={{ background: "#0A0A0A" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#111")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#0A0A0A")
              }
            >
              <div
                className="w-6 h-px mb-6"
                style={{ background: "#2563EB" }}
              />
              <h3
                className="text-base font-semibold leading-snug mb-4"
                style={{ color: "#D0D0D0", letterSpacing: "-0.01em" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#666" }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
