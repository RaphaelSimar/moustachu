import Image from "next/image";

import helloAsso from "@/assets/toHelpUs/helloasso.svg";
import rabbit from "@/assets/toHelpUs/lapin-bg.png";
import teaming from "@/assets/toHelpUs/teaming.svg";

export function ToHelpUsPanel() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <Image
        src={rabbit}
        alt="Lapin"
        fill
        className="object-cover"
        priority
      />

      {/* Voile sombre sur l'image */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Encadré */}
      <div className="relative z-10 w-full max-w-5xl bg-black/45 px-8 py-10 backdrop-blur-[4px] md:rounded-[3rem] md:px-16 md:py-12">
        <h2 className="text-center text-4xl font-bold text-white">
          Pour nous aider
        </h2>

        <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-24">
          {/* HelloAsso */}
          <a
            href="#"
            className="flex h-40 w-75 md:w-90 items-center justify-center rounded-[2.5rem] bg-white p-12 shadow-xl transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={helloAsso}
              alt="HelloAsso"
              className="h-full w-full object-contain"
            />
          </a>

          {/* Teaming */}
          <a
            href="#"
            className="flex h-40 w-75 md:w-90 items-center justify-center rounded-[2.5rem] bg-white p-12 shadow-xl transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={teaming}
              alt="Teaming"
              className="h-full w-full object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}