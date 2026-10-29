// ─── Team work ───────────────────────────────────────────────────────────────
// The portfolio on /work: brands our team members have worked with, and what the work did
// (Rohan, Oct 29 2026). Shown as the brand and the work: no person names, no "before TAL" tags.
// One markdown file per piece in content/work/, edited in Obsidian like the lab notes.
// The filename is the URL slug. Who made what, and where each number came from, lives in
// 01-tal/tal/brand/Team portfolio - work and case studies (draft).md
//
// Frontmatter is plain "key: value" lines between --- fences:
//   title, brand, lane, summary   (required)
//   sector, year, cover (/work/...), link (card goes here instead of its own page),
//   results ("10M+ | monthly reach; 3x | sales growth"), confirmed (yes | no),
//   featured (1, 2, 3... puts the first result in the impact strip on /work), order (lower first)
// A body under the frontmatter gets its own page at /work/<slug>.

import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export const WORK_LANES = ["Socials & content", "Websites & automation", "Strategy & growth", "Operations & supply chain"] as const;
export type WorkLane = (typeof WORK_LANES)[number];

export interface WorkResult {
  value: string;
  label: string;
}

export interface WorkPiece {
  slug: string;
  title: string;
  brand: string;
  lane: WorkLane;
  summary: string;
  sector?: string;
  year?: string;
  cover?: string;
  link?: string;
  results: WorkResult[];
  featured?: number;
  order: number;
  html: string;
}

const DIR = path.join(process.cwd(), "content", "work");

function parseResults(raw: string): WorkResult[] {
  return raw
    .split(";")
    .map((r) => r.trim())
    .filter(Boolean)
    .map((r) => {
      const [value, ...label] = r.split("|");
      return { value: value.trim(), label: label.join("|").trim() };
    });
}

function parse(slug: string, raw: string): WorkPiece {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`Work piece "${slug}" is missing its --- frontmatter block`);

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }

  for (const key of ["title", "brand", "lane", "summary"]) {
    if (!meta[key]) throw new Error(`Work piece "${slug}" is missing "${key}"`);
  }
  if (!WORK_LANES.includes(meta.lane as WorkLane)) {
    throw new Error(`Work piece "${slug}" has lane "${meta.lane}"; use one of: ${WORK_LANES.join(", ")}`);
  }

  // A number goes live only once the person who did the work confirms it.
  // Local dev still shows it, so the layout can be checked before then.
  // Keep numbers out of the body text for the same reason: they belong in "results".
  const showResults = meta.confirmed === "yes" || process.env.NODE_ENV === "development";

  return {
    slug,
    title: meta.title,
    brand: meta.brand,
    lane: meta.lane as WorkLane,
    summary: meta.summary,
    sector: meta.sector || undefined,
    year: meta.year || undefined,
    cover: meta.cover || undefined,
    link: meta.link || undefined,
    results: showResults && meta.results ? parseResults(meta.results) : [],
    featured: Number(meta.featured) || undefined,
    order: Number(meta.order) || 99,
    html: match[2].trim() ? marked.parse(match[2], { async: false }) : "",
  };
}

export function getAllWork(): WorkPiece[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parse(f.replace(/\.md$/, ""), fs.readFileSync(path.join(DIR, f), "utf8")))
    .sort((a, b) => a.order - b.order || a.brand.localeCompare(b.brand));
}

export function getWork(slug: string): WorkPiece | undefined {
  return getAllWork().find((w) => w.slug === slug);
}

/** The headline numbers for the impact strip: each featured piece's first result, in featured order. */
export function getImpact(limit = 4): (WorkResult & { brand: string; href?: string })[] {
  return getAllWork()
    .filter((w) => w.featured && w.results.length > 0)
    .sort((a, b) => a.featured! - b.featured!)
    .slice(0, limit)
    .map((w) => ({ ...w.results[0], brand: w.brand, href: workHref(w) }));
}

// Across the whole team and our advisors, not just the pieces on /work (Rohan, Oct 29 2026)
export const TEAM_BRANDS = "100+";

/** The impact strip on Home, Work and About: the brands count, then the featured results. */
export function getHeadlineStats(limit = 4) {
  return [
    { value: TEAM_BRANDS, label: "brands our team has worked with", brand: "Across our team and advisors", href: "/work#team-work" },
    ...getImpact(limit - 1),
  ];
}

/** Where a card points: its own page if it has a body, else its link, else nowhere. */
export function workHref(w: WorkPiece): string | undefined {
  return w.html ? `/work/${w.slug}` : w.link;
}

/** "Gaming · India · Since 2022", skipping whichever parts are missing. */
export function workMeta(w: WorkPiece): string {
  return [w.sector, w.year].filter(Boolean).join(" · ");
}
