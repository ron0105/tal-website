"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    title: "We follow the evidence, not our preferences.",
    body: "Even the most passionate idea needs to face real data. We help you separate what you believe from what the evidence shows — so you can make the most informed decision possible.",
  },
  {
    title: "Test small. Learn fast. Commit with confidence.",
    body: "The biggest blocker isn\'t funding — it\'s clarity. A well-designed experiment costs a fraction of what a premature build does, and gives you far more to work with.",
  },
  {
    title: "Real revenue beats projected revenue.",
    body: "Revenue is how you know demand is real — not a milestone to celebrate, but a signal to understand. The first rupee you earn tells you more than the tenth crore you forecast.",
  },
  {
    title: "Structure sets creativity free.",
    body: "Our process isn\'t a cage — it\'s scaffolding. The clearer the constraints, the better the thinking. And better thinking leads to better ideas.",
  },
  {
    title: "Feel first. Decide on evidence.",
    body: "Founders who feel strongly about their ideas are exactly who we work with. That passion is a strength — and pairing it with solid evidence is what turns conviction into traction.",
  },
  {
    title: "Learn fast. Redirect faster.",
    body: "Choosing to stop a test that isn\'t working is one of the smartest moves a founder can make. It preserves your capital, sharpens your thinking, and keeps you free to pursue what actually works.",
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
            The thinking
            <br />
            <span style={{ color: "#444" }}>behind everything we do.</span>
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
