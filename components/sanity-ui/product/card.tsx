//import {Image, Money, type ShopifyAnalyticsProduct} from '@shopify/hydrogen';

import clsx from 'clsx';
import { SanityProductWithVariant } from 'lib/sanity/types';
import { getProductOptionString, hasMultipleProductOptions } from 'lib/sanity/utils';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '../elements/badge';

type Props = {
  imageAspectClassName?: string;
  storefrontProduct: SanityProductWithVariant;
  variantGid?: string;
};

export default function ProductCard({
  imageAspectClassName = 'aspect-square',
  storefrontProduct,
  variantGid
}: Props) {
  const firstVariant = storefrontProduct;

  if (firstVariant == null) {
    return null;
  }

  const multipleProductOptions = hasMultipleProductOptions(storefrontProduct.options);
  const productOptions = getProductOptionString(storefrontProduct.options);

  // const productAnalytics: ShopifyAnalyticsProduct = {
  //   productGid: storefrontProduct.id ? storefrontProduct.id : '',
  //   variantGid: firstVariant.id,
  //   name: storefrontProduct.title ? storefrontProduct.title : '',
  //   variantName: firstVariant.title,
  //   brand: storefrontProduct.vendor ? storefrontProduct.vendor : '',
  //   price: firstVariant.price.amount,
  //   quantity: 1,
  // };

  return (
    <div className="group relative">
      <div
        className={clsx([
          imageAspectClassName,
          'bg-lightGray relative flex items-center justify-center overflow-hidden rounded object-cover transition-[border-radius] duration-500 ease-out',
          'hover:rounded-xl'
        ])}
        data-swiper-parallax="300"
      >
        <Link
          className="absolute left-0 top-0 h-full w-full"
          href={`/product/${storefrontProduct.handle}`}
        >
          {firstVariant.image && (
            <Image
              fill={true}
              alt={firstVariant.title}
              className="absolute h-full w-full transform bg-cover bg-center object-cover object-center ease-in-out"
              src={firstVariant.image}
            />
          )}

          {/* Badges */}
          <div className="absolute left-4 top-4">
            {/* Sale */}
            {firstVariant?.available && firstVariant?.compareAtPrice && (
              <Badge label="Sale" tone="critical" />
            )}
            {/* Sold out */}
            {!firstVariant?.available && <Badge label="Sold out" />}
          </div>
        </Link>

        {/* Quick add to cart */}
      </div>

      <div className="text-md mt-3" data-swiper-parallax="300">
        <div className="space-y-1">
          {/* Title */}
          <Link
            className={clsx(
              'font-bold', //
              'hover:underline'
            )}
            href={`/products/${storefrontProduct.handle}`}
          >
            {storefrontProduct.title}
          </Link>

          {/* Vendor */}
          {storefrontProduct.vendor && (
            <div className="text-darkGray">{storefrontProduct.vendor}</div>
          )}

          {/* Product options */}
          {multipleProductOptions && <div className="text-darkGray">{productOptions}</div>}
        </div>

        {/* Price / compare at price */}
        <div className="mt-3 flex font-bold">
          {firstVariant.compareAtPrice && (
            <span className="text-darkGray">{firstVariant.compareAtPrice}</span>
          )}
          {firstVariant.price} 원
        </div>
      </div>
    </div>
  );
}
