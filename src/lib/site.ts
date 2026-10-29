// ─── Site identity ───────────────────────────────────────────────────────────
// One place for the URL and the words search engines and AI tools repeat about TAL.
// Impact first (Rohan, Oct 29 2026): the "lab" line is retired from the site. The enquiry line
// locked Sep 29 says what we do for you, everywhere (home, footer, titles, descriptions, schema).
// Plan: RON-HQ/01-tal/tal/brand/SEO and AEO plan (live).md, section 2a.

export const SITE_URL = "https://www.theaddalabs.com";

export const HOME_TITLE = "The Adda Labs (TAL) · Turn more enquiries into customers";

export const HOME_DESCRIPTION =
  "We help businesses that grow on enquiries win more customers: a website people find, regular posts, AI follow-ups. A Mumbai team with big-brand experience.";

const ROHAN = {
  "@type": "Person",
  "@id": `${SITE_URL}/about#rohan`,
  name: "Rohan Tiwarekar",
  jobTitle: "Founder",
  url: `${SITE_URL}/about`,
  sameAs: [
    "https://buildwithron.com",
    "https://www.linkedin.com/in/ronnnn",
    "https://www.instagram.com/build.with.ron",
    "https://x.com/build_withron",
  ],
};

// Tells Google and AI answer tools that "The Adda Labs" is a real firm in Mumbai,
// so it isn't mixed up with the other "Adda" brands that show up for the name
export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "The Adda Labs",
  alternateName: "TAL",
  legalName: "TAL Consulting LLP",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "TAL, short for The Adda Labs, is a team in Mumbai. We help businesses that grow on enquiries turn more of them into customers, using a website people can find, regular posts, and AI follow-ups that reply for you.",
  email: "rohan@theaddalabs.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: ["India", "Worldwide"],
  founder: ROHAN,
  sameAs: ["https://www.linkedin.com/company/112236854/"],
  knowsAbout: [
    "Design thinking",
    "Websites that bring enquiries",
    "Enquiry follow-up automation",
    "Positioning and offer design",
    "Business idea validation",
  ],
};
