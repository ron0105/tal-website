"use client";

const industries = [
  "Retail",
  "Food & Beverage",
  "Professional Services",
  "Construction",
  "Technology",
  "Healthcare",
  "Real Estate",
  "Education",
  "Manufacturing",
  "E-Commerce",
  "Logistics",
  "Finance",
];

// Duplicate for seamless loop
const items = [...industries, ...industries];

export default function FBTrustBar() {
  return (
    <section className="py-5 overflow-hidden" style={{ background: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center gap-8">
        <div
          className="shrink-0 px-8 text-[10px] font-black uppercase tracking-widest whitespace-nowrap hidden md:block"
          style={{ color: "rgba(255,255,255,0.45)", borderRight: "1px solid rgba(255,255,255,0.12)", paddingRight: "2rem" }}
        >
          Growing businesses across
        </div>

        <div className="overflow-hidden flex-1 min-w-0">
          <div className="marquee-track">
            {items.map((name, i) => (
              <span key={i} className="inline-flex items-center gap-6 px-6">
                <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {name}
                </span>
                <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "rgba(255,255,255,0.2)" }} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
