"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const partners = [
  { name: "Rohan", role: "Strategy & Operations", photo: "/founders/rohan.png" },
  { name: "Soniya", role: "Design & Visual Communication", photo: "/founders/soniya.png" },
  { name: "Abhishek", role: "Brand & Storytelling", photo: "/founders/abhishek.png" },
];

const points = [
  "You talk to the people doing the work — strategy, design, and brand are each led by a partner",
  "Three perspectives on every engagement, one conversation for you",
  "Senior attention by default. It's not a tier, it's how we're built",
];

export default function FBPartners() {
  return (
    <section className="border-t border-border-subtle">
      <div className="grid lg:grid-cols-2">
        {/* Photos */}
        <div className="px-8 md:px-16 py-16 md:py-24 bg-background flex items-center">
          <div className="grid grid-cols-3 gap-4 w-full">
            {partners.map((p, i) => (
              <AnimateOnScroll key={p.name} delay={i * 0.08}>
                <div>
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: "3/4", borderRadius: "var(--radius-card)", borderBottom: "3px solid var(--accent)", background: "var(--bg-lift)" }}
                  >
                    <Image src={p.photo} alt={p.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 30vw, 15vw" />
                  </div>
                  <p className="font-bold text-sm mt-3" style={{ color: "var(--text-primary)" }}>{p.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{p.role}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Navy panel */}
        <div className="px-8 md:px-16 py-16 md:py-24" style={{ background: "var(--navy)" }}>
          <AnimateOnScroll>
            <span className="label-eyebrow mb-5 block" style={{ color: "rgba(255,255,255,0.5)" }}>Who you&apos;ll work with</span>
            <h2
              className="font-poppins mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "#FFFFFF",
              }}
            >
              Three partners.
              <br />
              No account managers.
            </h2>
            <p className="text-base leading-relaxed mb-9" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "440px" }}>
              When you work with TAL, you work with the people whose names are on it. Strategy, design, and brand — each led by the partner who owns that craft.
            </p>
            <ul className="flex flex-col gap-5">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-4">
                  <span
                    className="shrink-0 flex items-center justify-center font-bold text-sm mt-0.5"
                    style={{ width: "24px", height: "24px", borderRadius: "50%", border: "1.5px solid var(--accent)", color: "var(--accent)" }}
                  >
                    →
                  </span>
                  <span className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>{pt}</span>
                </li>
              ))}
            </ul>
            <a
              href="/about"
              className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest mt-10 transition-opacity hover:opacity-90 cursor-pointer"
              style={{ padding: "13px 28px", background: "#fff", color: "var(--navy)", borderRadius: "var(--radius-btn)" }}
            >
              Meet the team →
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
