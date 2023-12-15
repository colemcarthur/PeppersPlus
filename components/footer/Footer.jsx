import Link from "next/link";
import Image from "next/image";
import pepperLogo from "@/public/img/pepper_logo.webp";
import nextLogo from "@/public/next.svg";
import vercelLogo from "@/public/vercel.svg";

function Footer({ children }) {
  return (
    <div className="bg-stone-900 font-bold text-stone-300 p-10">
      <div className="flex items-center justify-between max-w-[80rem] m-auto">
        <div className="flex items-center">
          <Image
            src={pepperLogo}
            alt="Pepper Plus Logo"
            className="w-[8rem] h-[8rem]"
            draggable={false}
          />
          <p className="text-l">{children}</p>
        </div>
        <div className="flex items-center flex-col gap-6">
          <Link href="https://nextjs.org/" draggable={false}>
            <Image
              src={nextLogo}
              alt="Pepper Plus Logo"
              className="w-[6rem] h-[1.5rem]"
              draggable={false}
            />
          </Link>
          <Link href="https://vercel.com/" draggable={false}>
            <Image
              src={vercelLogo}
              alt="Pepper Plus Logo"
              className="w-[6rem] h-[1.5rem]"
              draggable={false}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Footer };
