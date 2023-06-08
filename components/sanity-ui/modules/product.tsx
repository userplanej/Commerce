import { SanityModuleProduct } from 'lib/sanity/types';
import { ShopifyProduct } from 'lib/shopify/types';
import ProductPill from '../product/pill';

type Props = {
  imageAspectClassName?: string;
  layout?: 'card' | 'pill';
  module?: SanityModuleProduct;
};

export default function ProductModule({ imageAspectClassName, layout = 'card', module }: Props) {
  const productVariantGid = module?.productWithVariant?.variantGid;
  const storefrontProduct = module?.productWithVariant as unknown as ShopifyProduct;

  if (!storefrontProduct) {
    return null;
  }

  if (layout === 'pill') {
    return <ProductPill storefrontProduct={storefrontProduct} variantGid={productVariantGid} />;
  }

  // if (layout === 'card') {
  //   return (
  //     <ProductCard
  //       imageAspectClassName={imageAspectClassName}
  //       storefrontProduct={storefrontProduct}
  //       variantGid={productVariantGid}
  //     />
  //   );
  // }

  return null;
}
