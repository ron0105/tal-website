"use client";

import { motion } from "framer-motion";

export function GrowthLeversVisual({ className = "" }: { className?: string }) {
  // Polygon coordinates for the base grid (hexagon for 6 levers)
  const hex = "100,20 170,60 170,140 100,180 30,140 30,60";
  // The shape representing the current "growth" footprint (uneven, representing bottlenecks)
  const footprint = "100,60 150,70 120,130 100,140 70,110 50,70";

  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background radar grid */}
      <polygon points={hex} stroke="var(--border-subtle)" strokeWidth="1" fill="none" />
      <polygon points="100,50 143,75 143,125 100,150 57,125 57,75" stroke="var(--border-subtle)" strokeWidth="1" fill="none" />
      
      {/* Cross lines to vertices */}
      <line x1="100" y1="20" x2="100" y2="180" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="30" y1="60" x2="170" y2="140" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="30" y1="140" x2="170" y2="60" stroke="var(--border-subtle)" strokeWidth="1" />

      {/* Animated Footprint */}
      <motion.polygon
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        points={footprint}
        fill="var(--text-muted)"
        fillOpacity="0.2"
        stroke="var(--text-primary)"
        strokeWidth="2"
        style={{ transformOrigin: "100px 100px" }}
      />

      {/* Nodes on the footprint */}
      {[
        { cx: 100, cy: 60, delay: 0.2 },
        { cx: 150, cy: 70, delay: 0.3 },
        { cx: 120, cy: 130, delay: 0.4 },
        { cx: 100, cy: 140, delay: 0.5 },
        { cx: 70, cy: 110, delay: 0.6 },
        { cx: 50, cy: 70, delay: 0.7 }
      ].map((node, i) => (
        <motion.circle
          key={`lever-node-${i}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: node.delay, duration: 0.3 }}
          cx={node.cx}
          cy={node.cy}
          r="4"
          fill="var(--bg)"
          stroke="var(--text-primary)"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
