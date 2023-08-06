import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '../elements/badge';

import { SanityProductWithVariant } from 'lib/sanity/types';
import { getProductOptionString, hasMultipleProductOptions } from 'lib/sanity/utils';
import { Skeleton } from '../skeleton';

/**
 * A component that displays a (small) single product to allow buyers to quickly identify a particular item of interest
 */

type Props = {
  onClick?: () => void;
  storefrontProduct: SanityProductWithVariant;
  variantGid?: string;
};

export default function ProductPill({ onClick, storefrontProduct, variantGid }: Props) {
  // @ts-ignore
  const firstVariant = storefrontProduct;

  if (firstVariant == null) {
    return null;
  }
  //console.log(JSON.stringify(firstVariant));
  // const multipleProductOptions = hasMultipleProductOptions(firstVariant.options);
  // const productOptions = getProductOptionString(firstVariant.options);
  const { available, compareAtPrice, image, price } = firstVariant;
  //console.log('### options ### ' + JSON.stringify(storefrontProduct.options));
  const productOptions = getProductOptionString(storefrontProduct.options);
  //console.log('### productOptions String  ### ' + productOptions);
  const multipleProductOptions = hasMultipleProductOptions(storefrontProduct.options);
  return (
    <Link onClick={onClick} href={`/product/${firstVariant.handle}`}>
      <div
        className={clsx(
          'border-lightGray group flex h-[108px] gap-4 rounded-md border bg-white p-3 text-sm duration-500 ease-out',
          'hover:border-darkGray hover:rounded-lg'
        )}
        role="row"
      >
        <div role="cell" className="relative flex-shrink-0">
          <div
            className={clsx(
              'bg-lightGray relative h-full w-[110px] overflow-hidden rounded-sm duration-500 ease-out',
              'group-hover:rounded-md'
            )}
          >
            {image && (
              <Image
                fill={true}
                sizes="120"
                alt={firstVariant.title}
                className={clsx('absolute inset-0 h-full w-full object-cover')}
                src={firstVariant.image}
              />
            )}

            {/* Badges */}
            <div className="absolute left-2 top-2">
              {/* Sale */}
              {<Badge label="Sale" small tone="critical" />}
            </div>
          </div>
        </div>

        <div className="">
          <div className="mr-3 space-y-1">
            {/* Title */}
            <div className="truncate font-bold group-hover:underline">{firstVariant.title}</div>
            {/* Vendor */}
            {firstVariant.vendor && (
              <div className="text-darkGray truncate">{firstVariant.vendor}</div>
            )}
            {/* Product options */}
            {multipleProductOptions && (
              <div className="text-darkGray truncate">{productOptions}</div>
            )}
          </div>
          {/* Price */}
          <div className="mt-3 flex font-bold ">
            {compareAtPrice && (
              <span className="text-darkGray">
                <p className="decoration-red mr-2.5 line-through">{compareAtPrice}</p>
              </span>
            )}
            {price} 원
          </div>
        </div>
      </div>
    </Link>
  );
}

export function PillSkeleton() {
  return (
    <Skeleton
      className={clsx(
        'border-lightGray group flex h-[108px] gap-4 rounded-md border bg-white p-3 text-sm duration-500 ease-out'
      )}
      role="row"
    >
      <div role="cell" className="relative flex-shrink-0">
        <div
          className={clsx(
            'bg-gray relative h-full w-[110px] overflow-hidden rounded-sm duration-500 ease-out',
            'group-hover:rounded-md'
          )}
        ></div>
      </div>

      <div className="overflow-hidden">
        <div className="mr-3 space-y-1">
          {/* Title */}
          <div className="bg-gray mb-2 h-4 w-48 rounded-full"></div>

          {/* Product options */}
          <div className="w-30 bg-gray mb-2 h-3 rounded-full"></div>
          <div className="w-18 bg-gray mb-2 h-3 rounded-full"></div>
        </div>

        {/* Price */}
        <div className="mt-4 flex">
          <div className="bg-gray h-3 w-24 rounded-full"></div>
        </div>
      </div>
    </Skeleton>
  );
}
