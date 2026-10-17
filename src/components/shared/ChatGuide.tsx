"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHATSAPP_URL = `https://wa.me/918169315080?text=${encodeURIComponent(
  "Hi, I found TAL Consulting and would like to know more."
)}`;

// Tap-only, nothing typed or stored, so it needs no consent step.
// Source of truth for the wording: 01-tal/tal/Website chat guide - flow (draft).md
type Option = { label: string; next?: NodeId; href?: string; external?: boolean };
type NodeId =
  | "start" | "business" | "idea" | "student" | "job" | "looking"
  | "faq" | "faqWhere" | "faqCost" | "faqStart" | "faqMessage";

const NODES: Record<NodeId, { text: string; options: Option[] }> = {
  start: {
    text: "Hi! I can point you to the right place. What brings you here?",
    options: [
      { label: "I run a business", next: "business" },
      { label: "I have an idea", next: "idea" },
      { label: "I'm a student", next: "student" },
      { label: "I want to work at TAL", next: "job" },
      { label: "Just looking around", next: "looking" },
    ],
  },
  business: {
    text: "We help businesses bring in more customers and grow revenue. The quickest start is a short call: a few one-tap questions, then you pick a time.",
    options: [
      { label: "Book a call", href: "/call?src=chat" },
      { label: "See what we do", href: "/work?src=chat" },
    ],
  },
  idea: {
    text: "Test it with real customers and real numbers before you spend on it. Then we help you build it right.",
    options: [
      { label: "See what we work on", href: "/work?src=chat" },
      { label: "Talk it through", href: "/call?src=chat" },
    ],
  },
  student: {
    text: "Short training, then two live projects on real businesses, with founder reviews. You leave with portfolio work and a certificate that names it.",
    options: [{ label: "See Live Projects", href: "/live-projects?src=chat" }],
  },
  job: {
    text: "Learn by building real things, with hands-on training and a path to a paid internship.",
    options: [{ label: "See Careers", href: "/careers?src=chat" }],
  },
  looking: {
    text: "We're a lab in Navi Mumbai that helps organisations grow, with design thinking in everything we do.",
    options: [
      { label: "What we work on", href: "/work?src=chat" },
      { label: "About us", href: "/about?src=chat" },
      { label: "Quick questions", next: "faq" },
    ],
  },
  faq: {
    text: "Sure. Pick a question.",
    options: [
      { label: "Where are you based?", next: "faqWhere" },
      { label: "What does it cost?", next: "faqCost" },
      { label: "How do we start?", next: "faqStart" },
      { label: "Can I just message you?", next: "faqMessage" },
    ],
  },
  faqWhere: {
    text: "Navi Mumbai. We work with people across India, in person or online.",
    options: [{ label: "More questions", next: "faq" }],
  },
  faqCost: {
    text: "It depends on what you need. A short call gets you a clear number.",
    options: [
      { label: "Book a call", href: "/call?src=chat" },
      { label: "More questions", next: "faq" },
    ],
  },
  faqStart: {
    text: "One short call. We listen, then suggest the smallest useful first step.",
    options: [
      { label: "Book a call", href: "/call?src=chat" },
      { label: "More questions", next: "faq" },
    ],
  },
  faqMessage: {
    text: "Yes, WhatsApp us anytime.",
    options: [
      { label: "WhatsApp us", href: WHATSAPP_URL, external: true },
      { label: "More questions", next: "faq" },
    ],
  },
};

type Turn = { from: "bot" | "you"; text: string };
const OPENING: Turn[] = [{ from: "bot", text: NODES.start.text }];

export default function ChatGuide() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [node, setNode] = useState<NodeId>("start");
  const [log, setLog] = useState<Turn[]>(OPENING);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [log]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // /call is already a guided flow; a second one would compete with it
  if (pathname.startsWith("/call")) return null;

  const go = (option: Option) => {
    if (!option.next) return;
    const next = option.next;
    setLog((l) => [...l, { from: "you", text: option.label }, { from: "bot", text: NODES[next].text }]);
    setNode(next);
  };

  const restart = () => {
    setLog(OPENING);
    setNode("start");
  };

  const optionClass =
    "text-left text-sm font-semibold px-3.5 py-2 min-h-[40px] rounded-[var(--radius-btn)] border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-colors cursor-pointer";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Find your way around TAL"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed z-50 bottom-24 right-4 md:right-6 w-[min(360px,calc(100vw-32px))] max-h-[min(560px,calc(100dvh-120px))] flex flex-col bg-background border border-border rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 text-white" style={{ background: "var(--brand)" }}>
              <p className="text-sm font-semibold">The Adda Labs</p>
              <button onClick={() => setOpen(false)} aria-label="Close" className="w-8 h-8 flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>

            <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
              {log.map((turn, i) => (
                <p
                  key={i}
                  className={`text-sm leading-relaxed px-3.5 py-2.5 rounded-xl max-w-[85%] ${
                    turn.from === "bot"
                      ? "bg-background-lift text-body"
                      : "ml-auto text-white"
                  }`}
                  style={turn.from === "you" ? { background: "var(--brand)" } : undefined}
                >
                  {turn.text}
                </p>
              ))}

              <div className="flex flex-wrap gap-2 pt-1">
                {NODES[node].options.map((option) =>
                  option.external ? (
                    <a key={option.label} href={option.href} target="_blank" rel="noopener noreferrer" className={optionClass}>
                      {option.label}
                    </a>
                  ) : option.href ? (
                    <Link key={option.label} href={option.href} onClick={() => setOpen(false)} className={optionClass}>
                      {option.label}
                    </Link>
                  ) : (
                    <button key={option.label} onClick={() => go(option)} className={optionClass}>
                      {option.label}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="flex items-center justify-between px-4 py-2.5 border-t border-border-subtle text-xs font-semibold">
              {node !== "start" ? (
                <button onClick={restart} className="text-muted hover:text-foreground cursor-pointer min-h-[32px]">
                  ← Start over
                </button>
              ) : (
                <span />
              )}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-accent-ink hover:underline min-h-[32px] flex items-center">
                WhatsApp us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close guide" : "Find your way around"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-4 md:right-6 z-50 flex items-center justify-center w-14 h-14 text-white rounded-full shadow-lg cursor-pointer"
        style={{ background: "var(--brand)" }}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        )}
      </motion.button>
    </>
  );
}
