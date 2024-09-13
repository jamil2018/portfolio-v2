import { ArrowRight, Contact, FolderKanban } from "lucide-react";
import HeroButton from "./hero-button";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { FlipWords } from "./ui/flip-words";
import { HeroHighlight } from "./ui/hero-highlight";

const heroSectionWords = [
  "QA engineer",
  "test automation engineer",
  "backend test engineer",
  "full stack web dev",
];

export default function Hero() {
  return (
    <>
      <Container>
        <div className="my-12">
          <HeroHighlight>
            <h1 className="text-8xl text-neutral-400 mb-2">Hi, I am Jamil</h1>
            <div className="ml-2 text-4xl text-neutral-300 mb-6">
              I am a
              <span>
                <FlipWords words={heroSectionWords} />
              </span>
            </div>
            <div className="flex gap-3">
              <HeroButton
                text="Explore my projects"
                href="#projects"
                icon={<FolderKanban className="w-6 h-6 text-black" />}
              />
              <HeroButton
                text="Let's work together"
                href="#contact"
                icon={<Contact className="w-6 h-6 text-black" />}
              />
            </div>
          </HeroHighlight>
        </div>
      </Container>
    </>
  );
}
