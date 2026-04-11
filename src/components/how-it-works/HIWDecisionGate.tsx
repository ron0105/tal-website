"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const outcomes = [
  {
    id: "build",
    label: "Build",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.06)",
    border: "rgba(34,197,94,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    title: "The idea is validated. Move forward.",
    conditions: [
      "Real customers confirmed the problem exists",
      "At least one customer paid or pre-committed",
      "Unit economics are viable",
      "You know what to build and who to build it for",
    ],
    next: "You receive a build brief — exact scope, target customer profile, pricing recommendation, and a 90-day roadmap.",
  },
  {
    id: "pivot",
    label: "Pivot",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
    title: "Something needs to change. Adjust first.",
    conditions: [
      "The problem is real, but we targeted the wrong customer",
      "The demand exists, but not at the price we assumed",
      "A different version of the idea has better signal",
      "One assumption failed, but the rest held up",
    ],
    next: "You receive a pivot brief — a clearly defined direction change, what to retest, and a new sprint plan.",
  },
  {
    id: "kill",
    label: "Kill",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.06)",
    border: "rgba(239,68,68,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6M9 9l6 6" />
      </svg>
    ),
    title: "The evidence doesn't support building this. Stop.",
    conditions: [
      "No one confirmed the problem strongly enough",
      "Nobody paid or pre-committed after a fair test",
      "The unit economics don't work at any realistic price",
      "The market is too small or too hard to reach",
    ],
    next: "You receive a kill memo — a clear explanation of why, what we learned, and what (if anything) is worth exploring from the wreckage.",
  },
];

export default function HIWDecisionGate() {
  const [selected, setSelected] = useState<string | null>(null);
  const current = outcomes.find((o) => o.id === selected);

  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">Stage 6 — Decision Gate</span>
            <h2 className="text-section-title text-white">
              Every sprint ends
              <br />
              <span style={{ color: "#2a2a2a" }}>with a clear answer.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: "#999" }}>
              The decision criteria are defined before the sprint starts — not
              invented at the end. Click each outcome to understand what it
              means and what happens next.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Visual gate */}
        <AnimateOnScroll>
          <div className="flex flex-col items-center mb-10">
            {/* Central node */}
            <div
              className="flex flex-col items-center justify-center w-44 h-16 mb-6"
              style={{
                border: "1px solid rgba(37,99,235,0.3)",
                borderRadius: "4px",
                background: "rgba(37,99,235,0.06)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#2563EB", letterSpacing: "0.1em" }}>
                Decision Gate
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#555" }}>Evidence reviewed</p>
            </div>

            {/* Branches */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-2xl flex">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-px h-8" style={{ background: "rgba(34,197,94,0.2)" }} />
                  <div className="w-full h-px" style={{ background: "rgba(34,197,94,0.1)" }} />
                  <div className="w-px h-6" style={{ background: "rgba(34,197,94,0.2)" }} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-px h-8" style={{ background: "rgba(245,158,11,0.2)" }} />
                  <div className="w-0" />
                  <div className="w-px h-6" style={{ background: "rgba(245,158,11,0.2)" }} />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-px h-8" style={{ background: "rgba(239,68,68,0.2)" }} />
                  <div className="w-full h-px" style={{ background: "rgba(239,68,68,0.1)" }} />
                  <div className="w-px h-6" style={{ background: "rgba(239,68,68,0.2)" }} />
                </div>
              </div>
            </div>

            {/* Outcome cards */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {outcomes.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setSelected(selected === o.id ? null : o.id)}
                  className="flex flex-col items-center gap-2.5 p-5 cursor-pointer transition-all duration-200"
                  style={{
                    border: selected === o.id ? `1px solid ${o.color}40` : `1px solid ${o.border}`,
                    borderRadius: "4px",
                    background: selected === o.id ? o.bg : "transparent",
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = o.bg}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = selected === o.id ? o.bg : "transparent"}
                >
                  {o.icon}
                  <span className="text-sm font-bold" style={{ color: o.color }}>
                    {o.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            {current && (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 p-8"
                style={{
                  border: `1px solid ${current.border}`,
                  borderRadius: "4px",
                  background: current.bg,
                }}
              >
                <div>
                  <h3
                    className="text-lg font-bold mb-4 tracking-tight"
                    style={{ color: "#E0E0E0", letterSpacing: "-0.01em" }}
                  >
                    {current.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#444" }}>
                    Conditions that lead here
                  </p>
                  <div className="flex flex-col gap-3">
                    {current.conditions.map((c) => (
                      <div key={c} className="flex items-start gap-3">
                        <div
                          className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${current.color}15`, borderRadius: "3px" }}
                        >
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={current.color} strokeWidth="3" strokeLinecap="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: "#888" }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#444" }}>
                    What you get next
                  </p>
                  <div
                    className="p-5"
                    style={{ background: "rgba(0,0,0,0.3)", borderRadius: "4px" }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                      {current.next}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
