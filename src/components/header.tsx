import { Rabbit } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="from-pink-50 to-white bg-gradient-to-b p-6">
      <header className="bg-white/80 shadow-md flex items-center justify-between p-6 rounded-lg container mx-auto shadow-pink-50">
        <Link
          href="/"
          className="group flex items-center gap-2 text-pink-700 md:text-xl font-bold tracking-tight"
        >
          <Rabbit
            size={24}
            aria-hidden
            className="transition-transform duration-300 group-hover:rotate-10"
          />
          <span className="relative">
            Moustachu
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        <ul className="flex items-center gap-4 font-semibold text-slate-700">
          <li>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="/animaux"
            >
              Animaux
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="/posts"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="/studio"
            >
              Sanity Studio
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
