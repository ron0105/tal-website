import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getJob, getAllSlugs, HIRING_STEPS, REPLY_PROMISE_DAYS } from "@/lib/jobs";
import ApplyFlow from "@/components/careers/ApplyFlow";
import StatusPill from "@/components/careers/StatusPill";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Role Not Found | TAL Consulting" };
  return {
    title: `Apply: ${job.title} | TAL Consulting`,
    description: `Apply for ${job.title} at TAL. About 30 minutes, with an answer within ${REPLY_PROMISE_DAYS} days.`,
    robots: { index: false },
  };
}

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <main className="bg-background" style={{ padding: "clamp(8rem, 14vh, 11rem) 1.5rem clamp(5rem, 10vh, 8rem)" }}>
      <div className="layout-grid px-0 md:px-10 grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">
        {/* Role summary: what you're applying for, and what happens next */}
        <aside className="lg:sticky lg:top-32 flex flex-col gap-6">
          <Link
            href={`/careers/${job.slug}`}
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            ← {job.shortTitle}
          </Link>
          <div>
            <span className="label-eyebrow block mb-3" style={{ color: "var(--accent)" }}>
              You&apos;re applying for
            </span>
            <p className="font-poppins text-3xl leading-tight mb-3" style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              {job.title}
            </p>
            <p className="text-sm font-semibold mb-4" style={{ color: "var(--accent)" }}>
              {job.pay.headline}
            </p>
            <StatusPill status={job.status} />
          </div>
          <div className="hidden lg:flex flex-col gap-3 pt-6" style={{ borderTop: "1px solid var(--border-color)" }}>
            <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              After you send it
            </p>
            {HIRING_STEPS.slice(1).map((s, i) => (
              <div key={s.name} className="flex gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5"
                  style={{ background: "var(--brand)", color: "#fff" }}
                >
                  {i + 2}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>{s.name}.</strong> {s.detail}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <ApplyFlow job={job} />
      </div>
    </main>
  );
}
