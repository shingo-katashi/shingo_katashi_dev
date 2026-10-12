import type { ProjectItem } from "@/content/site";

export function ProjectSourceLink({
  project,
  className = "shrink-0 font-mono text-xs text-slate-500 transition hover:text-teal-400",
}: {
  project: ProjectItem;
  className?: string;
}) {
  if (project.sourcePrivate) {
    return (
      <span
        className="shrink-0 font-mono text-xs text-slate-600"
        title="Source code is not publicly available"
      >
        Private project
      </span>
    );
  }

  if (project.github) {
    return (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        Source ↗
      </a>
    );
  }

  return null;
}
