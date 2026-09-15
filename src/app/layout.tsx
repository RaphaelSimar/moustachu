import type { Metadata } from "next";
import { Raleway } from "next/font/google";
// import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moustachu",
  description: "Made with love by Raphaël S.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={raleway.variable}>
      <body>{children}</body>
    </html>
  );
}
