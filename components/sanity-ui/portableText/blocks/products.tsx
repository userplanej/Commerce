import type { PortableTextBlock } from '@portabletext/types';
import clsx from 'clsx';
import ProductModule from 'components/sanity-ui/modules/product';
import { SanityModuleProducts } from 'lib/sanity/types';

import { Autoplay, Parallax } from 'swiper';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

type Props = {
  value: PortableTextBlock & SanityModuleProducts;
};

export default function ProductsBlock({ value }: Props) {
  if (!Array.isArray(value?.modules)) {
    return null;
  }

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
        {value?.modules?.map((module, index) => (
          <SwiperSlide key={index}>
            <ProductModule
              imageAspectClassName="aspect-[320/220]"
              layout={value.layout}
              module={module}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
