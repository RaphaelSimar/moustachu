import { AnimalCard } from "@/components/animal-card";
import { sanityFetch } from "@/sanity/lib/live";
import { ANIMALS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function Page() {
  const { data: animals } = await sanityFetch({ query: ANIMALS_QUERY });

  return (
    <main className="container mx-auto grid gap-12 p-12">
      <h1 className="text-4xl font-bold">Nos animaux</h1>

      <section className="grid gap-10">
        {animals.map((animal) => (
          <AnimalCard key={animal._id} {...animal} />
        ))}
      </section>

      <hr />
      <Link href="/">&larr; Retour à l’accueil</Link>
    </main>
  );
}
