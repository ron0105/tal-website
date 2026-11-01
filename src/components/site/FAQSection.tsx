import { FAQAccordion } from "@/components/motion/FAQAccordion";
import { JsonLd, Section, SectionHead } from "./Primitives";

export type FAQ = { q: string; a: string };

/** FAQ block with its FAQPage JSON-LD (spec section 8), so answers can show in Google and AI tools. */
export default function FAQSection({ title, eyebrow = "Questions", faqs, tint }: { title: string; eyebrow?: string; faqs: FAQ[]; tint?: boolean }) {
  return (
    <Section label={title} tint={tint}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead eyebrow={eyebrow} title={title} className="" />
        <FAQAccordion items={faqs} />
      </div>
    </Section>
  );
}
