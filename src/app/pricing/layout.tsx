import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here
export const metadata: Metadata = {
  title: "Pricing",
  description:
    "How TAL prices work: a one-time project, ongoing month-to-month support, or idea validation. Every engagement is scoped after a conversation, with no fixed packages.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
