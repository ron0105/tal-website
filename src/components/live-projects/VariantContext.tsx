"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { DEFAULT_VARIANT, LIVE_VARIANTS, Variant, parseVariant } from "@/lib/live-projects";

// Which ask this visitor sees. A link with ?v=a, ?v=b or ?v=c (the Reddit posts) sets it, but
// only versions in LIVE_VARIANTS are shown; anything else falls back to DEFAULT_VARIANT. Anyone
// else, including the site's Live Projects button, gets a random pick from LIVE_VARIANTS.
// Kept in localStorage, so a returning visitor sees the same ask.
// Source (where the visitor came from) rides along: "link" for ?v= links, "site" for ?src=site
// (the nav button), "direct" for everything else.
// On the server and during hydration the variant is unknown, so `ready` is false and
// variant-specific parts stay invisible. Nobody sees the wrong ask flash before the right one.

const KEY = "lp-variant";
const SRC_KEY = "lp-source";

export type Source = "link" | "site" | "direct";

interface Ctx {
  variant: Variant;
  source: Source;
  ready: boolean;
}

let cached: Variant | null = null;
let cachedSource: Source = "direct";

function readVariant(): Variant {
  if (cached) return cached;
  let v: Variant | null = null;
  let source: Source = "direct";
  let params: URLSearchParams | null = null;
  try {
    params = new URLSearchParams(window.location.search);
    v = parseVariant(params.get("v"));
    if (v) source = "link";
    else if (params.get("src") === "site") source = "site";
  } catch {}
  try {
    if (v) window.localStorage.setItem(KEY, v);
    else v = parseVariant(window.localStorage.getItem(KEY));
    if (source === "direct") source = (window.localStorage.getItem(SRC_KEY) as Source | null) ?? "direct";
    window.localStorage.setItem(SRC_KEY, source);
  } catch {}
  if (v && !LIVE_VARIANTS.includes(v)) v = DEFAULT_VARIANT;
  if (!v) {
    v = LIVE_VARIANTS[Math.floor(Math.random() * LIVE_VARIANTS.length)];
    try {
      window.localStorage.setItem(KEY, v);
    } catch {}
  }
  cached = v;
  cachedSource = source;
  return cached;
}

const subscribe = () => () => {};
const readServer = (): Variant | null => null;

const VariantCtx = createContext<Ctx>({ variant: DEFAULT_VARIANT, source: "direct", ready: false });

export function VariantProvider({ children }: { children: React.ReactNode }) {
  const read = useSyncExternalStore<Variant | null>(subscribe, readVariant, readServer);
  const value: Ctx = { variant: read ?? DEFAULT_VARIANT, source: cachedSource, ready: read !== null };
  return <VariantCtx.Provider value={value}>{children}</VariantCtx.Provider>;
}

export const useVariant = () => useContext(VariantCtx);

// Shows the part for the visitor's variant. Missing keys fall back to b.
export function ByVariant({ a, b, c }: { a?: React.ReactNode; b: React.ReactNode; c?: React.ReactNode }) {
  const { variant, ready } = useVariant();
  const pick = variant === "a" ? a ?? b : variant === "c" ? c ?? b : b;
  return <span style={{ visibility: ready ? "visible" : "hidden" }}>{pick}</span>;
}
