"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const cases = [
  {
    client: "A growing D2C brand",
    craft: "Strategy & Operations",
    led: "Led by Rohan",
    work: "Came in with steady orders but no idea which channels actually made money. We rebuilt the analytics, mapped the funnel end to end, and restructured operations around what the numbers said.",
    outcome: "The founder went from guessing to knowing — marketing spend now follows evidence, and the business runs on a weekly operating rhythm instead of firefighting.",
  },
  {
    client: "A professional services firm",
    craft: "Brand & Visual Identity",
    led: "Led by Soniya",
    work: "Credible work, invisible brand. We built the visual identity from scratch — logo, brand language, social presence — and turned years of expertise into content people actually stop for.",
    outcome: "The firm finally looks like what it already was: established, trustworthy, worth the fee. Referrals now land on a presence that closes the deal for them.",
  },
  {
    client: "A consumer brand launch",
    craft: "Brand Film & Storytelling",
    led: "Led by Abhishek",
    work: "A product launch with no story. We found the narrative, shot the brand film, and built the content engine around it — cinematography, edits, and a launch sequence that felt bigger than the budget.",
    outcome: "The launch looked like a brand, not a product listing — and the content kept working long after launch week.",
  },
];

export default function FBCaseStudies() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle" style={{ background: "var(--bg-secondary)" }}>
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
            From the partners&apos; individual practices — the same hands now working together as TAL. Client names withheld out of respect; the work is real and we&apos;ll walk you through it on a call.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {cases.map((c, i) => (
            <AnimateOnScroll key={c.client} delay={i * 0.08}>
              <div
                className="p-8 flex flex-col gap-4 h-full transition-shadow duration-200 hover:shadow-lg cursor-default"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  borderTop: "3px solid var(--accent)",
                  borderRadius: "14px",
                  boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
                }}
              >
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: "var(--accent)" }}>
                    {c.craft}
                  </p>
                  <h3 className="font-bold leading-snug" style={{ fontSize: "1.15rem", color: "var(--text-primary)" }}>
                    {c.client}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{c.work}</p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>{c.outcome}</p>
                <p
                  className="text-xs font-bold uppercase tracking-widest pt-4"
                  style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border-subtle)" }}
                >
                  {c.led}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.1} className="mt-10">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Want the full story behind any of these?{" "}
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
