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
          <span className="label-eyebrow">Contact</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.08 }}
          >
            <h1
              style={{
                marginBottom: "1.5rem",
              }}
            >
              Let&apos;s understand
              <br />
              <span style={{ color: "var(--text-muted)" }}>your business first.</span>
            </h1>
            <p className="body-copy mb-4" style={{ maxWidth: "460px" }}>
              No pitch decks needed. Just describe what you&apos;re working on and what you need help with.
            </p>
            <p className="body-copy mb-8" style={{ color: "var(--text-muted)", fontSize: "0.95rem", maxWidth: "460px" }}>
              We read every message personally. If there&apos;s a fit, we&apos;ll reply within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
          >
            <div
              className="border border-border-subtle overflow-hidden"
              style={{ background: "var(--bg-secondary)" }}
            >
              <div className="px-8 py-6 border-b border-border-subtle" style={{ background: "var(--bg-lift)" }}>
                <span className="label-eyebrow">What happens next</span>
              </div>
              <div className="flex flex-col">
                {[
                  { step: "01", action: "Fill in the form below. Takes 3 minutes." },
                  { step: "02", action: "We read it and understand your situation" },
                  { step: "03", action: "If there's a fit, we schedule a 30-min call" },
                  { step: "04", action: "We propose what we can do and how" },
                  { step: "05", action: "We begin within 2 weeks of agreement" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="grid grid-cols-12 border-b border-border-subtle last:border-0 hover:bg-bg-lift/20 transition-colors"
                  >
                    <div
                      className="col-span-2 p-5 text-xs font-black uppercase tracking-widest flex items-center justify-center border-r border-border-subtle"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.step}
                    </div>
                    <div
                      className="col-span-10 p-5 text-sm font-semibold"
                      style={{ color: "var(--text-body)" }}
                      dangerouslySetInnerHTML={{ __html: item.action }}
                    />
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
