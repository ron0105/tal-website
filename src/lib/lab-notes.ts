// ─── Lab notes ───────────────────────────────────────────────────────────────
// Case studies, live builds and how-we-work posts (Rohan, Oct 19 2026).
// Each post is a markdown file in content/lab-notes/, so it can be read and edited
// in Obsidian like the rest of RON-HQ. The filename is the URL slug.
//
// Frontmatter is plain "key: value" lines between --- fences:
//   title, description, tag (Case study | Live | How we work), date (YYYY-MM-DD),
//   updated (optional, YYYY-MM-DD), question (the one question the first paragraph answers)

import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export const LAB_NOTE_TAGS = ["Case study", "Live", "How we work"] as const;
export type LabNoteTag = (typeof LAB_NOTE_TAGS)[number];

export interface LabNote {
  slug: string;
  title: string;
  description: string;
  tag: LabNoteTag;
  date: string;
  updated?: string;
  question?: string;
  html: string;
}

const DIR = path.join(process.cwd(), "content", "lab-notes");

function parse(slug: string, raw: string): LabNote {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Lab note "${slug}" is missing its --- frontmatter block`);

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }

  // Fail the build on a typo, rather than publishing a post with a missing title or tag
  for (const key of ["title", "description", "tag", "date"]) {
    if (!meta[key]) throw new Error(`Lab note "${slug}" is missing "${key}"`);
  }
  if (!LAB_NOTE_TAGS.includes(meta.tag as LabNoteTag)) {
    throw new Error(`Lab note "${slug}" has tag "${meta.tag}"; use one of: ${LAB_NOTE_TAGS.join(", ")}`);
  }

  return {
    slug,
    title: meta.title,
    description: meta.description,
    tag: meta.tag as LabNoteTag,
    date: meta.date,
    updated: meta.updated || undefined,
    question: meta.question || undefined,
    html: marked.parse(match[2], { async: false }),
  };
}

export function getAllLabNotes(): LabNote[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parse(f.replace(/\.md$/, ""), fs.readFileSync(path.join(DIR, f), "utf8")))
    .sort((a, b) => (b.updated ?? b.date).localeCompare(a.updated ?? a.date));
}

export function getLabNote(slug: string): LabNote | undefined {
  return getAllLabNotes().find((n) => n.slug === slug);
}

export function formatNoteDate(iso: string): string {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}
