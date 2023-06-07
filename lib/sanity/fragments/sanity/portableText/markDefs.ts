import groq from 'groq';
import { LINK_EXTERNAL } from '../linkExternal';
import { LINK_INTERNAL } from '../linkInternal';
import { PRODUCT_WITH_VARIANT } from '../product-with-variant';

export const MARK_DEFS = groq`
	...,
	(_type == 'annotationLinkExternal') => {
	  ${LINK_EXTERNAL}
	},
	(_type == 'annotationLinkInternal') => {
	${LINK_INTERNAL}
	},
	(_type == 'annotationProduct') => {
	  linkAction,
	  productWithVariant {
	    ...${PRODUCT_WITH_VARIANT}
	  },
	  (linkAction != 'link') => {
	    quantity
	  }
  },
`;
