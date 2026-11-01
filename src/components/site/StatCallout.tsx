import Link from "next/link";
import { CountUp } from "@/components/motion/CountUp";

/** Splits "₹12 lakh+" into a fixed prefix, the number that counts, and a fixed suffix (M4). */
export function parseStat(value: string) {
  const m = value.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  // Ranges ("9-10 hrs", "5 to 2") stay still: counting only the first number would misread
  if (!m || /^\s*(-|–|to\b)/.test(m[3])) return null;
  const n = Number(m[2].replace(/,/g, ""));
  const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;
  return { prefix: m[1], value: n, suffix: m[3], decimals };
}

/**
 * Stat callout (spec section 6): a huge number, a one-line mono label, and a source line.
 * Every number on the site carries its source. With `href` the whole callout links to the case.
 */
export default function StatCallout({ value, label, source, href }: { value: string; label: string; source: string; href?: string }) {
  const p = parseStat(value);
  const body = (
    <>
      <p className="stat-number">{p ? <CountUp value={p.value} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals} /> : value}</p>
      <p className="stat-label mt-4 measure">{label}</p>
      <p className="source-line mt-2">{source}</p>
    </>
  );
  return href ? (
    <Link href={href} className="block group">
      {body}
    </Link>
  ) : (
    <div>{body}</div>
  );
}
