import test from "@/assets/animals/test.png";
import { Newspaper, PawPrint, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Title } from "../title";
export function WelcomePanel() {
  return (
    <section className="flex p-28 pt-16 gap-12 bg-white">
      <div className="flex flex-col gap-6 w-2/5">
        <Title bold={false}>
          Chaque Moustachu mérite une{" "}
          <span className="text-primary-500">seconde chance.</span>
        </Title>

        <p className="text-xl font-regular">
          Nous sauvons, soignons et accompagnons tous les Moustachus abandonnés
          pour leur offir une nouvelle vie et les confier à des familles
          aimantes.
        </p>
        <div className="flex items-center w-full mt-2 justify-left flex-row gap-12">
          <Link
            href="/posts"
            className="inline-flex text-xl text-center h-20 w-50 items-center justify-center rounded-full bg-secondary-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-secondary-600 hover:shadow-lg"
          >
            Adopter un animal
          </Link>

          <Link
            href="/animaux"
            className="inline-flex text-xl text-center h-20 w-50 items-center justify-center rounded-full bg-secondary-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-secondary-600 hover:text-white"
          >
            Faire un don
          </Link>
        </div>

        <div className="flex flex-line w-full justify-between mt-auto gap-8">
          <Link href="/posts" className="">
            <h2 className="hover:text-secondary-500 transition-colors flex items-center gap-2 text-xl md:text-xl lg:text-xl font-semibold text-slate-800 text-pretty max-w-3xl">
              <Newspaper size={18} aria-hidden />
              Posts
            </h2>
          </Link>
          |
          <Link href="/animaux" className="">
            <h2 className="hover:text-secondary-500 transition-colors flex items-center gap-2 text-xl md:text-xl lg:text-xl font-semibold text-slate-800 text-pretty max-w-3xl">
              <PawPrint size={18} aria-hidden />
              Animaux
            </h2>
          </Link>
          |
          <Link href="/animaux" className="">
            <h2 className="hover:text-secondary-500 transition-colors flex items-center gap-2 text-xl md:text-xl lg:text-xl font-semibold text-slate-800 text-pretty max-w-3xl">
              <Plus size={18} aria-hidden />
              Autres
            </h2>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-1/2">
        <Image src={test} alt="Moustachu" width={1200} priority className="" />
      </div>
    </section>
  );
}
