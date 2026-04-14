"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const causes = [
  { label: "Solution in search of a problem", pct: 42 },
  { label: "Premature execution before validation", pct: 35 },
  { label: "Ignored unit economics", pct: 29 },
  { label: "Market timing misread", pct: 18 },
];

export default function ProblemSection() {
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
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
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
                The Problem
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-8"
              style={{ color: "#F0F0F0", letterSpacing: "-0.025em" }}
            >
              Most ideas don&apos;t fail
              <br />
              because of the market.
            </h2>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#666" }}
            >
              They stumble because of premature execution, building before fully understanding the problem. The market is actually quite receptive to well-validated ideas. What it can&apos;t support is assumptions shipped as products.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "#555" }}
            >
              The idea is rarely the problem. It&apos;s the approach that needs work. Enthusiasm is a great starting point, but structure is what takes you the rest of the way.
            </p>

            {/* Pull quote */}
            <div
              className="mt-12 pl-5"
              style={{ borderLeft: "2px solid #2563EB" }}
            >
              <p
                className="text-lg md:text-xl font-medium leading-snug"
                style={{ color: "#C0C0C0", letterSpacing: "-0.01em" }}
              >
                &ldquo;The most valuable thing you can protect isn&apos;t money.
                It&apos;s time. And that&apos;s exactly what we do.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right — Failure causes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="p-8 md:p-10"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                background: "#111",
              }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-8"
                style={{ color: "#444", letterSpacing: "0.12em" }}
              >
                Where early-stage ventures most often go wrong
              </p>
              <div className="flex flex-col gap-7">
                {causes.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#999" }}
                      >
                        {c.label}
                      </span>
                      <span
                        className="text-xs font-semibold tabular-nums ml-4"
                        style={{ color: "#444" }}
                      >
                        {c.pct}%
                      </span>
                    </div>
                    <div
                      className="w-full h-px"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <motion.div
                        className="h-px"
                        style={{ background: "#2563EB", opacity: 0.6 }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${c.pct}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.4 + i * 0.1,
                          ease: EASE,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p
                className="text-xs mt-8"
                style={{ color: "#333" }}
              >
                Based on post-mortem analysis of early-stage venture failures
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
