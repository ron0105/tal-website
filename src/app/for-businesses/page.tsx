import type { Metadata } from "next";
import FBHero from "@/components/for-businesses/FBHero";
import FBPainPoints from "@/components/for-businesses/FBPainPoints";
import FBTrustBar from "@/components/for-businesses/FBTrustBar";
import FBWhoThisIsFor from "@/components/for-businesses/FBWhoThisIsFor";
import FBServices from "@/components/for-businesses/FBServices";
import FBProcess from "@/components/for-businesses/FBProcess";
import FBCTA from "@/components/for-businesses/FBCTA";

export const metadata: Metadata = {
  title: "For Businesses",
  description:
    "We help growing businesses bring in more customers, grow revenue, and build the operations that make it all sustainable.",
};

export default function ForBusinesses() {
  return (
    <>
      <FBHero />
      <FBPainPoints />
      <FBTrustBar />
      <FBWhoThisIsFor />
      <FBServices />
      <FBProcess />
      <FBCTA />
    </>
  );
}
