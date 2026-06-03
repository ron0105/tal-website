import { JOBS } from "@/lib/jobs";
import JobCard from "./JobCard";

export default function JobListings() {
  return (
    <section className="padding-section" id="open-roles">
      <div className="layout-grid px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="label-eyebrow">Open Roles</span>
          <div className="flex-1 rule" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {JOBS.map((job, i) => (
            <JobCard key={job.slug} job={job} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
