import Avatar from "../components/avatar";
import Curves from "../components/curves";
import Page from "../components/page";
import Social from "../components/social";
import { softSkills, techSkills } from "../content/skills";
import Skills from "../components/skills";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Page title="David O'Neill">
      <main className="z-20 flex flex-shrink flex-wrap items-end justify-center overflow-hidden">
        <div className="relative flex flex-col pt-10 w-full items-center bg-gray-100">
          <div className="z-0 absolute top-1/2 left-1/2 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
          <div className="z-0 absolute top-1/4 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-slower"></div>
          <div className="z-0 absolute top-1/4 left-1/4 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-slowest"></div>
          <Avatar />
          <h1 className="text-5xl md:text-6xl text-center font-playfair text-gray-600">
            David <span className="text-black">O'Neill</span>
          </h1>
          <h2 className="w-fit rounded-md font-mono text-lg text-lime-800">
            Software developer
          </h2>
          <Curves />
        </div>
        <div className="z-10 bg-white flex flex-wrap items-start justify-center w-full">
          <div className="flex w-full justify-center align-center">
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col px-3 flex-grow w-full max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight text-gray-500 font-playfair pb-2">
                  About me
                </h3>
                <p className="pb-4">
                  I have always had a passion for problem-solving and so it was
                  inevitable I would find my home in coding. From the very first
                  program I built, I was hooked, and to this day, few things
                  beat the thrill of coding a working solution to a tricky
                  problem!
                </p>

                <p className="pb-4">
                  I believe that clear communication and attention to detail are
                  key to the success of any project, and I strive to maintain
                  open lines of communication throughout the development
                  process.
                </p>
                <p>
                  I am excited to continue growing as a developer and taking on
                  new challenges in the industry. Thank you for visiting my
                  portfolio website. Please feel free to take a look at my past
                  projects and get in touch if you have any questions or
                  opportunities.
                </p>
              </div>
              <div className="flex pt-4 md:flex-col md:p-0 flex-shrink justify-start align-center ">
                <h3 className="p-1 mr-5 md:mr-0 text-2xl font-bold tracking-tight text-gray-500 font-playfair text-center">
                  Contact
                </h3>
                <Social
                  href="https://github.com/mrdavidoneill"
                  title="GitHub"
                />
                <Social
                  href="https://www.linkedin.com/in/david-oneill-88666a260"
                  title="LinkedIn"
                />
                <Social href="mailto: info@mrdavidoneill.com" title="Email" />
              </div>
            </div>
          </div>

          <Skills title="Tech Skills" skills={techSkills} />
          <Skills title="Soft Skills" skills={softSkills} />
        </div>
      </main>
    </Page>
  );
};

export default Home;
