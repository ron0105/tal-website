import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllLabNotes, getLabNote, formatNoteDate } from "@/lib/lab-notes";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllLabNotes().map((n) => ({ slug: n.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getLabNote(slug);
  if (!note) return { title: "Lab note not found" };

  return {
    title: note.title,
    description: note.description,
    authors: [{ name: "Rohan Tiwarekar" }],
    openGraph: {
      type: "article",
      title: note.title,
      description: note.description,
      publishedTime: note.date,
      modifiedTime: note.updated ?? note.date,
      // Setting openGraph here replaces the site-wide card, so name it again
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default async function LabNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getLabNote(slug);
  if (!note) notFound();

  // Tells search engines and AI answer tools who wrote this, when, and for which firm
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.description,
    datePublished: note.date,
    dateModified: note.updated ?? note.date,
    articleSection: note.tag,
    author: { "@id": `${SITE_URL}/about#rohan`, "@type": "Person", name: "Rohan Tiwarekar" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/lab-notes/${note.slug}`,
  };

  return (
    <main className="bg-background" style={{ padding: "clamp(9rem, 15vh, 12rem) 1.5rem clamp(4rem, 8vh, 6rem)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <article className="layout-grid md:px-10" style={{ maxWidth: "46rem" }}>
        <Link
          href="/lab-notes"
          className="inline-flex min-h-[44px] items-center text-sm font-semibold mb-6 hover:text-accent-ink transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          &larr; All lab notes
        </Link>
        <span className="label-eyebrow block mb-6" style={{ color: "var(--accent-text)" }}>
          {note.tag}
        </span>
        <h1 className="mb-5 text-pretty" style={{ color: "var(--text-primary)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}>
          {note.title}
        </h1>
        <p className="text-sm mb-12" style={{ color: "var(--text-muted)" }}>
          Rohan Tiwarekar · {formatNoteDate(note.date)}
          {note.updated && ` · Updated ${formatNoteDate(note.updated)}`}
        </p>

        {/* Post body comes from our own markdown files in content/lab-notes, never from visitors */}
        <div
          className="flex flex-col gap-5 text-lg leading-relaxed [&_h2]:text-[clamp(1.5rem,3vw,2rem)] [&_h2]:leading-tight [&_h2]:mt-6 [&_h2]:text-[var(--text-primary)] [&_h3]:mt-2 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:pl-5 [&_ol]:list-decimal [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent-ink [&_strong]:text-[var(--text-primary)] [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--accent)] [&_blockquote]:pl-5 [&_blockquote]:italic [&_table]:w-full [&_table]:text-base [&_table]:border-collapse [&_th]:text-left [&_th]:font-semibold [&_th]:py-2 [&_th]:pr-4 [&_th]:border-b [&_th]:border-[var(--border-color)] [&_td]:py-2 [&_td]:pr-4 [&_td]:border-b [&_td]:border-[var(--border-subtle)] [&_td]:align-top"
          style={{ color: "var(--text-body)" }}
          dangerouslySetInnerHTML={{ __html: note.html }}
        />

        <aside
          aria-label="About the author"
          className="mt-16 p-7 flex flex-col gap-3"
          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}
        >
          <p className="text-subsection" style={{ color: "var(--text-primary)" }}>
            Rohan Tiwarekar
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
            Founder of TAL, short for The Adda Labs, a design-thinking lab in Mumbai working with businesses in India
            and abroad. He writes these notes as the work happens.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/call" className="btn-primary">
              Book a call
            </Link>
            <Link href="/about" className="btn-ghost">
              About TAL
            </Link>
          </div>
        </aside>
      </article>
    </main>
  );
}
