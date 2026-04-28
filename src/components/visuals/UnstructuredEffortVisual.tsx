"use client";

import { motion } from "framer-motion";

export function UnstructuredEffortVisual({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 30, y: 40 }, { x: 70, y: 20 }, { x: 120, y: 50 },
    { x: 40, y: 80 }, { x: 90, y: 90 }, { x: 160, y: 30 },
    { x: 150, y: 80 }, { x: 180, y: 60 }
  ];

  return (
    <svg
      viewBox="0 0 200 100"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Scattered lines */}
      {[
        { x1: 30, y1: 40, x2: 70, y2: 20, delay: 0 },
        { x1: 70, y1: 20, x2: 120, y2: 50, delay: 0.2 },
        { x1: 30, y1: 40, x2: 40, y2: 80, delay: 0.1 },
        { x1: 40, y1: 80, x2: 90, y2: 90, delay: 0.3 },
        { x1: 120, y1: 50, x2: 160, y2: 30, delay: 0.4 },
        { x1: 120, y1: 50, x2: 150, y2: 80, delay: 0.5 },
        { x1: 160, y1: 30, x2: 180, y2: 60, delay: 0.6 },
        { x1: 150, y1: 80, x2: 180, y2: 60, delay: 0.7 },
      ].map((line, i) => (
        <motion.line
          key={`line-${i}`}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: line.delay, duration: 0.5 }}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="var(--text-muted)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.3, type: "spring" }}
          cx={node.x}
          cy={node.y}
          r="3"
          fill="var(--bg)"
          stroke="var(--text-muted)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
