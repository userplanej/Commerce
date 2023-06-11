'use client';

import { GridTileImage } from 'components/grid/tile';

import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ThreeItemGridItem({
  item,
  size,
  background
}: {
  item: Product;
  size: 'full' | 'half';
  background: 'white' | 'pink' | 'purple' | 'black';
}) {
  return (
    <div
      className={size === 'full' ? 'sm:col-span-4 sm:row-span-2' : 'sm:col-span-2 sm:row-span-1'}
    >
      <Link className="block h-full" href={`/sanity/page/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          width={size === 'full' ? 1080 : 540}
          height={size === 'full' ? 1080 : 540}
          verticalWriteMode={size === 'full' ? true : false}
          decorate={true}
          priority={true}
          background={background}
          alt={item.title}
          labels={{
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}
