// DRAFT FOR LEGAL REVIEW (Amol Joshi) before this goes live. Written Oct 6, 2026.

import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using the TAL Consulting LLP website.",
};

export default function Terms() {
  return (
    <LegalPage eyebrow="Terms" title="Terms of use" updated="6 October 2026">
      <LegalSection heading="About this website">
        <p>
          This website is run by TAL Consulting LLP (The Adda Labs), LLPIN ACZ-3000, Mumbai, India. It describes
          our consulting, technology and marketing services and the roles we&apos;re hiring for. By using it, you
          agree to these terms.
        </p>
      </LegalSection>

      <LegalSection heading="Information on this site">
        <p>
          We work to keep everything here accurate, but it&apos;s general information, not advice for your
          specific business. Any examples or results describe past or illustrative work and aren&apos;t a
          guarantee of what any engagement will achieve. The scope, price and terms of any service are set
          only in a written agreement signed by both sides.
        </p>
      </LegalSection>

      <LegalSection heading="Applying for a role">
        <p>
          Applying through our <Link href="/careers">careers page</Link> doesn&apos;t create a job offer,
          engagement or contract. Any engagement, including a paid trial, starts only once a written agreement
          is signed. Pay shown on role pages is indicative and is confirmed in that agreement. Please only send
          work you created or have the right to share. How we handle your application is set out in our{" "}
          <Link href="/privacy">privacy notice</Link>.
        </p>
      </LegalSection>

      <LegalSection heading="Our content">
        <p>
          The text, design, logos and other material on this site belong to TAL Consulting LLP unless stated
          otherwise. You&apos;re welcome to share links to it, but please don&apos;t copy or reuse it without
          our written permission.
        </p>
      </LegalSection>

      <LegalSection heading="Links to other sites">
        <p>
          Links to other websites and services, such as WhatsApp, are for convenience. We aren&apos;t
          responsible for their content or how they handle your information.
        </p>
      </LegalSection>

      <LegalSection heading="Liability">
        <p>
          To the extent the law allows, TAL Consulting LLP isn&apos;t liable for any loss arising from use of
          this website or reliance on its content. Nothing in these terms limits any liability that can&apos;t be
          limited under Indian law.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>These terms are governed by the laws of India, and the courts at Mumbai have jurisdiction.</p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms: <a href="mailto:rohan@theaddalabs.com">rohan@theaddalabs.com</a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
