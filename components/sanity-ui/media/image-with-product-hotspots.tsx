import { dataset, projectId } from 'lib/sanity/sanity-config';
import { SanityImageWithProductHotspots } from 'lib/sanity/types';
import { Product } from 'lib/shopify/types';

import { Suspense } from 'react';
import ProductHotspot from '../product/hotspot';
import SanityImage from './sanity-image';

type Props = {
  content: SanityImageWithProductHotspots;
};

export default function ImageWithProductHotspots({ content }: Props) {
  const sanityDataset = dataset,
    sanityProjectID = projectId;

  console.log('ImageWithProductHotspots content : ' + JSON.stringify(content));

  return (
    <>
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

      <SanityImage
        alt={content?.image?.altText}
        crop={content?.image?.crop}
        dataset={sanityDataset}
        hotspot={content?.image?.hotspot}
        layout="responsive"
        objectFit="cover"
        projectId={sanityProjectID}
        sizes="w-full"
        src={content?.image?.asset?._ref}
      />
    </>
  );
}
