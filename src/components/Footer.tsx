"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-10 py-12"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo + tagline */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div
              className="w-5 h-5 flex items-center justify-center"
              style={{ border: "1.5px solid #2563EB", borderRadius: "3px" }}
            >
              <div
                className="w-2 h-2"
                style={{ background: "#2563EB", borderRadius: "1px" }}
              />
            </div>
            <span
              className="text-sm font-semibold tracking-tight"
              style={{ color: "#F0F0F0" }}
            >
              The Adda Labs
            </span>
          </div>
          <p className="text-xs" style={{ color: "#444" }}>
            Experiment. Validate. Build.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { label: "What We Do", href: "#what-we-do" },
            { label: "Framework", href: "#framework" },
            { label: "Models", href: "#engagement" },
            { label: "Manifesto", href: "#manifesto" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium transition-colors duration-200 cursor-pointer"
              style={{ color: "#555" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#999")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#555")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Legal */}
        <p className="text-xs" style={{ color: "#333" }}>
          &copy; {year} The Adda Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
