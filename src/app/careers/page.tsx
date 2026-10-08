import CareersHero from "@/components/careers/CareersHero";
import HowWeHire from "@/components/careers/HowWeHire";
import JobListings from "@/components/careers/JobListings";
import CareersFAQ from "@/components/careers/CareersFAQ";
import CareersCTA from "@/components/careers/CareersCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | TAL Consulting",
  description:
    "The TAL Founder's Office Cohort: hands-on training on real consulting work, followed by a paid full-time internship for strong performers. Growth, Content, Research and Build tracks.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <JobListings />
      <HowWeHire />
      <CareersFAQ />
      <CareersCTA />
    </main>
  );
}
