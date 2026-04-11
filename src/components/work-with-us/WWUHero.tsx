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
            <h1 className="text-page-title text-foreground mb-8">
              Bring us a
              <br />
              <span className="text-muted">real problem.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-4 text-body max-w-[480px]">
              You don&apos;t need a pitch deck or a finished plan. Describe the
              problem you&apos;re trying to solve, where you are, and what
              you currently know.
            </p>
            <p className="text-lg leading-relaxed text-body max-w-[460px]">
              We read every submission personally. If the problem is worth
              exploring, you&apos;ll hear from us within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
          >
            <div style={{ border: "1px solid var(--border-color)", background: "var(--bg-secondary)" }}>
              <div className="px-7 py-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <span className="label-eyebrow">What to expect</span>
              </div>
              {[
                { step: "01", text: "Fill in the form below — takes 3 minutes" },
                { step: "02", text: "We read it and assess the problem" },
                { step: "03", text: "If there's a fit, we schedule a 45-minute call" },
                { step: "04", text: "We propose the right engagement model" },
                { step: "05", text: "We begin within 2 weeks of alignment" },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`flex items-start gap-5 px-7 py-4 ${i < 4 ? "border-b" : ""}`}
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <span className="section-num w-6 flex-shrink-0">{item.step}</span>
                  <span className="text-base text-body">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
