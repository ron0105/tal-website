"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const categories = [
  {
    icon: "🍽️",
    type: "Restaurants & Retail",
    heading: "You have regulars. You want more of them.",
    body: "Your product speaks for itself. We make sure people outside your four walls can find you, trust you, and walk in.",
  },
  {
    icon: "📦",
    type: "D2C & Online Brands",
    heading: "You're selling online but not scaling yet.",
    body: "Your product is solid. What's missing is a brand that stops people mid-scroll and makes them click.",
  },
  {
    icon: "🚀",
    type: "Founders & Startups",
    heading: "You need to look credible before you're funded.",
    body: "First impressions happen online. We make your presence match the ambition you pitch in every room.",
  },
  {
    icon: "⚖️",
    type: "Professionals & Consultants",
    heading: "You're the product. Your credibility is the brand.",
    body: "CA firms, coaches, lawyers — people search you before they trust you. Let's make what they find count.",
  },
  {
    icon: "🌍",
    type: "Businesses Everywhere",
    heading: "Wherever you are, your customers are online.",
    body: "We work with businesses across markets — remote, async, and built around your timezone. Same standard, every time.",
  },
];

export default function FBWhoThisIsFor() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">

        <AnimateOnScroll className="mb-14">
          <span className="label-eyebrow mb-6 block text-accent">Who we work with</span>
          <h2
            className="font-poppins mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Built for businesses that are serious about growing.
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-xl">
            If any of these sound like you, you&apos;re in the right place.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-px bg-border-subtle border border-border-subtle">
          {categories.map((cat, i) => (
            <AnimateOnScroll
              key={cat.type}
              delay={i * 0.08}
              className={i === categories.length - 1 ? "sm:col-span-2 xl:col-span-1" : ""}
            >
              <div className="bg-background p-8 flex flex-col gap-4 h-full card-interactive">
                <span className="text-3xl">{cat.icon}</span>
                <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                  {cat.type}
                </p>
                <h3 className="font-poppins font-bold leading-snug" style={{ fontSize: "1.05rem", color: "var(--text-primary)" }}>
                  {cat.heading}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{cat.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
