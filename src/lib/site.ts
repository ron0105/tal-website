// ─── Site identity ───────────────────────────────────────────────────────────
// One place for the URL and the words search engines and AI tools repeat about TAL.
// Impact first (Rohan, Oct 29 2026): the "lab" line is retired from the site. The enquiry line
// locked Sep 29 says what we do for you, everywhere (home, footer, titles, descriptions, schema).
// Plan: RON-HQ/01-tal/tal/brand/SEO and AEO plan (live).md, section 2a.

export const SITE_URL = "https://www.theaddalabs.com";

// Brand first so "The Adda Labs" searches still find us, then the three things people search for (SEO plan, Round 2)
export const HOME_TITLE = "The Adda Labs · Websites, WhatsApp follow-ups & social media";

export const HOME_DESCRIPTION =
  "Websites people find, WhatsApp auto-replies and follow-ups, and social media that brings customers. For businesses in Mumbai, Navi Mumbai and across India.";

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
    "TAL, short for The Adda Labs, is a team in Mumbai and Navi Mumbai. We help businesses that grow on enquiries turn more of them into customers, using a website people can find, regular posts, and AI follow-ups that reply for you.",
  email: "rohan@theaddalabs.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Navi Mumbai" },
    { "@type": "Country", name: "India" },
    "Worldwide",
  ],
  founder: ROHAN,
  sameAs: ["https://www.linkedin.com/company/112236854/"],
  knowsAbout: [
    "Website design for small businesses",
    "WhatsApp Business automation",
    "Lead follow-up",
    "Social media management",
    "Google Business Profile and local SEO",
    "AI chatbots for WhatsApp and websites",
    "Positioning and offer design",
  ],
};
