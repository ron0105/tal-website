"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function HomeHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center grid-texture px-6 md:px-10"
      style={{ paddingTop: "96px", paddingBottom: "80px" }}
    >
      <div className="relative max-w-6xl mx-auto w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="label-eyebrow">The Adda Labs · Bengaluru</span>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mb-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.08 }}
              className="text-display text-white block"
            >
              Ideas are cheap.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.16 }}
              className="text-display block"
              style={{ color: "#222" }}
            >
              Validation is hard.
            </motion.h1>
          </div>
        </div>

        {/* ── Sub + CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.32 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <p
              className="text-lg md:text-xl leading-relaxed mb-2"
              style={{ color: "#999", fontWeight: 400, maxWidth: "520px" }}
            >
              Most ideas fail before they reach the market — not because the
              market rejected them, but because founders built the wrong thing
              too early.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "#555", maxWidth: "480px" }}
            >
              We help you test an idea, structure the business, and build only
              what the evidence supports.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/venture-lab" className="btn-primary">
                Validate an Idea
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/tal-vi" className="btn-ghost">
                Explore TAL VI
              </Link>
            </div>
          </div>

          {/* Right: the "what we stop" panel */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px",
              background: "#0A0A0A",
            }}
          >
            <div
              className="px-7 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="label-eyebrow" style={{ color: "#333" }}>
                The real risk of skipping validation
              </span>
            </div>
            {[
              "6 months of building. Zero paying customers.",
              "Launched at the wrong price. Killed by unit economics.",
              "Solved a problem. Nobody had that problem.",
              "Moved fast. Built the wrong thing.",
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-4 px-7 py-4"
                style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
              >
                <svg
                  className="flex-shrink-0 mt-0.5"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                <span className="text-sm" style={{ color: "#888" }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Pipeline strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="label-eyebrow mb-5">How it flows</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
            {[
              { label: "01 — Idea", sub: "You have a hypothesis" },
              { label: "02 — Validate", sub: "Adda Labs tests it" },
              { label: "03 — Structure", sub: "TAL VI builds the systems" },
              { label: "04 — Scale", sub: "Growth on solid ground" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-0">
                <div className="flex flex-col gap-1">
                  <span
                    className="text-xs font-bold"
                    style={{ color: i < 2 ? "#2563EB" : "#6366F1" }}
                  >
                    {step.label}
                  </span>
                  <span className="text-xs" style={{ color: "#444" }}>
                    {step.sub}
                  </span>
                </div>
                {i < 3 && (
                  <svg
                    className="mx-6 flex-shrink-0 hidden sm:block"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a2a2a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
