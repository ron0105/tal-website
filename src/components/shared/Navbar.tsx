"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { WhatsAppIcon } from "./WhatsAppButton";
import { EASE, motionScale } from "@/lib/motion";
import { whatsappLink } from "@/lib/site";
import { CALL_CTA, CHROME, MAIN_NAV, SECTORS, WHO_WE_HELP, live, whatsappTextFor } from "@/content/navigation";

// Rebuild nav (Nov 1 2026): Who We Help ▾ · Plans · Work · Free Tools · About · [Book a Free Call].
// Links whose pages aren't built yet stay hidden (content/navigation.ts).
const isActive = (pathname: string, href: string) => {
  const path = href.split("?")[0];
  return pathname === path || pathname.startsWith(`${path}/`);
};

function SectorMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const sectors = live(SECTORS);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div
      ref={wrap}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!wrap.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="sector-menu"
        onClick={() => setOpen(!open)}
        className={`inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium cursor-pointer transition-colors hover:text-accent-ink${isActive(pathname, WHO_WE_HELP.href) ? " nav-link-active" : ""}`}
        style={{ color: isActive(pathname, WHO_WE_HELP.href) ? undefined : "var(--text-muted)" }}
      >
        {WHO_WE_HELP.label}
        <ChevronDown className="acc-chevron" size={14} strokeWidth={1.5} aria-hidden="true" />
      </button>
      {open && (
        <div id="sector-menu" className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
          <ul className="min-w-[240px] py-2 bg-background shadow-lg" style={{ border: "1px solid var(--hairline)", borderRadius: "var(--radius-card)" }}>
            {sectors.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="flex min-h-[44px] items-center px-5 text-sm font-medium hover:text-accent-ink" style={{ color: "var(--text-body)" }}>
                  {s.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 pt-1" style={{ borderTop: "1px solid var(--hairline)" }}>
              <Link href={WHO_WE_HELP.href} className="flex min-h-[44px] items-center px-5 text-sm font-semibold hover:text-accent-ink" style={{ color: "var(--text-primary)" }}>
                {CHROME.allSectors}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = live(MAIN_NAV);
  const sectors = live(SECTORS);
  const showSectors = WHO_WE_HELP.ready !== false && sectors.length > 0;
  const reduce = useReducedMotion();

  // pastHero: the page's [data-hero] has scrolled out from under the header (or there is none),
  // so a dark hero's dark header (globals.css) hands back to the light one
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const hero = document.querySelector("[data-hero]");
      setPastHero(!hero || hero.getBoundingClientRect().bottom <= 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Close the mobile menu when the route changes (adjusting state during render, not in an effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className="site-header fixed top-0 left-0 right-0 z-50 h-20 w-full"
        data-past-hero={pastHero ? "" : undefined}
        data-menu-open={menuOpen ? "" : undefined}
        style={{
          backdropFilter: scrolled ? "blur(12px)" : "none",
          background: "var(--navbar-bg)",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="wrap flex items-center justify-between h-full gap-6">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 min-h-[44px]" aria-label="The Adda Labs, home">
            <Logo size={30} />
            <span className="text-base font-bold tracking-tight text-foreground">The Adda Labs</span>
          </Link>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
            {showSectors && <SectorMenu pathname={pathname} />}
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-[44px] items-center text-sm font-medium whitespace-nowrap transition-colors duration-200 relative hover:text-accent-ink${active ? " nav-link-active" : ""}`}
                  style={{ color: active ? undefined : "var(--text-muted)" }}
                >
                  {link.label}
                  {active && <motion.div layoutId="nav-indicator" className="nav-indicator absolute bottom-1 left-0 right-0 h-[1.5px]" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* The wrapper hides it on phones: .btn-primary sets display itself, which would beat a utility */}
            <div className="hidden md:block">
              <Link href={CALL_CTA.href} className="btn-primary whitespace-nowrap" data-cta="book-call">
                {CALL_CTA.label}
              </Link>
            </div>
            <button
              type="button"
              className="lg:hidden flex flex-col gap-1.5 items-center justify-center w-11 h-11 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? CHROME.closeMenu : CHROME.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-[1.5px] bg-foreground" transition={{ duration: 0.25 }} />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-[1.5px] bg-foreground" transition={{ duration: 0.25 }} />
              <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-[1.5px] bg-foreground" transition={{ duration: 0.25 }} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.25 * motionScale(), ease: EASE }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto"
            style={{ background: "var(--bg)", borderBottom: "1px solid var(--hairline)" }}
          >
            <div className="wrap py-6">
              {showSectors && (
                <div className="pb-4 mb-2" style={{ borderBottom: "1px solid var(--hairline)" }}>
                  <p className="label-eyebrow mb-2">{WHO_WE_HELP.label}</p>
                  {sectors.map((s) => (
                    <Link key={s.href} href={s.href} className="flex min-h-[44px] items-center text-base font-medium" style={{ color: "var(--text-body)" }}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-[52px] items-center justify-between text-base font-semibold border-b border-border-subtle${active ? " nav-link-active" : ""}`}
                    style={{ color: active ? undefined : "var(--text-primary)" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="grid gap-3 mt-6">
                <Link href={CALL_CTA.href} className="btn-primary btn-lg" data-cta="book-call">
                  {CALL_CTA.label}
                </Link>
                <a href={whatsappLink(whatsappTextFor(pathname))} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-lg" data-cta="whatsapp">
                  <WhatsAppIcon />
                  {CHROME.whatsappLabel}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
