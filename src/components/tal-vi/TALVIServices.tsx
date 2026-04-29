"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { GrowthLeversVisual } from "@/components/visuals";

const services = [
  {
    n: "01",
    title: "Digital",
    tagline: "Infrastructure & Tools",
    body: "We build the digital infrastructure and tools that power your day-to-day operations. Most businesses run on WhatsApp and manual processes longer than they should.",
    output: "Digital OS + Automation",
  },
  {
    n: "02",
    title: "Narrative",
    tagline: "Positioning & Messaging",
    body: "We build your market story — positioning, messaging, and communication architecture. If people outside your team can't explain what you do and why it matters, you don't have a narrative yet.",
    output: "Market Story + Comms Architecture",
  },
  {
    n: "03",
    title: "Org",
    tagline: "Structure & KPIs",
    body: "We map your organization, clarify roles, document processes, and build the KPI framework that lets the business run without the founder in every decision.",
    output: "Org Chart + KPI Framework",
  },
];

export default function TALVIServices() {
  return (
    <section
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-secondary)" }}
    >
      <div className="layout-grid">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-5">What we work on</span>
            <h2 className="text-section-title text-foreground">
              Three service lines.
              <br />
              <span className="text-muted">Targeted execution.</span>
            </h2>
            <p className="text-base leading-relaxed text-muted mt-6 max-w-[480px]">
              Target client for TAL VI: Operating businesses with existing revenue. Teams feeling structural strain. Founders who are the bottleneck in their own business.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="aspect-[21/9] bg-background border border-border-subtle p-6 flex flex-col justify-center items-center text-center">
              <GrowthLeversVisual />
            </div>
          </AnimateOnScroll>
        </div>

        <div
          className="grid md:grid-cols-3"
          style={{ gap: "1px", background: "var(--border-color)" }}
        >
          {services.map((s, i) => (
            <AnimateOnScroll key={s.n} delay={0.06 * i}>
              <div
                className="p-8 md:p-10 flex flex-col gap-4 h-full transition-colors duration-300 cursor-default"
                style={{ background: "var(--bg)" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--bg-secondary)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--bg)"}
              >
                <div
                  className="text-xs font-bold tabular-nums"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.n}
                </div>
                <div>
                  <h3 className="text-subsection mb-1.5 tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm font-medium mb-3 text-muted">
                    {s.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-body">
                    {s.body}
                  </p>
                </div>
                <div
                  className="inline-flex self-start items-center gap-2 px-3 py-1.5 text-xs font-bold mt-auto"
                  style={{ background: "var(--bg-lift)", color: "var(--text-primary)", borderRadius: "0px" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                  {s.output}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
