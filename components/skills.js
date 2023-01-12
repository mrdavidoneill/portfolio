import Card from "./card";

export default function Skills({ title, skills }) {
  return <Card title={title}>{skills.join(" • ")}</Card>;
}
