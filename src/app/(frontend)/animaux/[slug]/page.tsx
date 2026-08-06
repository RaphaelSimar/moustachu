import { notFound } from "next/navigation";

import { Animal } from "@/components/animal";
import { BackButton } from "@/components/back-button";
import { sanityFetch } from "@/sanity/lib/live";
import { ANIMAL_QUERY } from "@/sanity/lib/queries";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: animal } = await sanityFetch({
    query: ANIMAL_QUERY,
    params: await params,
  });

  if (!animal) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <BackButton label="Retour aux animaux" />
      <Animal {...animal} />
    </main>
  );
}
