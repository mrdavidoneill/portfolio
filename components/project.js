import Card from "./card";

export default function Project({ project }) {
  return (
    <Card
      title={project.title}
      images={project.images}
      links={project.links}
      proposal={project.proposal}
      solution={project.solution}
    >
      {project.tech.join(", ")}
    </Card>
  );
}
