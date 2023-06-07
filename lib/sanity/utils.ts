import { extractWithPath } from '@sanity/mutator';

import pluralize from 'pluralize-esm';

import type {
  SanityCollectionPage,
  SanityHomePage,
  SanityPage,
  SanityProductPage
} from 'lib/sanity/types';

import type { Collection, Product, ProductOption, ProductVariant } from 'lib/shopify/types';

const extract = (...args: Parameters<typeof extractWithPath>) =>
  extractWithPath(...args).map(({ value }) => value);

export async function fetchGids({
  page
}: {
  page: SanityHomePage | SanityPage | SanityCollectionPage | SanityProductPage;
}) {
  const products = extract(`..[_type == "productWithVariant"].gid`, page);
  const collections = extract(`..[_type == "collection"].gid`, page);

  // const {products, collections} =
  //   await context.storefront.query<StorefrontPayload>(
  //     PRODUCTS_AND_COLLECTIONS,
  //     {
  //       variables: {
  //         ids: productGids,
  //         collectionIds: collectionGids,
  //       },
  //     },
  //   );

  return extract(`..[id?]`, [...products, ...collections]) as (
    | Product
    | Collection
    | ProductVariant
  )[];
}

export const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

/**
 * Get the product options as a string, e.g. "Color / Size / Title"
 */
export const getProductOptionString = (options?: ProductOption[]) => {
  return options?.map(({ name, values }) => pluralize(name, values.length, true)).join(' / ');
};

/**
 * Check if a product has multiple options, e.g. Color / Size / Title
 */

export const hasMultipleProductOptions = (options?: ProductOption[]) => {
  const firstOption = options?.[0];
  if (!firstOption) {
    return false;
  }

  return firstOption.name !== 'Title' && firstOption.values[0] !== 'Default Title';
};

// export function useGids(gids) {

//   // TODO: this doesnt' seem to actually memoize...
//   return useMemo(() => {
//     const byGid = new Map<
//       string,
//       Product | Collection | ProductVariant | ProductVariant['image']
//     >();

//     if (!Array.isArray(gids)) {
//       return byGid;
//     }

//     for (const gid of gids) {
//       if (byGid.has(gid.id)) {
//         continue;
//       }

//       byGid.set(gid.id, gid);
//     }

//     return byGid;
//   }, [gids]);
// }
