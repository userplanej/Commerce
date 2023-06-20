import groq from 'groq';
import { MODULE_SWIPER_SLIDE_X } from './swiper-slide-x';

export const MODULE_SWIPERX = groq`  
  modules[] {
    ${MODULE_SWIPER_SLIDE_X}
  }
`;
