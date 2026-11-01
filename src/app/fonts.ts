import { Fraunces, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";

// Self-hosted by next/font, so no request goes to Google and nothing shifts while fonts load.
// latin-ext is what carries the ₹ sign; the browser only fetches it on pages that use one.
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jakarta",
});

// Eyebrows, stat labels and tags only, so it never blocks the first paint
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-plex-mono",
});
