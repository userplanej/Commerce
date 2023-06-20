import clsx from 'clsx';
import {
  SanityAssetImage,
  SanityParagraphWithMedia,
  SanityProductWithVariant
} from 'lib/sanity/types';

import { dataset, projectId } from 'lib/sanity/sanity-config';

import { useColorTheme } from 'lib/theme';

import Link from 'next/link';
import SanityImage from '../media/sanity-image';

type Props = {
  module: SanityParagraphWithMedia;
};

/* TODO clear unknown type */
export default function ParaagraphMediaModule({ module }: Props) {
  console.log('#####ParaagraphMediaModule ' + JSON.stringify(module));
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
        {module.media && <ModuleContent media={module.media} />}
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
          {module.header}
        </div>

        {/* Paragraph */}
        {module.paragraph && <div className="leading-paragraph mt-4">{module.paragraph}</div>}

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

type MProps = {
  media: SanityAssetImage | SanityProductWithVariant;
};

const ModuleContent = ({ media }: MProps) => {
  console.log('#####ModuleContent ' + JSON.stringify(media));

  const sanityDataset = dataset,
    sanityProjectID = projectId;

  switch (media?._type) {
    case 'image': {
      return (
        <SanityImage
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
