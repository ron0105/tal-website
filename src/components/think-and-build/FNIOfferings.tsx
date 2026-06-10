"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const offerings = [
  {
    tag: "Offering 01",
    title: "Idea Validation",
    headline: "Test the idea before you spend a rupee building it.",
    body: "Our 6-stage validation framework pressure-tests your idea against real market signals — customer conversations, competitor gaps, pricing reality — so you get a clear go/no-go before committing time and money.",
    bullets: [
      "Structured 6-stage validation framework",
      "Voice-of-customer research, not guesswork",
      "Clear go / no-go / pivot recommendation",
      "A validation report you can show co-founders and investors",
    ],
    cta: "Validate my idea",
    href: "https://wa.me/918169315080?text=Hi%2C%20I%27d%20like%20to%20validate%20a%20business%20idea%20with%20TAL.",
  },
  {
    tag: "Offering 02",
    title: "Founder Consulting",
    headline: "Your idea passed the test. Now build it right.",
    body: "Once an idea is validated — or if you're already building — we work with you on structure: business model, pricing, positioning, go-to-market, and the first operating systems. Honest feedback, no dependency model.",
    bullets: [
      "Business model and pricing strategy",
      "Positioning and go-to-market plan",
      "Operating structure that doesn't depend on you for everything",
      "Direct access to senior thinking, not a junior team",
    ],
    cta: "Talk to us",
    href: "https://wa.me/918169315080?text=Hi%2C%20I%27m%20building%20something%20and%20would%20like%20consulting%20support%20from%20TAL.",
  },
];

export default function FNIOfferings() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-16">
          <span className="label-eyebrow mb-4 block text-accent">Two ways we work with founders</span>
          <h2
            className="font-poppins mb-3"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Validate first. Build with backup.
          </h2>
          <p className="text-lg text-muted max-w-lg">
            Whether you&apos;re testing an idea or already building one, there&apos;s a clear place to start.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle">
          {offerings.map((o, i) => (
            <AnimateOnScroll key={o.tag} delay={i * 0.1}>
              <div className="bg-background p-8 md:p-12 flex flex-col gap-5 h-full">
                <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                  {o.tag}
                </p>
                <h3
                  className="font-poppins"
                  style={{ fontSize: "1.6rem", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--text-primary)" }}
                >
                  {o.title}
                </h3>
                <p className="text-base font-medium leading-relaxed" style={{ color: "var(--text-body)" }}>
                  {o.headline}
                </p>
                <p className="text-sm leading-relaxed text-muted flex-1">{o.body}</p>
                <ul className="flex flex-col gap-2.5 pt-5 border-t border-border-subtle">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted">
                      <span className="shrink-0 font-bold mt-0.5" style={{ color: "var(--accent)" }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest mt-4 w-fit transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ padding: "12px 26px", background: "var(--navy)", color: "#fff", borderRadius: "var(--radius-btn)", borderBottom: "2px solid var(--accent)" }}
                >
                  {o.cta} →
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
