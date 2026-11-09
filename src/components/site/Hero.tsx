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
 * `media` also sits to the right on desktop, but on phones comes between the sub-line and the buttons.
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
  media,
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
  media?: ReactNode;
  dark?: boolean;
  full?: boolean;
  children?: ReactNode;
}) {
  const head = (
    <>
      {eyebrow && <Eyebrow className="mb-6">{eyebrow}</Eyebrow>}
      <WordReveal text={title} className="text-balance" style={{ maxWidth: "18ch" }} />
      {sub && (
        <HeroFollow after={title} step={1}>
          <p className="body-copy measure mt-6" style={{ color: "var(--text-body)" }}>
            {sub}
          </p>
        </HeroFollow>
      )}
    </>
  );
  const actions = (
    <>
      {(primary || ghost || whatsapp) && (
        <HeroFollow after={title} step={2} className={media ? "" : "mt-10"}>
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
    </>
  );
  return (
    <section
      data-hero
      className={`${dark ? "canvas-dark" : ""} ${full ? "md:min-h-[100svh] md:flex md:items-center" : ""}`}
      style={{ paddingTop: "clamp(8rem, 16vh, 11rem)", paddingBottom: "clamp(4rem, 9vh, 6rem)" }}
    >
      {media ? (
        <div className="wrap grid gap-8 lg:gap-x-12 lg:grid-cols-[1.25fr_1fr]">
          <div className="lg:col-start-1 lg:row-start-1 lg:self-end">{head}</div>
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">{media}</div>
          <div className="lg:col-start-1 lg:row-start-2">{actions}</div>
        </div>
      ) : (
        <div className={`wrap ${aside ? "grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center" : ""}`}>
          <div>
            {head}
            {actions}
          </div>
          {aside && <div>{aside}</div>}
        </div>
      )}
    </section>
  );
}
