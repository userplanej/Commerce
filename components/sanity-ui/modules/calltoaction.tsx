import clsx from 'clsx';
import {
  SanityAssetImage,
  SanityModuleCallToAction,
  SanityProductWithVariant
} from 'lib/sanity/types';

import type { Image } from '@sanity/types';
import { dataset, projectId } from 'lib/sanity/sanity-config';

import { useColorTheme } from 'lib/theme';

import Link from 'next/link';
import SanityImage from '../media/sanity-image';

type Props = {
  module: SanityModuleCallToAction;
};

/* TODO clear unknown type */
export default function CallToActionModule({ module }: Props) {
  const colorTheme = useColorTheme();

  return (
    <div
      className="flex flex-col gap-5 md:flex-row md:gap-[5vw]"
      style={{ color: colorTheme?.text }}
    >
      {/* Text */}
      <div
        className={clsx(
          'relative aspect-[864/485] grow' //
        )}
      >
        {module.content && <ModuleContent content={module.content} />}
      </div>
      <div
        className={clsx(
          'mr-auto flex w-full shrink-0 flex-col items-start', //
          'md:max-w-[20rem]'
        )}
      >
        {/* Title */}
        <div
          className={clsx(
            'text-xl font-bold', //
            'md:text-2xl'
          )}
        >
          {module.title}
        </div>

        {/* Body */}
        {module.body && <div className="leading-paragraph mt-4">{module.body}</div>}

        {/* Link */}
        {module.link && (
          <div className="mt-4">
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
  );
}

// const sanityDataset = dataset,
// sanityProjectID = projectId;
// SanityAssetImage
export interface SanityAssetImage2 extends Image {
  _type: 'image';
}

type MProps = {
  content: SanityAssetImage | SanityProductWithVariant;
};

const ModuleContent = ({ content }: MProps) => {
  const sanityDataset = dataset,
    sanityProjectID = projectId;

  switch (content?._type) {
    case 'image': {
      return (
        <SanityImage
          alt={content?.altText}
          crop={content?.crop}
          dataset={sanityDataset}
          hotspot={content?.hotspot}
          layout="fill"
          objectFit="cover"
          projectId={sanityProjectID}
          sizes="100vw"
          src={content?.asset?._ref}
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
