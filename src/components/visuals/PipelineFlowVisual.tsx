"use client";

import { motion } from "framer-motion";

export function PipelineFlowVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 100"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background track */}
      <line x1="20" y1="50" x2="280" y2="50" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Nodes and Links */}
      {[
        { x: 20, delay: 0 },
        { x: 85, delay: 0.3 },
        { x: 150, delay: 0.6 },
        { x: 215, delay: 0.9 },
        { x: 280, delay: 1.2 }
      ].map((node, i) => (
        <motion.g key={`node-${i}`}>
          {/* Link to next */}
          {i < 4 && (
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.delay + 0.1, duration: 0.3, ease: "linear" }}
              x1={node.x} y1="50" x2={node.x + 65} y2="50"
              stroke="var(--text-primary)"
              strokeWidth="2"
            />
          )}
          {/* Node marker */}
          <motion.circle
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: node.delay, duration: 0.3, type: "spring" }}
            cx={node.x} cy="50" r={i === 4 ? 6 : 4}
            fill={i === 4 ? "var(--text-primary)" : "var(--bg)"}
            stroke="var(--text-primary)"
            strokeWidth="2"
          />
          {/* Indicator pulse for active step effect */}
          <motion.circle
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 2, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: node.delay + 0.3, duration: 1 }}
            cx={node.x} cy="50" r="4"
            fill="none" stroke="var(--text-primary)" strokeWidth="1"
          />
        </motion.g>
      ))}
    </svg>
  );
}
