import Adoptions from "@/assets/customIcons/Adoptions.svg";
import AnimauxAccueillis from "@/assets/customIcons/AnimauxAccueillis.svg";
import Benevoles from "@/assets/customIcons/Benevoles.svg";
import EnAttenteDeFamilleDAccueil from "@/assets/customIcons/EnAttenteDeFamilleDAccueil.svg";
import FamilleDAccueil from "@/assets/customIcons/FamilleDAccueil.svg";
import Elodie1 from "@/assets/personas/Elodie1.svg";
import Value1 from "@/assets/values/1.svg";
import Value2 from "@/assets/values/2.svg";
import Value3 from "@/assets/values/3.svg";
import Value4 from "@/assets/values/4.svg";
import { IconHeartHandshake } from "@tabler/icons-react";

import { sanityFetch } from "@/sanity/lib/live";
import { ASSOCIATION_NUMBERS_QUERY } from "@/sanity/lib/queries";
import { HandHeart } from "lucide-react";
import Image from "next/image";
import { Title } from "../title";

export type AssociationNumbers = {
  animalsRescued: number;
  fosterFamilies: number;
  volunteers: number;
  animalsWaitingForFoster: number;
  adoptions: number;
};

export async function AssociationOverviewPanel() {
const { data: associationNumbers } = await sanityFetch({
  query: ASSOCIATION_NUMBERS_QUERY,
});

  return (
    <section className="w-full bg-white px-10 py-20 pb-0 md:px-28">
      {/* L'association */}
      <div className="flex flex-col gap-6">
        <Title color="text-primary-500 flex items-center gap-4">
          <IconHeartHandshake size={48} stroke={2} />
          L'association
        </Title>

        <p className="text-2xl text font-regular text-primary-700">
          Une association lyonnaise de protection animale. Nous proposons
          <b> des conseils</b>, un <b>accompagnement bienveillant</b>, une{" "}
          <b>aide aux soins</b> et des <b>adoptions responsables</b>.
        </p>

        <p className="text-2xl -mt-2 text font-regular text-primary-700">
          Notre mission : <b>améliorer le bien-être animal</b> tout en guidant
          les humains qui les entourent. Une{" "}
          <b>structure éthique, engagée et ouverte à tous</b>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Animaux accueillis */}
          <div className="relative col-span-3 h-60 overflow-visible rounded-3xl bg-cyan-100 p-6 md:col-span-2">
            <div className="flex flex-col">
              <span className="text-8xl font-bold leading-none text-primary-700">
                {associationNumbers?.animalsRescued ?? '?'}
              </span>

              <span className="w-55 mt-4 text-2xl font-semibold leading-tight text-primary-700">
                Animaux accueillis
              </span>
            </div>

            <Image
              src={AnimauxAccueillis}
              alt="Animaux accueillis"
              width={200}
              priority
              className="absolute -bottom-6 -right-5 w-2/5"
            />
          </div>

          {/* Familles d'accueil */}
          <div className="relative col-span-3 h-60 overflow-visible rounded-3xl bg-red-100 p-6 md:col-span-2">
            <div className="flex flex-col">
              <span className="text-8xl font-bold leading-none text-primary-700">
                {associationNumbers?.fosterFamilies ?? '?'}
              </span>

              <span className="w-55 mt-4 text-2xl font-semibold leading-tight text-primary-700">
                Familles d'accueil
              </span>
            </div>

            <Image
              src={FamilleDAccueil}
              alt="Famille d'accueil"
              width={200}
              priority
              className="absolute -bottom-10 -right-5 w-2/5"
            />
          </div>

          {/* Bénévoles */}
          <div className="relative col-span-3 h-60 overflow-visible rounded-3xl bg-green-100 p-6 md:col-span-2">
            <div className="flex flex-col">
              <span className="text-8xl font-bold leading-none text-primary-700">
                {associationNumbers?.volunteers ?? '?'}
              </span>

              <span className="w-55 mt-4 text-2xl font-semibold leading-tight text-primary-700">
                Bénévoles
              </span>
            </div>

            <Image
              src={Benevoles}
              alt="Bénévoles"
              priority
              className="absolute -bottom-5 -right-7 w-1/2"
            />
          </div>

          {/* En attente de famille d'accueil */}
          <div className="relative col-span-3 h-60 overflow-visible rounded-3xl bg-orange-100 p-6">
            <div className="flex flex-col">
              <span className="text-8xl font-bold leading-none text-primary-700">
                {associationNumbers?.animalsWaitingForFoster ?? '?'}
              </span>

              <span className="w-55 mt-4 text-2xl font-semibold leading-tight text-primary-700">
                En attente de famille d'accueil
              </span>
            </div>

            <Image
              src={EnAttenteDeFamilleDAccueil}
              alt="En attente de famille d'accueil"
              width={200}
              priority
              className="absolute -bottom-6 -right-5 w-1/4"
            />
          </div>

          {/* Adoptions */}
          <div className="relative col-span-3 h-60 overflow-visible rounded-3xl bg-pink-100 p-6">
            <div className="flex flex-col">
              <span className="text-8xl font-bold leading-none text-primary-700">
                {associationNumbers?.adoptions ?? '?'}
              </span>

              <span className="mt-4 text-2xl font-semibold leading-tight text-primary-700">
                Adoptions
              </span>
            </div>

            <Image
              src={Adoptions}
              alt="Adoptions"
              width={250}
              priority
              className="absolute -bottom-8 -right-5 w-1/3"
            />
          </div>
        </div>
      </div>

      {/* Nos valeurs */}
      <div className="mt-12 flex flex-col gap-6">
        <Title color="text-primary-500 flex items-center gap-4">
          <HandHeart className="size-13" strokeWidth={2} />
          Nos valeurs
        </Title>

        <div className="relative flex gap-10 items-center justify-center pb-10 lg:pb-0">
          <Image
            src={Elodie1}
            alt="Persona Elodie"
            width={250}
            priority
            className="hidden lg:flex"
          />
          <div className="relative">
            {/* Ligne de la timeline */}
            <div className="absolute hidden lg:flex left-0 right-0 top-30 h-1 bg-primary-600" />

            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-4">
              {/* Valeur 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 items-center justify-center">
                  <Image
                    src={Value1}
                    alt="Valeur 1"
                    width={100}
                    priority
                    className="w-4/5"
                  />
                </div>

                <div className="hidden lg:flex z-10 mt-8 h-5 w-5 rounded-full bg-primary-600" />

                <p className="mt-6 text-lg font-semibold leading-tight text-primary-600">
                  Un environnement adapté
                </p>
              </div>

              {/* Valeur 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 items-center justify-center">
                  <Image
                    src={Value2}
                    alt="Valeur 2"
                    width={100}
                    priority
                    className="w-4/5"
                  />
                </div>

                <div className="hidden lg:flex z-10 mt-8 h-5 w-5 rounded-full bg-primary-600" />

                <p className="mt-6 text-lg font-semibold leading-tight text-primary-600">
                  Des soins chez un vétérinaire agréé
                </p>
              </div>

              {/* Valeur 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 items-center justify-center">
                  <Image
                    src={Value3}
                    alt="Valeur 3"
                    width={100}
                    priority
                    className="w-4/5"
                  />
                </div>

                <div className="hidden lg:flex z-10 mt-8 h-5 w-5 rounded-full bg-primary-600" />

                <p className="mt-6 text-lg font-semibold leading-tight text-primary-600">
                  Un accompagnement humain et bienveillant
                </p>
              </div>

              {/* Valeur 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 items-center justify-center">
                  <Image
                    src={Value4}
                    alt="Valeur 4"
                    width={100}
                    priority
                    className="w-4/5"
                  />
                </div>

                <div className="hidden lg:flex z-10 mt-8 h-5 w-5 rounded-full bg-primary-600" />

                <p className="mt-6 text-lg font-semibold leading-tight text-primary-600">
                  Des conseils appuyés et basés sur des recherches mondiales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
