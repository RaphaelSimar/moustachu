"use client";

import { IconTipJarEuro } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Decoration1 from "../assets/header-decorations/decoration1.svg";
import Decoration2 from "../assets/header-decorations/decoration2.svg";
import Decoration3 from "../assets/header-decorations/decoration3.svg";
import Decoration4 from "../assets/header-decorations/decoration4.svg";
import Decoration5 from "../assets/header-decorations/decoration5.svg";
import logo from "../assets/logo/moustachu_logo.svg";
import { NavigationProgress } from "./navigation-progress";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((prev) => {
        if (!prev && window.scrollY > 80) return true;
        if (prev && window.scrollY < 40) return false;
        return prev;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-primary-500 flex items-center justify-between items-end p-10 pb-4 pl-33 md:pl-50 overflow-y sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "h-[70px]" : "h-[100px]"
      }`}
    >
      <div className="flex items-center justify-between gap-4 w-full items-end">
        <Link
          href="/"
          className={`absolute z-50 left-5 transition-all duration-300 ${
            isScrolled
              ? "translate-y-1/3 scale-50"
              : "translate-y-1/2 scale-100"
          }`}
        >
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
          className={`absolute z-1 opacity-30 transition-all duration-300 ${isScrolled ? "scale-50 left-20 md:bottom-5 md:left-20" : "left-18 md:bottom-8 md:left-28 "}`}
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
          className={`absolute left-150 opacity-30 transition-all duration-300 ${isScrolled ? "scale-75 bottom-4" : " bottom-8 "}`}
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
      <NavigationProgress />
    </header>
  );
}
