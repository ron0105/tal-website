"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const pillars = [
  {
    n: "01",
    id: "structural",
    title: "Structural Infrastructure",
    tagline: "The internal architecture of accountability.",
    description:
      "We map the venture so the founder can delegate without losing control. Without this, every decision comes back to you. Every hire creates confusion. Every process lives in someone's head.",
    purpose: "Remove operational friction.",
    services: [
      { name: "Org mapping", desc: "Who owns what — clearly defined" },
      { name: "Role clarity", desc: "Job descriptions that actually match the work" },
      { name: "Hiring roadmap", desc: "The right sequence for building a team" },
      { name: "KPI framework", desc: "What you measure, and what you don't" },
      { name: "Process documentation", desc: "How work gets done when you're not there" },
    ],
  },
  {
    n: "02",
    id: "digital",
    title: "Digital Infrastructure",
    tagline: "The technological nervous system.",
    description:
      "We connect, automate, and centralize the tools your venture needs to track performance and execute growth. Without this, your data is siloed, your team works in disconnected tools, and nothing is repeatable.",
    purpose: "Enable scalable momentum.",
    services: [
      { name: "Positioning-led website", desc: "Built to convert, not just to exist" },
      { name: "CRM setup", desc: "Customer data in one place, actually used" },
      { name: "Automation pipelines", desc: "Repetitive work removed from human hands" },
      { name: "Analytics architecture", desc: "Know what's working before you spend more" },
      { name: "Tool stack audit", desc: "Cut what you don't need. Fix what you have." },
    ],
  },
  {
    n: "03",
    id: "narrative",
    title: "Narrative Infrastructure",
    tagline: "The market-facing logic.",
    description:
      "We lock in your positioning before you spend a single rupee on visibility. Without this, your ads don't convert, your content doesn't compound, and your brand means nothing in the market.",
    purpose: "Drive premium perception.",
    services: [
      { name: "Founder positioning", desc: "Your story, told in a way that builds authority" },
      { name: "Messaging architecture", desc: "What you say, to whom, in what order" },
      { name: "LinkedIn authority system", desc: "Consistent presence that builds inbound trust" },
      { name: "Content framework", desc: "What to create and why — not just what to post" },
      { name: "Brand voice guide", desc: "So everyone sounds like one company" },
    ],
  },
];

export default function TALVIPillars() {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">02 — What We Build</span>
            <h2 className="text-section-title text-white">
              Three pillars.
              <br />
              <span style={{ color: "#2a2a2a" }}>All load-bearing.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="text-base leading-relaxed" style={{ color: "#999" }}>
              Most ventures work on one of these areas in isolation. TAL VI
              builds all three together — because the bottleneck shifts as you
              grow, and a gap in any one pillar limits all three.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Tab selector */}
        <AnimateOnScroll>
          <div
            className="flex"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            {pillars.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className="flex-1 text-left px-0 py-5 cursor-pointer relative transition-colors duration-200"
                style={{ background: "transparent", border: "none" }}
              >
                <span
                  className="text-xs font-bold block mb-1 tabular-nums"
                  style={{ color: active === i ? "#6366F1" : "#333" }}
                >
                  {p.n}
                </span>
                <span
                  className="text-xs md:text-sm font-semibold"
                  style={{ color: active === i ? "#fff" : "#555" }}
                >
                  {p.title}
                </span>
                {active === i && (
                  <motion.div
                    layoutId="pillar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: "#6366F1" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-10 py-10"
            >
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-bold"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    color: "#6366F1",
                    borderRadius: "2px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {current.purpose}
                </div>
                <h3
                  className="font-black mb-3 tracking-tight"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    color: "#fff",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {current.title}
                </h3>
                <p className="text-sm font-semibold mb-5" style={{ color: "#6366F1" }}>
                  {current.tagline}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#999" }}>
                  {current.description}
                </p>
              </div>

              {/* Right: services */}
              <div>
                <p className="label-eyebrow mb-5" style={{ color: "#333" }}>
                  What&apos;s included
                </p>
                <div className="flex flex-col">
                  {current.services.map((s, i) => (
                    <div
                      key={s.name}
                      className="flex items-start gap-5 py-4"
                      style={{
                        borderBottom: i < current.services.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      }}
                    >
                      <svg className="flex-shrink-0 mt-1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold mb-0.5" style={{ color: "#ddd" }}>{s.name}</p>
                        <p className="text-xs" style={{ color: "#666" }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
