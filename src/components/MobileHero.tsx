import { site } from "@/content/site";
import { IconGitHub } from "@/components/icons";

export function MobileHero() {
  return (
    <div className="border-b border-slate-800/80 px-5 pb-10 pt-6 sm:px-8 lg:hidden">
      <p className="font-mono text-xs uppercase tracking-widest text-teal-400/90">
        Portfolio
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        {site.name}
      </h1>
      <p className="mt-2 text-lg font-medium text-slate-300">{site.title}</p>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        {site.tagline}
      </p>
      <p className="mt-4 text-xs font-medium text-teal-300/90">{site.openTo}</p>
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-300"
        aria-label="GitHub profile"
      >
        <IconGitHub className="h-5 w-5" />
        GitHub
      </a>
    </div>
  );
}
