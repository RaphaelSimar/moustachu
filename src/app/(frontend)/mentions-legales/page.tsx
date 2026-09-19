import { Title } from "@/components/title";
import { Scale } from "lucide-react";
import { PortableText } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { LEGAL_NOTICE_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portableTextComponents";

export default async function Page() {
  const legalNotice = await client.fetch(LEGAL_NOTICE_QUERY);

  return (
    <main className="container mx-auto grid p-12">
      <Title color="text-primary-700 flex items-center gap-4 mb-6">
        <Scale className="size-12" strokeWidth={2} />
        Mentions légales
      </Title>

      {legalNotice?.publishedAt ? (
        <p className="mb-6 text-md font-medium text-primary-600">
          Dernière mise à jour :{" "}
          {new Date(legalNotice.publishedAt).toLocaleDateString("fr-FR")}
        </p>
      ) : null}

      {legalNotice?.body ? (
        <div className="prose lg:prose-lg">
          <PortableText value={legalNotice.body} components={components} />
        </div>
      ) : null}
    </main>
  );
}
