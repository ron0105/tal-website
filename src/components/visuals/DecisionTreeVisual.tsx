"use client";

import { motion } from "framer-motion";

export function DecisionTreeVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 150"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Root node */}
      <motion.circle
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        cx="40"
        cy="75"
        r="4"
        fill="var(--bg)"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />

      {/* Main stem */}
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        x1="44" y1="75" x2="80" y2="75"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />

      {/* Decision Box */}
      <motion.rect
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.6 }}
        x="80" y="65" width="20" height="20"
        fill="none"
        stroke="var(--text-muted)"
        strokeWidth="1.5"
        transform="rotate(45 90 75)"
      />

      {/* Branches */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
        d="M 100 75 L 140 25 M 104 75 L 140 75 M 100 75 L 140 125"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />

      {/* End Nodes */}
      {[
        { x: 140, y: 25 },
        { x: 140, y: 75 },
        { x: 140, y: 125 }
      ].map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 + (i * 0.1), duration: 0.3, type: "spring" }}
          cx={node.x}
          cy={node.y}
          r="4"
          fill="var(--bg)"
          stroke="var(--text-primary)"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
