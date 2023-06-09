// import {useMatches} from '@remix-run/react';
// import type {Product} from '@shopify/hydrogen/storefront-api-types';
import clsx from 'clsx';
import SanityImage from 'components/sanity-ui/media/sanity-image';
import { dataset, projectId } from 'lib/sanity/sanity-config';

// import ProductTag from '~/components/product/Tag';
import type { SanityModuleImage } from 'lib/sanity/types';
import { Product } from 'lib/shopify/types';
import ProductHotspot from '../product/hotspot';

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
      {module.variant === 'productHotspots' && (
        <>
          {module.productHotspots?.map((hotspot) => {
            const storefrontProduct = hotspot?.product as unknown as Product;

            return (
              <ProductHotspot
                key={hotspot._key}
                storefrontProduct={storefrontProduct}
                variantGid={hotspot?.product?.variantGid}
                x={hotspot.x}
                y={hotspot.y}
              />
            );
          })}
        </>
      )}

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
      className={clsx('relative animate-fadeIn overflow-hidden rounded', 'group-hover:rounded-xl')}
    >
      <SanityImage
        alt={image?.altText ? image.altText : '...'}
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
