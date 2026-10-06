import { GROUPS, RoleGroup, jobsByGroup } from "@/lib/jobs";
import JobCard from "./JobCard";

const ORDER: RoleGroup[] = ["grow", "build"];

export default function JobListings() {
  return (
    <section className="padding-section scroll-mt-20" id="open-roles">
      <div className="layout-grid px-6 md:px-10 flex flex-col gap-20">
        {ORDER.map((group) => {
          const jobs = jobsByGroup(group);
          return (
            <div key={group}>
              <div className="flex items-center gap-4 mb-4">
                <span className="label-eyebrow">{GROUPS[group].label}</span>
                <div className="flex-1 rule" />
                <span className="label-eyebrow">{jobs.length} roles</span>
              </div>
              <p className="text-base mb-10" style={{ color: "var(--text-muted)", maxWidth: "520px" }}>
                {GROUPS[group].line}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {jobs.map((job, i) => (
                  <JobCard key={job.slug} job={job} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
