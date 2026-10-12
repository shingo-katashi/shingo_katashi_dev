import { SectionHeading } from "@/components/SectionHeading";
import { contactBlurb, site } from "@/content/site";
import { IconGitHub, IconMail } from "@/components/icons";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-[4.5rem] py-14 sm:py-20 lg:scroll-mt-12"
    >
      <SectionHeading id="contact-heading" index="04.">
        Let&apos;s Connect
      </SectionHeading>
      <p className="text-[0.9375rem] leading-relaxed text-slate-400 sm:text-base">
        {contactBlurb}
      </p>
      <ul className="mt-8 space-y-4">
        <li>
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-3 rounded-lg border border-transparent px-2 py-2 text-slate-200 transition hover:border-slate-800 hover:bg-slate-900/30 hover:text-teal-300"
          >
            <IconMail className="h-5 w-5 shrink-0 text-slate-500 group-hover:text-teal-400" />
            <span className="break-all text-sm sm:text-base">{site.email}</span>
          </a>
        </li>
        <li>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-3 rounded-lg border border-transparent px-2 py-2 transition hover:border-slate-800 hover:bg-slate-900/30"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center font-mono text-xs text-slate-500 group-hover:text-teal-400">
              #
            </span>
            <span className="text-sm text-slate-300 sm:text-base">
              {site.phone}
            </span>
          </a>
        </li>
        <li className="px-2 py-1 text-sm text-slate-500">{site.location}</li>
        <li>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-transparent px-2 py-2 transition hover:border-slate-800 hover:bg-slate-900/30 hover:text-teal-300"
          >
            <IconGitHub className="h-5 w-5 shrink-0 text-slate-500 group-hover:text-teal-400" />
            <span className="text-sm sm:text-base">github.com/shingo-katashi</span>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-sm text-slate-600">
        I usually reply within 1–2 business days.
      </p>
    </section>
  );
}
