import HomeOfferingsGrid from "@/components/home/HomeOfferingsGrid";
import Navbar from "@/components/shared/Navbar";

export default function Pricing() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Engagement Models</h1>
        <p className="text-muted text-lg max-w-2xl">Structured engagement with clear output and predefined timelines.</p>
      </div>
      <HomeOfferingsGrid />
    </main>
  );
}
