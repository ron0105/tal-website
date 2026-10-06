// DRAFT FOR LEGAL REVIEW (Amol Joshi) before this goes live. Written Oct 6, 2026
// to cover the careers application form under the DPDP Act, 2023.

import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "What TAL Consulting LLP collects through this website, why, and how to reach us about it.",
};

export default function Privacy() {
  return (
    <LegalPage eyebrow="Privacy" title="Privacy notice" updated="6 October 2026">
      <LegalSection heading="Who we are">
        <p>
          This website is run by TAL Consulting LLP (The Adda Labs), LLPIN ACZ-3000, based in Mumbai, India.
          In this notice, &quot;we&quot; means TAL Consulting LLP.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect">
        <p>
          <strong>If you just browse the site,</strong> we don&apos;t ask for or store any personal information.
          Our hosting provider keeps standard technical logs (such as IP address and browser type) for security
          and reliability. We don&apos;t use advertising or tracking cookies.
        </p>
        <p>
          <strong>If you message us</strong> on WhatsApp or by email using the links on this site, we receive
          what you send, through those services.
        </p>
        <p>
          <strong>If you apply for a role</strong> through our{" "}
          <Link href="/careers">careers page</Link>, we collect what you enter in the form: your name, email,
          phone number, city, the links you share, your written answers, the time you can give, and how you
          found us.
        </p>
      </LegalSection>

      <LegalSection heading="Why we use it">
        <p>We use application information only to:</p>
        <ul>
          <li>assess your application for the role you chose, and similar roles at TAL</li>
          <li>contact you about your application, including the confirmation and our decision</li>
          <li>arrange a call or a paid trial if you&apos;re shortlisted</li>
        </ul>
        <p>
          We don&apos;t sell it, use it for marketing, or share it with anyone outside the people at TAL who
          review applications.
        </p>
      </LegalSection>

      <LegalSection heading="Your consent">
        <p>
          We store your application only after you tick the consent box on the form. You can withdraw that
          consent at any time by emailing us, and we&apos;ll delete your application. Withdrawing consent
          doesn&apos;t affect anything we did with it before you asked.
        </p>
      </LegalSection>

      <LegalSection heading="Where it&apos;s kept, and for how long">
        <p>
          Applications are stored in TAL&apos;s Google Workspace account, and confirmation emails are sent
          through Resend, our email provider. This website is hosted on Vercel. These providers process the
          information on our behalf and may store it on servers outside India.
        </p>
        <p>
          We keep applications for <strong>6 months</strong> from the date you apply, then delete them,
          unless you join our bench, in which case we keep what we need to work with you.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>Under the Digital Personal Data Protection Act, 2023, you can ask us to:</p>
        <ul>
          <li>tell you what information we hold about you</li>
          <li>correct or update it</li>
          <li>delete it</li>
        </ul>
        <p>
          Email <a href="mailto:founder@theaddalabs.com">founder@theaddalabs.com</a> and we&apos;ll respond
          within 7 days.
        </p>
      </LegalSection>

      <LegalSection heading="Grievance officer">
        <p>
          Rohan Tiwarekar, TAL Consulting LLP, Mumbai.{" "}
          <a href="mailto:founder@theaddalabs.com">founder@theaddalabs.com</a>
        </p>
        <p>
          If you&apos;re not satisfied with our response, you can also approach the Data Protection Board of
          India.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this notice">
        <p>
          If we change how we handle information, we&apos;ll update this page and the date at the top.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
