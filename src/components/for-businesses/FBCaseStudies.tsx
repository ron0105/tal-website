"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

/* NOTE — stats and quotes below are illustrative drafts. Confirm real
   figures and client-approved wording with Rohan before merging to main. */

const cases = [
  {
    client: "A D2C consumer brand",
    craft: "Strategy & Operations",
    led: "Led by Rohan",
    work: "Steady orders, big ambitions — what was missing was clarity on which channels earned their keep. We rebuilt the analytics, mapped the funnel end to end, and restructured operations around what the numbers said.",
    stat: "2.3x",
    statLabel: "return on marketing spend within one quarter",
    quote: "We finally stopped guessing. Every rupee we spend now, we know why.",
    attribution: "Founder, D2C brand",
    visual: { initial: "01", tone: "rgba(202,138,4,0.16)" },
  },
  {
    client: "A professional services firm",
    craft: "Brand & Visual Identity",
    led: "Led by Soniya",
    work: "Years of credible work, ready for a brand to match. We built the visual identity from scratch — logo, brand language, social presence — and turned deep expertise into content people stop for.",
    stat: "+60%",
    statLabel: "more inbound enquiries in the first 90 days",
    quote: "Clients tell us we finally look like the firm they always knew we were.",
    attribution: "Managing partner, services firm",
    visual: { initial: "02", tone: "rgba(202,138,4,0.10)" },
  },
  {
    client: "A consumer brand launch",
    craft: "Brand Film & Storytelling",
    led: "Led by Abhishek",
    work: "A launch with a story worth telling. We found the narrative, shot the brand film, and built the content engine around it — cinematography, edits, and a launch sequence that punched far above its budget.",
    stat: "3x",
    statLabel: "audience growth across the launch quarter",
    quote: "People assumed we were a much bigger company. That film did it.",
    attribution: "Founder, consumer brand",
    visual: { initial: "03", tone: "rgba(202,138,4,0.13)" },
  },
];

export default function FBCaseStudies() {
  return (
    <section id="proof" className="py-24 md:py-32 border-t border-border-subtle" style={{ background: "var(--bg-secondary)" }}>
      <div className="layout-grid px-6 md:px-10">

        <AnimateOnScroll className="mb-14">
          <span className="label-eyebrow mb-6 block" style={{ color: "var(--accent)" }}>Proof of work</span>
          <h2
            className="font-poppins mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              color: "var(--text-primary)",
              maxWidth: "680px",
            }}
          >
            Work that speaks before we do.
          </h2>
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
            Some of our favourite work lives under NDAs — so the names stay protected, and everything else is real. Here&apos;s what we did, what changed, and what they said.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {cases.map((c, i) => (
            <AnimateOnScroll key={c.client} delay={i * 0.08}>
              <div
                className="card-lift flex flex-col h-full overflow-hidden cursor-default"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "14px",
                  boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
                }}
              >
                <div
                  className="relative flex items-end p-6"
                  style={{
                    height: "150px",
                    background: `linear-gradient(135deg, var(--navy) 0%, #1E293B 100%)`,
                  }}
                >
                  <span
                    className="absolute font-poppins select-none"
                    style={{ top: "12px", right: "20px", fontSize: "4.5rem", lineHeight: 1, color: c.visual.tone, fontWeight: 500 }}
                    aria-hidden
                  >
                    {c.visual.initial}
                  </span>
                  <span
                    className="absolute text-[9px] font-bold uppercase tracking-widest px-2 py-1"
                    style={{ top: "12px", left: "12px", color: "rgba(202,138,4,0.9)", border: "1px solid rgba(202,138,4,0.45)", borderRadius: "6px" }}
                  >
                    Protected under NDA
                  </span>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {c.craft}
                    </p>
                    <h3 className="font-bold leading-snug" style={{ fontSize: "1.15rem", color: "#FFFFFF" }}>
                      {c.client}
                    </h3>
                  </div>
                </div>

                <div className="p-7 flex flex-col gap-4 flex-1">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{c.work}</p>

                  {/* Quantified outcome */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-poppins" style={{ fontSize: "2rem", lineHeight: 1, color: "var(--accent-hover)", fontWeight: 500 }}>
                      {c.stat}
                    </span>
                    <span className="text-xs leading-snug font-semibold" style={{ color: "var(--text-muted)" }}>
                      {c.statLabel}
                    </span>
                  </div>

                  <figure className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <blockquote
                      className="text-sm leading-relaxed pl-4"
                      style={{ fontStyle: "italic", color: "var(--text-muted)", borderLeft: "3px solid var(--accent)" }}
                    >
                      &ldquo;{c.quote}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs font-bold uppercase tracking-widest mt-3 pl-4" style={{ color: "var(--text-muted)" }}>
                      {c.attribution} · name withheld
                    </figcaption>
                  </figure>

                  <p
                    className="text-xs font-bold uppercase tracking-widest pt-4"
                    style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border-subtle)" }}
                  >
                    {c.led}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.1} className="mt-10">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Happy to walk you through any of these in detail — names and all, once we&apos;re talking.{" "}
            <a
              href="https://wa.me/918169315080?text=Hi%2C%20I%27d%20like%20to%20hear%20more%20about%20your%20past%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold cursor-pointer"
              style={{ color: "var(--accent-hover)", borderBottom: "2px solid var(--accent)" }}
            >
              Ask us on WhatsApp →
            </a>
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
