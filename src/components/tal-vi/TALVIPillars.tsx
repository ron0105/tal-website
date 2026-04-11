"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll, AnimatedLine, StaggerContainer, staggerItem } from "@/components/shared/AnimateOnScroll";

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
      { name: "Org mapping", desc: "Who owns what: clearly defined" },
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
      { name: "Content framework", desc: "What to create and why: not just what to post" },
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
              builds all three together: because the bottleneck shifts as you
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
                <div className="label-eyebrow !text-primary bg-bg-lift px-3 py-1 mb-10 inline-block">
                  {current.purpose}
                </div>
                <h3 className="text-display !text-4xl md:!text-6xl mb-8 uppercase italic tracking-tighter">
                  {current.title}
                </h3>
                <p className="text-xl md:text-2xl font-black italic mb-6 text-body">
                  {current.tagline}
                </p>
                <p className="body-copy">
                  {current.description}
                </p>
              </div>

              {/* Right: services */}
              <div className="border border-border-subtle bg-background overflow-hidden relative">
                <div className="px-6 py-4 border-b border-border-subtle bg-bg-lift/30">
                  <span className="label-eyebrow">Service Specification</span>
                </div>
                <StaggerContainer className="flex flex-col">
                  {current.services.map((s, i) => (
                    <motion.div
                      key={s.name}
                      variants={staggerItem}
                      className="grid grid-cols-12 border-b border-border-subtle last:border-0 hover:bg-bg-lift/10 transition-colors"
                    >
                      <div className="col-span-4 p-5 text-xs font-black uppercase tracking-widest text-muted border-r border-border-subtle bg-bg-lift/10">
                        {s.name}
                      </div>
                      <div className="col-span-8 p-5 text-sm font-bold text-body">
                        {s.desc}
                      </div>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
