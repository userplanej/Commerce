import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import ThreeItemGridItem from './three-items-gid-item';

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts('hidden-homepage-featured-items');

  //if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct]: Product[] = homepageItems;

  return (
    <section className="sm:grid sm:grid-cols-6 sm:grid-rows-3" data-testid="homepage-products">
      <ThreeItemGridItem size="full" item={firstProduct!} />
      <ThreeItemGridItem size="half" item={secondProduct!} />
      <ThreeItemGridItem size="half" item={thirdProduct!} />
    </section>
  );
}
