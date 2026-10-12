import { DesktopAside } from "@/components/DesktopAside";
import { MobileHeader } from "@/components/MobileHeader";
import { MobileHero } from "@/components/MobileHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <MobileHeader />
      <MobileHero />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 xl:max-w-7xl xl:px-12">
        <div className="lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <DesktopAside />
          <main className="min-w-0 flex-1 pb-16 pt-8 lg:max-w-2xl lg:pt-10 lg:pb-16 xl:max-w-[42rem] xl:pt-12">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
            <footer className="mt-20 border-t border-slate-800/80 pt-8 text-sm leading-relaxed text-slate-600">
              <p>
                Designed and built by Shingo Katashi. Built with Next.js,
                TypeScript, and Tailwind CSS.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
