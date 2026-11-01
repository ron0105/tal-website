import Link from "next/link";

export type PFRCard = {
  id: string;
  client: string;
  industry: string;
  problem: string;
  did: string;
  result?: { value: string; label: string };
  year?: string;
  href?: string;
};

/** Problem → What we did → Result, three labelled rows, the result number in teal bold (spec section 6). */
export default function ProblemFixResultCard({ card }: { card: PFRCard }) {
  const rows = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-6">
        <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
          {card.client}
        </p>
        <p className="stat-label">
          {card.industry}
          {card.year ? ` · ${card.year}` : ""}
        </p>
      </div>
      <dl className="grid gap-4 text-sm">
        <div>
          <dt className="stat-label mb-1">Problem</dt>
          <dd style={{ color: "var(--text-body)" }}>{card.problem}</dd>
        </div>
        <div>
          <dt className="stat-label mb-1">What we did</dt>
          <dd style={{ color: "var(--text-body)" }}>{card.did}</dd>
        </div>
        {card.result && (
          <div>
            <dt className="stat-label mb-1">Result</dt>
            <dd>
              <strong className="tabular" style={{ color: "var(--accent-text)", fontSize: "1.35rem" }}>
                {card.result.value}
              </strong>{" "}
              <span style={{ color: "var(--text-body)" }}>{card.result.label}</span>
            </dd>
          </div>
        )}
      </dl>
    </>
  );
  return (
    <article id={card.id} className="card-hover h-full p-6 md:p-8 scroll-mt-28" style={{ background: "var(--bg)" }}>
      {card.href ? (
        <Link href={card.href} className="block h-full">
          {rows}
        </Link>
      ) : (
        rows
      )}
    </article>
  );
}
