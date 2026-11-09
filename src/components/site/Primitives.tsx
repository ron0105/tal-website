import Link from "next/link";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

/** Small mono label above a heading: names the topic, never the takeaway (spec section 4). */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`label-eyebrow ${className}`}>{children}</p>;
}

/** A section heading that states the takeaway ("Most leads are lost after the first message"). */
export function ActionTitle({ children, as: Tag = "h2", id, className = "", style }: { children: ReactNode; as?: ElementType; id?: string; className?: string; style?: CSSProperties }) {
  return (
    <Tag id={id} className={`text-balance ${className}`} style={{ maxWidth: "22ch", ...style }}>
      {children}
    </Tag>
  );
}

/** One idea per section: light by default, `dark` for the hero / final CTA bands, `tint` for a quiet alternate. */
export function Section({
  children,
  id,
  dark,
  tint,
  label,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  dark?: boolean;
  tint?: boolean;
  label?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`section scroll-mt-20 ${dark ? "canvas-dark" : ""} ${className}`}
      style={tint ? { background: "var(--bg-secondary)" } : undefined}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

/** Eyebrow, action title and an optional line of body, arriving in that order (M2). */
export function SectionHead({ eyebrow, title, body, className = "mb-12 md:mb-16" }: { eyebrow?: string; title: ReactNode; body?: ReactNode; className?: string }) {
  return (
    <Reveal className={className}>
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : <span />}
      <ActionTitle>{title}</ActionTitle>
      {body ? <p className="body-copy measure mt-5">{body}</p> : <span />}
    </Reveal>
  );
}

/** A text link that ends in an arrow (M7: the arrow moves 4px on hover). */
export function ArrowLink({ href, children, className = "", ...data }: { href: string; children: ReactNode; className?: string; [key: `data-${string}`]: string | undefined }) {
  return (
    <Link href={href} className={`link-arrow ${className}`} {...data}>
      {children}
      <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
    </Link>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
