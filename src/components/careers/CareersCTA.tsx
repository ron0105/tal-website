"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CareersCTA() {
  return (
    <section
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="layout-grid px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-xl"
        >
          <span className="label-eyebrow block mb-6">Looking for a different role?</span>
          <h2
            className="mb-6"
            style={{
              color: "var(--text-primary)",
            }}
          >
            If you have something special to offer,{" "}
            <span style={{ color: "var(--accent)" }}>we would love to hear from you.</span>
          </h2>
          <p className="body-copy mb-8" style={{ maxWidth: "440px" }}>
            Tell us what you would take ownership of, what you have built and why TAL
            suits you. We read every message.
          </p>
          <a
            href="mailto:rohan@theaddalabs.com"
            className="btn-ghost"
            style={{ display: "inline-flex" }}
          >
            Write to us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
