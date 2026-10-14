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
    <LegalPage eyebrow="Privacy" title="Privacy notice" updated="7 October 2026">
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
          and reliability, and counts page visits anonymously (Vercel Web Analytics), without cookies and
          without identifying you. We don&apos;t use advertising or tracking cookies.
        </p>
        <p>
          <strong>If you message us</strong> on WhatsApp or by email using the links on this site, we receive
          what you send, through those services.
        </p>
        <p>
          <strong>If you apply for a role</strong> through our{" "}
          <Link href="/careers">careers page</Link>, we collect what you enter in the form: your name, email,
          phone number, city, the links you share, your written answers, the time you can give, and how you
          found us. Once you finish the first step and tick the consent box, we save your name, email, phone
          number, city and profile link, even if you don&apos;t complete the rest, so we can follow up about
          your application.
        </p>
        <p>
          <strong>If you use our call page</strong> (<Link href="/call">theaddalabs.com/call</Link>), we receive
          your name, WhatsApp number, business name or website, and your answers to the short questions (your
          type of business, team size, what you&apos;d like help with, when you&apos;d like to start, your
          planned budget, and who decides). If you book a time, we also receive your email and the time you
          pick, and send you a Google Calendar invite with a Google Meet link. If you send your answers on WhatsApp, we receive them
          through WhatsApp.
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
        <p>
          We use call page answers and bookings only to prepare for and hold the call you asked for, to remind
          you about it, and to reply to you on WhatsApp. Your answers give us a simple priority score, which
          helps us decide how quickly to offer a call. Everyone who writes in hears back from us.
        </p>
      </LegalSection>

      <LegalSection heading="Your consent">
        <p>
          We store your details only after you tick the consent box on the first step of the form. You can withdraw that
          consent at any time by emailing us, and we&apos;ll delete your application. Withdrawing consent
          doesn&apos;t affect anything we did with it before you asked.
        </p>
      </LegalSection>

      <LegalSection heading="Where it&apos;s kept, and for how long">
        <p>
          Applications are stored in TAL&apos;s Google Workspace account, and emails about your application
          are sent from that same account. This website is hosted on Vercel. These providers process the
          information on our behalf and may store it on servers outside India.
        </p>
        <p>
          We keep applications for <strong>6 months</strong> from the date you apply, then delete them,
          unless you join our bench, in which case we keep what we need to work with you.
        </p>
        <p>
          Call page answers and bookings are kept in TAL&apos;s Google Workspace account and calendar, for{" "}
          <strong>12 months</strong> after you write in, then deleted, unless we start working together.
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
          Email <a href="mailto:rohan@theaddalabs.com">rohan@theaddalabs.com</a> and we&apos;ll respond
          within 7 days.
        </p>
      </LegalSection>

      <LegalSection heading="Grievance officer">
        <p>
          Rohan Tiwarekar, TAL Consulting LLP, Mumbai.{" "}
          <a href="mailto:rohan@theaddalabs.com">rohan@theaddalabs.com</a>
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
