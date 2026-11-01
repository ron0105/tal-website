import Link from "next/link";
import type { Plan } from "@/content/plans";

/** One plan (spec 5.4). The highlighted plan gets the teal border and its badge. `compact` is the home preview. */
export default function PlanCard({ plan, compact }: { plan: Plan; compact?: boolean }) {
  return (
    <div
      className="card-hover h-full flex flex-col p-6 md:p-7 relative"
      style={{ background: "var(--bg)", ...(plan.highlight ? { borderColor: "var(--brand)", borderWidth: 2 } : {}) }}
    >
      {plan.highlight && (
        <p className="label-eyebrow absolute -top-3 left-6 px-2 rounded-full" style={{ background: "var(--brand)", color: "#fff" }}>
          {plan.highlight}
        </p>
      )}
      <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
        {plan.name}
      </p>
      <p className="stat-label mt-2">For: {plan.for}</p>
      <p className="mt-5 text-sm flex-1" style={{ color: "var(--text-body)" }}>
        {plan.get}
      </p>
      {!compact && (
        <p className="mt-5 text-sm font-semibold" style={{ color: "var(--accent-text)" }}>
          {plan.promise}
        </p>
      )}
      <p className="mt-6 pt-5 font-bold" style={{ borderTop: "1px solid var(--hairline)", color: "var(--text-primary)" }}>
        {plan.price}
      </p>
      {!compact && (
        <Link href={plan.ctaHref} className={`${plan.highlight ? "btn-primary" : "btn-ghost"} mt-5`} data-cta={plan.ctaHref === "/call" ? "book-call" : undefined}>
          {plan.cta}
        </Link>
      )}
    </div>
  );
}
