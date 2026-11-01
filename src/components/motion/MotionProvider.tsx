"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Every Framer animation on the site honours "reduce motion": movement off, opacity only
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
