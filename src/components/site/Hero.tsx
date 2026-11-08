import Link from "next/link";
import type { ReactNode } from "react";
import { WordReveal, HeroFollow } from "@/components/motion/WordReveal";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Eyebrow } from "./Primitives";

type Action = { label: string; href: string; cta?: "book-call" };

/**
 * Page hero: dark band by default (spec section 6), one H1 with the M1 word reveal, a sub-line,
 * a primary button plus either a ghost link or Chat on WhatsApp, and an optional microline.
 * `aside` sits to the right on desktop and below on phones (the home page's system diagram).
 */
export default function Hero({
  eyebrow,
  title,
  sub,
  primary,
  ghost,
  whatsapp,
  microline,
  aside,
  dark = true,
  full = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  sub?: ReactNode;
  primary?: Action;
  ghost?: Action;
  whatsapp?: string;
  microline?: ReactNode;
  aside?: ReactNode;
  dark?: boolean;
  full?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      data-hero
      className={`${dark ? "canvas-dark" : ""} ${full ? "md:min-h-[100svh] md:flex md:items-center" : ""}`}
      style={{ paddingTop: "clamp(8rem, 16vh, 11rem)", paddingBottom: "clamp(4rem, 9vh, 6rem)" }}
    >
      <div className={`wrap ${aside ? "grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center" : ""}`}>
        <div>
          {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}
          <WordReveal text={title} className="text-balance" style={{ maxWidth: "18ch" }} />
          {sub && (
            <HeroFollow after={title} step={1}>
              <p className="body-copy measure mt-6" style={{ color: "var(--text-body)" }}>
                {sub}
              </p>
            </HeroFollow>
          )}
          {(primary || ghost || whatsapp) && (
            <HeroFollow after={title} step={2} className="mt-10">
              <div className="flex flex-wrap gap-3">
                {primary && (
                  <Link href={primary.href} className="btn-primary btn-lg" data-cta={primary.cta}>
                    {primary.label}
                  </Link>
                )}
                {ghost && (
                  <Link href={ghost.href} className="btn-ghost btn-lg" data-cta={ghost.cta}>
                    {ghost.label}
                  </Link>
                )}
                {whatsapp && <WhatsAppButton text={whatsapp} className="btn-ghost btn-lg" />}
              </div>
              {microline && (
                <p className="stat-label mt-5" style={{ textTransform: "none", letterSpacing: "0.02em" }}>
                  {microline}
                </p>
              )}
            </HeroFollow>
          )}
          {children}
        </div>
        {aside && <div>{aside}</div>}
      </div>
    </section>
  );
}
