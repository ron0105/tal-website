"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function WWUHero() {
  return (
    <section className="relative padding-hero bg-background">
      <div className="layout-grid">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-5 mb-10"
        >
          <span className="label-eyebrow">Work With Us</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.08 }}
          >
            <h1 className="text-display !text-4xl md:!text-6xl uppercase italic tracking-tighter mb-8">
              Bring us a
              <br />
              <span className="text-muted opacity-50">real problem.</span>
            </h1>
            <p className="body-copy mb-8">
              You don&apos;t need a pitch deck or a finished plan. Describe the
              problem you&apos;re trying to solve, where you are, and what
              you currently know.
            </p>
            <p className="body-copy !text-base !text-muted">
              We read every submission personally. If the problem is worth
              exploring, you&apos;ll hear from us within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
          >
            <div className="border border-border-subtle bg-bg-secondary overflow-hidden">
              <div className="px-8 py-6 border-b border-border-subtle bg-bg-lift/30">
                <span className="label-eyebrow">Onboarding Pipeline</span>
              </div>
              <div className="flex flex-col">
                {[
                  { segment: "Initiation", focus: "Fill in the form below — takes 3 minutes" },
                  { segment: "Assessment", focus: "We read it and assess the problem" },
                  { segment: "Alignment", focus: "If there's a fit, we schedule a 45-min call" },
                  { segment: "Engagement", focus: "We propose the right engagement model" },
                  { segment: "Deployment", focus: "We begin within 2 weeks of alignment" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 border-b border-border-subtle last:border-0 hover:bg-bg-lift/10 transition-colors"
                  >
                    <div className="col-span-4 p-5 text-xs font-black uppercase tracking-widest text-muted border-r border-border-subtle bg-bg-lift/10 italic">
                      [{item.segment}]
                    </div>
                    <div className="col-span-8 p-5 text-sm font-bold text-body">
                      {item.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
