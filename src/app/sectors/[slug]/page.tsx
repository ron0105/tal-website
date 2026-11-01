import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectorPageTemplate from "@/components/site/SectorPageTemplate";
import { SECTORS_DATA, getSector } from "@/content/sectors";

export function generateStaticParams() {
  return SECTORS_DATA.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getSector((await params).slug);
  return s ? { title: s.meta.title, description: s.meta.description } : {};
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getSector((await params).slug);
  if (!s) notFound();
  return <SectorPageTemplate sector={s} />;
}
