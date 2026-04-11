"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center items-center" : "items-start"} flex flex-col ${className}`}>
      <AnimateOnScroll>
        <div className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2563EB" }} />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#555", letterSpacing: "0.14em" }}
          >
            {label}
          </span>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.08}>
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5"
          style={{ color: "#F0F0F0", letterSpacing: "-0.025em", maxWidth: centered ? "700px" : undefined }}
        >
          {title}
        </h2>
      </AnimateOnScroll>
      {description && (
        <AnimateOnScroll delay={0.16}>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#666", maxWidth: "580px" }}
          >
            {description}
          </p>
        </AnimateOnScroll>
      )}
    </div>
  );
}
