import type { Metadata } from "next";
import WWUHero from "@/components/work-with-us/WWUHero";
import WWUCallCTA from "@/components/work-with-us/WWUCallCTA";
import WWUForm from "@/components/work-with-us/WWUForm";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Choose your engagement model and tell us about your problem. Every submission is read personally and responded to within 48 hours.",
};

export default function WorkWithUs() {
  return (
    <>
      <WWUHero />
      <WWUCallCTA />
      <WWUForm />
    </>
  );
}
