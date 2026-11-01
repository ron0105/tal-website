import Link from "next/link";
import { Building2, Lightbulb, ShoppingBag, Stethoscope, UtensilsCrossed, ArrowRight, type LucideIcon } from "lucide-react";

export const SECTOR_ICONS: Record<string, LucideIcon> = {
  clinics: Stethoscope,
  "real-estate": Building2,
  restaurants: UtensilsCrossed,
  d2c: ShoppingBag,
  founders: Lightbulb,
};

/** Icon, sector name and its one-line result; reports sector_card_click. `check` adds the free-check link. */
export default function SectorCard({ slug, name, result, check, large }: { slug: string; name: string; result: string; check?: string; large?: boolean }) {
  const Icon = SECTOR_ICONS[slug];
  return (
    <div className={`card-hover h-full flex flex-col ${large ? "p-8" : "p-6"}`} style={{ background: "var(--bg)" }}>
      <Link href={`/sectors/${slug}`} className="flex-1 block" data-event="sector_card_click" data-sector={slug}>
        {Icon && <Icon size={large ? 28 : 24} strokeWidth={1.5} aria-hidden="true" style={{ color: "var(--brand)" }} />}
        <p className={`font-bold mt-5 ${large ? "text-xl" : "text-lg"}`} style={{ color: "var(--text-primary)" }}>
          {name}
        </p>
        <p className="mt-2 text-sm" style={{ color: "var(--text-body)" }}>
          {result}
        </p>
      </Link>
      {check && (
        <Link href={`/sectors/${slug}#free-check`} className="link-arrow text-sm mt-4" data-event="sector_card_click" data-sector={slug}>
          {check}
          <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
