import EventsHero from "@/components/events/EventsHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Evenings in Mumbai where business owners, consultants and freelancers meet, curated around what you tell us you need.",
};

// Demand-test version (Nov 2026): one section that sends people to the form.
// Event listings come once the first event is set from the responses.
export default function EventsPage() {
  return (
    <div>
      <EventsHero />
    </div>
  );
}
