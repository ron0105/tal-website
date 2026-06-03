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

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Role Not Found — TAL Consulting" };

  return {
    title: `${job.title} — TAL Consulting`,
    description: job.teaser,
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
