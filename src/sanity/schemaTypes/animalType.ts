import { PawPrint } from "lucide-react";
import { defineType } from "sanity";

export const animalType = defineType({
    name: "animal",
    title: "Animal",
    type: "document",
    icon: PawPrint,

    groups: [
        {
            name: "identity",
            title: "Identité",
        },
        {
            name: "media",
            title: "Photos & vidéos",
        },
        {
            name: "character",
            title: "Caractère",
        },
        {
            name: "health",
            title: "Santé",
        },
        {
            name: "adoption",
            title: "Adoption",
        },
    ],

    fields: [
        {
            name: "name",
            title: "Nom",
            type: "string",
            group: "identity",
            validation: (Rule) => Rule.required(),
        },

        {
            name: "coverImage",
            title: "Image principale",
            type: "image",
            group: "media",
            description:
                "Image utilisée pour les cartes et l'en-tête de la fiche",
            options: {
                hotspot: true,
            },
        },

        {
            name: "gallery",
            title: "Galerie photos",
            type: "array",
            group: "media",
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
            group: "media",
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
            group: "identity",
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
            validation: (Rule) => Rule.required(),
        },

        {
            name: "quantity",
            title: "Nombre d'animaux",
            type: "number",
            group: "identity",
            initialValue: 1,
            validation: (Rule) => Rule.min(1),
        },

        {
            name: "breed",
            title: "Race",
            type: "string",
            group: "identity",
        },

        {
            name: "sex",
            title: "Sexe",
            type: "string",
            group: "identity",
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
            group: "identity",
            validation: (Rule) => Rule.required(),
        },

        {
            name: "animalMessage",
            title: "Message de l'animal",
            description: "Texte écrit comme si l'animal parlait",
            type: "text",
            group: "character",
        },

        {
            name: "story",
            title: "Histoire",
            type: "text",
            group: "character",
        },

        {
            name: "personality",
            title: "Caractère",
            type: "text",
            group: "character",
        },

        {
            name: "health",
            title: "Santé",
            type: "text",
            group: "health",
        },

        {
            name: "heavyCareNeeded",
            title: "Soins lourds à prévoir",
            type: "boolean",
            group: "health",
            initialValue: false,
        },

        {
            name: "sociability",
            title: "Niveau de sociabilité",
            type: "number",
            group: "character",
            validation: (Rule) => Rule.min(1).max(5),
        },

        {
            name: "vaccinated",
            title: "Vacciné",
            type: "boolean",
            group: "health",
            initialValue: false,
        },

        {
            name: "sterilized",
            title: "Stérilisé",
            type: "boolean",
            group: "health",
            initialValue: false,
        },

        {
            name: "currentFood",
            title: "Alimentation actuelle",
            type: "text",
            group: "health",
        },

        {
            name: "currentHabitat",
            title: "Habitat actuel",
            type: "text",
            group: "health",
        },

        {
            name: "associationTime",
            title: "Temps dans l'association",
            type: "string",
            group: "adoption",
        },

        {
            name: "adoptionFees",
            title: "Frais d'adoption",
            type: "number",
            group: "adoption",
        },

        {
            name: "slug",
            title: "Slug",
            type: "slug",
            group: "identity",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },

        {
            name: "toAdopt",
            title: "À adopter",
            type: "boolean",
            group: "adoption",
            initialValue: false,
        },

        {
            name: "displayOnHomePage",
            title: "Afficher en priorité sur la page d'accueil",
            type: "boolean",
            group: "adoption",
            initialValue: false,
        },
    ],
});