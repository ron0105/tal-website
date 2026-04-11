"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function WWUHero() {
  return (
    <section className="relative grid-texture px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto">

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
            <h1 className="text-page-title text-white mb-8">
              Bring us a
              <br />
              <span style={{ color: "#222" }}>real problem.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "#999", maxWidth: "480px" }}>
              You don&apos;t need a pitch deck or a finished plan. Describe the
              problem you&apos;re trying to solve, where you are, and what
              you currently know.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#555", maxWidth: "460px" }}>
              We read every submission personally. If the problem is worth
              exploring, you&apos;ll hear from us within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
          >
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                background: "#0A0A0A",
              }}
            >
              <div className="px-7 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="label-eyebrow" style={{ color: "#333" }}>What to expect</span>
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
                  className="flex items-start gap-5 px-7 py-4"
                  style={{ borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                >
                  <span className="section-num w-6 flex-shrink-0">{item.step}</span>
                  <span className="text-sm" style={{ color: "#888" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
