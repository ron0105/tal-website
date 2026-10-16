"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

/* Scenarios, not case studies: typical situations and what we would do.
   No client results or quotes here until they are real and approved. */

const cases = [
  {
    client: "A D2C brand with steady orders",
    craft: "Strategy & Operations",
    led: "Led by Rohan",
    problem: "Orders are coming in, but nobody is sure which channels actually pay for themselves. Spend goes up. Clarity doesn't.",
    work: "We rebuild the analytics, map the funnel end to end, and restructure operations around what the numbers say.",
    aim: "Every rupee of marketing spend tied to a channel you can defend.",
    visual: { initial: "01", tone: "rgba(192,107,58,0.16)" },
  },
  {
    client: "A services firm that outgrew its look",
    craft: "Brand & Visual Identity",
    led: "Led by Soniya",
    problem: "Years of credible work, but the brand still looks like day one. Prospects judge the firm before the first call.",
    work: "We build the visual identity from scratch: logo, brand language, social presence. Then we turn deep expertise into content people stop for.",
    aim: "A brand that looks as credible as the work behind it.",
    visual: { initial: "02", tone: "rgba(192,107,58,0.10)" },
  },
];

export default function FBCaseStudies() {
  return (
    <section id="proof" className="py-24 md:py-32 border-t border-border-subtle" style={{ background: "var(--bg-secondary)" }}>
      <div className="layout-grid px-6 md:px-10">

        <AnimateOnScroll className="mb-14">
          <span className="label-eyebrow mb-6 block" style={{ color: "var(--accent)" }}>In practice</span>
          <h2
            className="mb-4"
            style={{
              color: "var(--text-primary)",
              maxWidth: "680px",
            }}
          >
            What this looks like in practice.
          </h2>
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
            Two situations we step into often: the problem, what we do about it, and what we aim for. Every business is different, so the first conversation is about yours.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {cases.map((c, i) => (
            <AnimateOnScroll key={c.client} delay={i * 0.08}>
              <div
                className="card-lift flex flex-col h-full overflow-hidden cursor-default"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "14px",
                  boxShadow: "0 2px 10px rgba(20,32,30,0.04)",
                }}
              >
                <div
                  className="relative flex items-end p-6"
                  style={{
                    height: "150px",
                    background: `linear-gradient(135deg, var(--brand) 0%, #0F7C78 100%)`,
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
                    style={{ top: "12px", left: "12px", color: "rgba(192,107,58,0.9)", border: "1px solid rgba(192,107,58,0.45)", borderRadius: "6px" }}
                  >
                    Scenario
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {c.craft}
                    </p>
                    <h3 style={{ color: "#FFFFFF" }}>
                      {c.client}
                    </h3>
                  </div>
                </div>

                <div className="p-7 flex flex-col gap-4 flex-1">
                  <p className="text-sm leading-relaxed font-semibold" style={{ color: "var(--text-primary)" }}>{c.problem}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{c.work}</p>

                  <div className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent-hover)" }}>
                      What we aim for
                    </p>
                    <p className="text-lg font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                      {c.aim}
                    </p>
                  </div>

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
            Sound like where you are? Tell us what you&apos;re dealing with.{" "}
            <a
              href="https://wa.me/917830603010?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20my%20business."
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
