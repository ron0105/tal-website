import type { Metadata } from "next";
import { PLANS_PAGE } from "@/content/plans";

export const metadata: Metadata = {
  title: PLANS_PAGE.meta.title,
  description: PLANS_PAGE.meta.description,
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
