import { Globe, MessageCircle } from "lucide-react";
import { PLANS_PAGE } from "@/content/plans";

// lucide 1.x dropped brand icons, so Instagram is drawn here in the same 1.5 stroke
export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

export const CHANNEL_ICONS: Record<string, (p: { size?: number }) => React.ReactNode> = {
  Website: ({ size = 18 }) => <Globe size={size} strokeWidth={1.5} aria-hidden="true" />,
  Instagram: InstagramIcon,
  WhatsApp: ({ size = 18 }) => <MessageCircle size={size} strokeWidth={1.5} aria-hidden="true" />,
};

/**
 * The /pricing hero visual: an example of what the free audit finds, channel by channel,
 * in the page's own words (what's off, the fix, the order). A light card on the dark hero.
 */
export default function AuditSheet() {
  const s = PLANS_PAGE.sample;
  return (
    <figure className="on-dark-card m-0 overflow-hidden lg:rotate-[0.8deg]" aria-label={`${s.title} (${s.badge.toLowerCase()})`}>
      <div className="flex items-center justify-between gap-3 px-5 md:px-6 py-4" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border-color)" }}>
        <p className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
          {s.title}
        </p>
        <span className="stat-label px-2 py-1 rounded-full" style={{ border: "1px solid var(--border-color)" }}>
          {s.badge}
        </span>
      </div>
      {s.items.map((it) => {
        const Icon = CHANNEL_ICONS[it.channel];
        return (
          <div key={it.channel} className="grid grid-cols-[32px_1fr] gap-4 px-5 md:px-6 py-5" style={{ borderBottom: "1px dashed var(--border-color)" }}>
            <span className="grid place-items-center w-8 h-8 rounded-lg" style={{ background: "var(--brand-tint)", color: "var(--brand)" }}>
              <Icon size={17} />
            </span>
            <div className="min-w-0">
              <p className="font-bold text-sm mb-2" style={{ color: "var(--text-primary)" }}>
                {it.channel}
              </p>
              <dl className="grid gap-1.5 text-sm">
                <div className="grid grid-cols-[88px_1fr] gap-2">
                  <dt className="stat-label leading-6 whitespace-nowrap" style={{ color: "#A4553A" }}>{s.offLabel}</dt>
                  <dd className="m-0" style={{ color: "var(--text-body)" }}>{it.off}</dd>
                </div>
                <div className="grid grid-cols-[88px_1fr] gap-2">
                  <dt className="stat-label leading-6 whitespace-nowrap" style={{ color: "var(--brand)" }}>{s.fixLabel}</dt>
                  <dd className="m-0 font-semibold" style={{ color: "var(--text-primary)" }}>{it.fix}</dd>
                </div>
              </dl>
            </div>
          </div>
        );
      })}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-5 md:px-6 py-3.5 stat-label" style={{ background: "var(--bg-secondary)", textTransform: "none", letterSpacing: "0.02em" }}>
        <span>{s.orderLabel}</span>
        <ol className="flex flex-wrap gap-x-4 gap-y-1 m-0 p-0 list-none">
          {s.order.map((o, i) => (
            <li key={o} style={{ color: "var(--text-primary)" }}>
              <span style={{ color: "var(--brand)" }}>{i + 1}.</span> {o}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
