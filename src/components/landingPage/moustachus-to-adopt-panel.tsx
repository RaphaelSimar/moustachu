import { sanityFetch } from "@/sanity/lib/live";
import { ANIMALS_TO_ADOPT_QUERY } from "@/sanity/lib/queries";
import { IconArrowRight, IconHomeSearch } from "@tabler/icons-react";
import Link from "next/link";
import { AnimalCard } from "../animal-card";
import { Title } from "../title";

export async function MoustachusToAdoptPanel() {
  const { data: animals } = await sanityFetch({
    query: ANIMALS_TO_ADOPT_QUERY,
  });
  
  return (
    <section className="flex p-28 pt-12 gap-12 bg-primary-50 w-full">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-6">
          <IconHomeSearch className="text-primary-500" size={54} />
          <Title color="text-primary-500">Nos Moustachus à l'adoption</Title>
        </div>
        <section className="flex p-8 pt-8 flex-wrap justify-between">
          {animals.map((animal) => (
            <AnimalCard key={animal._id} {...animal} />
          ))}
        </section>
        <section className="flex items-center justify-center gap-3 pt-10 text-lg text-slate-600">
          <Link
            href="/animaux"
            className="inline-flex w-fit gap-3 shadow-md text-xl text-center items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-primary-500 transition-all duration-200 hover:bg-slate-50 hover:gap-5"
          >
            <IconArrowRight size={20} />
            Tous les rencontrer
          </Link>
        </section>
      </div>
    </section>
  );
}
