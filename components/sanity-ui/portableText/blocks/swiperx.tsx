import type { PortableTextBlock } from '@portabletext/types';
import clsx from 'clsx';
import ParaagraphMediaModule from 'components/sanity-ui/modules/paragraphmedia';
import { SanityModuleSwiperX } from 'lib/sanity/types';

import { Autoplay, Parallax } from 'swiper';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

type Props = {
  centered?: boolean;
  value: PortableTextBlock & SanityModuleSwiperX;
};

export default function SwiperXBlock({ centered = true, value }: Props) {
  if (!Array.isArray(value?.modules)) {
    return null;
  }

  console.log('#####SwiperXBlock ' + JSON.stringify(value?.modules));

  return (
    <div
      className={clsx(
        'first:mt-0 last:mb-0', //
        'relative my-12 w-screen px-6',
        'md:px-8',
        centered ? 'left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]' : '-ml-6 md:-ml-8'
      )}
    >
      <div className={clsx(centered && 'mx-auto w-full max-w-[1400px]')}>
        <Swiper
          modules={[Autoplay, Parallax]}
          speed={50}
          parallax={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
    </div>
  );
}
