"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const phases = [
  {
    n: "01",
    title: "Get found",
    duration: "One-time build",
    description:
      "Your digital foundation — a website that converts, your Google Business Profile set up properly, and SEO so you show up when people search for what you do.",
    outputs: ["A website that works like a 24/7 salesperson", "Found on Google when it matters", "Analytics so you know what's working"],
  },
  {
    n: "02",
    title: "Show up",
    duration: "Monthly",
    description:
      "We become your brand's voice online. Posts, stories, reels, captions — written, designed, and published every month. You just approve.",
    outputs: ["12–20 posts a month across your platforms", "A brand that looks active and credible", "Monthly review call so we stay aligned"],
  },
  {
    n: "03",
    title: "Let it run",
    duration: "Setup, then ongoing",
    description:
      "We wire up the follow-through — lead capture, WhatsApp sequences, booking confirmations — so every enquiry gets a response, even when you're heads-down.",
    outputs: ["Every lead followed up automatically", "WhatsApp flows that feel human", "A pipeline that's predictable, not accidental"],
  },
];

const faqs = [
  {
    q: "How long does an engagement take?",
    a: "A one-time project typically takes 4–8 weeks. Ongoing support is month-to-month with no long-term commitment.",
  },
  {
    q: "Do we need to prepare anything?",
    a: "Nothing formal. Come with an honest description of where things are. We take it from there.",
  },
  {
    q: "Remote or in person?",
    a: "Both. Most work is remote. We can work in person for clients in Mumbai or nearby.",
  },
  {
    q: "Do you work with international companies?",
    a: "Yes. We work globally and discuss scope and timelines after a short conversation to understand your situation.",
  },
];

export default function HWWSteps() {
  return (
    <>
      <section id="for-businesses" className="padding-section bg-bg-secondary border-t border-border-subtle">
        <div className="layout-grid">
          <AnimateOnScroll className="mb-16">
            <span className="label-eyebrow mb-8 block text-accent">For Businesses</span>
            <h2 className="text-section-title">
              Three phases.
              <br />
              <span className="text-muted">One clear outcome.</span>
            </h2>
            <p className="text-xl text-body mt-6 max-w-2xl">
              Your business is real. The internet just doesn&apos;t reflect that yet. Three services fix that — <strong>each one stands alone</strong>. Start with the one that hurts most, add the others when you&apos;re ready, or take all three together.
            </p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-px bg-border-subtle border border-border-subtle">
            {phases.map((phase, i) => (
              <AnimateOnScroll key={phase.n} delay={i * 0.08}>
                <div className="bg-background p-8 md:p-12 grid md:grid-cols-[200px_1fr_1fr] gap-8">
                  <div>
                    <span className="section-num block mb-2">{phase.n}</span>
                    <h3 className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                      {phase.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                      {phase.duration} · Works on its own
                    </p>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {phase.description}
                  </p>
                  <div>
                    <p className="label-eyebrow mb-4">You get</p>
                    <ul className="flex flex-col gap-2.5">
                      {phase.outputs.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-sm font-semibold leading-snug" style={{ color: "var(--text-body)" }}>
                          <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--text-primary)" }}>✓</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.1}>
            <div
              className="mt-10 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
              style={{ background: "var(--navy)", borderRadius: "var(--radius-card)", borderLeft: "3px solid var(--accent)" }}
            >
              <div className="flex items-center gap-3 text-lg md:text-xl shrink-0" style={{ color: "#FFFFFF", fontWeight: 500 }}>
                <span>Get found</span>
                <span style={{ color: "var(--accent)" }}>+</span>
                <span>Show up</span>
                <span style={{ color: "var(--accent)" }}>+</span>
                <span>Let it run</span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                Together, your website, your content, and your follow-up tell <strong style={{ color: "#FFFFFF" }}>one story</strong> — and that&apos;s when it compounds. Most clients start with one, see results, and add the rest. Whatever you start with credits toward the full build.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="padding-section bg-background border-t border-border-subtle">
        <div className="layout-grid">
          <AnimateOnScroll className="mb-16">
            <span className="label-eyebrow mb-8 block">Common questions</span>
            <h2 className="text-section-title">
              Good to know
              <br />
              <span className="text-muted">before we start.</span>
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-px bg-border-subtle border border-border-subtle mb-16">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className="bg-background p-8 md:p-10 grid md:grid-cols-2 gap-6">
                  <p className="text-lg font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
                    {faq.q}
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {faq.a}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work-with-us" className="btn-primary" style={{ padding: "14px 36px" }}>
                Start the conversation
              </Link>
              <Link href="/for-businesses" className="btn-ghost" style={{ padding: "14px 36px" }}>
                See what we do for businesses
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
