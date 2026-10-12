import { SectionHeading } from "@/components/SectionHeading";
import { ContentPreviewImage } from "@/components/ContentPreviewImage";
import { ProjectSourceLink } from "@/components/ProjectSourceLink";
import { projects, site, type ProjectItem } from "@/content/site";
import { IconExternal } from "@/components/icons";

function ProjectTitle({ project }: { project: ProjectItem }) {
  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-start gap-1.5 transition hover:text-teal-300"
      >
        {project.name}
        <IconExternal className="mt-1 h-4 w-4 shrink-0 opacity-50 group-hover:opacity-100" />
      </a>
    );
  }

  if (project.github && !project.sourcePrivate) {
    return (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-teal-300"
      >
        {project.name}
      </a>
    );
  }

  return <>{project.name}</>;
}

function ProjectCard({
  project,
  headingLevel = "h3",
  priorityImage = false,
}: {
  project: ProjectItem;
  headingLevel?: "h3" | "h4";
  priorityImage?: boolean;
}) {
  const TitleTag = headingLevel;
  const hasImage = Boolean(project.image && project.imageAlt);

  return (
    <article
      className={
        hasImage
          ? "group flex h-full flex-col overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/20 transition hover:border-slate-700/80 hover:bg-slate-900/40"
          : "group rounded-xl border border-slate-800/60 bg-slate-900/20 p-5 transition hover:border-slate-700/80 hover:bg-slate-900/40 sm:p-6"
      }
    >
      {hasImage ? (
        <ContentPreviewImage
          src={project.image!}
          alt={project.imageAlt!}
          variant="card"
          priority={priorityImage}
          className="border-b border-slate-800/60"
        />
      ) : null}
      <div className={hasImage ? "flex flex-1 flex-col p-5 sm:p-6" : ""}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <TitleTag
            className={
              headingLevel === "h3"
                ? "text-base font-semibold text-slate-100 sm:text-lg"
                : "font-medium text-slate-200"
            }
          >
            <ProjectTitle project={project} />
          </TitleTag>
          <ProjectSourceLink project={project} />
        </div>
        <p
          className={
            headingLevel === "h3"
              ? "mt-3 text-sm leading-relaxed text-slate-400 sm:text-[0.9375rem]"
              : "mt-2 text-sm leading-relaxed text-slate-400"
          }
        >
          {project.description}
        </p>
        <p
          className={
            headingLevel === "h3"
              ? "mt-4 font-mono text-[0.6875rem] leading-relaxed text-slate-500 sm:mt-auto sm:pt-4 sm:text-xs"
              : "mt-2 font-mono text-xs text-slate-500"
          }
        >
          {project.builtWith.join(" · ")}
        </p>
      </div>
    </article>
  );
}

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
      <ul className="grid gap-5 sm:grid-cols-2">
        {featured.map((project, index) => (
          <li key={project.name} className="min-w-0">
            <ProjectCard
              project={project}
              priorityImage={index < 2}
            />
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
              <li
                key={project.name}
                className="border-t border-slate-800/80 pt-6 first:border-0 first:pt-0"
              >
                <ProjectCard project={project} headingLevel="h4" />
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
