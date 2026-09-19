import { defineQuery } from 'next-sanity'

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`)

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`)

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`)


export const ANIMALS_QUERY =
  defineQuery(`*[_type == "animal"]|order(name asc){
  _id,
  name,
  species,
  sex,
  age,
  sterilized,
  coverImage,
  slug
}`)

export const ANIMALS_TO_ADOPT_QUERY =
  defineQuery(`*[_type == "animal" && toAdopt == true]|order(name asc){
  _id,
  name,
  species,
  sex,
  age,
  sterilized,
  coverImage,
  slug
}`)

export const ANIMALS_SLUGS_QUERY =
  defineQuery(`*[_type == "animal" && defined(slug.current)]{
  "slug": slug.current
}`)


export const ANIMAL_QUERY =
  defineQuery(`*[_type == "animal" && slug.current == $slug][0]{
  _id,
  name,
  species,
  breed,
  sex,
  age,
  coverImage,
  gallery,
  videos,
  animalMessage,
  story,
  personality,
  health,
  heavyCareNeeded,
  sociability,
  vaccinated,
  sterilized,
  currentFood,
  currentHabitat,
  associationTime,
  adoptionFees,
  quantity
}`)

export const ASSOCIATION_NUMBERS_QUERY =
  defineQuery(`*[_id == "associationNumbers"][0]{
  animalsRescued,
  fosterFamilies,
  volunteers,
  animalsWaitingForFoster,
  adoptions
}`)

export const LEGAL_NOTICE_QUERY =
  defineQuery(`*[_id == "legalNotice"][0] {
    publishedAt,
    body
  }`)