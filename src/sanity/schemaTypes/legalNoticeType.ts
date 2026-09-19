import { Scale } from "lucide-react";
import { defineField, defineType } from 'sanity';

export const legalNoticeType = defineType({
    name: 'legalNotice',
    title: 'Mentions légales',
    type: 'document',
    icon: Scale,
    fields: [
        {
            name: "name",
            title: "Nom",
            type: "string",
            initialValue: "Mentions légales",
            readOnly: true,
            validation: (Rule) => Rule.required(),
        },
        defineField({
            name: 'lastUpdatedAt',
            title: 'Date de dernière mise à jour',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Contenu',
            type: 'blockContent',
        }),
    ]
})
