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
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 cursor-pointer w-fit">
              <div
                className="w-5 h-5 flex items-center justify-center"
                style={{ border: "1.5px solid #2563EB", borderRadius: "3px" }}
              >
                <div className="w-2 h-2" style={{ background: "#2563EB", borderRadius: "1px" }} />
              </div>
              <span className="text-sm font-semibold tracking-tight" style={{ color: "#F0F0F0" }}>
                The Adda Labs
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#444", maxWidth: "260px" }}>
              We help founders test ideas before they build them — so the right
              product gets built, the first time.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#333" }}>
              Pages
            </p>
            <nav className="flex flex-col gap-3">
              {pages.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="text-sm transition-colors duration-200 cursor-pointer"
                  style={{ color: "#555" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#999")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
                >
                  {p.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#333" }}>
              Get in touch
            </p>
            <p className="text-sm mb-2" style={{ color: "#555" }}>hello@theaddalabs.com</p>
            <p className="text-sm mb-6" style={{ color: "#555" }}>Bengaluru, India</p>
            <Link
              href="/work-with-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold cursor-pointer transition-all duration-200"
              style={{ background: "#2563EB", color: "#fff", borderRadius: "6px" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#3B82F6")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563EB")}
            >
              Start a Sprint
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs" style={{ color: "#333" }}>
            &copy; {year} The Adda Labs. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#2a2a2a" }}>
            Experiment. Validate. Build.
          </p>
        </div>
      </div>
    </footer>
  );
}
