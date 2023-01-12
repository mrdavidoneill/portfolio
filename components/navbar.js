import { useRouter } from "next/router";
import { Navbar } from "flowbite-react";

const Link = ({ children, href, router, ...props }) => {
  const active = router?.pathname === href;
  return (
    <Navbar.Link
      {...props}
      href={href}
      active={active}
      className={`mx-2 text-lg !bg-transparent hover:!text-blue-700 font-bold hover:scale-105 ${
        active ? "!text-purple-700 font-bold" : "!text-gray-700"
      }`}
    >
      {children}
    </Navbar.Link>
  );
};

export default function MyNavBar() {
  const router = useRouter();

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="z-10 bg-white pl-[5vw] lg:px-[2vw] border-b-2 border-solid border-slate-200 animate-fadein !font-playfair"
    >
      <Navbar.Brand>
        <div className="text-lg font-playfair text-gray-600">
          David <span className="text-black">O'Neill</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link href="/" router={router}>
          Home
        </Link>
        <Link href="/work" router={router}>
          Work
        </Link>
        <Link
          className="text-lg"
          href="https://github.com/mrdavidoneill"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          className="text-lg"
          href="/DavidONeillCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
