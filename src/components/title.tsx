import { PropsWithChildren } from "react";

type TitleProps = PropsWithChildren<{
  color?: string;
  bold?: boolean;
}>;

export function Title({
  children,
  color = "text-slate-800",
  bold = true,
}: TitleProps) {
  return (
    <h1
      className={`text-xl md:text-3xl lg:text-5xl ${
        bold ? "font-bold" : "font-semibold"
      } text-pretty max-w-3xl ${color}`}
    >
      {children}
    </h1>
  );
}