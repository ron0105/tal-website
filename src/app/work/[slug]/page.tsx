import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllWork, getWork, workMeta } from "@/lib/work";
import BrandMark from "@/components/work/BrandMark";
import { SITE_URL } from "@/lib/site";

// Only pieces with a written body get a page; the rest live as cards on /work
export function generateStaticParams() {
  return getAllWork()
    .filter((w) => w.html)
    .map((w) => ({ slug: w.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) return { title: "Work not found" };

  const title = `${w.brand}: ${w.title}`;
  return {
    title,
    description: w.summary,
    openGraph: {
      type: "article",
      title,
      description: w.summary,
      // Setting openGraph here replaces the site-wide card, so name it again
      images: [{ url: w.cover ?? "/opengraph-image" }],
    },
  };
}

export default async function WorkPiecePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w || !w.html) notFound();

  // No creator: most of this is our team members' work from before TAL, so it isn't claimed as TAL's
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${w.brand}: ${w.title}`,
    description: w.summary,
    about: { "@type": "Brand", name: w.brand },
    mainEntityOfPage: `${SITE_URL}/work/${w.slug}`,
  };
  // Shows "Home > Our work > Brand" under the result in Google
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Our work", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: w.brand, item: `${SITE_URL}/work/${w.slug}` },
    ],
  };
  const meta = workMeta(w);

  return (
    <main className="bg-background" style={{ padding: "clamp(9rem, 15vh, 12rem) 1.5rem clamp(4rem, 8vh, 6rem)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbs]).replace(/</g, "\\u003c") }}
      />
      <article className="layout-grid md:px-10" style={{ maxWidth: "52rem" }}>
        <Link
          href="/work#team-work"
          className="inline-flex min-h-[44px] items-center text-sm font-semibold mb-6 hover:text-accent-ink transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          &larr; All work
        </Link>
        <div className="mb-6">
          <BrandMark brand={w.brand} base={44} />
        </div>
        <span className="label-eyebrow block mb-6" style={{ color: "var(--accent-text)" }}>
          {w.brand} · {w.lane}
        </span>
        <h1 className="mb-5 text-pretty" style={{ color: "var(--text-primary)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}>
          {w.title}
        </h1>
        {meta && (
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            {meta}
          </p>
        )}
        <p className="text-xl leading-relaxed mb-10 text-pretty" style={{ color: "var(--text-body)" }}>
          {w.summary}
        </p>
        {w.results.length > 0 && (
          <ul
            className="grid gap-6 mb-12 py-8 sm:grid-cols-3"
            style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}
          >
            {w.results.map((r) => (
              <li key={r.value + r.label}>
                <span className="block font-poppins leading-none mb-2" style={{ color: "var(--brand)", fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)" }}>
                  {r.value}
                </span>
                <span className="block text-base leading-snug" style={{ color: "var(--text-primary)" }}>
                  {r.label}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Body comes from our own markdown files in content/work, never from visitors */}
        <div
          className="flex flex-col gap-5 text-lg leading-relaxed [&_h2]:text-[clamp(1.5rem,3vw,2rem)] [&_h2]:leading-tight [&_h2]:mt-6 [&_h2]:text-[var(--text-primary)] [&_strong]:text-[var(--text-primary)] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_.work-wide_img]:w-full [&_.work-wide_img]:h-auto [&_.work-wide_img]:rounded-xl [&_.work-gallery]:grid [&_.work-gallery]:items-start [&_.work-gallery]:grid-cols-2 [&_.work-gallery]:gap-4 md:[&_.work-gallery]:grid-cols-3 [&_.work-gallery_img]:w-full [&_.work-gallery_img]:h-auto [&_.work-gallery_img]:rounded-xl [&_.work-gallery_video]:w-full [&_.work-gallery_video]:h-auto [&_.work-gallery_video]:rounded-xl [&_.work-gallery_video]:bg-black [&_figure]:flex [&_figure]:flex-col [&_figure]:gap-2 [&_figcaption]:text-sm [&_figcaption]:text-[var(--text-muted)]"
          style={{ color: "var(--text-body)" }}
          dangerouslySetInnerHTML={{ __html: w.html }}
        />

        <aside
          aria-label="Work with us"
          className="mt-16 p-7 flex flex-col gap-3"
          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}
        >
          <p className="text-subsection" style={{ color: "var(--text-primary)" }}>
            Want results like this?
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
            The people behind this work are on the TAL team. Tell us what you&apos;re working on and we&apos;ll show you what we&apos;d make.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/call" className="btn-primary">
              Book a call
            </Link>
            <Link href="/work#team-work" className="btn-ghost">
              More of our work
            </Link>
          </div>
        </aside>
      </article>
    </main>
  );
}
