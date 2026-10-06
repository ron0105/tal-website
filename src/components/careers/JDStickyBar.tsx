"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Job } from "@/lib/jobs";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface JDStickyBarProps {
  job: Job;
}

export default function JDStickyBar({ job }: JDStickyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the bar once the hero's own Apply button has scrolled away
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed top-20 left-0 right-0 z-40"
          style={{
            background: "var(--navbar-bg)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div className="layout-grid px-6 md:px-10">
            <div className="flex items-center justify-between h-14 gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-sm font-bold truncate" style={{ color: "var(--text-primary)" }}>
                  {job.shortTitle}
                </span>
                <span
                  className="hidden sm:block text-xs font-semibold truncate"
                  style={{ color: "var(--accent)" }}
                >
                  {job.pay.headline}
                </span>
              </div>

              <Link
                href={`/careers/${job.slug}/apply`}
                className="btn-primary flex-shrink-0"
                style={{ padding: "8px 20px", fontSize: "0.8125rem" }}
              >
                Apply →
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
