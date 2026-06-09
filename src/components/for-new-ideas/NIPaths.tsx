"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const paths = [
  {
    eyebrow: "Start here if…",
    situation: "“I have an idea. I haven't built anything yet.”",
    name: "Idea Validation",
    body: "We take your idea through our 6-stage framework — mapping the assumptions it lives or dies on, then testing each one against real potential customers and real market data. Not your friends. Not a survey of strangers on the internet. The people who would actually pay.",
    promise: "You end with a clear call: go, don't go, or pivot — and the evidence behind it, written up so you can show a co-founder, a spouse, or an investor.",
    cta: "Validate my idea",
    href: "https://wa.me/918169315080?text=Hi%2C%20I%27d%20like%20to%20validate%20a%20business%20idea%20with%20TAL.",
  },
  {
    eyebrow: "Start here if…",
    situation: "“I'm already building — and I could use a second brain.”",
    name: "Founder Consulting",
    body: "You don't need a co-founder or a guru. You need someone outside your head who'll tell you the truth — about your model, your pricing, your positioning — and help you structure the next 90 days so the business doesn't depend on you for every decision.",
    promise: "Honest feedback and working systems. No retainers-for-life, no dependency model — we build it so you can run it without us.",
    cta: "Talk to us",
    href: "https://wa.me/918169315080?text=Hi%2C%20I%27m%20building%20something%20and%20would%20like%20a%20consult%20with%20TAL.",
  },
];

export default function NIPaths() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">
        <AnimateOnScroll className="mb-16 max-w-2xl">
          <span className="label-eyebrow mb-5 block" style={{ color: "var(--accent)" }}>Two ways in</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--text-primary)",
            }}
          >
            Where are you right now?
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {paths.map((p, i) => (
            <AnimateOnScroll key={p.name} delay={i * 0.1}>
              <div
                className="flex flex-col h-full p-8 md:p-10"
                style={{ border: "1px solid var(--border-color)", borderTop: "3px solid var(--accent)", borderRadius: "var(--radius-card)", background: "var(--bg)" }}
              >
                <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                  {p.eyebrow}
                </p>
                <p className="font-poppins text-xl md:text-2xl mb-8" style={{ fontWeight: 500, fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.35 }}>
                  {p.situation}
                </p>
                <p className="text-[11px] font-black uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                  {p.name}
                </p>
                <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-body)" }}>
                  {p.body}
                </p>
                <p className="text-base leading-relaxed mb-8 flex-1" style={{ color: "var(--text-muted)" }}>
                  {p.promise}
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest w-fit transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ padding: "13px 28px", background: "var(--navy)", color: "#fff", borderRadius: "var(--radius-btn)", borderBottom: "3px solid var(--accent)" }}
                >
                  {p.cta} →
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
