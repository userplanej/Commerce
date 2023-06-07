import clsx from 'clsx';
import { Product } from 'lib/shopify/types';

import Link from 'next/link';

type Props = {
  storefrontProduct: Product;
};

export default function ProductTile({ storefrontProduct }: Props) {
  // const firstVariant =
  //   storefrontProduct.variants.nodes.find(
  //     (variant) => variant.id == variantGid,
  //   ) ??
  //   storefrontProduct.variants.nodes[0];

  // if (!(storefrontProduct && firstVariant)) {
  //   return null;
  // }

  // const {availableForSale, compareAtPrice} = firstVariant;
  console.log('==>>ProductTile Product.title : ' + JSON.stringify(storefrontProduct));

  //
  return (
    <Link href={`/product/${storefrontProduct.handle}`}>
      <div
        className={clsx(
          'group min-w-[12.5em] rounded-md bg-yellow-400 p-5 transition-[border-radius] duration-500 ease-out',
          'hover:rounded-xl'
        )}
        role="row"
      >
        <div className="overflow-hidden">
          {/* Title */}
          <div className="truncate text-lg font-bold group-hover:underline">
            {storefrontProduct.title}
          </div>
        </div>
      </div>
    </Link>
  );
}
