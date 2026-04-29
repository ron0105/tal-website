"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { AnimateOnScroll, AnimatedLine, StaggerContainer, staggerItem } from "@/components/shared/AnimateOnScroll";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillars = [
  {
    n: "01",
    id: "digital",
    title: "Digital",
    tagline: "Infrastructure & Tools",
    description: "We set up the digital tools and systems your business actually needs. Most teams run on WhatsApp and spreadsheets longer than they should. We fix that.",
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
    n: "02",
    id: "narrative",
    title: "Narrative",
    tagline: "Your Market Story",
    description: "We work out what your business actually stands for and how to say it. Most businesses are doing good work that the world cannot see clearly because the story is not yet sharp enough. We make it sharp.",
    purpose: "Drive premium perception.",
    services: [
      { name: "Founder positioning", desc: "Your story, told in a way that builds authority" },
      { name: "Messaging architecture", desc: "What you say, to whom, in what order" },
      { name: "LinkedIn authority system", desc: "Consistent presence that builds inbound trust" },
      { name: "Content framework", desc: "What to create and why: not just what to post" },
      { name: "Brand voice guide", desc: "So everyone sounds like one company" },
    ],
  },
  {
    n: "03",
    id: "org",
    title: "Org",
    tagline: "Internal Foundation",
    description: "We map how the business runs today and how it needs to run tomorrow. Most teams grow faster than their structure. People end up doing everything and nothing at the same time. We fix the roles, the process, and the accountability.",
    purpose: "Remove operational friction.",
    services: [
      { name: "Org mapping", desc: "Who owns what: clearly defined" },
      { name: "Role clarity", desc: "Job descriptions that actually match the work" },
      { name: "Hiring roadmap", desc: "The right sequence for building a team" },
      { name: "KPI framework", desc: "What you measure, and what you don't" },
      { name: "Process documentation", desc: "How work gets done when you're not there" },
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
          <AnimateOnScroll delay={0.1} className="flex flex-col justify-end gap-6">
            <p className="text-lg leading-relaxed text-body">
              TAL VI is for businesses that are already running. If you have customers, revenue, and a team, but feel like things are getting harder to manage as you grow, this is where to start.
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
              transition={{ duration: 0.3, ease: EASE }}
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
                <p className="body-copy mb-8">
                  {current.description}
                </p>
                <div className="aspect-[3/1] w-full max-w-[320px] bg-background border border-border-subtle p-4 flex flex-col justify-center items-center text-center">
                  <p className="text-xs font-bold text-text-primary uppercase tracking-widest mb-1">Pillar Visual</p>
                  <p className="text-[10px] text-muted">Placeholder representing {current.title}</p>
                </div>
              </div>

              {/* Right: services */}
              <div className="border border-border-subtle bg-background overflow-hidden relative">
                <div className="px-6 py-4 border-b border-border-subtle bg-bg-lift/30">
                  <span className="label-eyebrow">Service Specification</span>
                </div>
                <StaggerContainer className="flex flex-col">
                  {current.services.map((s) => (
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
