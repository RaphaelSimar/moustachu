import Discord from "@/assets/socialIcons/discord.svg";
import Facebook from "@/assets/socialIcons/facebook.svg";
import Instagram from "@/assets/socialIcons/instagram.svg";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo/moustachu_logo.svg";

export function Footer() {
  return (
    <footer className="w-full bg-primary-500 px-8 py-8 md:px-5 md:py-5 text-white border-t border-white/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:flex md:justify-center">
          {/* Logo */}
          <div className="absolute left-18 hidden xl:flex">
            <Image
              src={logo}
              alt="Association Moustachu"
              width={300}
              height={300}
              className="w-50"
            />
          </div>

          {/* Nous contacter */}
          <div>
            <h2 className="text-2xl font-bold">Nous contacter</h2>

            <a
              href="mailto:association.moustachu@gmail.com"
              className="mt-3 block pr-5 text-md font-semibold transition-colors hover:text-secondary-500"
            >
              association.moustachu@gmail.com
            </a>

            <div className="mt-3 flex items-center gap-5">
              <Link
                href="#"
                aria-label="Facebook"
                className="transition-transform duration-200 hover:scale-110"
              >
                <Image src={Facebook} alt="Facebook" width={40} height={40} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="transition-transform duration-200 hover:scale-110"
              >
                <Image src={Instagram} alt="Instagram" width={40} height={48} />
              </Link>

              <Link
                href="#"
                aria-label="Discord"
                className="transition-transform duration-200 hover:scale-110"
              >
                <Image src={Discord} alt="Discord" width={48} height={48} />
              </Link>
            </div>
          </div>

          {/* Nous aider */}
          <div className="pt-4 border-t border-white/60 md:pt-0 md:border-t-0 md:border-l md:px-10">
            <h2 className="text-2xl font-bold">Nous aider</h2>

            <nav className="mt-3 flex flex-col gap-1 text-md font-semibold">
              <Link
                href="#"
                className="transition-colors hover:text-secondary-500"
              >
                HelloAsso
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-secondary-500"
              >
                Teaming
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-secondary-500"
              >
                Devenir bénévole
              </Link>
            </nav>
          </div>

          {/* Ressources */}
          <div className="pt-4 border-t border-white/60 md:pt-0 md:border-t-0 md:border-l md:px-10">
            <h2 className="text-2xl font-bold">Ressources</h2>

            <nav className="mt-3 flex flex-col gap-1 text-md font-semibold">
              <Link
                href="#"
                className="transition-colors hover:text-secondary-500"
              >
                CGV
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-secondary-500"
              >
                FAQ
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-secondary-500"
              >
                Mentions légales
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-secondary-500"
              >
                Politique de confidentialité
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/40 pt-6 text-center text-sm font-semibold md:text-base md:border-t-0 md:pt-0">
          © Association Moustachu 2026 - Tous droits réservés. Site réalisé par
          Raphaël SIMAR
        </div>
      </div>
    </footer>
  );
}
