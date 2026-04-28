"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, staggerItem } from "@/components/shared/AnimateOnScroll";
import { ModelComparisonVisual } from "@/components/visuals";

const models = [
  {
    name: "Validation Sprint",
    tag: "Most Common",
    duration: "4–6 weeks",
    price: "Fixed fee",
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
    duration: "6–10 weeks",
    price: "Fixed fee",
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
    name: "Monthly Validation",
    tag: null,
    duration: "Monthly retainer",
    price: "Monthly",
    best: "Running multiple ideas and need ongoing validation support.",
    what: [
      "2 validation sprints per month",
      "Weekly review sessions",
      "Assumption tracker and evidence log",
      "Priority access to the lab",
    ],
    featured: false,
  },
  {
    name: "TAL VI: Growth",
    tag: "Growth Arm",
    duration: "8–12 weeks",
    price: "Fixed fee",
    best: "Idea validated. Need to build revenue, GTM, and growth systems.",
    what: [
      "Revenue model and pricing design",
      "Go-to-market plan (first 100 customers)",
      "Growth loop and channel design",
      "Unit economics modeling",
      "Full playbook handed over at the end",
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
                <div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">
                    {m.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="label-eyebrow !text-muted">[ {m.duration} ]</span>
                    <span className="label-eyebrow !text-muted text-[10px]">•</span>
                    <span className="label-eyebrow !text-muted">[ {m.price} ]</span>
                  </div>
                </div>
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
                Initiate Inquiry →
              </a>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
