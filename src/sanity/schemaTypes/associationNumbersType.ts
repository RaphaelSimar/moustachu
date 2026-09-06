import { HandHeart } from "lucide-react";
import { defineType } from "sanity";

export const associationNumbersType = defineType({
    name: "associationNumbers",
    title: "Chiffres de l'association",
    type: "document",
    icon: HandHeart,

    fields: [
        {
            name: "name",
            title: "Nom",
            type: "string",
            initialValue: "Chiffres de l'association",
            readOnly: true,
            validation: (Rule) => Rule.required(),
        },
        {
            name: "animalsRescued",
            title: "Animaux accueillis",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: "fosterFamilies",
            title: "Familles d'accueil",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: "volunteers",
            title: "Bénévoles",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: "animalsWaitingForFoster",
            title: "Animaux en attente de famille d'accueil",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: "adoptions",
            title: "Adoptions",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        },
    ],
});