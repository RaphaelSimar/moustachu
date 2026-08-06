"use client";

import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import type { ANIMALS_QUERY_RESULT } from "@/sanity/types";

type AnimalCardProps = Omit<ANIMALS_QUERY_RESULT[0], "species" | "sex"> & {
  species: string | null;
  sex: string | null;
};

export function AnimalCard(props: AnimalCardProps) {
  const { name, species, sex, age, sterilized, coverImage, slug } = props;

  return (
    <Link className="group" href={`/animaux/${slug!.current}`}>
      <article className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12 md:gap-0">
        <div className="md:col-span-5 md:pt-1">
          <h2 className="text-2xl text-pretty font-semibold text-slate-800 group-hover:text-green-600 transition-colors relative">
            <span className="relative z-[1]">{name}</span>

            <span className="bg-green-50 z-0 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75" />
          </h2>

          <div className="flex flex-col mt-2 md:mt-6 gap-2 text-slate-600">
            <p>{species}</p>

            <p>
              {sex && `${sex}`}
              {age && ` • ${age}`}
            </p>

            {sterilized && (
              <p className="text-sm">
                ✓ {sex === "Femelle" ? "Stérilisée" : "Stérilisé"}
              </p>
            )}
          </div>
        </div>

        <div className="md:col-start-9 md:col-span-4 rounded-lg overflow-hidden flex">
          {coverImage ? (
            <Image
              src={urlFor(coverImage).width(400).height(300).url()}
              width={400}
              height={300}
              alt={name || ""}
              className="object-cover"
            />
          ) : null}
        </div>
      </article>
    </Link>
  );
}
