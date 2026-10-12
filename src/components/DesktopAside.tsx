import { sidebarHighlights, site } from "@/content/site";
import { IconGitHub } from "@/components/icons";
import { NavLinks } from "@/components/NavLinks";

export function DesktopAside() {
  return (
    <aside
      className="relative hidden w-56 shrink-0 lg:block xl:w-64"
      aria-label="Site introduction"
    >
      <div className="sticky top-0 flex flex-col pt-10 pb-10 xl:pt-12 xl:pb-12">
        <div
          className="pointer-events-none absolute -inset-x-4 inset-y-0 rounded-2xl bg-gradient-to-br from-teal-950/15 via-transparent to-transparent lg:-inset-x-6"
          aria-hidden="true"
        />
        <div className="relative">
          <a
            href="#about"
            className="group block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
          >
            <h1 className="text-3xl font-bold tracking-tight text-slate-50 xl:text-4xl">
              {site.name}
            </h1>
            <p className="mt-2 text-base font-medium text-slate-300 xl:text-lg">
              {site.title}
            </p>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            {site.tagline}
          </p>
          <p className="mt-4 inline-block rounded-full border border-teal-500/25 bg-teal-500/5 px-3 py-1 text-[0.6875rem] font-medium leading-snug text-teal-300/95">
            {site.openTo}
          </p>
        </div>

        <div
          className="relative mt-8 rounded-xl border border-slate-800/90 bg-slate-900/40 p-4 backdrop-blur-sm"
        >
          <p className="font-mono text-[0.625rem] font-medium uppercase tracking-widest text-slate-500">
            {sidebarHighlights.label}
          </p>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-400">
            {sidebarHighlights.items.map((item) => (
              <li
                key={item}
                className="flex gap-2 before:mt-1.5 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-teal-500/70"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-4 text-xs">
            <p className="text-slate-500">
              <span className="text-slate-600">{sidebarHighlights.currentRole.label}</span>
              {" · "}
              <a
                href={sidebarHighlights.currentRole.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400/90 transition hover:text-teal-300"
              >
                {sidebarHighlights.currentRole.company}
              </a>
            </p>
            <p className="text-slate-500">{site.location}</p>
            <a
              href={`mailto:${site.email}`}
              className="block truncate text-slate-400 transition hover:text-teal-300"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col gap-8">
          <NavLinks />
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
            aria-label="GitHub profile"
          >
            <IconGitHub className="h-5 w-5" />
            <span className="font-mono text-xs">GitHub</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
