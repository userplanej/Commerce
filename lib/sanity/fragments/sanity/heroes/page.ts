import groq from 'groq';
import { IMAGE_WITH_PRODUCT_HOTSPOTS } from '../image-with-product-hotspots';
import { PRODUCT_WITH_VARIANT } from '../product-with-variant';

export const HERO_PAGE = groq`
  content[0] {
    _type,
    (_type == 'imageWithProductHotspots') => {
      ${IMAGE_WITH_PRODUCT_HOTSPOTS}
    },
    (_type == 'productWithVariant') => {
      ...${PRODUCT_WITH_VARIANT}
    },
  },
  title
`;
