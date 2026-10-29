import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here
export const metadata: Metadata = {
  title: { absolute: "Pricing: websites, WhatsApp automation, social media · TAL" },
  description:
    "Three ways to work with TAL: a clear look at where your enquiries go, a build we hand over, or month-to-month help. A fixed quote after one call, paid in parts.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
