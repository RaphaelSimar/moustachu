"use client";

import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { ANIMAL_QUERY_RESULT } from "@/sanity/types";

type AnimalProps = Omit<NonNullable<ANIMAL_QUERY_RESULT>, "species" | "sex"> & {
  species: string | null;
  sex: string | null;
};

export function Animal(props: AnimalProps) {
  const {
    name,
    species,
    breed,
    sex,
    age,
    coverImage,
    gallery,
    videos,
    animalMessage,
    story,
    personality,
    health,
    heavyCareNeeded,
    sociability,
    vaccinated,
    sterilized,
    currentFood,
    currentHabitat,
    associationTime,
    adoptionFees,
    quantity,
  } = props;

  return (
    <article className="grid gap-12">
      {/* En-tête */}
      <header className="grid gap-6 md:grid-cols-2">
        {coverImage && (
          <Image
            src={urlFor(coverImage).width(800).height(800).url()}
            width={800}
            height={800}
            alt={name || ""}
            className="rounded-lg object-cover"
          />
        )}

        <div>
          <h1 className="text-5xl font-bold text-slate-800">{name}</h1>

          <p className="mt-4 text-xl text-slate-600">{species}</p>

          {breed && <p>Race : {breed}</p>}

          <p>
            {sex} {age && `• ${age}`}
          </p>

          {quantity && quantity > 1 && <p>Groupe de {quantity} animaux</p>}

          <div className="mt-6 flex flex-wrap gap-2">
            {sterilized && (
              <span className="rounded-full bg-green-100 px-3 py-1">
                Stérilisé
              </span>
            )}

            {vaccinated && (
              <span className="rounded-full bg-blue-100 px-3 py-1">
                Vacciné
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Message de l'animal */}
      {animalMessage && (
        <section>
          <h2 className="text-3xl font-semibold">Mon histoire</h2>
          <p className="mt-3 whitespace-pre-line">{animalMessage}</p>
        </section>
      )}

      {/* Informations */}
      <section className="grid gap-8 md:grid-cols-2">
        {story && (
          <div>
            <h2 className="text-2xl font-semibold">Histoire</h2>
            <p>{story}</p>
          </div>
        )}

        {personality && (
          <div>
            <h2 className="text-2xl font-semibold">Caractère</h2>
            <p>{personality}</p>
          </div>
        )}
      </section>

      {/* Santé */}
      <section>
        <h2 className="text-2xl font-semibold">Santé</h2>

        {health && <p>{health}</p>}

        <ul className="mt-3">
          <li>Soins lourds nécessaires : {heavyCareNeeded ? "Oui" : "Non"}</li>

          <li>Sociabilité : {sociability}/5</li>
        </ul>
      </section>

      {/* Vie actuelle */}
      <section>
        <h2 className="text-2xl font-semibold">Vie actuelle</h2>

        <p>Habitat : {currentHabitat}</p>

        <p>Alimentation : {currentFood}</p>

        <p>Présent dans l'association depuis : {associationTime}</p>
      </section>

      {/* Adoption */}
      <section>
        <h2 className="text-2xl font-semibold">Adoption</h2>

        <p>Frais d'adoption : {adoptionFees} €</p>
      </section>

      {/* Galerie */}
      {gallery && gallery.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold">Photos</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map((image, index) => (
              <Image
                key={index}
                src={urlFor(image).width(500).height(500).url()}
                width={500}
                height={500}
                alt={`Photo ${index + 1} de ${name}`}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
