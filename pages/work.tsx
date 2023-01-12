import type { NextPage } from "next";
import Page from "../components/page";
import Project from "../components/project";
import { projects } from "../content/projects";

const Work: NextPage = () => {
  return (
    <Page title="David O'Neill">
      <main className="z-20 flex w-full flex-wrap flex-1 items-center justify-center text-center">
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </main>
    </Page>
  );
};

export default Work;
