"use client";

import Link from "next/link";

const pages = [
  { label: "For Businesses", href: "/for-businesses" },
  { label: "For New Ideas", href: "/for-new-ideas" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="px-6 md:px-10 py-20 bg-background"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="layout-grid">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 cursor-pointer w-fit group">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#1D4ED8"/>
                <rect x="7" y="16" width="4" height="10" rx="2" fill="white"/>
                <rect x="14" y="11" width="4" height="15" rx="2" fill="white"/>
                <rect x="21" y="7" width="4" height="19" rx="2" fill="white"/>
              </svg>
              <span className="text-lg font-bold tracking-tight text-foreground font-poppins">
                TAL Consulting
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", maxWidth: "280px" }}>
              We help businesses run better and grow smoothly. We set up simple systems so you can focus on growth.
            </p>
          </div>

          {/* Index */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>
              Navigation
            </p>
            <nav className="flex flex-col gap-4">
              {pages.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="text-sm font-medium tracking-tight transition-colors duration-200 cursor-pointer hover:text-accent"
                  style={{ color: "var(--text-body)" }}
                >
                  {p.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>
              Get in touch
            </p>
            <a href="mailto:founder@theaddalabs.com" className="text-sm font-semibold tracking-tight mb-2 block hover:text-accent transition-colors" style={{ color: "var(--text-body)" }}>founder@theaddalabs.com</a>
            <p className="text-sm font-medium tracking-tight mb-8" style={{ color: "var(--text-muted)" }}>Mumbai · Global</p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            &copy; {year} TAL Consulting / The Adda Labs
          </p>
          <div className="flex gap-6">
            <p className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
              India + International
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
