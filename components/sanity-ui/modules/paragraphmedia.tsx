import clsx from 'clsx';
import {
  SanityAssetImage,
  SanityParagraphWithMedia,
  SanityProductWithVariant
} from 'lib/sanity/types';

import { dataset, projectId } from 'lib/sanity/sanity-config';

import { useColorTheme } from 'lib/theme';

import Link from 'next/link';
// import SanityImage from '../media/sanity-image';
import SanityImage from '../media/sanity-image';

type Props = {
  module: SanityParagraphWithMedia;
};

/* TODO clear unknown type */
export default function ParaagraphMediaModule({ module }: Props) {
  console.log('#####ParaagraphMediaModule ' + JSON.stringify(module));
  const colorTheme = useColorTheme();

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Paragraph */}
      <div className="min-h-[80vh]  w-[70%]">
        {/* Header */}
        <div
          className={clsx(
            'text-xl font-bold', //
            'md:text-2xl'
          )}
        >
          {module.header}
        </div>

        {/* text */}
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

      {/* Media */}
      <div className="relative aspect-[530/597] w-[70%] ">
        {module.media && <ModuleContent media={module.media} />}
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
