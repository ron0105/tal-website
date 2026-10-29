// ─── Brand logos ─────────────────────────────────────────────────────────────
// Brands our team and advisors have worked with (Rohan, Oct 29 2026). Each file in public/logos/
// was taken from the brand's own site, Wikimedia or our team's portfolios (Eh Maaya from the end
// card of our own ad), then cleaned into one dark shape on a transparent background, so a sharp
// vector logo and a small JPEG look alike. Width and height are the file's own pixels.
// No public logo exists for GMN Impex, Rudra Himalayan Retreat, Phool Pudi or SP Green Markethub,
// so their cards set the name as a wordmark instead.

export interface BrandLogo {
  brand: string;
  file: string;
  w: number;
  h: number;
}

// Order: best-known names first (the logo wall shows them in this order)
export const LOGOS: BrandLogo[] = [
  { brand: "Accenture", file: "accenture", w: 614, h: 168 },
  { brand: "Virgin Media", file: "virgin-media", w: 283, h: 168 },
  { brand: "ONGC", file: "ongc", w: 158, h: 168 },
  { brand: "DHL Express India", file: "dhl", w: 728, h: 110 },
  { brand: "Taiwan Excellence", file: "taiwan-excellence", w: 541, h: 168 },
  { brand: "Atomberg", file: "atomberg", w: 714, h: 168 },
  { brand: "Pilgrim", file: "pilgrim", w: 665, h: 168 },
  { brand: "Media.net", file: "media-net", w: 728, h: 153 },
  { brand: "Cosmic Byte", file: "cosmic-byte", w: 728, h: 164 },
  { brand: "Pluro AI", file: "pluro-ai", w: 493, h: 168 },
  { brand: "Bayroute", file: "bayroute", w: 728, h: 124 },
  { brand: "Chempolis", file: "chempolis", w: 711, h: 168 },
  { brand: "Youneek Pro Science", file: "youneek-pro-science", w: 209, h: 168 },
  { brand: "Eh Maaya", file: "eh-maaya", w: 728, h: 164 },
  { brand: "PIPO Foods", file: "pipo-foods", w: 347, h: 168 },
  { brand: "Roop Mobiles", file: "roop-mobiles", w: 392, h: 168 },
  { brand: "Alkalen", file: "alkalen", w: 728, h: 160 },
  { brand: "Trace Resource", file: "trace-resource", w: 184, h: 168 },
];

/** The logos for a work piece's brand field, which can list several ("Pilgrim, Eh Maaya"). */
export function logosFor(brand: string): BrandLogo[] {
  return brand
    .split(",")
    .map((b) => LOGOS.find((l) => l.brand === b.trim()))
    .filter((l): l is BrandLogo => Boolean(l));
}

/** Same visual weight for every logo: a wide wordmark gets less height than a square mark. */
export function logoHeight(l: BrandLogo, base: number) {
  return Math.round(Math.min(base * 0.8, Math.max(base * 0.4, base / Math.sqrt(l.w / l.h))));
}
