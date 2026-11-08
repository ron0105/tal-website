import { Reveal } from "@/components/motion/Reveal";
import type { Testimonial } from "@/content/home";

/** Client words under the results. Stays hidden until there are at least two real quotes. */
export default function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length < 2) return null;
  return (
    <Reveal mode="stagger" className="grid gap-6 md:grid-cols-2 mt-12 md:mt-16">
      {items.map((t) => (
        <figure key={t.name} className="card-hover h-full p-6 md:p-8" style={{ background: "var(--bg)" }}>
          <blockquote style={{ color: "var(--text-body)" }}>“{t.quote}”</blockquote>
          <figcaption className="mt-5">
            <p className="font-bold" style={{ color: "var(--text-primary)" }}>
              {t.name}
            </p>
            <p className="source-line mt-1">
              {t.role}, {t.company} · {t.relationship}
            </p>
          </figcaption>
        </figure>
      ))}
    </Reveal>
  );
}
