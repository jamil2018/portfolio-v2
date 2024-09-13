import {
  IconAutomation,
  IconDevicesCode,
  IconTestPipe,
} from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Meteors } from "./ui/meteors";

export default function Skills() {
  return (
    <>
      <div id="skills" className="mt-40">
        <div className="">
          <div className=" w-full relative max-w-screen-2xl -z-10">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-black border border-gray-900  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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
                Functional Testing, Non Functional Testing, API Testing, Backend
                Testing
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
    </>
  );
}
