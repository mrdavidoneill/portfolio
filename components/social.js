import { Button } from "flowbite-react";

export default function Social({ href, title }) {
  return (
    <a className="flex justify-center p-1" href={href} target="_blank">
      <Button outline={true} gradientDuoTone="purpleToBlue">
        {title}
      </Button>
    </a>
  );
}
