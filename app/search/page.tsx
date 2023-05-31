import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const runtime = 'edge';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });

  // products.forEach(
  //   async (product , index) => {
  //     const buff = Buffer.from(product.featuredImage.url, "utf-8");
  //     const { base64 } =  await getPlaiceholder(buff)
  //     product['blurDataURL']=base64
  //   }
  // )

  const resultsText = products.length > 1 ? 'results' : 'result';

  console.log('product list component............');

  return (
    <>
      {searchValue ? (
        <p>
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-8">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
