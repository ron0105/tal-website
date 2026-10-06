// Plain reading layout for /privacy and /terms. No animation: legal text should
// be readable immediately and print cleanly.

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background" style={{ padding: "clamp(9rem, 15vh, 12rem) 1.5rem clamp(5rem, 10vh, 8rem)" }}>
      <article className="layout-grid md:px-10" style={{ maxWidth: "46rem" }}>
        <span className="label-eyebrow block mb-6" style={{ color: "var(--accent)" }}>
          {eyebrow}
        </span>
        <h1 className="mb-4" style={{ color: "var(--text-primary)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}>
          {title}
        </h1>
        <p className="text-sm mb-14" style={{ color: "var(--text-muted)" }}>
          Last updated {updated}
        </p>
        <div className="flex flex-col gap-10">{children}</div>
      </article>
    </main>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      {/* .text-subsection sits outside @layer base, so it overrides the global serif h2 */}
      <h2 className="text-subsection" style={{ color: "var(--text-primary)" }}>
        {heading}
      </h2>
      <div className="flex flex-col gap-3 text-base leading-relaxed [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_a]:underline [&_a]:underline-offset-4" style={{ color: "var(--text-body)" }}>
        {children}
      </div>
    </section>
  );
}
