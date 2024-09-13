import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconTestPipe,
  IconAutomation,
  IconDevicesCode,
} from "@tabler/icons-react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Container from "@/components/ui/container";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ContactMe } from "@/components/contact-me";
import AboutMe from "@/components/about-me";
import Skills from "@/components/skills";
import { ProjectCarousel } from "@/components/projects";
import { ExperienceTimeLine } from "@/components/experience";
import Hero from "@/components/hero";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#hero",
  },

  {
    title: "About Me",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#about",
  },
  {
    title: "Skills",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Projects",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },

  {
    title: "Experience",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#experience",
  },
  {
    title: "Contact Me",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
];

export default function Home() {
  return (
    <>
      {/* navbar */}
      <div className="fixed z-50 bottom-0 left-1/2 -translate-x-1/2 mb-10 bg-transparent ">
        <FloatingDock items={links} />
      </div>
      {/* hero section */}
      <Hero />

      <TracingBeam className="px-6 max-w-screen-2xl">
        {/* about me section */}
        <AboutMe />

        {/* skills and expertise section */}
        <Skills />

        {/* projects section */}
        <ProjectCarousel />

        {/* experience section */}
        <ExperienceTimeLine />

        {/* contact section */}
        <ContactMe />
      </TracingBeam>
    </>
  );
}
