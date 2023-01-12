import { Button, Card, Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function InfoCard({
  images,
  proposal,
  solution,
  title,
  children,
  links,
}) {
  return (
    <Card className="mt-6 w-96 rounded-xl border m-2 p-6 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-500 font-playfair">
        {title}
      </h2>
      <div className="">
        {images && (
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 p-5">
            <Carousel slideInterval={5000}>
              {images.map((image) => (
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  key={image}
                  alt="project"
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
      {proposal && <p className="">{proposal}</p>}
      {solution && <p className="">{solution}</p>}
      <p className="font-mono text-lime-700 ">{children}</p>
      <div className="flex flex-wrap justify-around">
        {links &&
          links.map((link) => (
            // py-1 for when small screens wrap
            <Link className="py-1" href={link.href} key={link.label}>
              <Button outline={true} gradientDuoTone="purpleToBlue">
                {link.label}
              </Button>
            </Link>
          ))}
      </div>
    </Card>
  );
}
