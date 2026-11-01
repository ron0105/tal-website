import type { CSSProperties } from "react";
import { Reveal } from "@/components/motion/Reveal";

/** The leak exhibit (spec 5.1 #3): bars shrink from 100 enquiries to few customers (M5). Labelled an illustration. */
export default function LeakGraphic({ bars, label }: { bars: { label: string; width: number }[]; label: string }) {
  return (
    <Reveal mode="fade">
      <figure className="card-hover p-6 md:p-8" style={{ background: "var(--bg)" }}>
        <ul className="grid gap-5">
          {bars.map((b, i) => (
            <li key={b.label} style={{ "--i": i } as CSSProperties}>
              <p className="bar-label stat-label mb-2">{b.label}</p>
              <div className="h-3 rounded-full" style={{ background: "var(--bg-lift)" }}>
                <div className="bar h-3 rounded-full" style={{ width: `${b.width}%`, background: i === bars.length - 1 ? "var(--brand)" : "var(--border-strong)" }} />
              </div>
            </li>
          ))}
        </ul>
        <figcaption className="source-line mt-6">{label}</figcaption>
      </figure>
    </Reveal>
  );
}
