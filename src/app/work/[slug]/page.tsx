import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllWork, getWork, workMeta } from "@/lib/work";
import { SITE_URL } from "@/lib/site";
import { WordReveal } from "@/components/motion/WordReveal";
import { Reveal } from "@/components/motion/Reveal";
import StatCallout from "@/components/site/StatCallout";
import FinalCTA from "@/components/site/FinalCTA";
import { Eyebrow, JsonLd, Section } from "@/components/site/Primitives";
import { WORK_PAGE as W } from "@/content/work-page";
import { getSector } from "@/content/sectors";

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
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: w.brand, item: `${SITE_URL}/work/${w.slug}` },
    ],
  };
  const meta = workMeta(w);
  const sectorSlug = w.group ? W.sectorFor[w.group] : undefined;
  const sector = sectorSlug ? getSector(sectorSlug) : undefined;
  const cta = W.ctas[w.group ?? "All"] ?? W.ctas.All;
  const result = w.cardResult ?? w.results[0];

  // Rebuild spec 5.6: a stat row at the top, then Problem → What we did → Result, then the detail,
  // then the CTA for the matching sector
  return (
    <div>
      <JsonLd data={[jsonLd, breadcrumbs]} />
      <section data-hero className="canvas-dark" style={{ paddingTop: "clamp(8rem, 15vh, 10rem)", paddingBottom: "clamp(3rem, 7vh, 4.5rem)" }}>
        <div className="wrap">
          <Link href="/work" className="inline-flex min-h-[44px] items-center text-sm font-semibold mb-6" style={{ color: "var(--text-muted)" }}>
            &larr; {W.caseLabels.back}
          </Link>
          <Eyebrow className="mb-5">
            {w.brand}
            {meta ? ` · ${meta}` : ""}
          </Eyebrow>
          <WordReveal text={w.title} className="text-balance" style={{ maxWidth: "20ch", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }} />
        </div>
      </section>

      {w.results.length > 0 && (
        <Section label="Results" tint>
          <div className="grid gap-10 md:grid-cols-3">
            {w.results.slice(0, 3).map((r) => (
              <StatCallout key={r.value + r.label} value={r.value} label={r.label} source={w.brand} />
            ))}
          </div>
        </Section>
      )}

      <Section label="Problem, what we did, result">
        <Reveal mode="stagger" className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="stat-label mb-3">{W.caseLabels.problem}</p>
            <p className="text-lg" style={{ color: "var(--text-primary)" }}>{w.problem ?? w.summary}</p>
          </div>
          <div>
            <p className="stat-label mb-3">{W.caseLabels.did}</p>
            <p className="text-lg" style={{ color: "var(--text-primary)" }}>{w.did ?? w.summary}</p>
          </div>
          <div>
            <p className="stat-label mb-3">{W.caseLabels.result}</p>
            {result ? (
              <p className="text-lg">
                <strong style={{ color: "var(--accent-text)" }}>{result.value}</strong>{" "}
                <span style={{ color: "var(--text-primary)" }}>{result.label}</span>
              </p>
            ) : (
              <p className="text-lg" style={{ color: "var(--text-body)" }}>{w.summary}</p>
            )}
          </div>
        </Reveal>
      </Section>

      <Section label={W.caseLabels.detail} tint>
        <article className="mx-auto" style={{ maxWidth: "46rem" }}>
        {/* Body comes from our own markdown files in content/work, never from visitors */}
          <div
          className="flex flex-col gap-5 text-lg leading-relaxed [&_h2]:text-[clamp(1.5rem,3vw,2rem)] [&_h2]:leading-tight [&_h2]:mt-6 [&_h2]:text-[var(--text-primary)] [&_strong]:text-[var(--text-primary)] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_.work-wide_img]:w-full [&_.work-wide_img]:h-auto [&_.work-wide_img]:rounded-xl [&_.work-gallery]:grid [&_.work-gallery]:items-start [&_.work-gallery]:grid-cols-2 [&_.work-gallery]:gap-4 md:[&_.work-gallery]:grid-cols-3 [&_.work-gallery_img]:w-full [&_.work-gallery_img]:h-auto [&_.work-gallery_img]:rounded-xl [&_.work-gallery_video]:w-full [&_.work-gallery_video]:h-auto [&_.work-gallery_video]:rounded-xl [&_.work-gallery_video]:bg-black [&_figure]:flex [&_figure]:flex-col [&_figure]:gap-2 [&_figcaption]:text-sm [&_figcaption]:text-[var(--text-muted)]"
          style={{ color: "var(--text-body)" }}
          dangerouslySetInnerHTML={{ __html: w.html }}
        />

        </article>
        <Link href={cta.href} className="link-arrow mt-12" data-cta={cta.href === "/call" ? "book-call" : undefined}>
          {cta.text} &rarr;
        </Link>
      </Section>

      <FinalCTA whatsapp={sector?.whatsapp ?? W.whatsapp} />
    </div>
  );
}
