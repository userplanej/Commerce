import { dataset, projectId } from 'lib/sanity/sanity-config';
import { SanityImageWithProductHotspots } from 'lib/sanity/types';
import { Product } from 'lib/shopify/types';

import clsx from 'clsx';
import { Suspense } from 'react';
import ProductHotspot from '../product/hotspot';
import SanityImage from './sanity-image';

type Props = {
  content: SanityImageWithProductHotspots;
};

export default function ImageWithProductHotspots({ content }: Props) {
  return (
    <>
      <ImageContent content={content} />

      <Suspense fallback={<p>Loading...</p>}>
        {content.productHotspots?.map((hotspot) => {
          const storefrontProduct = hotspot?.product as unknown as Product;

          console.log(
            'ImageWithProductHotspots storefrontProduct : ' + JSON.stringify(storefrontProduct)
          );

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
      </Suspense>
    </>
  );
}

const ImageContent = ({ content }: Props) => {
  const image = content.image;

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
        alt={image?.altText ? image.altText : '...'}
        blurDataURL={image?.blurDataURL}
        crop={image?.crop}
        dataset={sanityDataset}
        hotspot={image?.hotspot}
        layout="responsive"
        projectId={sanityProjectID}
        sizes={['100dvw']}
        src={image?.asset?._ref}
        priority={true}
      />
    </div>
  );
};
