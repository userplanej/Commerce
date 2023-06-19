'use client';

import clsx from 'clsx';

import Link from 'next/link';

import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { Product } from 'lib/shopify/types';
import ProductTile from './tile';

type Props = {
  storefrontProduct: Product;
  variantGid?: string;
  x: number;
  y: number;
};

export default function ProductHotspot({ storefrontProduct, x, y }: Props) {
  //console.log('==>>ProductHotspot storefrontProduct : ' + JSON.stringify(storefrontProduct));
  if (!storefrontProduct) {
    return null;
  }
  const defaultTippyProps: Omit<TippyProps, 'content' | 'children'> = {
    hideOnClick: false,
    interactive: true,
    sticky: true
  };
  return (
    <Tippy
      placement="top"
      {...defaultTippyProps}
      render={() => {
        return <ProductTile storefrontProduct={storefrontProduct} />;
      }}
    >
      <Link
        className={clsx(
          'bg-offBlack absolute left-[50%] top-[50%] flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center rounded-full duration-300 ease-out',
          'hover:scale-125 hover:animate-none'
        )}
        style={{
          left: `${x}%`,
          top: `${y}%`
        }}
        href={`/product/${storefrontProduct.handle}`}
      >
        <div className="relative h-[16px] w-[16px] rounded-full bg-yellow-400 " />
      </Link>
    </Tippy>
  );
}
