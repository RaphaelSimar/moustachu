"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavigationProgress() {
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [finishing, setFinishing] = useState(false);

  // Début de navigation
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;
      if (!link.href) return;
      if (link.target === "_blank") return;
      if (link.origin !== window.location.origin) return;
      if (link.href === window.location.href) return;
      if (link.href.includes("#")) return;

      setLoading(true);
      setFinishing(false);
      setProgress(0);

      // Laisser React rendre 0% avant de lancer l'animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setProgress(80);
        });
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Navigation terminée
  useEffect(() => {
    if (!loading) return;

    setFinishing(true);
    setProgress(100);

    const timer = setTimeout(() => {
      setLoading(false);
      setFinishing(false);
      setProgress(0);
    }, 350);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-[49] h-[3px] overflow-hidden">
      <div
        className={`h-full bg-secondary-500 ${
          finishing ? "duration-300 ease-out" : "duration-[1500ms] ease-out"
        } transition-[width]`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
