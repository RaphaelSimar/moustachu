"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  label?: string;
};

export function BackButton({ label = "Retour" }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 w-fit cursor-pointer rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
    >
      <ArrowLeft size={18} aria-hidden />
      <span>{label}</span>
    </button>
  );
}
