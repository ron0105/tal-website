"use client";

import { motion } from "framer-motion";

export function ModelComparisonVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base Grid */}
      <line x1="20" y1="80" x2="180" y2="80" stroke="var(--border-subtle)" strokeWidth="1" />
      
      {/* 3 Abstract Bars for Comparison */}
      {[
        { x: 40, w: 20, h: 30, delay: 0.2 },
        { x: 90, w: 20, h: 50, delay: 0.4 },
        { x: 140, w: 20, h: 60, delay: 0.6 }
      ].map((bar, i) => (
        <motion.rect
          key={`bar-${i}`}
          initial={{ y: 80, height: 0 }}
          whileInView={{ y: 80 - bar.h, height: bar.h }}
          viewport={{ once: true }}
          transition={{ delay: bar.delay, duration: 0.6, ease: "easeOut" }}
          x={bar.x}
          width={bar.w}
          fill="var(--bg)"
          stroke={i === 1 ? "var(--text-primary)" : "var(--text-muted)"}
          strokeWidth="1.5"
        />
      ))}

      {/* Connection indicator linking the tiers */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
        d="M 50 40 L 100 20 L 150 10"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
      
      {/* Nodes on top */}
      {[
        { cx: 50, cy: 40, delay: 1.0 },
        { cx: 100, cy: 20, delay: 1.4 },
        { cx: 150, cy: 10, delay: 1.8 }
      ].map((node, i) => (
        <motion.circle
          key={`topnode-${i}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: node.delay, duration: 0.3 }}
          cx={node.cx} cy={node.cy} r="3"
          fill="var(--bg)"
          stroke="var(--text-primary)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
