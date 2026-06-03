import CareersHero from "@/components/careers/CareersHero";
import JobListings from "@/components/careers/JobListings";
import CareersCTA from "@/components/careers/CareersCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — TAL Consulting",
  description:
    "We're hiring. TAL is a three-founder startup building something real. If you want ownership from day one, read on.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <JobListings />
      <CareersCTA />
    </main>
  );
}
