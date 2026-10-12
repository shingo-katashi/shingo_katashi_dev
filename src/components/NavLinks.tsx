"use client";

import { navItems } from "@/content/site";
import { useEffect, useState } from "react";

export function NavLinks({ className }: { className?: string }) {
  const [active, setActive] = useState<string>(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={className} aria-label="Primary">
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-center gap-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-teal-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span
                  className={`h-px transition-all ${
                    isActive
                      ? "w-8 bg-teal-400"
                      : "w-4 bg-slate-600 group-hover:w-6 group-hover:bg-slate-400"
                  }`}
                  aria-hidden="true"
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
