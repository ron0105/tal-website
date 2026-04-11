"use client";

import Link from "next/link";

const pages = [
  { label: "Venture Lab", href: "/venture-lab" },
  { label: "TAL VI", href: "/tal-vi" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Work With Us", href: "/work-with-us" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="px-6 md:px-10 py-14"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="layout-grid">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 cursor-pointer w-fit">
              <div
                className="w-5 h-5 flex items-center justify-center"
                style={{ border: "1.5px solid var(--text-primary)", borderRadius: "0px" }}
              >
                <div
                  style={{ width: "8px", height: "8px", background: "var(--text-primary)", borderRadius: "0px" }}
                />
              </div>
              <span className="text-sm font-bold tracking-tight text-foreground">
                The Adda Labs
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", maxWidth: "260px" }}>
              We help founders test ideas before they build them: so the right
              product gets built, the first time.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-primary)" }}>
              Pages
            </p>
            <nav className="flex flex-col gap-3">
              {pages.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="text-sm transition-colors duration-200 cursor-pointer hover:text-foreground"
                  style={{ color: "var(--text-muted)" }}
                >
                  {p.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "var(--text-primary)" }}>
              Get in touch
            </p>
            <a href="mailto:founder@theaddalabs.com" className="text-sm mb-2 block hover:text-foreground transition-colors" style={{ color: "var(--text-body)" }}>founder@theaddalabs.com</a>
            <p className="text-sm mb-6" style={{ color: "var(--text-body)" }}>Mumbai, India</p>
            <Link
              href="/work-with-us"
              className="btn-primary"
              style={{ padding: "10px 20px", fontSize: "0.8rem" }}
            >
              Start a Sprint
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {year} The Adda Labs. All rights reserved.
          </p>
          <p className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
            Experiment. Validate. Build.
          </p>
        </div>
      </div>
    </footer>
  );
}
