import { PropsWithChildren } from "react";

type TitleProps = PropsWithChildren<{
  color?: string;
}>;

export function Title({ children, color = "text-slate-800" }: TitleProps) {
  return (
    <h1
      className={`text-xl md:text-3xl lg:text-5xl font-semibold text-pretty max-w-3xl ${color}`}
    >
      {children}
    </h1>
  );
}
