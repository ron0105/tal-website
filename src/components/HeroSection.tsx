"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10"
      style={{ paddingTop: "100px", paddingBottom: "80px" }}
    >
      {/* Grid lines — subtle background structure */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Label */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#2563EB" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#555", letterSpacing: "0.14em" }}
          >
            Venture Experimentation Lab
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-bold leading-none tracking-tight mb-8"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            color: "#F0F0F0",
            letterSpacing: "-0.03em",
            lineHeight: "0.95",
          }}
        >
          Experiment.
          <br />
          <span style={{ color: "#333" }}>Validate.</span>
          <br />
          Build.
        </motion.h1>

        {/* Divider + Subtext row */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col md:flex-row md:items-end gap-8 mt-10"
        >
          <div
            className="hidden md:block w-px self-stretch"
            style={{ background: "rgba(255,255,255,0.08)", minHeight: "80px" }}
          />
          <div className="max-w-xl">
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "#777", fontWeight: 400 }}
            >
              A founder-led venture experimentation lab designed to convert
              structured thinking into real-world execution. Ideas are scaled on
              evidence, not enthusiasm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold cursor-pointer transition-all duration-200"
                style={{
                  background: "#2563EB",
                  color: "#fff",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#3B82F6")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#2563EB")
                }
              >
                Start the conversation
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#framework"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium cursor-pointer transition-all duration-200"
                style={{
                  color: "#888",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#F0F0F0";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#888";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.08)";
                }}
              >
                See the Framework
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-20 pt-8 grid grid-cols-3 md:grid-cols-3 gap-0"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { n: "6", label: "Stage Framework" },
            { n: "4", label: "Engagement Models" },
            { n: "0", label: "Premature Builds" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 first:pl-0 last:pr-0" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
              <div
                className="text-3xl md:text-4xl font-bold tracking-tight mb-1"
                style={{ color: "#F0F0F0", letterSpacing: "-0.03em" }}
              >
                {stat.n}
              </div>
              <div
                className="text-xs font-medium"
                style={{ color: "#555" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
