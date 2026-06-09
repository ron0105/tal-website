"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

/* SVG line icons — no emojis (brand rule) */
const icons: Record<string, React.ReactNode> = {
  storefront: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" />
      <path d="M5 11.5V20h14v-8.5" />
      <path d="M9 20v-5h6v5" />
    </svg>
  ),
  package: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8l-9-5-9 5v8l9 5 9-5z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v8" />
    </svg>
  ),
  rocket: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2.2-.7-3 .8z" />
      <path d="M12 15l-3-3c.8-2.1 2-4.1 3.5-5.6C15 3.9 18.5 3 21 3c0 2.5-.9 6-3.4 8.5-1.5 1.5-3.5 2.7-5.6 3.5z" />
      <path d="M9 12H5l2-4h4M12 15v4l4-2v-4" />
    </svg>
  ),
  scales: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 21h18M6 7h12" />
      <path d="M6 7l-3 6a3 3 0 006 0zM18 7l-3 6a3 3 0 006 0z" />
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </svg>
  ),
};

const categories = [
  {
    icon: "storefront",
    type: "Restaurants & Retail",
    heading: "You have regulars. You want more of them.",
    body: "Your product speaks for itself. We make sure people outside your four walls can find you, trust you, and walk in.",
  },
  {
    icon: "package",
    type: "D2C & Online Brands",
    heading: "You're selling online but not scaling yet.",
    body: "Your product is solid. What's missing is a brand that stops people mid-scroll and makes them click.",
  },
  {
    icon: "rocket",
    type: "Founders & Startups",
    heading: "You need to look credible before you're funded.",
    body: "First impressions happen online. We make your presence match the ambition you pitch in every room.",
  },
  {
    icon: "scales",
    type: "Professionals & Consultants",
    heading: "You're the product. Your credibility is the brand.",
    body: "CA firms, coaches, lawyers — people search you before they trust you. Let's make what they find count.",
  },
  {
    icon: "globe",
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
          <span className="label-eyebrow mb-6 block" style={{ color: "var(--accent)" }}>Who we work with</span>
          <h2
            className="font-poppins mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
              color: "var(--text-primary)",
            }}
          >
            Built for businesses that are serious about growing.
          </h2>
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
            If any of these sound like you, you&apos;re in the right place.
          </p>
        </AnimateOnScroll>

        {/* Mobile: snap-scroll carousel · Desktop: grid */}
        <div
          className="flex md:grid md:grid-cols-3 xl:grid-cols-5 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {categories.map((cat, i) => (
            <AnimateOnScroll
              key={cat.type}
              delay={i * 0.06}
              className="shrink-0 w-[78vw] sm:w-[46vw] md:w-auto snap-start"
            >
              <div
                className="p-7 flex flex-col gap-4 h-full transition-shadow duration-200 hover:shadow-lg cursor-default"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "14px",
                  boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
                }}
              >
                <span
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "rgba(202,138,4,0.1)",
                    color: "var(--accent-hover)",
                  }}
                >
                  {icons[cat.icon]}
                </span>
                <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                  {cat.type}
                </p>
                <h3 className="font-bold leading-snug" style={{ fontSize: "1.05rem", color: "var(--text-primary)" }}>
                  {cat.heading}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{cat.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
