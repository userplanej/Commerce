import type { PortableTextMarkComponentProps } from '@portabletext/react';
import { SanityProductWithVariant } from 'lib/sanity/types';

type Props = PortableTextMarkComponentProps & {
  value: PortableTextMarkComponentProps['value'] & {
    linkAction: 'addToCart' | 'buyNow' | 'link';
    productWithVariant: SanityProductWithVariant;
    quantity?: number;
  };
};

const ProductAnnotation = ({ children, value }: Props) => {
  const { productWithVariant } = value;

  const productGid = productWithVariant?.gid;
  const productVariantGid = productWithVariant?.variantGid;
  const storefrontProduct = productWithVariant;

  if (!productGid || !storefrontProduct) {
    return <>{children}</>;
  }

  return <></>;
};

export default ProductAnnotation;
