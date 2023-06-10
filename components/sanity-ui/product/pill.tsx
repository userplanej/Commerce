import clsx from 'clsx';
import { getProductOptionString, hasMultipleProductOptions } from 'lib/sanity/utils';
import Link from 'next/link';
import Badge from '../elements/badge';

import { ProductWithNodes } from 'lib/sanity/shopify';
import { Skeleton } from '../skeleton';

/**
 * A component that displays a (small) single product to allow buyers to quickly identify a particular item of interest
 */

type Props = {
  onClick?: () => void;
  storefrontProduct: ProductWithNodes;
  variantGid?: string;
};

export default function ProductPill({ onClick, storefrontProduct, variantGid }: Props) {
  const firstVariant =
    storefrontProduct.variants.nodes.find((variant) => variant.id == variantGid) ??
    storefrontProduct.variants.nodes[0];

  if (firstVariant == null) {
    return null;
  }

  const multipleProductOptions = hasMultipleProductOptions(storefrontProduct.options);
  const productOptions = getProductOptionString(storefrontProduct.options);
  const { availableForSale, compareAtPrice, image, price } = firstVariant;

  return (
    <Link onClick={onClick} href={`/product/${storefrontProduct.handle}`}>
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
              <img
                alt=""
                className={clsx(
                  'absolute inset-0 h-full w-full object-cover',
                  !availableForSale && 'opacity-50'
                )}
                src={image.url}
              />
            )}

            {/* Badges */}
            <div className="absolute left-2 top-2">
              {/* Sale */}
              {availableForSale && compareAtPrice && <Badge label="Sale" small tone="critical" />}

              {/* Sold out */}
              {!availableForSale && <Badge label="Sold out" small />}
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="mr-3 space-y-1">
            {/* Title */}
            <div className="truncate font-bold group-hover:underline">
              {storefrontProduct.title}
            </div>

            {/* Product options */}
            {multipleProductOptions && (
              <div className="text-darkGray truncate">{productOptions}</div>
            )}
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
