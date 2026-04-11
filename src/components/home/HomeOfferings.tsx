"use client";

import Link from "next/link";
import { AnimateOnScroll, AnimatedLine } from "@/components/shared/AnimateOnScroll";

export default function HomeOfferings() {
  return (
    <section
      style={{
        paddingTop: "clamp(5rem, 10vh, 8rem)",
        paddingBottom: "clamp(5rem, 10vh, 8rem)",
        background: "var(--bg)",
      }}
    >
      <AnimatedLine className="opacity-60" />
      <div className="layout-grid px-6 md:px-10 mt-20">

        <AnimateOnScroll>
          <p className="label-eyebrow mb-8">Two sides. One system.</p>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              color: "var(--text-primary)",
              marginBottom: "clamp(3.5rem, 8vh, 6rem)",
            }}
          >
            Where are you
            <br />
            <span style={{ color: "var(--text-muted)" }}>right now?</span>
          </h2>
        </AnimateOnScroll>

        {/* Two offerings — stacked, full width, no card styling */}
        <div>

          {/* ── Adda Labs ── */}
          <AnimateOnScroll>
            <div
              style={{
                paddingTop: "clamp(2.5rem, 5vh, 4.5rem)",
                paddingBottom: "clamp(2.5rem, 5vh, 4.5rem)",
              }}
            >
              <AnimatedLine className="mb-12" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <p className="label-eyebrow">Stage 01 — Validate</p>
              </div>

              <h3
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.0,
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                The Adda Labs
                <br />
                <span style={{ color: "var(--text-muted)" }}>Venture Lab</span>
              </h3>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--text-body)",
                  maxWidth: "600px",
                  marginBottom: "1.25rem",
                }}
              >
                You have an idea. You haven&apos;t built anything yet — or you
                have, and you&apos;re not sure if you built the right thing.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  maxWidth: "560px",
                  marginBottom: "2.5rem",
                }}
              >
                We run a 6-stage validation process to find out if the idea is
                worth building before you invest serious time or money.
              </p>

              <Link href="/venture-lab" className="btn-primary">
                Explore Venture Lab
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

          {/* ── TAL VI ── */}
          <AnimateOnScroll delay={0.08}>
            <div
              style={{
                paddingTop: "clamp(2.5rem, 5vh, 4.5rem)",
                paddingBottom: "clamp(2.5rem, 5vh, 4.5rem)",
              }}
            >
              <AnimatedLine className="mb-12" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <p className="label-eyebrow">Stage 02 — Execute</p>
              </div>

              <h3
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.0,
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                TAL VI
                <br />
                <span style={{ color: "var(--text-muted)" }}>Venture Infrastructure</span>
              </h3>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--text-body)",
                  maxWidth: "600px",
                  marginBottom: "1.25rem",
                }}
              >
                The idea is validated. Now the work of building a real business
                begins — and most founders skip the foundations.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  maxWidth: "560px",
                  marginBottom: "2.5rem",
                }}
              >
                TAL VI builds the structural, digital, and narrative
                infrastructure your venture needs before growth amplifies every
                gap in your operations.
              </p>

              <Link href="/tal-vi" className="btn-ghost">
                Explore TAL VI
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Bridge — inline, no container */}
          <AnimateOnScroll delay={0.12}>
            <div
              style={{
                paddingTop: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <AnimatedLine className="mb-8" />
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  maxWidth: "580px",
                }}
              >
                Most ventures need both. Start with Venture Lab to validate.
                Move to TAL VI to build the systems that make it scalable. They
                are designed to work together.
              </p>
              <Link
                href="/how-it-works"
                style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.02em" }}
              >
                See the full process →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
