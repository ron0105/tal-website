"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { DEFAULT_VARIANT, Variant, parseVariant } from "@/lib/live-projects";

// Which of the three asks this visitor sees (?v=a, ?v=b, ?v=c; none = b). Read once on the
// client, then kept for the session so a refresh or a link without ?v= doesn't change it.
// On the server and during hydration the variant is unknown, so `ready` is false and
// variant-specific parts stay invisible. Nobody sees the wrong ask flash before the right one.

const KEY = "lp-variant";

interface Ctx {
  variant: Variant;
  ready: boolean;
}

let cached: Variant | null = null;

function readVariant(): Variant {
  if (cached) return cached;
  let v: Variant | null = null;
  try {
    v = parseVariant(new URLSearchParams(window.location.search).get("v"));
  } catch {}
  try {
    if (v) window.sessionStorage.setItem(KEY, v);
    else v = parseVariant(window.sessionStorage.getItem(KEY));
  } catch {}
  cached = v ?? DEFAULT_VARIANT;
  return cached;
}

const subscribe = () => () => {};
const readServer = (): Variant | null => null;

const VariantCtx = createContext<Ctx>({ variant: DEFAULT_VARIANT, ready: false });

export function VariantProvider({ children }: { children: React.ReactNode }) {
  const read = useSyncExternalStore<Variant | null>(subscribe, readVariant, readServer);
  const value: Ctx = { variant: read ?? DEFAULT_VARIANT, ready: read !== null };
  return <VariantCtx.Provider value={value}>{children}</VariantCtx.Provider>;
}

export const useVariant = () => useContext(VariantCtx);

// Shows the part for the visitor's variant. Missing keys fall back to b.
export function ByVariant({ a, b, c }: { a?: React.ReactNode; b: React.ReactNode; c?: React.ReactNode }) {
  const { variant, ready } = useVariant();
  const pick = variant === "a" ? a ?? b : variant === "c" ? c ?? b : b;
  return <span style={{ visibility: ready ? "visible" : "hidden" }}>{pick}</span>;
}
