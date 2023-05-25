import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-pulse bg-gray-400 dark:bg-gray-900">
          <GridTileImage
            alt={product.title}
            labels={{
              isSmall: true,
              title: product.title,
              amount: product.priceRange.maxVariantPrice.amount,
              currencyCode: product.priceRange.maxVariantPrice.currencyCode
            }}
            src={product.featuredImage?.url}
            width={600}
            height={600}
            background="white"
          />
        </Grid.Item>
      ))}
    </>
  );
}
