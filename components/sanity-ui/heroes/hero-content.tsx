import ImageWithProductHotspots from 'components/sanity-ui/media/image-with-product-hotspots';
import type { SanityImageWithProductHotspots } from 'lib/sanity/types';
import { useMemo } from 'react';

type Props = {
  content?: SanityImageWithProductHotspots;
};

export default function HeroContent({ content }: Props) {
  console.log('HeroContent : ' + JSON.stringify(content));

  const heroContent = useMemo(() => {
    switch (content?._type) {
      case 'imageWithProductHotspots': {
        return (
          <div className="relative w-full animate-fadeIn">
            <ImageWithProductHotspots content={content} />
          </div>
        );
      }
    }
  }, [content]);

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
    <div className="relative flex w-full place-content-center overflow-hidden rounded-md  bg-gray-300">
      {heroContent}
    </div>
  );
}
