import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllSlugs } from "@/lib/jobs";
import { getAllLabNotes } from "@/lib/lab-notes";

// Live pages only. Folders that next.config redirects (for-businesses, think-and-build,
// tal-vi, venture-lab, work-with-us, how-it-works) stay out, and so do the apply forms.
const PAGES = ["", "/services", "/work", "/how-we-work", "/lab-notes", "/about", "/call", "/contact", "/pricing", "/live-projects", "/careers", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((p) => ({ url: `${SITE_URL}${p}` })),
    ...getAllSlugs().map((slug) => ({ url: `${SITE_URL}/careers/${slug}` })),
    ...getAllLabNotes().map((n) => ({
      url: `${SITE_URL}/lab-notes/${n.slug}`,
      lastModified: n.updated ?? n.date,
    })),
  ];
}
