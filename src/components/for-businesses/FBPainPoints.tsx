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
    <section className="py-24 md:py-32 border-t border-border-subtle" style={{ background: "var(--bg-secondary)" }}>
      <div className="layout-grid px-6 md:px-10">

        <AnimateOnScroll className="mb-14">
          <span className="label-eyebrow mb-6 block" style={{ color: "var(--accent)" }}>Sound familiar?</span>
          <h2
            className="font-poppins"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              color: "var(--text-primary)",
              maxWidth: "720px",
            }}
          >
            Most growing businesses are losing customers they never knew they had.
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {pains.map((pain, i) => (
            <AnimateOnScroll key={pain.number} delay={i * 0.08}>
              <div
                className="p-7 md:p-9 flex flex-col gap-3.5 h-full transition-shadow duration-200 hover:shadow-lg cursor-default"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  borderLeft: "4px solid var(--accent)",
                  borderRadius: "14px",
                  boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex items-center justify-center font-poppins shrink-0"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(202,138,4,0.1)",
                      color: "var(--accent-hover)",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  >
                    {pain.number}
                  </span>
                  <h3
                    className="font-bold leading-snug"
                    style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}
                  >
                    {pain.heading}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{pain.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.1} className="mt-10">
          <div
            className="p-6 md:p-8"
            style={{
              background: "var(--navy)",
              borderRadius: "14px",
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.8)" }}>
              None of this is your fault. You built a real business. You just haven&apos;t had the right team making sure the internet reflects that.
              <span className="font-semibold" style={{ color: "#FFFFFF" }}> That&apos;s where we come in.</span>
            </p>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
