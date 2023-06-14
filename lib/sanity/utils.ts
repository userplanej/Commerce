import pluralize from 'pluralize-esm';
import { SanityCustomProductOption } from './types';

export const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

/**
 * Get the product options as a string, e.g. "Color / Size / Title"
 */
export const getProductOptionString = (options?: SanityCustomProductOption[]) => {
  return options
    ?.map(({ name, values }: { name: string; values: any[] }) =>
      pluralize(name, values.length, true)
    )
    .join(' / ');
};
// export const getProductOptionString = (options?: SanityCustomProductOption[]) => {
//   return "3 Colors";
// };
/**
 * Check if a product has multiple options, e.g. Color / Size / Title
 */

export const hasMultipleProductOptions = (options?: SanityCustomProductOption[]) => {
  const firstOption = options?.[0];
  if (!firstOption) {
    return false;
  }

  return firstOption.name !== 'Title' && firstOption.values[0] !== 'Default Title';
};
