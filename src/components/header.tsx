import { IconTipJarEuro } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo/moustachu_logo.svg";

export function Header() {
  return (
    <div className="bg-white">
      <header className="bg-primary-500 flex items-center justify-between items-end h-[100px] p-10 pb-4 pl-33 md:pl-50 overflow-y">
        <div className="flex items-center justify-between gap-4 w-full items-end">
          <Link href="/" className="absolute left-5 translate-y-1/2">
            <Image
              src={logo}
              alt="Moustachu"
              priority
              className="w-20 md:w-32 transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
            />
          </Link>

          <ul className="flex items-center gap-4 font-semibold">
            <li>
              <Link
                className="text-white hover:text-secondary-500 transition-colors"
                href="/animaux"
              >
                Animaux
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-secondary-500 transition-colors"
                href="/posts"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-secondary-500 transition-colors"
                href="/studio"
              >
                Studio
              </Link>
            </li>
          </ul>

          <Link
            href="/"
            className="group flex items-center gap-2 text-secondary-500 md:text-xl font-bold tracking-tight"
          >
            <IconTipJarEuro className="h-8 w-8 transition-all duration-300 drop-shadow-lg group-hover:rotate-10 group-hover:scale-120 md:h-[45px] md:w-[45px]" />
          </Link>
        </div>
      </header>
    </div>
  );
}
