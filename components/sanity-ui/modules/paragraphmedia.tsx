import clsx from 'clsx';
import {
  SanityAssetImage,
  SanityParagraphWithMedia,
  SanityProductWithVariant
} from 'lib/sanity/types';

import { dataset, projectId } from 'lib/sanity/sanity-config';
import { useInView } from 'react-intersection-observer';

import Link from 'next/link';
// import SanityImage from '../media/sanity-image';
import SwiperXImage from '../media/swiper-x-image';

type Props = {
  module: SanityParagraphWithMedia;
};

/* TODO clear unknown type */
export default function ParaagraphMediaModule({ module }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '0px'
    // delay: 000,
    // trackVisibility: true
  });

  // console.log('#####ParaagraphMediaModule ' + JSON.stringify(module));

  return (
    <div className="grid grid-cols-2 items-center  justify-center gap-4 align-middle md:px-[96px]">
      <div ref={ref} className="flex flex-col items-center justify-center align-middle ">
        <div className="relative flex w-[95%] items-start ">
          <div className=" flex flex-col">
            {/* Header */}
            {inView ? (
              <div
                className={clsx(
                  'relative',
                  'text-xl font-bold', //
                  'md:text-2xl',
                  'translate-y-[-30px]  transform-gpu  animate-fadeIn duration-1000'
                )}
              >
                {module.header}
              </div>
            ) : (
              <div
                className={clsx(
                  'relative',
                  'text-xl font-bold', //
                  'text-opacity-5 md:text-2xl'
                )}
              >
                {module.header}
              </div>
            )}

            <div className="relative mt-4 ">{module.paragraph}</div>

            {/* Link */}
            {module.link && (
              <div className="relative mt-4">
                <Link
                  className="font-bold underline hover:no-underline"
                  href={module.link as unknown as string}
                >
                  {module.link.title}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Media */}
      <div className="flex flex-col items-start justify-center align-middle ">
        <div className="relative aspect-[530/597] w-full">
          {module.media && <ModuleContent media={module.media} />}
        </div>
      </div>
    </div>
  );
}

type MProps = {
  media: SanityAssetImage | SanityProductWithVariant;
};

const ModuleContent = ({ media }: MProps) => {
  // console.log('#####ModuleContent ' + JSON.stringify(media));

  const sanityDataset = dataset,
    sanityProjectID = projectId;

  switch (media?._type) {
    case 'image': {
      return (
        <SwiperXImage
          alt={media?.altText}
          crop={media?.crop}
          dataset={sanityDataset}
          hotspot={media?.hotspot}
          layout="fill"
          objectFit="cover"
          projectId={sanityProjectID}
          sizes="100vw"
          src={media?.asset?._ref}
        />
      );
    }
    // case 'productWithVariant': {
    //   if (!content?.gid || !content.variantGid) {
    //     return null;
    //   }

    //   return <ProductHero gid={content?.gid} variantGid={content.variantGid} />;
    // }
    default:
      return null;
  }
};
