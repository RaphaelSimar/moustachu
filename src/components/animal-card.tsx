"use client";

import { Mars, Venus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

type AnimalCardProps = {
  _id: string;
  name: string | null;
  species: string | null;
  sex: string | null;
  age: string | null;
  sterilized: boolean | null;
  coverImage: any;
  slug: {
    current: string;
  } | null;
};

export function AnimalCard(props: AnimalCardProps) {
  const { name, species, sex, age, sterilized, coverImage, slug } = props;

  const isFemale = sex === "Femelle";
  const isMale = sex === "Mâle";

  const details = [
    species,
    age,
    sterilized ? (isFemale ? "stérilisée" : "stérilisé") : null,
  ]
    .filter(Boolean)
    .join(" • ");

  return (
    <Link
      className="group block w-full max-w-[340px] rounded-3xl bg-white shadow-md ring-1 ring-slate-900/5 transition-shadow transition-transform duration-300 hover:shadow-lg hover:scale-105"
      href={`/animaux/${slug!.current}`}
    >
      <div className="relative">
        <div className="relative aspect-[4/3] w-full rounded-t-3xl overflow-hidden pb-4">
          {coverImage ? (
            <Image
              src={urlFor(coverImage).width(400).height(300).url()}
              fill
              alt={name || ""}
              className="object-cover"
            />
          ) : null}
        </div>

        {name && (
          <div className="absolute -inset-x-5 bottom-0 z-10 translate-y-full">
            {/* Queue de ruban gauche : dépasse maintenant réellement de la card */}
            <div className="absolute -bottom-3 left-0 h-3 w-5 bg-primary-700 [clip-path:polygon(100%_0,0_0,100%_100%)] " />
            {/* Queue de ruban droite (miroir) */}
            <div className="absolute -bottom-3 right-0 h-3 w-5 bg-primary-700 [clip-path:polygon(0_0,100%_0,0_100%)] " />

            <div className="relative bg-primary-500 px-12 py-2.5 shadow-md">
              <h2 className="flex items-center gap-1.5 text-xl font-bold text-white">
                {name}
                {sex && (isFemale || isMale) && (
                  <>
                    <span>•</span>
                    {isFemale ? (
                      <Venus className="size-6" strokeWidth={3} />
                    ) : (
                      <Mars className="size-6" strokeWidth={3} />
                    )}
                  </>
                )}
              </h2>
            </div>
          </div>
        )}
      </div>

      <div className="px-8 pb-4 pt-15">
        {details && (
          <p className="text-lg font-semibold text-slate-500">{details}</p>
        )}
      </div>
    </Link>
  );
}
