import { PawPrint } from "lucide-react";
import { defineType } from "sanity";

export const animalType = defineType({
    name: "animal",
    title: "Animal",
    type: "document",
    icon: PawPrint,
    fields: [
        {
            name: "name",
            title: "Nom",
            type: "string",
            validation: (Rule) => Rule.required(),
        },

        {
            name: "coverImage",
            title: "Image principale",
            type: "image",
            description: "Image utilisée pour les cartes et l'en-tête de la fiche",
            options: {
                hotspot: true,
            },
        },

        {
            name: "gallery",
            title: "Galerie photos",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
        {
            name: "videos",
            title: "Vidéos",
            type: "array",
            of: [
                {
                    type: "file",
                    options: {
                        accept: "video/*",
                    },
                },
            ],
        },

        {
            name: "species",
            title: "Espèce",
            type: "string",
            options: {
                list: [
                    { title: "Lapin", value: "Lapin" },
                    { title: "Souris", value: "Souris" },
                    { title: "Gerbille", value: "Gerbille" },
                    { title: "Hamster", value: "Hamster" },
                    { title: "Chat", value: "Chat" },
                    { title: "Autre", value: "Autre" },
                ],
            },
        },

        {
            name: "quantity",
            title: "Nombre d'animaux",
            type: "number",
            initialValue: 1,
            validation: (Rule) => Rule.min(1),
        },

        {
            name: "breed",
            title: "Race",
            type: "string",
        },

        {
            name: "sex",
            title: "Sexe",
            type: "string",
            options: {
                list: [
                    { title: "Mâle", value: "Mâle" },
                    { title: "Femelle", value: "Femelle" },
                ],
            },
        },

        {
            name: "age",
            title: "Âge",
            type: "string",
        },

        {
            name: "animalMessage",
            title: "Message de l'animal",
            description: "Texte écrit comme si l'animal parlait",
            type: "text",
        },

        {
            name: "story",
            title: "Histoire",
            type: "text",
        },

        {
            name: "personality",
            title: "Caractère",
            type: "text",
        },

        {
            name: "health",
            title: "Santé",
            type: "text",
        },

        {
            name: "heavyCareNeeded",
            title: "Soins lourds à prévoir",
            type: "boolean",
            initialValue: false,
        },

        {
            name: "sociability",
            title: "Niveau de sociabilité",
            type: "number",
            validation: (Rule) =>
                Rule.min(1).max(5),
        },

        {
            name: "vaccinated",
            title: "Vacciné",
            type: "boolean",
            initialValue: false,
        },

        {
            name: "sterilized",
            title: "Stérilisé",
            type: "boolean",
            initialValue: false,
        },

        {
            name: "currentFood",
            title: "Alimentation actuelle",
            type: "text",
        },

        {
            name: "currentHabitat",
            title: "Habitat actuel",
            type: "text",
        },

        {
            name: "associationTime",
            title: "Temps dans l'association",
            type: "string",
        },

        {
            name: "adoptionFees",
            title: "Frais d'adoption",
            type: "number",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }
    ],
});