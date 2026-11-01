import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllSlugs } from "@/lib/jobs";
import { getAllLabNotes } from "@/lib/lab-notes";
import { getAllWork } from "@/lib/work";
import { SECTORS_DATA } from "@/content/sectors";

// Live pages only. Folders that next.config redirects (for-businesses, think-and-build,
// tal-vi, venture-lab, work-with-us, how-it-works) stay out, and so do the apply forms.
const PAGES = [
  "", "/sectors", "/pricing", "/services", "/work", "/tools", "/how-we-work", "/lab-notes", "/about", "/call", "/contact",
  "/grow", "/live-projects", "/training", "/events", "/careers", "/privacy", "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((p) => ({ url: `${SITE_URL}${p}` })),
    ...SECTORS_DATA.map((s) => ({ url: `${SITE_URL}/sectors/${s.slug}` })),
    ...getAllSlugs().map((slug) => ({ url: `${SITE_URL}/careers/${slug}` })),
    ...getAllLabNotes().map((n) => ({
      url: `${SITE_URL}/lab-notes/${n.slug}`,
      lastModified: n.updated ?? n.date,
    })),
    ...getAllWork()
      .filter((w) => w.html && !w.hidden)
      .map((w) => ({ url: `${SITE_URL}/work/${w.slug}` })),
  ];
}
