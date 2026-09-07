import { Link } from "lucide-react";
import Image from "next/image";

import dessinsSolidaires from "@/assets/partners/dessins-solidaires.jpg";
import onlyVet from "@/assets/partners/only-vet.png";
import osteopathe from "@/assets/partners/osteopathe.jpg";
import urgencesNacs from "@/assets/partners/urgences-nacs.jpg";
import { Title } from "../title";

export function PartnersPanel() {
  return (
    <section className="w-full bg-primary-500 px-28 py-20">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-6">
          <Link className="text-white size-12" strokeWidth={3} />
          <Title color="text-white">Nos partenaires</Title>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
          {/* OnlyVet */}
          <div className="relative flex h-40 items-center rounded-3xl bg-white pr-10 shadow-2xl">
            <div className="absolute -left-10 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-white p-8 shadow-2xl">
              <Image
                src={onlyVet}
                alt="OnlyVet"
                width={180}
                height={180}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="pl-40">
              <h3 className="text-3xl font-bold text-primary-500">OnlyVet</h3>

              <p className="mt-2 text-xl leading-tight text-primary-700 font-medium">
                Le Docteur Graham Zoller et son équipe suivent nos Nacs toute
                l'année
              </p>
            </div>
          </div>

          {/* Ostéopathe */}
          <div className="relative flex h-40 items-center rounded-3xl bg-white pl-40 pr-10 shadow-2xl">
            <div className="absolute -left-10 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl p-2">
              <Image
                src={osteopathe}
                alt="Ostéopathe animalier"
                width={180}
                height={180}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary-500">
                Ostéopathe
              </h3>

              <p className="mt-2 text-xl leading-tight text-primary-700 font-medium">
                Sophie Chapperon, une ostéopathe de talent qui soulage nos
                Moustachus
              </p>
            </div>
          </div>

          {/* Collectif Urgence NACs */}
          <div className="relative flex h-40 items-center rounded-3xl bg-white pr-10 shadow-2xl">
            <div className="absolute -left-10 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl p-3">
              <Image
                src={urgencesNacs}
                alt="Collectif Urgence NACs"
                width={180}
                height={180}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="pl-40">
              <h3 className="text-3xl font-bold text-primary-500">
                Collectif Urgence NACs
              </h3>

              <p className="mt-2 text-xl leading-tight text-primary-700 font-medium">
                L'association Moustachu appartient au collectif urgence NACs
              </p>
            </div>
          </div>

          {/* Les dessins solidaires */}
          <div className="relative flex h-40 items-center rounded-3xl bg-white pr-10 shadow-2xl">
            <div className="absolute -left-10 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl">
              <Image
                src={dessinsSolidaires}
                alt="Les dessins solidaires"
                width={180}
                height={180}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="pl-40">
              <h3 className="text-3xl font-bold text-primary-500">
                Les dessins solidaires
              </h3>

              <p className="mt-2 text-xl leading-tight text-primary-700 font-medium">
                Une bénévole active qui dessine vos poilus contre un don libre à
                l'association
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
