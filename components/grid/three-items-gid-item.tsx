'use client';

import { GridTileImage } from 'components/grid/tile';

import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ThreeItemGridItem({
  item,
  size
}: {
  item: Product;
  size: 'full' | 'half';
}) {
  return (
    <div
      className={size === 'full' ? 'sm:col-span-4 sm:row-span-2' : 'sm:col-span-2 sm:row-span-1'}
    >
      <Link className="block h-full" href={`/sanity/page/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          fill={true}
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          verticalWriteMode={size === 'full' ? true : false}
          decorate={true}
          priority={true}
          alt={item.title}
          labels={{
            position: size === 'full' ? 'bottom' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}
