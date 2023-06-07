import groq from 'groq';
import { PRODUCT_WITH_VARIANT } from './product-with-variant';

export const PRODUCT_HOTSPOT = groq`
  _key,
  "product": productWithVariant {
    ...${PRODUCT_WITH_VARIANT}
  },
  x,
  y
`;
