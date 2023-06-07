import type { SanityImageWithProductHotspots } from 'lib/sanity/types';
import { useMemo } from 'react';
import ImageWithProductHotspots from '../media/image-with-product-hotspots';

type Props = {
  title: string;
  content?: SanityImageWithProductHotspots;
};

export default function HeroContent({ title, content }: Props) {
  console.log('HeroContent : ' + JSON.stringify(content));

  const heroContent = useMemo(() => {
    switch (content?._type) {
      case 'imageWithProductHotspots': {
        return (
          <div className="relative block w-[100vw]">
            <div className="">
              <ImageWithProductHotspots content={content} />
            </div>
            <div className="">
              <p>{title}</p>
            </div>
          </div>
        );
      }
    }
  }, [content, title]);

  // case 'productWithVariant': {
  //   if (!content?.gid || !content.variantGid) {
  //     return null;
  //   }

  //   return (
  //     <div className="aspect-[1300/768] w-full">
  //       <ProductHero gid={content?.gid} variantGid={content.variantGid} />
  //     </div>
  //   );
  // }
  //   }
  // }, [content, title]);

  // return (
  //   <div className="relative flex w-full place-content-center overflow-hidden rounded-md bg-lightGray">
  //     <div className="hero-wrapper relative w-[100vw]">
  //           <div className="hero-content">
  //             <ImageWithProductHotspots content={content} />
  //           </div>
  //         </div>
  //   </div>
  // );
  return (
    <div className="bg-lightGray relative flex w-full place-content-center overflow-hidden rounded-md">
      {heroContent}
    </div>
  );
}
