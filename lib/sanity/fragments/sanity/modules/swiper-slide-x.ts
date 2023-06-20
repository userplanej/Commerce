import groq from 'groq';

import { PARAGRAPH_WITH_MEDIA } from '../paragraph-with-media';

export const MODULE_SWIPER_SLIDE_X = groq`
  paragraphWithMedia {
    ...${PARAGRAPH_WITH_MEDIA}
  }
`;
