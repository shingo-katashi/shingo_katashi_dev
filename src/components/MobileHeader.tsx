"use client";

import { navItems, site } from "@/content/site";
import { useEffect, useState } from "react";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-200 ${
          open ? "top-2 rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-200 ${
          open ? "top-2 -rotate-45" : "top-4"
        }`}
      />
    </span>
  );
}

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-lg lg:hidden"
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a
            href="#about"
            className="truncate font-semibold text-slate-100"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 ring-1 ring-slate-700/80 transition hover:bg-slate-800/80 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav-panel"
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-slate-800 bg-slate-950 px-6 py-8 shadow-2xl"
            aria-label="Mobile navigation"
          >
            <p className="font-mono text-xs text-slate-500">Navigate</p>
            <ul className="mt-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-slate-800/80 hover:text-teal-300"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3 border-t border-slate-800 pt-6 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="block text-slate-400 hover:text-teal-300"
                onClick={() => setOpen(false)}
              >
                Email
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-teal-300"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
