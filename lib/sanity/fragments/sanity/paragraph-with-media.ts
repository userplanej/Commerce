import groq from 'groq';
import { IMAGE } from './image';
import { LINK_EXTERNAL } from './linkExternal';
import { LINK_INTERNAL } from './linkInternal';
import { PRODUCT_WITH_VARIANT } from './product-with-variant';

export const PARAGRAPH_WITH_MEDIA = groq`
paragraph,
  "media": media[0] {
    _type,
    (_type == 'image') => {
      ${IMAGE}
    },
    (_type == 'productWithVariant') => {
      ...${PRODUCT_WITH_VARIANT}
    },
  },
  "link": links[0] {
    (_type == 'linkExternal') => {
      ${LINK_EXTERNAL}
    },
    (_type == 'linkInternal') => {
      ${LINK_INTERNAL}
    },
  },      
  header,
  paragraph,
`;
