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
import { Meteors } from "@/components/ui/meteors";

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

const hereSectionWords = [
  "QA engineer",
  "test automation engineer",
  "backend test engineer",
  "full stack web dev",
];

export default function Home() {
  return (
    <>
      {/* navbar */}
      <div className="fixed z-50 bottom-0 left-1/2 -translate-x-1/2 mb-10 bg-transparent ">
        <FloatingDock items={links} />
      </div>
      {/* hero section */}
      <Container>
        <div className="my-12">
          <HeroHighlight>
            <h1 className="text-8xl text-neutral-400 mb-2">Hi, I am Jamil</h1>
            <div className="ml-2 text-4xl text-neutral-300 mb-6">
              I am a
              <span>
                <FlipWords words={hereSectionWords} />
              </span>
            </div>
            <div className="flex gap-3">
              <Button>Explore my projects</Button>
              <Button>Let's work together</Button>
            </div>
          </HeroHighlight>
        </div>
      </Container>

      {/* about me section */}
      <TracingBeam className="px-6 max-w-screen-2xl">
        <div id="about" className="flex justify-between">
          <div className="w-1/3">
            <h1 className="text-7xl text-neutral-400 mb-3">About Me</h1>
            <hr className="w-1/6 h-1 border-none bg-orange-600" />
          </div>
          <div className="w-2/3 text-lg text-neutral-300">
            <p className="leading-9 mb-12">
              A passionate full-stack developer with a strong background in
              modern web technologies. I excel in using Next.js for building
              robust, scalable applications and Three.js to create interactive
              3D visuals on the web. I also have experience developing efficient
              test automation frameworks, which helps me ensure high-quality
              software development. I am constantly driven to learn and
              experiment with cutting-edge technologies. I enjoy solving complex
              problems, collaborating on innovative projects, and pushing the
              boundaries of what’s possible in the digital space.
            </p>
            <h3 className="font-bold mb-3">Key Achievements</h3>
            <div className="flex gap-4 flex-wrap">
              <Card className="flex-1 flex items-center">
                <CardContent className="text-sm py-6 ">
                  <p>
                    Increased testing efficiency by automating test scenarios by
                    30 percent
                  </p>
                </CardContent>
              </Card>
              <Card className="flex-1 flex items-center">
                <CardContent className="text-sm p-6">
                  <p>
                    Implemented CI/CD pipeline to increase the usability of
                    automation test suites by 15 percent
                  </p>
                </CardContent>
              </Card>
              <Card className="flex-1 flex items-center">
                <CardContent className="text-sm p-6">
                  <p>
                    Added automated task plan creator to reduce time expenditure
                    on task creation on issue tracker by 20 percent
                  </p>
                </CardContent>
              </Card>
              <Card className="flex-1 flex items-center">
                <CardContent className="text-sm p-6">
                  <p>
                    Reduced post deployment defects by 50 percent by introducing
                    effective automated testing solutions
                  </p>
                </CardContent>
              </Card>
              <Card className="flex-1 flex items-center">
                <CardContent className="text-sm p-6">
                  <p>
                    Implemented robust test automation framework that is highly
                    scalable, maintainable and usable
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* skills and expertise section */}
        <div id="skills" className="mt-40">
          <div className="">
            <div className=" w-full relative max-w-screen-2xl -z-10">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-700  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="text-4xl text-center p-40 mb-10 w-full">
                  Check out the things I am good at...
                </h1>
                <Meteors number={25} />
              </div>
            </div>
          </div>
          <div className="flex -mt-36 p-10">
            <Card className="flex-1 rounded-tr-none rounded-br-none py-5">
              <CardHeader className="mb-6">
                <div className="flex justify-center items-center mb-10">
                  <IconTestPipe size={40} />
                </div>
                <CardTitle className="text-center mb-4 text-3xl">
                  Software Testing
                </CardTitle>
                <CardDescription className="text-center">
                  I am a perfectionist who is obsessed with pushing out pristine
                  solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-orange-600">Things I am good at</h3>
                <p>
                  Functional Testing, Non Functional Testing, API Testing,
                  Backend Testing
                </p>
              </CardContent>
            </Card>
            <Card className="flex-1 rounded-none border-l-0 py-5">
              <CardHeader className="mb-6">
                <div className="flex justify-center items-center mb-10">
                  <IconAutomation size={40} />
                </div>
                <CardTitle className="text-center mb-4 text-3xl">
                  Test Automation
                </CardTitle>
                <CardDescription className="text-center">
                  I value efficiency and I am always looking for ways to make my
                  work more efficient
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-orange-600">Tools I am familiar with</h3>
                <p>Selenium, Cypress, Playwright, Nightwatch JS</p>
              </CardContent>
            </Card>
            <Card className="flex-1 rounded-tl-none rounded-bl-none border-l-0 py-5">
              <CardHeader className="mb-6">
                <div className="flex justify-center items-center mb-10">
                  <IconDevicesCode size={40} />
                </div>
                <CardTitle className="text-center mb-4 text-3xl">
                  Full Stack Web Development
                </CardTitle>
                <CardDescription className="text-center">
                  I am passionate about creating beautiful, interactive and user
                  friendly web applications
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-orange-600">Technologies I like to use</h3>
                <p>React, Nextjs, Node, Express</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* demo meteors */}

        {/* projects section */}
        <div id="projects">
          <h1>Projects</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            modi voluptate magni nihil, cumque illum eos voluptatem earum at
            corrupti laborum distinctio nemo. Quasi eligendi dicta assumenda
            ipsam voluptates molestiae doloribus, id consequatur exercitationem!
            Dolorum tenetur, magni, error repellendus non repellat quas pariatur
            aut facilis unde illo nihil recusandae aliquid ea. Reiciendis
            provident qui repudiandae saepe neque dolor placeat veniam
            laboriosam libero! Voluptates dolores exercitationem adipisci alias,
            corporis eius laboriosam modi molestiae cum perspiciatis quas
            consectetur, provident nam iusto perferendis reprehenderit
            consequatur suscipit odio et. Sed ipsa consectetur eius, laudantium,
            est nihil vitae molestias alias nisi recusandae odit earum,
            reprehenderit consequuntur. Ex eius quasi perspiciatis sint
            accusamus quos itaque consequuntur vero aut fugit. Id porro
            aspernatur unde itaque pariatur nisi nesciunt, laborum corporis
            quasi odio cupiditate repellendus quas reprehenderit quos! Porro
            cupiditate aut, quas quidem iusto, neque minima, modi odit suscipit
            nulla quasi omnis quos est. Quas sequi quidem voluptate!
          </p>
        </div>

        {/* experience section */}
        <div id="experience">
          <h1>Experience</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            modi voluptate magni nihil, cumque illum eos voluptatem earum at
            corrupti laborum distinctio nemo. Quasi eligendi dicta assumenda
            ipsam voluptates molestiae doloribus, id consequatur exercitationem!
            Dolorum tenetur, magni, error repellendus non repellat quas pariatur
            aut facilis unde illo nihil recusandae aliquid ea. Reiciendis
            provident qui repudiandae saepe neque dolor placeat veniam
            laboriosam libero! Voluptates dolores exercitationem adipisci alias,
            corporis eius laboriosam modi molestiae cum perspiciatis quas
            consectetur, provident nam iusto perferendis reprehenderit
            consequatur suscipit odio et. Sed ipsa consectetur eius, laudantium,
            est nihil vitae molestias alias nisi recusandae odit earum,
            reprehenderit consequuntur. Ex eius quasi perspiciatis sint
            accusamus quos itaque consequuntur vero aut fugit. Id porro
            aspernatur unde itaque pariatur nisi nesciunt, laborum corporis
            quasi odio cupiditate repellendus quas reprehenderit quos! Porro
            cupiditate aut, quas quidem iusto, neque minima, modi odit suscipit
            nulla quasi omnis quos est. Quas sequi quidem voluptate!
          </p>
        </div>

        {/* contact section */}
        <div id="contact">
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            modi voluptate magni nihil, cumque illum eos voluptatem earum at
            corrupti laborum distinctio nemo. Quasi eligendi dicta assumenda
            ipsam voluptates molestiae doloribus, id consequatur exercitationem!
            Dolorum tenetur, magni, error repellendus non repellat quas pariatur
            aut facilis unde illo nihil recusandae aliquid ea. Reiciendis
            provident qui repudiandae saepe neque dolor placeat veniam
            laboriosam libero! Voluptates dolores exercitationem adipisci alias,
            corporis eius laboriosam modi molestiae cum perspiciatis quas
            consectetur, provident nam iusto perferendis reprehenderit
            consequatur suscipit odio et. Sed ipsa consectetur eius, laudantium,
            est nihil vitae molestias alias nisi recusandae odit earum,
            reprehenderit consequuntur. Ex eius quasi perspiciatis sint
            accusamus quos itaque consequuntur vero aut fugit. Id porro
            aspernatur unde itaque pariatur nisi nesciunt, laborum corporis
            quasi odio cupiditate repellendus quas reprehenderit quos! Porro
            cupiditate aut, quas quidem iusto, neque minima, modi odit suscipit
            nulla quasi omnis quos est. Quas sequi quidem voluptate!
          </p>
        </div>
      </TracingBeam>
    </>
  );
}
