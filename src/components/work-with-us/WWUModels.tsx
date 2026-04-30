"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "@/components/shared/AnimateOnScroll";
import { ModelComparisonVisual } from "@/components/visuals";

const models = [
  {
    name: "Validation Sprint",
    tag: "Most Common",
    best: "You want to know if your idea is worth building before spending money.",
    what: [
      "Full 6-stage validation process",
      "10–15 customer interviews",
      "Demand proxy test",
      "Business model structuring",
      "Decision memo: Build / Pivot / Kill",
    ],
    featured: true,
  },
  {
    name: "Pilot Blueprint",
    tag: null,
    best: "Idea validated. Ready for your first real market test.",
    what: [
      "Everything in a Validation Sprint",
      "Full pilot design and execution",
      "Real customer cohort analysis",
      "Scale / pause / exit recommendation",
    ],
    featured: false,
  },
  {
    name: "TAL VI",
    tag: "Growth & Infrastructure",
    best: "Your business is running and you want to grow it properly. You need a website that works, a content and social presence that builds the brand, and the digital systems to support it all.",
    what: [
      "Digital OS & Automation",
      "Market Story & Positioning",
      "Org Structure & KPIs",
      "Targeted Execution Sprints",
    ],
    featured: false,
  },
  {
    name: "Co-Build & Equity",
    tag: "Partnership",
    best: "For founders with a validated concept who want TAL to co-build the venture alongside them.",
    what: [
      "TAL takes an equity stake",
      "Deep, ongoing execution support",
      "We build together",
    ],
    featured: false,
  },
];

export default function WWUModels() {
  return (
    <section
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg)" }}
    >
      <div className="layout-grid">
        <div className="grid md:grid-cols-2 gap-12 mb-24 items-start">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-8">Engagement Architectures</span>
            <h2 className="text-section-title">
              Choose what fits
              <br />
              <span className="text-muted">where you are.</span>
            </h2>
            <p className="body-copy mt-6 max-w-[480px]">
              Not sure which is right? Describe your situation and we'll suggest the starting point.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="aspect-[2/1] w-full bg-bg-secondary border border-border-subtle p-6 flex flex-col justify-center items-center text-center">
              <ModelComparisonVisual />
            </div>
          </AnimateOnScroll>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle">
          {models.map((m) => (
            <motion.div
              variants={staggerItem}
              key={m.name}
              className="flex flex-col h-full bg-background p-10 md:p-12 border-l-4 border-transparent data-[featured=true]:border-text-primary data-[featured=true]:bg-bg-secondary cursor-default"
              data-featured={m.featured}
              whileHover={{
                y: -3,
                boxShadow: "0 6px 24px -6px rgba(0,0,0,0.1)",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              style={{ willChange: "transform" }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-6 mb-12">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">
                  {m.name}
                </h3>
                {m.tag && (
                  <span className="label-eyebrow !text-primary bg-bg-lift/30 px-3 py-1">
                    {m.tag}
                  </span>
                )}
              </div>

              {/* Best for */}
              <div className="bg-bg-lift/10 border-l-2 border-border-subtle p-6 mb-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted block mb-2">TARGET SCENARIO</span>
                <p className="text-lg font-bold text-body italic tracking-tight">{m.best}</p>
              </div>

              {/* What's included */}
              <div className="flex flex-col gap-4 mb-12 flex-grow">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted block mb-2">SPECIFICATION</span>
                {m.what.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-text-primary mt-2" />
                    <span className="text-sm font-bold text-body uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact-form"
                className="btn-ghost w-full py-6 text-sm font-black uppercase tracking-widest border border-border-subtle hover:border-text-primary transition-colors text-center"
              >
                Start the conversation →
              </a>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
