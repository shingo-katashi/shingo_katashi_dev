import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/content/site";
import { IconExternal } from "@/components/icons";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-[4.5rem] py-14 sm:py-20 lg:scroll-mt-12"
    >
      <SectionHeading id="experience-heading" index="02.">
        Experience
      </SectionHeading>
      <ol className="space-y-14 sm:space-y-16">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="group relative grid gap-3 border-l border-slate-800 pl-5 sm:grid-cols-[7.5rem_1fr] sm:gap-8 sm:border-l-0 sm:pl-0"
          >
            <div className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[calc(50%+0.5px)] rounded-full bg-teal-500/80 sm:hidden" />
            <div className="font-mono text-xs leading-snug text-slate-500 sm:pt-0.5 sm:text-sm">
              {job.period}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-snug text-slate-100 sm:text-lg">
                <span className="block sm:inline">{job.title}</span>
                <span className="hidden text-slate-500 sm:inline"> · </span>
                <span className="mt-1 block sm:mt-0 sm:inline">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-teal-300 transition hover:text-teal-200"
                    >
                      {job.company}
                      <IconExternal className="h-3.5 w-3.5 shrink-0 opacity-80" />
                    </a>
                  ) : (
                    <span className="text-teal-300/90">{job.company}</span>
                  )}
                </span>
              </h3>
              {job.location ? (
                <p className="mt-1 text-sm text-slate-500">{job.location}</p>
              ) : null}
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-400 sm:text-[0.9375rem]">
                {job.bullets.map((b) => (
                  <li
                    key={b.slice(0, 50)}
                    className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-slate-600"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {job.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-teal-950/50 px-2.5 py-0.5 font-mono text-[0.6875rem] text-teal-300/85 ring-1 ring-teal-500/20"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-12 text-sm leading-relaxed text-slate-500">
        Earlier roles include full-stack and frontend work at ShipEZ, Kohab, and
        SHYFT Power Solutions.
      </p>
    </section>
  );
}
