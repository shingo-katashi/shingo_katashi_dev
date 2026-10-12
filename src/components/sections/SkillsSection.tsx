import { skillGroups } from "@/content/site";

export function SkillsSection() {
  return (
    <section aria-label="Skills" className="py-14 sm:py-20">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/25 p-6 backdrop-blur-sm sm:p-8">
        <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-teal-400/90">
          Technologies
        </h3>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h4 className="text-sm font-semibold text-slate-200">
                {group.label}
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-slate-800/50 px-2.5 py-1 text-xs text-slate-400 ring-1 ring-slate-700/50"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
