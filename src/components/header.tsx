import { IconTipJarEuro } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Decoration1 from "../assets/header-decorations/decoration1.svg";
import Decoration2 from "../assets/header-decorations/decoration2.svg";
import Decoration3 from "../assets/header-decorations/decoration3.svg";
import Decoration4 from "../assets/header-decorations/decoration4.svg";
import Decoration5 from "../assets/header-decorations/decoration5.svg";
import logo from "../assets/logo/moustachu_logo.svg";

export function Header() {
  return (
    <div className="bg-white">
      <header className="bg-primary-500 flex items-center justify-between items-end h-[100px] p-10 pb-4 pl-33 md:pl-50 overflow-y sticky z-50">
        <div className="flex items-center justify-between gap-4 w-full items-end">
          <Link href="/" className="absolute z-50 left-5 translate-y-1/2">
            <Image
              src={logo}
              alt="Moustachu"
              priority
              className="relative w-20 md:w-32 transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
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
            className="group relative z-50 flex items-center gap-2 text-secondary-500 md:text-xl font-bold tracking-tight"
          >
            <IconTipJarEuro className="h-8 w-8 transition-all duration-300 drop-shadow-lg group-hover:rotate-10 group-hover:scale-120 md:h-[45px] md:w-[45px]" />
          </Link>

          <Image
            src={Decoration1}
            alt="Decoration"
            width={80}
            priority
            className="absolute left-18 md:bottom-8 md:left-28 z-1 opacity-30"
          />
          <Image
            src={Decoration2}
            alt="Decoration"
            width={35}
            priority
            className="absolute bottom-0 left-100 opacity-30"
          />
          <Image
            src={Decoration3}
            alt="Decoration"
            width={65}
            priority
            className="absolute bottom-8 left-150 opacity-30"
          />
          <Image
            src={Decoration4}
            alt="Decoration"
            width={30}
            priority
            className="hidden md:block absolute -top-1 right-120 opacity-30"
          />
          <Image
            src={Decoration5}
            alt="Decoration"
            width={170}
            priority
            className="hidden md:block absolute top-1 right-0 opacity-30"
          />
        </div>
      </header>
    </div>
  );
}
