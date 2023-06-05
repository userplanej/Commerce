import { clientFetch } from 'app/sanity';
import ProductGrid from 'components/sanity-ui/collection/productGrid';
import { COLLECTION_PAGE_QUERY } from 'lib/sanity/sanity.queries';
import { groq } from 'next-sanity';

export const runtime = 'edge';

// export async function generateMetadata({
//   params
// }: {
//   params: { collection: string };
// }): Promise<Metadata> {
//   const collection = await getCollection(params.collection);

//   if (!collection) return notFound();

//   return {
//     title: collection.seo?.title || collection.title,
//     description:
//       collection.seo?.description || collection.description || `${collection.title} products`,
//     openGraph: {
//       images: [
//         {
//           url: `/api/og?title=${encodeURIComponent(collection.title)}`,
//           width: 1200,
//           height: 630
//         }
//       ]
//     }
//   };
// }

export default async function CategoryPage({ params }: { params: { handle: string } }) {
  console.log(JSON.stringify(params));
  const page = await clientFetch(COLLECTION_PAGE_QUERY, { slug: params.handle });
  const collection = await clientFetch(
    groq`*[_type == 'collection'&& store.slug.current == 'sneakers']`
  );
  return (
    <section>
      <ProductGrid
        collection={collection}
        modules={page.modules}
        url={`/collections/${collection.handle}`}
        key={`${collection.handle}`}
      />
    </section>
  );
}
