"use client";

import { navItems, site } from "@/content/site";
import { useCallback, useEffect, useRef, useState } from "react";

const LG_MEDIA = "(min-width: 1024px)";

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

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
}

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const mq = window.matchMedia(LG_MEDIA);
    const onMqChange = () => {
      if (mq.matches) closeMenu();
    };

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMqChange);
    if (mq.matches) closeMenu();

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMqChange);
    };
  }, [open, closeMenu]);

  useEffect(() => {
    if (!open) {
      menuButtonRef.current?.focus({ preventScroll: true });
    }
  }, [open]);

  const handlePanelKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;

    const focusable = getFocusableElements(panelRef.current);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-lg lg:hidden"
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a
            href="#about"
            className="truncate font-semibold text-slate-100"
            onClick={closeMenu}
          >
            {site.name}
          </a>
          <button
            ref={menuButtonRef}
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
            onClick={closeMenu}
          />
          <nav
            ref={panelRef}
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-full w-[min(85vw,20rem)] max-w-xs flex-col border-l border-slate-800 bg-slate-950 px-6 py-6 shadow-2xl"
            onKeyDown={handlePanelKeyDown}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-xs text-slate-500">Navigate</p>
              <button
                ref={closeButtonRef}
                type="button"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 ring-1 ring-slate-700 transition hover:bg-slate-800 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                onClick={closeMenu}
              >
                Close
              </button>
            </div>
            <ul className="mt-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-slate-800/80 hover:text-teal-300"
                    onClick={closeMenu}
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
                onClick={closeMenu}
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
