import { Title } from "@/components/title";
import { Newspaper } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Moustachu</Title>
      <hr />
      <Link href="/posts" className="">
        <h2 className="hover:text-pink-500 transition-colors flex items-center gap-2 text-xl md:text-xl lg:text-xl font-semibold text-slate-800 text-pretty max-w-3xl">
          <Newspaper size={18} aria-hidden />
          Posts
        </h2>
      </Link>
      <Link href="/animaux" className="">
        <h2 className="hover:text-pink-500 transition-colors flex items-center gap-2 text-xl md:text-xl lg:text-xl font-semibold text-slate-800 text-pretty max-w-3xl">
          <Newspaper size={18} aria-hidden />
          Animaux
        </h2>
      </Link>
    </section>
  );
}
