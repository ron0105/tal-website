import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ChatGuide from "@/components/shared/ChatGuide";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "The Adda Labs | A venture lab that builds, tests and scales ideas",
    template: "%s | The Adda Labs",
  },
  description:
    "The Adda Labs is a frugal ideation and venture-building lab working across business, technology, sustainability and public causes. We build, test and scale ideas.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatGuide />
        {/* Anonymous, cookieless page-view counts, so the careers funnel shows visits, not just applications */}
        <Analytics />
      </body>
    </html>
  );
}
