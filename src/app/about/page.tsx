import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/site/Hero";
import FinalCTA from "@/components/site/FinalCTA";
import { ArrowLink, Section, SectionHead } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { ABOUT as A } from "@/content/about";

export const metadata: Metadata = { title: { absolute: A.meta.title }, description: A.meta.description };

// Rebuild master prompt section 5.8. One text link to the builder section, nothing more.
// The earlier AboutHero, AboutStory, AboutTeam and AboutLab stay on disk but aren't imported.
export default function About() {
  return (
    <div>
      <Hero title={A.h1} />

      <Section label={A.why.eyebrow}>
        <SectionHead eyebrow={A.why.eyebrow} title={A.why.title} body={A.why.body} className="" />
      </Section>

      <Section label={A.believe.eyebrow} tint>
        <SectionHead eyebrow={A.believe.eyebrow} title={A.believe.title} />
        <Reveal mode="stagger" className="grid gap-6 md:grid-cols-3">
          {A.believe.principles.map((p) => (
            <div key={p.title} className="card-hover h-full p-6 md:p-8" style={{ background: "var(--bg)" }}>
              <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                {p.title}
              </p>
              <p className="mt-3" style={{ color: "var(--text-body)" }}>
                {p.body}
              </p>
            </div>
          ))}
        </Reveal>
        <ArrowLink href="/grow" className="mt-8">
          {A.believe.link}
        </ArrowLink>
      </Section>

      <Section label={A.team.eyebrow}>
        <SectionHead eyebrow={A.team.eyebrow} title={A.team.title} />
        <Reveal mode="stagger" className="grid gap-6 sm:grid-cols-2 max-w-4xl">
          {A.team.people.map((p) => (
            <div key={p.name} className="card-hover h-full overflow-hidden" style={{ background: "var(--bg)" }}>
              <div className="relative aspect-[4/3]" style={{ background: "var(--bg-lift)" }}>
                <Image src={p.photo} alt={`${p.name}, ${p.role}`} fill sizes="(max-width: 640px) 100vw, 448px" className="object-cover object-top" />
              </div>
              <div className="p-6">
                <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                  {p.name}
                </p>
                <p className="stat-label mt-1">{p.role}</p>
                <p className="mt-4 text-sm" style={{ color: "var(--text-body)" }}>
                  {p.bio}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </Section>

      <FinalCTA />
    </div>
  );
}
