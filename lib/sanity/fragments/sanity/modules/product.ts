import groq from 'groq';
import { PRODUCT_WITH_VARIANT } from '../product-with-variant';

export const MODULE_PRODUCT = groq`
  productWithVariant {
    ...${PRODUCT_WITH_VARIANT}
  }
`;
