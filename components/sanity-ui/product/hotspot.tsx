'use client';

import { TippyProps } from '@tippyjs/react/headless';
import { Product } from 'lib/shopify/types';

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
    interactive: true
    //sticky: true
  };
  return <></>;
}
