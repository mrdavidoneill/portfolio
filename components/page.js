import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar";

export default function Page({ title, children }) {
  return (
    <div className="flex flex-col min-h-screen flex-1 bg-slate-200 bg-desk bg-cover bg-fixed lg:p-10">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden portrait:hidden lg:block fixed z-0 bottom-0 right-0 w-1/6 animate-hand">
        <Image
          src="/images/hand.png"
          width={1104}
          height={1328}
          alt="background hand"
        />
      </div>
      <div className="hidden portrait:hidden lg:block fixed z-20 bottom-0 right-0 w-1/6 animate-thumb">
        <Image
          src="/images/thumb.png"
          width={1104}
          height={1328}
          alt="background thumb"
        />
      </div>
      <div className="lg:rounded-[1vw] shadow-2xl flex z-10 bg-white flex-1 flex-col justify-start lg:animate-flip overflow-hidden">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
