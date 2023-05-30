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
  const div_class = size === 'full' ? 'lg:col-span-4 lg:row-span-2' : 'lg:col-span-2 lg:row-span-1';

  return (
    <div className={div_class}>
      <Link className="block h-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          width={size === 'full' ? 1080 : 540}
          height={size === 'full' ? 1080 : 540}
          verticalWriteMode={size === 'full' ? true : false}
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
