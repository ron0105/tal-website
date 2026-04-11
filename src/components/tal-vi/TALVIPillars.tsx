"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll, AnimatedLine } from "@/components/shared/AnimateOnScroll";

const pillars = [
  {
    n: "01",
    id: "structural",
    title: "Internal Foundation",
    tagline: "The way your team works together.",
    description:
      "We organize your business so you can hand off work without losing control. When everyone knows exactly what they're responsible for, you stop being the bottleneck in every decision.",
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
    title: "The Digital Engine",
    tagline: "The tech that powers your growth.",
    description:
      "We set up the tools and automation your team needs to work faster and track performance. Instead of messy spreadsheets and disconnected tools, you get a single system that tells you exactly how the business is doing.",
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
    title: "Your Market Story",
    tagline: "Why customers should choose you.",
    description:
      "We lock in your positioning before you spend money on marketing. We help you figure out what to say, who to say it to, and how to build trust in the market so your message actually sticks.",
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
      className="padding-section"
      style={{ background: "var(--bg-secondary)" }}
    >
      <AnimatedLine className="mb-20 opacity-60" />
      <div className="layout-grid">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-6">02 | What We Build</span>
            <h2 className="text-section-title text-foreground">
              Three pillars.
              <br />
              <span className="text-muted">All load-bearing.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="text-lg leading-relaxed text-body">
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
            style={{ borderBottom: "1px solid var(--border-subtle)" }}
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
                  style={{ color: active === i ? "var(--text-primary)" : "var(--text-muted)" }}
                >
                  {p.n}
                </span>
                <span
                  className="text-xs md:text-sm font-semibold"
                  style={{ color: active === i ? "var(--text-primary)" : "var(--text-muted)" }}
                >
                  {p.title}
                </span>
                {active === i && (
                  <motion.div
                    layoutId="pillar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: "var(--text-primary)" }}
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
                    background: "var(--bg-lift)",
                    color: "var(--text-primary)",
                    borderRadius: "0px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {current.purpose}
                </div>
                <h3
                  className="font-black mb-3 tracking-tight text-foreground"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {current.title}
                </h3>
                <p className="text-base font-semibold mb-5 text-body">
                  {current.tagline}
                </p>
                <p className="text-lg leading-relaxed text-body">
                  {current.description}
                </p>
              </div>

              {/* Right: services */}
              <div>
                <p className="label-eyebrow mb-5">
                  What&apos;s included
                </p>
                <motion.div 
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-20px" }}
                  variants={{ show: { transition: { staggerChildren: 0.05 } } }}
                  className="flex flex-col"
                >
                  {current.services.map((s, i) => (
                    <motion.div
                      key={s.name}
                      variants={{
                        hidden: { opacity: 0, x: -5 },
                        show: { opacity: 1, x: 0 }
                      }}
                      className="flex items-start gap-5 py-4"
                      style={{
                        borderBottom: i < current.services.length - 1 ? "1px solid var(--border-subtle)" : "none",
                      }}
                    >
                      <svg className="flex-shrink-0 mt-1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <div>
                        <p className="text-lg font-semibold mb-0.5 text-foreground">{s.name}</p>
                        <p className="text-base text-body">{s.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
