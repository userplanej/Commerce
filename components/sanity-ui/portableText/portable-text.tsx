'use client';

import { PortableTextComponents, PortableText as PortableTextReact } from '@portabletext/react';
import clsx from 'clsx';

import type { PortableTextBlock } from '@sanity/types';

import LinkExternalAnnotation from './annotations/linkexternal';
import LinkInternalAnnotation from './annotations/linkinternal';
import AccordionBlock from './blocks/accordion';
import Block from './blocks/block';
import CalloutBlock from './blocks/callout';
import CallToActionBlock from './blocks/calltoaction';
import ImagesBlock from './blocks/images';

import ProductsBlock from './blocks/products';
import SwiperXBlock from './blocks/swiperx';
import YoutubeBlock from './blocks/youtube'; // 20230614 added

import { useInView } from 'react-intersection-observer';

const SHARED_LIST_CLASSES = clsx(
  'first:mt-0 last:mb-0', //
  'my-8 space-y-0.5 leading-paragraph list-outside ml-8'
);

type Props = {
  blocks: PortableTextBlock[];
  className?: string;
  centered?: boolean;
};

export default function PortableText({ blocks, centered, className }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '0px'
    // delay: 000,
    // trackVisibility: true
  });

  const components: PortableTextComponents = {
    list: {
      bullet: ({ children }) => <ul className={SHARED_LIST_CLASSES}>{children}</ul>,
      number: ({ children }) => <ol className={SHARED_LIST_CLASSES}>{children}</ol>
    },
    marks: {
      annotationLinkExternal: LinkExternalAnnotation,
      annotationLinkInternal: LinkInternalAnnotation,
      annotationProduct: () => <div />
    },
    block: Block,
    types: {
      blockAccordion: AccordionBlock,
      blockCallout: (props: any) => <CalloutBlock centered={centered} {...props} />,
      blockCallToAction: (props: any) => <CallToActionBlock centered={centered} {...props} />,

      blockImages: (props: any) => <ImagesBlock centered={centered} {...props} />,
      blockProducts: ProductsBlock,
      blockSwiperX: SwiperXBlock,
      blockYoutube: (props: any) => <YoutubeBlock centered={centered} {...props} />
    }
  };

  return (
    <>
      <div
        id="pageBgSection"
        className="flex min-h-screen items-center justify-center bg-lvmhmo bg-cover bg-fixed bg-center bg-no-repeat lg:bg-lvmh"
      >
        {inView ? (
          <h1 className="text-xs text-white lg:h-[72px] lg:w-[380px] lg:translate-y-[-5px] lg:transform-gpu lg:animate-pageBgFadeIn lg:text-[1.75rem] lg:font-[400] lg:leading-[2.25rem] lg:tracking-[.05rem]  lg:duration-300">
            An intuitive blend of elegance, versatility, and savoir-faire
          </h1>
        ) : (
          <h1 className="text-xs text-orange-400 lg:h-[72px] lg:w-[380px]  lg:text-[1.75rem] lg:font-[400] lg:leading-[2.25rem] lg:tracking-[.05rem]  lg:text-orange-400 lg:text-opacity-5 ">
            An intuitive blend of elegance, versatility, and savoir-faire
          </h1>
        )}
      </div>

      <div ref={ref} className={clsx('portableText', className)}>
        <PortableTextReact value={blocks} components={components} />
      </div>
    </>
  );
}
