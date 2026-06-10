"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HomeCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-border-subtle"
      style={{
        background: "var(--bg-secondary)",
        paddingTop: "clamp(5rem, 12vh, 9rem)",
        paddingBottom: "clamp(5rem, 12vh, 9rem)",
      }}
    >
      {/* Large ghost text — decorative backdrop */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-poppins whitespace-nowrap"
          style={{
            fontSize: "clamp(8rem, 20vw, 18rem)",
            letterSpacing: "-0.05em",
            color: "var(--text-primary)",
            opacity: 0.025,
            lineHeight: 1,
          }}
        >
          START
        </span>
      </div>

      {/* Accent gradient blob — top right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 60% 30%, var(--accent), transparent 65%)",
          opacity: 0.07,
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      {/* Second blob — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 40% 70%, var(--accent), transparent 65%)",
          opacity: 0.05,
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Decorative horizontal rule with dot */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-center justify-center"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        aria-hidden="true"
      />

      <div className="layout-grid px-6 md:px-10 relative z-10">

        {/* Headline — mask reveal */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
            <span className="label-eyebrow text-accent">The next step</span>
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h2
              className="font-poppins"
              style={{
                fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "var(--text-primary)",
              }}
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            >
              Let&apos;s figure out the right next step.
            </motion.h2>
          </div>

          <motion.p
            className="text-xl text-muted mx-auto"
            style={{ maxWidth: "520px" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            Tell us about your business or idea. We will give you an honest view of where to start and what it would look like to work together.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
        >
          <Link
            href="/contact"
            className="btn-primary"
            style={{ padding: "18px 48px", fontSize: "1.05rem", minWidth: "220px", textAlign: "center" }}
          >
            Book a Call
          </Link>
          <a
            href="https://wa.me/918169315080?text=Hi%2C%20I%20found%20TAL%20Consulting%20and%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center justify-center gap-2"
            style={{
              padding: "18px 48px",
              fontSize: "1.05rem",
              minWidth: "220px",
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            <WAIcon />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          className="text-center text-sm text-muted mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          No pressure. No pitch. Just an honest conversation.
        </motion.p>

      </div>
    </section>
  );
}
