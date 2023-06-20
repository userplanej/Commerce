import type { PortableTextBlock } from '@portabletext/types';
import clsx from 'clsx';
import ParaagraphMediaModule from 'components/sanity-ui/modules/paragraphmedia';
import { SanityModuleSwiperX } from 'lib/sanity/types';

import { Autoplay, Parallax } from 'swiper';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

type Props = {
  value: PortableTextBlock & SanityModuleSwiperX;
};

export default function SwiperXBlock({ value }: Props) {
  if (!Array.isArray(value?.modules)) {
    return null;
  }

  console.log('#####SwiperXBlock ' + JSON.stringify(value?.modules));

  return (
    <div
      className={clsx(
        'first:mt-0 last:mb-0', //
        'my-8  gap-3'
      )}
    >
      <Swiper
        modules={[Autoplay, Parallax]}
        speed={1000}
        parallax={true}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        loop={true}
        watchSlidesProgress={true}
      >
        {value?.modules?.map((module) => (
          <SwiperSlide key={module._key}>
            <ParaagraphMediaModule module={module.paragraphWithMedia} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
