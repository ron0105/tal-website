"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function HomeOfferings() {
  return (
    <section
      className="px-6 md:px-10 py-24 md:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow block mb-5">Two sides. One system.</span>
          <h2 className="text-section-title text-white" style={{ maxWidth: "600px" }}>
            Where are you
            <br />
            <span style={{ color: "#2a2a2a" }}>right now?</span>
          </h2>
        </AnimateOnScroll>

        {/* The two offerings — full width, side by side */}
        <div
          className="grid md:grid-cols-2 gap-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {/* ── Adda Labs ── */}
          <AnimateOnScroll delay={0}>
            <div
              className="flex flex-col p-8 md:p-10 h-full"
              style={{ background: "#0A0A0A" }}
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-xs font-bold px-2.5 py-1"
                  style={{
                    background: "rgba(37,99,235,0.1)",
                    color: "#2563EB",
                    borderRadius: "2px",
                    letterSpacing: "0.08em",
                  }}
                >
                  VALIDATE
                </span>
                <span className="label-eyebrow">Stage 01</span>
              </div>

              <h3
                className="font-black tracking-tight mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: "1.0",
                }}
              >
                The Adda Labs
                <br />
                <span style={{ color: "#2563EB" }}>Venture Lab</span>
              </h3>

              <p
                className="text-base leading-relaxed mb-2"
                style={{ color: "#999" }}
              >
                You have an idea. You haven&apos;t built anything yet — or you
                have, and you&apos;re not sure if you built the right thing.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#555" }}
              >
                We run a 6-stage validation process to find out if the idea is
                worth building before you invest serious time or money.
              </p>

              <div
                className="mb-8 p-5"
                style={{
                  border: "1px solid rgba(37,99,235,0.12)",
                  borderRadius: "2px",
                  background: "rgba(37,99,235,0.03)",
                }}
              >
                <p className="label-eyebrow mb-4" style={{ color: "#333" }}>
                  You get answers to
                </p>
                {[
                  "Is this a real problem — or just my assumption?",
                  "Will people actually pay for this?",
                  "Should we build, change direction, or stop?",
                  "What should version one look like?",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3 py-2.5" style={{ borderBottom: "1px solid rgba(37,99,235,0.06)" }}>
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: "#2563EB" }} />
                    <span className="text-sm" style={{ color: "#888" }}>{q}</span>
                  </div>
                ))}
              </div>

              <Link href="/venture-lab" className="btn-primary mt-auto self-start">
                Explore Venture Lab
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

          {/* ── TAL VI ── */}
          <AnimateOnScroll delay={0.1}>
            <div
              className="flex flex-col p-8 md:p-10 h-full"
              style={{ background: "#0A0A0A" }}
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-xs font-bold px-2.5 py-1"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    color: "#6366F1",
                    borderRadius: "2px",
                    letterSpacing: "0.08em",
                  }}
                >
                  EXECUTE
                </span>
                <span className="label-eyebrow">Stage 02</span>
              </div>

              <h3
                className="font-black tracking-tight mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: "1.0",
                }}
              >
                TAL VI
                <br />
                <span style={{ color: "#6366F1" }}>Venture Infrastructure</span>
              </h3>

              <p
                className="text-base leading-relaxed mb-2"
                style={{ color: "#999" }}
              >
                The idea is validated. Now the work of building a real business
                begins — and most founders skip the foundations.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#555" }}
              >
                TAL VI builds the structural, digital, and narrative
                infrastructure your venture needs before growth amplifies every
                gap in your operations.
              </p>

              <div
                className="mb-8 p-5"
                style={{
                  border: "1px solid rgba(99,102,241,0.12)",
                  borderRadius: "2px",
                  background: "rgba(99,102,241,0.03)",
                }}
              >
                <p className="label-eyebrow mb-4" style={{ color: "#333" }}>
                  We build three things
                </p>
                {[
                  { label: "Structural", desc: "Roles, processes, org design, hiring roadmap" },
                  { label: "Digital", desc: "Website, CRM, automation, analytics" },
                  { label: "Narrative", desc: "Positioning, content, founder authority" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 py-2.5" style={{ borderBottom: "1px solid rgba(99,102,241,0.06)" }}>
                    <span className="text-xs font-bold flex-shrink-0 mt-0.5" style={{ color: "#6366F1", width: "70px" }}>{item.label}</span>
                    <span className="text-sm" style={{ color: "#888" }}>{item.desc}</span>
                  </div>
                ))}
              </div>

              <Link href="/tal-vi" className="mt-auto self-start" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 24px",
                background: "#6366F1",
                color: "#fff",
                fontSize: "0.8125rem",
                fontWeight: 700,
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
              }}>
                Explore TAL VI
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* The bridge statement */}
        <AnimateOnScroll delay={0.2}>
          <div
            className="mt-px p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
            style={{ background: "#0D0D0D", border: "1px solid rgba(255,255,255,0.06)", borderTop: "none" }}
          >
            <div className="w-px self-stretch hidden md:block" style={{ background: "rgba(255,255,255,0.08)" }} />
            <p className="text-sm font-medium" style={{ color: "#555", maxWidth: "640px" }}>
              Most ventures need both.{" "}
              <span style={{ color: "#999" }}>
                Start with Venture Lab to validate the idea. Move to TAL VI to build the systems
                that make it scalable. They are designed to work together.
              </span>
            </p>
            <Link
              href="/how-it-works"
              className="flex-shrink-0 text-xs font-semibold"
              style={{ color: "#2563EB" }}
            >
              See the full process →
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
