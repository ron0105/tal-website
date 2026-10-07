import CareersHero from "@/components/careers/CareersHero";
import HowWeHire from "@/components/careers/HowWeHire";
import JobListings from "@/components/careers/JobListings";
import CareersFAQ from "@/components/careers/CareersFAQ";
import CareersCTA from "@/components/careers/CareersCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | TAL Consulting",
  description:
    "The TAL Founder's Office Cohort: a paid 15-day training sprint on real consulting work, then a full-time internship for the people who perform. Growth, Content, Research and Build tracks.",
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
