// ─── About (/about) ──────────────────────────────────────────────────────────
// Rebuild master prompt section 5.8. The two bios and photos are the ones already on the site
// (src/components/about/AboutTeam.tsx). The core team is these two (TAL context file, section 2).

export const ABOUT = {
  meta: {
    title: "About The Adda Labs (TAL) · Mumbai",
    description: "Most small businesses fail because nobody follows up, nobody tracks the numbers and nobody has a plan. We started The Adda Labs in Mumbai to fix that.",
  },
  h1: "We help Indian businesses grow. And we're building the people who will grow them next.",
  why: {
    eyebrow: "Why we started",
    title: "Most small businesses don't fail because of a bad product.",
    body: "They fail because nobody follows up, nobody tracks the numbers, and nobody has a plan. We started The Adda Labs to fix that.",
  },
  believe: {
    eyebrow: "What we believe",
    title: "Three things we hold to.",
    principles: [
      { title: "Results over reports", body: "We measure enquiries and customers, not posts and likes." },
      { title: "Test before you spend", body: "Check that customers want it before the money goes in." },
      { title: "Grow people, not just businesses", body: "India needs more jobs, so we train young talent and host events." },
    ],
    link: "Grow with TAL",
  },
  team: {
    eyebrow: "The team",
    title: "A Mumbai team with experience across brands like Atomberg, DHL, ONGC and Media.net.",
    people: [
      {
        name: "Rohan",
        role: "Strategy and Operations",
        photo: "/founders/rohan.png",
        bio: "Engineer by training. Two years in analytics, then a Masters in Strategy and Consulting. Has worked with startups and businesses across operations, revenue growth, and product development.",
      },
      {
        name: "Soniya",
        role: "Design and Visual Communication",
        photo: "/founders/soniya.png",
        bio: "Multidisciplinary visual artist, designer, and video editor with over three years of experience. Translates strategy into visual identity and communication that actually lands.",
      },
    ],
  },
};
