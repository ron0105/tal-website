"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CareersHero() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      style={{ padding: "clamp(10rem, 18vh, 14rem) 1.5rem clamp(2.5rem, 6vh, 4rem)" }}
    >
      {/* Gradient blob, matches HomeLabHero */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, var(--accent), transparent 65%)",
          }}
        />
      </div>

      <div className="layout-grid px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
          <span className="label-eyebrow" style={{ color: "var(--accent)" }}>
            The Adda Labs · Navi Mumbai
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="font-poppins mb-6"
          style={{ color: "var(--text-primary)", maxWidth: "860px" }}
        >
          Learn by building real things.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="text-lg leading-relaxed text-body mb-10"
          style={{ maxWidth: "34rem" }}
        >
          Work on real ideas alongside the founder, with hands-on training, steady feedback and a path to a paid internship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
        >
          <a href="#open-roles" className="btn-primary" style={{ padding: "13px 28px" }}>
            See the tracks →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
