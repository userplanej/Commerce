'use client';

import { dataset, projectId } from 'lib/sanity/sanity-config';
import { SanityImageWithProductHotspots } from 'lib/sanity/types';
//import { useGids } from 'lib/sanity/utils';
import SanityImage from './sanity-image';

type Props = {
  content?: SanityImageWithProductHotspots;
};

export default function ImageWithProductHotspots({ content }: Props) {
  const sanityDataset = dataset,
    sanityProjectID = projectId;

  //const gids = useGids();
  console.log('projectId : ' + sanityProjectID);
  console.log('dataset : ' + sanityDataset);
  console.log('ImageWithProductHotspots : ' + JSON.stringify(content));

  return (
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
  );
}
