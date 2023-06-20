'use client';

import { PortableTextComponents, PortableText as PortableTextReact } from '@portabletext/react';
import clsx from 'clsx';
import { Suspense, useMemo } from 'react';

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

  const portableText = useMemo(() => {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <div className={clsx('portableText', className)}>
          <PortableTextReact value={blocks} components={components} />
        </div>
      </Suspense>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocks]);

  return portableText;
}
