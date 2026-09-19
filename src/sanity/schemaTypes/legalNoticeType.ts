import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const legalNoticeType = defineType({
    name: 'legalNotice',
    title: 'Mentions légales',
    type: 'document',
    icon: DocumentTextIcon,
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
            name: 'publishedAt',
            title: 'Date de publication',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Contenu',
            type: 'blockContent',
        }),
    ]
})
