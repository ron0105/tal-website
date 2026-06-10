"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import Image from "next/image";

const founders = [
  {
    name: "Rohan",
    role: "Strategy and Operations",
    photo: "/founders/rohan.png",
    bio: "Engineer by training. Two years in analytics, then a Masters in Strategy and Consulting. Has worked with startups and businesses across operations, revenue growth, and product development. Believes most business problems are really clarity problems in disguise.",
    quote: "Every business that struggles to scale has the same problem: it still depends on one person to function.",
  },
  {
    name: "Soniya",
    role: "Design and Visual Communication",
    photo: "/founders/soniya.png",
    bio: "Multidisciplinary visual artist, designer, and video editor with over three years of experience. Translates strategy into visual identity and communication that actually lands. Brings the brand to life across every touchpoint.",
    quote: "Design is not how something looks. It is how quickly someone understands what you are offering.",
  },
  {
    name: "Abhishek",
    role: "Brand and Storytelling",
    photo: "/founders/abhishek.png",
    bio: "Runs his own production house. Brand consultant and cinematographer with four years of experience. Helps businesses find and communicate the narrative that connects them to the right customers.",
    quote: "You already have a story worth telling. Most businesses just have not found the version that makes the right person stop and pay attention.",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border-subtle">
      <div className="layout-grid px-6 md:px-10">

        <AnimateOnScroll className="mb-16 max-w-2xl">
          <span className="label-eyebrow mb-6 block text-accent">The team</span>
          <h2
            className="font-poppins mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Strategy, design, and storytelling. Together.
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            We started TAL because we saw too many good businesses struggle alone. We brought together three disciplines most firms keep separate, because the best work happens when strategy, visual communication, and brand narrative are built in the same room.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {founders.map((f, i) => (
            <AnimateOnScroll key={f.name} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-border-subtle overflow-hidden flex flex-col card-interactive" style={{ background: "var(--bg-secondary)" }}>

                {/* Photo */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-secondary">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Text */}
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="font-bold text-xl leading-none mb-1" style={{ color: "var(--text-primary)" }}>
                      {f.name}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                      {f.role}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed italic text-muted border-l-2 pl-4" style={{ borderColor: "var(--accent)" }}>
                    &ldquo;{f.quote}&rdquo;
                  </p>

                  <p className="text-sm leading-relaxed text-muted flex-1">{f.bio}</p>
                </div>

              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
