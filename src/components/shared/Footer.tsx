import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { CALL_CTA, CHROME, FOOTER_COLUMNS, LEGAL_LINKS, live } from "@/content/navigation";

// Rebuild footer (spec section 3): Who We Help · Company · Grow With TAL · Legal.
// The legal line (LLPIN, grievance officer) sits in the Legal column, word for word as before.
const linkClass = "inline-flex min-h-[44px] w-fit items-center text-sm font-medium transition-colors duration-200 hover:text-accent-ink";

export default function Footer() {
  const year = new Date().getFullYear();
  const columns = FOOTER_COLUMNS.map((c) => ({ ...c, links: live(c.links) })).filter((c) => c.links.length > 0);

  return (
    <footer className="bg-background" style={{ borderTop: "1px solid var(--hairline)" }}>
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)] md:gap-8 mb-14">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 w-fit min-h-[44px]">
              <Logo size={28} />
              <span className="text-lg font-bold tracking-tight text-foreground">The Adda Labs</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)", maxWidth: "280px" }}>
              {CHROME.brandLine}
            </p>
            <Link href={CALL_CTA.href} className="btn-primary" data-cta="book-call">
              {CALL_CTA.label}
            </Link>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="label-eyebrow mb-3">{col.title}</p>
              <ul className="flex flex-col">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass} style={{ color: "var(--text-body)" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Legal">
            <p className="label-eyebrow mb-3">Legal</p>
            <ul className="flex flex-col">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass} style={{ color: "var(--text-body)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mt-3" style={{ color: "var(--text-muted)" }}>
              {CHROME.legalLine}
            </p>
          </nav>
        </div>

        <p className="text-xs uppercase tracking-widest pt-8" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--hairline)" }}>
          &copy; {year} {CHROME.copyright}
        </p>
      </div>
    </footer>
  );
}
