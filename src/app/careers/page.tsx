import CareersHero from "@/components/careers/CareersHero";
import JobListings from "@/components/careers/JobListings";
import CareersCTA from "@/components/careers/CareersCTA";
import { Metadata } from "next";
import { ArrowLink } from "@/components/site/Primitives";
import { CAREERS_GROW_LINK } from "@/content/grow";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Learn by building real things at The Adda Labs in Navi Mumbai. Hands-on training with the founder and a path to a paid internship.",
};

// Lab positioning (Oct 2026): short hero, the listings, one closing note.
// HowWeHire and CareersFAQ stay on disk but are no longer imported.
export default function CareersPage() {
  return (
    <div>
      <CareersHero />
      {/* Rebuild spec section 3: Careers links to the Grow With TAL hub */}
      <div className="wrap -mt-6 mb-6">
        <ArrowLink href="/grow">{CAREERS_GROW_LINK}</ArrowLink>
      </div>
      <JobListings />
      <CareersCTA />
    </div>
  );
}
