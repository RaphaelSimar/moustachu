import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SanityLive } from "@/sanity/lib/live";
import "../globals.css";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <section className="bg-white min-h-screen overflow-x-clip">
        {children}
        <Footer />
        <SanityLive />
      </section>
    </>
  );
}
