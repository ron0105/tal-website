"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const services = [
  {
    n: "01",
    title: "Revenue Architecture",
    tagline: "What should you charge — and why?",
    body: "We help you build a pricing model that your customers will accept and your business needs to survive. This includes your pricing structure, tiers, and the logic behind each.",
    output: "Pricing model + revenue forecast",
  },
  {
    n: "02",
    title: "Go-to-Market Design",
    tagline: "Who buys first — and how do you reach them?",
    body: "We define your first 100 customers: who they are, where to find them, what to say, and what a realistic acquisition plan looks like for the first 90 days.",
    output: "GTM plan + first 100 customer map",
  },
  {
    n: "03",
    title: "Growth Systems",
    tagline: "How does your business grow without you?",
    body: "We design referral loops, retention triggers, and channel strategies that make your business grow systematically — not just when you push it.",
    output: "Growth loop design + channel playbook",
  },
  {
    n: "04",
    title: "Retention & Loyalty Design",
    tagline: "How do you keep customers coming back?",
    body: "Acquisition is expensive. Retention is where the economics actually work. We build the systems that reduce churn and increase lifetime customer value.",
    output: "Retention system + churn reduction plan",
  },
  {
    n: "05",
    title: "Unit Economics Review",
    tagline: "Does the math work at 10x scale?",
    body: "We model your cost of acquisition, average revenue per user, contribution margin, and payback period — so you know if growth will make you profitable or just burn faster.",
    output: "Unit economics model + breakeven analysis",
  },
  {
    n: "06",
    title: "Scale Readiness Assessment",
    tagline: "Are you ready to raise money or grow fast?",
    body: "We assess whether your business has the right metrics, team structure, and operational foundation to grow quickly — before you hire, fundraise, or expand.",
    output: "Readiness report + scale roadmap",
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
              Six growth levers.
              <br />
              <span className="text-muted">All measurable.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} className="flex items-end">
            <p className="text-base leading-relaxed text-muted">
              Every TAL VI engagement is built around these six areas. Not all
              six are needed at once — we prioritize based on where you are and
              what&apos;s holding your growth back.
            </p>
          </AnimateOnScroll>
        </div>

        <div
          className="grid md:grid-cols-2"
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
