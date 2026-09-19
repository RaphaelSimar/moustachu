import { BadgePercent, Scale } from 'lucide-react'
import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenu')
    .items([
      S.documentTypeListItem('animal').title('Animaux'),
      S.documentTypeListItem('post').title('Articles'),
      S.documentTypeListItem('category').title('Catégories'),
      S.documentTypeListItem('author').title('Auteurs'),
      S.divider(),
      S.listItem()
        .title("Mentions légales")
        .icon(Scale)
        .child(
          S.document()
            .schemaType("legalNotice")
            .documentId("legalNotice")
        ),
      S.listItem()
        .title("Chiffres de l'association")
        .icon(BadgePercent)
        .child(
          S.document()
            .schemaType("associationNumbers")
            .documentId("associationNumbers")
        ),

      // ...S.documentTypeListItems().filter(
      //   (item) => item.getId() && !['post', 'category', 'author', 'animal', 'legalNotice', 'associationNumbers'].includes(item.getId()!),
      // ),
    ])
