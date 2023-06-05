// import {useMatches} from '@remix-run/react';
// import type {Product} from '@shopify/hydrogen/storefront-api-types';
import { dataset, projectId } from 'app/sanity';
import clsx from 'clsx';
import SanityImage from 'components/sanity-ui/media/SanityImage';
// import ProductHotspot from '~/components/product/Hotspot';
// import ProductTag from '~/components/product/Tag';
import type { SanityModuleImage } from 'lib/sanity/types';

type Props = {
  module: SanityModuleImage;
};

export default function ImageModule({ module }: Props) {
  if (!module.image) {
    return null;
  }

  return (
    <div className="relative">
      <ImageContent module={module} />

      {/* Caption */}

      {/* Product hotspots */}

      {/* Product tags */}
    </div>
  );
}

const ImageContent = ({ module }: Props) => {
  console.log('ImageContent loading............');
  const image = module.image;

  const sanityDataset = dataset,
    sanityProjectID = projectId;

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded transition-[border-radius] duration-500 ease-out',
        'group-hover:rounded-xl'
      )}
    >
      <SanityImage
        blurDataURL={image?.blurDataURL}
        crop={image?.crop}
        dataset={sanityDataset}
        hotspot={image?.hotspot}
        layout="responsive"
        projectId={sanityProjectID}
        sizes={['50vw, 100vw']}
        src={image?.asset?._ref}
      />
    </div>
  );
};
