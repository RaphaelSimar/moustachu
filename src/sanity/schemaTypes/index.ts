import { type SchemaTypeDefinition } from 'sanity'

import { animalType } from './animalType'
import { associationNumbersType } from './associationNumbersType'
import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { legalNoticeType } from './legalNoticeType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, animalType, associationNumbersType, legalNoticeType],
}
