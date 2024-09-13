import { Card, CardContent } from "./ui/card";

export default function AboutMe() {
  return (
    <>
      <div id="about" className="flex justify-between">
        <div className="w-1/3">
          <h1 className="text-7xl text-neutral-400 mb-3">About Me</h1>
          <hr className="w-1/6 h-1 border-none bg-orange-600" />
        </div>
        <div className="w-2/3 text-lg text-neutral-300">
          <p className="leading-9 mb-12">
            A passionate full-stack developer with a strong background in modern
            web technologies. I excel in using Next.js for building robust,
            scalable applications and Three.js to create interactive 3D visuals
            on the web. I also have experience developing efficient test
            automation frameworks, which helps me ensure high-quality software
            development. I am constantly driven to learn and experiment with
            cutting-edge technologies. I enjoy solving complex problems,
            collaborating on innovative projects, and pushing the boundaries of
            what’s possible in the digital space.
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
    </>
  );
}
