import type { CSSProperties } from "react";

export type SystemNode = { title: string; sub: string };

/**
 * The Customer System (spec 5.1 #1): three nodes joined by thin lines that draw in the order
 * the system works (M6). In the hero it plays from first paint, right after the headline,
 * like M1; anywhere else wrap it in <Reveal> and pass hero={false}.
 */
export default function SystemDiagram({ nodes, hero = true, label }: { nodes: SystemNode[]; hero?: boolean; label: string }) {
  const gap = 120;
  const h = gap * (nodes.length - 1) + 60;
  // Line i starts once node i has appeared; each takes 800ms (M6), offset to follow the H1
  const start = hero ? 450 : 0;
  return (
    <figure className={hero ? "hero-draw" : ""} style={{ maxWidth: 420 }}>
      <svg viewBox={`0 0 380 ${h}`} width="100%" role="img" aria-label={label}>
        {nodes.slice(1).map((_, i) => {
          const y1 = 30 + i * gap + 12;
          const y2 = 30 + (i + 1) * gap - 12;
          return (
            <path
              key={`l${i}`}
              d={`M24 ${y1} V${y2}`}
              pathLength={1}
              className="draw"
              fill="none"
              stroke="var(--brand-on-dark)"
              strokeWidth={1.5}
              style={{ "--at": `${start + 200 + i * 800}ms` } as CSSProperties}
            />
          );
        })}
        {nodes.map((n, i) => {
          const y = 30 + i * gap;
          return (
            <g key={n.title} className="draw-node" style={{ "--at": `${start + i * 800}ms` } as CSSProperties}>
              <circle cx="24" cy={y} r="10" fill="var(--canvas-dark)" stroke="var(--brand-on-dark)" strokeWidth={1.5} />
              <circle cx="24" cy={y} r="4" fill="var(--brand-on-dark)" />
              <text x="56" y={y - 2} fontSize="20" fontWeight="700" fill="var(--text-primary)">
                {n.title}
              </text>
              <text x="56" y={y + 22} fontSize="14" fill="var(--text-muted)">
                {n.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
