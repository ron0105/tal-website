import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getJob, getAllSlugs } from "@/lib/jobs";
import JDHero from "@/components/careers/JDHero";
import JDStickyBar from "@/components/careers/JDStickyBar";
import JDContent from "@/components/careers/JDContent";
import CareersCTA from "@/components/careers/CareersCTA";

// ─── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Old role URLs (content-creator, developer-intern, growth-hacker) are gone, so any
// slug not in JOBS should 404 rather than render on demand.
export const dynamicParams = false;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Role Not Found | TAL Consulting" };

  return {
    title: `${job.title} | Careers | TAL Consulting`,
    description: `${job.pay.headline}. ${job.teaser}`,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <main>
      <JDStickyBar job={job} />
      <JDHero job={job} />
      <JDContent job={job} />
      <CareersCTA />
    </main>
  );
}
