/* eslint-disable unicorn/filename-case */
'use client';

import type { Collection } from 'lib/shopify/types';
import { useState } from 'react';

import type { SanityModule } from 'lib/sanity/types';
import ModuleGrid from '../modules/moduleGrid';

export default function ProductGrid({
  collection,
  modules,
  url
}: {
  collection: Collection;
  modules: SanityModule[];
  url: string;
}) {
  //const products = collection?.products?.nodes || [];
  // const combinedItems = combineProductsAndModules({
  //   modules,
  //   products,
  // });

  const combinedItems = modules;
  const [initialItems, setInitialItems] = useState(combinedItems || []);
  const [items, setItems] = useState(initialItems);

  //   const [nextPage, setNextPage] = useState(
  //     collection?.products?.pageInfo?.hasNextPage,
  //   );

  //   const [endCursor, setEndCursor] = useState(
  //     collection?.products?.pageInfo?.endCursor,
  //   );

  return (
    <>
      <ModuleGrid items={items} />
    </>
  );
}
