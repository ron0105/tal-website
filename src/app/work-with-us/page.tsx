import type { Metadata } from "next";
import WWUHero from "@/components/work-with-us/WWUHero";
import WWUModels from "@/components/work-with-us/WWUModels";
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
      <WWUModels />
      <WWUForm />
    </>
  );
}
