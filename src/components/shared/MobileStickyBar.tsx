"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "./WhatsAppButton";
import { whatsappLink } from "@/lib/site";
import { CALL_CTA, CHROME, isBuilderRoute, whatsappTextFor } from "@/content/navigation";

/**
 * M11 mobile sticky bar: Book a Call + WhatsApp, on phones only. It slides up once the hero
 * has left the screen (the page's [data-hero], or the first screenful if a page has none)
 * and hides while the footer is in view. Not shown on builder pages or on /call itself.
 */
export default function MobileStickyBar() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [atFooter, setAtFooter] = useState(false);
  const off = pathname.startsWith("/call") || isBuilderRoute(pathname);

  useEffect(() => {
    if (off) return;
    const hero = document.querySelector("[data-hero]");
    const footer = document.querySelector("footer");
    let heroIo: IntersectionObserver | undefined;
    let onScroll: (() => void) | undefined;

    if (hero) {
      heroIo = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting && e.boundingClientRect.top < 0));
      heroIo.observe(hero);
    } else {
      onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    const footIo = new IntersectionObserver(([e]) => setAtFooter(e.isIntersecting));
    if (footer) footIo.observe(footer);

    return () => {
      heroIo?.disconnect();
      footIo.disconnect();
      if (onScroll) window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, off]);

  if (off) return null;
  const show = pastHero && !atFooter;

  return (
    <div
      className="sticky-bar md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-3 px-4 pt-3"
      data-show={show ? "" : undefined}
      aria-hidden={!show}
      inert={!show}
      style={{
        paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
        background: "var(--navbar-bg)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <Link href={CALL_CTA.href} className="btn-primary" data-cta="book-call">
        {CHROME.stickyCall}
      </Link>
      <a
        href={whatsappLink(whatsappTextFor(pathname))}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost !px-0 w-11"
        aria-label={CHROME.whatsappLabel}
        data-cta="whatsapp"
      >
        <WhatsAppIcon size={20} />
      </a>
    </div>
  );
}
