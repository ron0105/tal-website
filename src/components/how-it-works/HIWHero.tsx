"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function HIWHero() {
  return (
    <section className="relative grid-texture px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-5 mb-10"
        >
          <span className="label-eyebrow">How It Works</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.08 }}
          >
            <h1 className="text-page-title text-white mb-8">
              A process you can
              <br />
              <span style={{ color: "#222" }}>follow and trust.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "#999", maxWidth: "480px" }}>
              Every engagement follows the same 6-stage framework. Nothing is
              improvised. You always know where you are, what&apos;s happening,
              and what the result means.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#555" }}>
              Click each stage below to see exactly what happens,
              what you&apos;ll do, and what you&apos;ll receive.
            </p>
            <Link href="/work-with-us" className="btn-primary">
              Start a Validation Sprint
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.22 }}
          >
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                background: "#0A0A0A",
              }}
            >
              <div className="px-7 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="label-eyebrow" style={{ color: "#333" }}>
                  The 6 stages
                </span>
              </div>
              {[
                "Problem Framing",
                "Assumption Mapping",
                "Research & Validation",
                "Business Model Structuring",
                "Frugal Pilot",
                "Decision Gate",
              ].map((s, i) => (
                <div
                  key={s}
                  className="flex items-center gap-5 px-7 py-3.5"
                  style={{ borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                >
                  <span className="section-num w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-medium" style={{ color: "#888" }}>{s}</span>
                  {i === 5 && (
                    <span
                      className="ml-auto text-xs font-bold px-2 py-0.5"
                      style={{ background: "rgba(37,99,235,0.08)", color: "#2563EB", borderRadius: "2px", letterSpacing: "0.06em" }}
                    >
                      DECISION
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
