"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type DotNode = { x: number; y: number; label: string };

/* Same visual language as the About hero timeline: dashed curve, pulsing
   accent dots, ghost wordmark. Kept generic so any section can plot a path. */
export function DotPath({
  nodes,
  ghost = "TAL",
  startLabel,
  endLabel,
  width = 520,
  height = 420,
  emphasiseLast = false,
  onDark = false,
}: {
  nodes: DotNode[];
  ghost?: string;
  startLabel?: string;
  endLabel?: string;
  width?: number;
  height?: number;
  emphasiseLast?: boolean;
  onDark?: boolean;
}) {
  const c = onDark
    ? { line: "rgba(255,255,255,0.3)", dot: "var(--accent-on-brand)", hole: "var(--brand)", label: "rgba(255,255,255,0.7)", strong: "#FFFFFF" }
    : { line: "var(--border-color)", dot: "var(--accent)", hole: "var(--bg)", label: "var(--text-muted)", strong: "var(--text-primary)" };
  const d = nodes.reduce((acc, n, i) => {
    if (i === 0) return `M ${n.x} ${n.y}`;
    const p = nodes[i - 1];
    const dx = (n.x - p.x) / 2.4;
    return `${acc} C ${p.x + dx} ${p.y}, ${n.x - dx} ${n.y}, ${n.x} ${n.y}`;
  }, "");
  const first = nodes[0];
  const last = nodes[nodes.length - 1];

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" aria-hidden="true">
        {ghost && <text
          x={width / 2} y={height / 2 + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="900"
          fontSize="160"
          letterSpacing="-8"
          style={{ fill: "var(--text-primary)", opacity: 0.025 }}
        >
          {ghost}
        </text>}

        <motion.path
          d={d}
          style={{ fill: "none", stroke: c.line }}
          strokeWidth="1.5"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.4, ease }}
        />

        {nodes.map((n, i) => {
          const big = emphasiseLast && i === nodes.length - 1;
          return (
            <motion.g
              key={n.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.8 + i * 0.15, ease }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            >
              <motion.circle
                cx={n.x} cy={n.y} r={big ? 22 : 16}
                style={{ fill: "none", stroke: c.dot }}
                strokeWidth="1"
                initial={{ r: big ? 22 : 16 }}
                animate={{ r: big ? [22, 34, 22] : [16, 26, 16], opacity: [0.25, 0, 0.25] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 + i * 0.5 }}
              />
              <circle cx={n.x} cy={n.y} r={big ? 12 : 8} style={{ fill: c.dot }} />
              <circle cx={n.x} cy={n.y} r={big ? 4.5 : 3} style={{ fill: c.hole }} />
              <text
                x={n.x}
                y={n.y + (big ? 34 : 26)}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight={big ? 800 : 700}
                fontSize={big ? 13 : 11}
                style={{ fill: big ? c.strong : c.label }}
              >
                {n.label}
              </text>
            </motion.g>
          );
        })}

        {startLabel && (
          <text
            x={first.x} y={first.y - 24}
            textAnchor="middle"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="10"
            style={{ fill: c.dot, opacity: 0.6 }}
          >
            {startLabel}
          </text>
        )}
        {endLabel && (
          <text
            x={last.x} y={last.y - (emphasiseLast ? 32 : 24)}
            textAnchor="middle"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="10"
            style={{ fill: c.dot, opacity: 0.6 }}
          >
            {endLabel}
          </text>
        )}
      </svg>
    </motion.div>
  );
}
