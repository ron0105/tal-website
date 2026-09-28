import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "TAL Consulting | We help organisations grow.",
    template: "%s | TAL Consulting",
  },
  description:
    "We help organisations grow, using consulting, tech, and marketing as the tools, not the product. Growth is the goal, whether you run a business or are testing a new idea.",
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
