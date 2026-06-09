"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const pains = [
  {
    number: "01",
    heading: "People look you up — and find almost nothing.",
    body: "A weak website, no Google listing, and a feed that hasn't moved in months. That's your first impression. And it's costing you.",
  },
  {
    number: "02",
    heading: "You know you should post. But you never get round to it.",
    body: "It's not laziness — you're running a business. But silence online reads as irrelevance, even when you're busier than ever.",
  },
  {
    number: "03",
    heading: "Enquiries come in. Then they go cold.",
    body: "Someone DMs you, fills out your form, drops a WhatsApp. Life gets busy. They move on. That's a customer you almost had.",
  },
  {
    number: "04",
    heading: "Your competitor shows up everywhere. You're not sure why.",
    body: "It's not that they're better. They've just invested in being visible. That's a solvable problem — and it's exactly what we fix.",
  },
];

export default function FBPainPoints() {
  return (
    <section className="py-24 md:py-32 border-t border-border-subtle bg-bg-secondary">
      <div className="layout-grid px-6 md:px-10">

        <AnimateOnScroll className="mb-14">
          <span className="label-eyebrow mb-6 block text-accent">Sound familiar?</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Most growing businesses are losing customers they never knew they had.
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-px bg-border-subtle border border-border-subtle">
          {pains.map((pain, i) => (
            <AnimateOnScroll key={pain.number} delay={i * 0.08}>
              <div className="bg-bg-secondary p-8 md:p-10 flex flex-col gap-4 h-full card-interactive">
                <span
                  className="font-poppins font-black"
                  style={{ fontSize: "2.5rem", lineHeight: 1, color: "var(--accent)", opacity: 0.18 }}
                >
                  {pain.number}
                </span>
                <h3
                  className="font-poppins font-bold leading-snug"
                  style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}
                >
                  {pain.heading}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{pain.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.1} className="mt-10">
          <p className="text-base text-muted leading-relaxed max-w-xl">
            None of this is your fault. You built a real business. You just haven&apos;t had the right team making sure the internet reflects that.
            <span className="font-semibold" style={{ color: "var(--text-body)" }}> That&apos;s where we come in.</span>
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
