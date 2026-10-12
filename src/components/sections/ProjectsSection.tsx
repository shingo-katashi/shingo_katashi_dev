import { SectionHeading } from "@/components/SectionHeading";
import { projects, site } from "@/content/site";
import { IconExternal } from "@/components/icons";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.highlight);
  const other = projects.filter((p) => !p.highlight);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-[4.5rem] py-14 sm:py-20 lg:scroll-mt-12"
    >
      <SectionHeading id="projects-heading" index="03.">
        Projects
      </SectionHeading>
      <ul className="space-y-4">
        {featured.map((project) => (
          <li
            key={project.name}
            className="group rounded-xl border border-slate-800/60 bg-slate-900/20 p-5 transition hover:border-slate-700/80 hover:bg-slate-900/40 sm:p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 transition hover:text-teal-300"
                  >
                    {project.name}
                    <IconExternal className="mt-1 h-4 w-4 shrink-0 opacity-50 group-hover:opacity-100" />
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-xs text-slate-500 transition hover:text-teal-400"
                >
                  Source ↗
                </a>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-[0.9375rem]">
              {project.description}
            </p>
            <p className="mt-4 font-mono text-[0.6875rem] leading-relaxed text-slate-500 sm:text-xs">
              {project.builtWith.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
      {other.length > 0 ? (
        <div className="mt-14 rounded-xl border border-dashed border-slate-800 p-6 sm:p-8">
          <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-slate-500">
            More projects & experiments
          </h3>
          <ul className="mt-6 space-y-6">
            {other.map((project) => (
              <li key={project.name} className="border-t border-slate-800/80 pt-6 first:border-0 first:pt-0">
                <h4 className="font-medium text-slate-200">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-300"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <p className="mt-2 font-mono text-xs text-slate-500">
                  {project.builtWith.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="mt-10 text-sm leading-relaxed text-slate-500">
        More experiments and templates on{" "}
        <a
          href={site.github}
          className="text-teal-400 underline-offset-2 hover:text-teal-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        —including agent platforms, FastAPI templates, and automation tooling.
      </p>
    </section>
  );
}
