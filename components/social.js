import { Button } from "flowbite-react";
import Link from "next/link";

export default function Social({ href, title }) {
  return (
    <Link className="flex justify-center p-1" href={href} target="_blank">
      <Button outline={true} gradientDuoTone="purpleToBlue">
        {title}
      </Button>
    </Link>
  );
}
