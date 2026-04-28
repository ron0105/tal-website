"use client";

import { motion } from "framer-motion";

export function AlignedGrowthVisual({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 30, y: 70 }, { x: 80, y: 55 }, { x: 130, y: 40 }, { x: 180, y: 25 }
  ];

  return (
    <svg
      viewBox="0 0 200 100"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background grid line representing alignment */}
      <motion.line
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        x1="10" y1="90" x2="190" y2="10"
        stroke="var(--text-muted)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* Main aligned path */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        d="M 30 70 L 80 55 L 130 40 L 180 25"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.3, duration: 0.4, type: "spring" }}
          cx={node.x}
          cy={node.y}
          r="4"
          fill="var(--bg)"
          stroke="var(--text-primary)"
          strokeWidth="2"
        />
      ))}
      
      {/* Outer focus rings for impact */}
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 2, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        cx="180"
        cy="25"
        r="6"
        fill="none"
        stroke="var(--text-primary)"
        strokeWidth="1"
      />
    </svg>
  );
}
