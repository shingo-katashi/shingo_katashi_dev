import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutParagraphs, education, site } from "@/content/site";

/** Native resolution of public/images/profile.jpg — keep in sync if you replace the file. */
const PROFILE_WIDTH = 819;
const PROFILE_HEIGHT = 1024;

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-[4.5rem] lg:scroll-mt-12"
    >
      <SectionHeading id="about-heading" index="01.">
        About
      </SectionHeading>
      <div className="flow-root text-[0.9375rem] leading-relaxed text-slate-400 sm:text-base">
        <figure
          className="mx-auto mb-8 w-full max-w-[min(100%,22rem)] sm:max-w-sm lg:float-left lg:mb-5 lg:mr-8 lg:max-w-[min(42%,16rem)] lg:w-[16rem] xl:max-w-[min(40%,18rem)] xl:w-[18rem]"
        >
          <div
            className="relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/40 shadow-2xl shadow-black/30 ring-1 ring-white/5"
            style={{ aspectRatio: `${PROFILE_WIDTH} / ${PROFILE_HEIGHT}` }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Shingo Katashi at his workspace"
              width={PROFILE_WIDTH}
              height={PROFILE_HEIGHT}
              unoptimized
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
        </figure>

        <div className="space-y-4">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <p className="text-slate-300">
            I hold a{" "}
            <span className="text-slate-100">B.E. in {education.degreeShort}</span>{" "}
            from <span className="text-slate-100">{education.school}</span>.
          </p>
        </div>

        <div className="clear-both flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center rounded-lg bg-teal-500/15 px-5 py-2.5 text-sm font-medium text-teal-200 ring-1 ring-teal-500/35 transition hover:bg-teal-500/25"
          >
            Email me
          </a>
          {site.resumeAvailable ? (
            <a
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-slate-200 ring-1 ring-slate-600 transition hover:bg-slate-800/60"
            >
              View résumé
            </a>
          ) : (
            <span
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-slate-500 ring-1 ring-slate-800"
              title="Résumé coming soon"
            >
              Résumé coming soon
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
