"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function NIHero() {
  return (
    <section className="bg-background overflow-hidden" style={{ paddingTop: "clamp(9rem, 18vh, 14rem)", paddingBottom: "clamp(5rem, 10vh, 8rem)" }}>
      <div className="layout-grid px-6 md:px-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease }}
            className="label-eyebrow mb-6 block"
            style={{ color: "var(--accent)" }}
          >
            Think & Build
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-poppins mb-8"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Your idea might be brilliant.
            <br />
            Or it might just <em style={{ fontStyle: "italic", color: "var(--accent)" }}>feel</em> brilliant at 2am.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="text-lg md:text-xl mb-4 leading-relaxed"
            style={{ color: "var(--text-body)", maxWidth: "580px" }}
          >
            There&apos;s one way to find out, and it isn&apos;t quitting your job or spending your savings on an app.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.28 }}
            className="text-base mb-10 leading-relaxed"
            style={{ color: "var(--text-muted)", maxWidth: "560px" }}
          >
            We pressure-test ideas with real customer conversations, real numbers, and zero sugarcoating — in weeks, not years. If it holds up, you build with proof. If it doesn&apos;t, we just saved you a very expensive lesson.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.38 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/918169315080?text=Hi%2C%20I%20have%20an%20idea%20I%27d%20like%20to%20talk%20through."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer"
              style={{ padding: "15px 34px", background: "var(--navy)", color: "#fff", borderRadius: "var(--radius-btn)", borderBottom: "3px solid var(--accent)" }}
            >
              Talk through your idea
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 font-semibold text-sm transition-colors cursor-pointer hover:text-accent"
              style={{ padding: "15px 10px", color: "var(--text-muted)" }}
            >
              See how it works ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
