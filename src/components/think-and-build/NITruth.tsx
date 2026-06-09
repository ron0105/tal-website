"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const truths = [
  {
    title: "Friends are terrible judges of ideas.",
    body: "They say “great idea!” because they like you — not because they'd pay for it. The only opinion that counts comes with a wallet attached.",
  },
  {
    title: "Building first feels productive. It isn't.",
    body: "Six months of building on an untested assumption isn't progress. It's just a slower, more expensive way of asking the question you could ask this month.",
  },
  {
    title: "A “no” early is a gift.",
    body: "Finding out your idea doesn't hold — before the resignation letter, before the loan — isn't failure. It's the cheapest education you'll ever get.",
  },
];

export default function NITruth() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle" style={{ background: "var(--bg-secondary)" }}>
      <div className="layout-grid px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <AnimateOnScroll>
            <span className="label-eyebrow mb-5 block" style={{ color: "var(--accent)" }}>The honest bit</span>
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
              Most ideas don&apos;t fail in the market. They fail months earlier — in the founder&apos;s head.
            </h2>
            <p className="text-base leading-relaxed mt-6" style={{ color: "var(--text-muted)", maxWidth: "420px" }}>
              An assumption goes unquestioned. A price never gets tested. A customer never gets asked. By launch day, the outcome was already decided.
            </p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-px bg-border-subtle border-y border-border-subtle">
            {truths.map((t, i) => (
              <AnimateOnScroll key={t.title} delay={i * 0.08}>
                <div className="py-8 px-2 md:px-6" style={{ background: "var(--bg-secondary)" }}>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>
                    {t.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {t.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
