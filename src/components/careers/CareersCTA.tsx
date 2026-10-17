"use client";

import Link from "next/link";
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
          <h2
            className="mb-6"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Have something else to <span style={{ color: "var(--accent)" }}>offer?</span>
          </h2>
          <p className="body-copy mb-8" style={{ maxWidth: "440px" }}>
            Tell us what you would like to build with us. We read every message.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:rohan@theaddalabs.com"
              className="btn-ghost"
              style={{ display: "inline-flex" }}
            >
              Write to us →
            </a>
            <Link href="/privacy" className="text-sm underline underline-offset-4" style={{ color: "var(--text-muted)" }}>
              How we handle your information
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
