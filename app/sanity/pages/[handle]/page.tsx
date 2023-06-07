import PageHero from 'components/sanity-ui/heroes/page';
import { clientFetch } from 'lib/sanity/sanity-rsc-config';
import { SANITY_PAGE_QUERY } from 'lib/sanity/sanity.queries';

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

export default async function SanityPagePage({ params }: { params: { handle: string } }) {
  const page = await clientFetch(SANITY_PAGE_QUERY, { slug: params.handle });

  console.log('SANITY_PAGE_QUERY : ' + JSON.stringify(page));

  return (
    <section>
      {/* Page hero */}
      <PageHero fallbackTitle={page.title} hero={page.hero} />
    </section>
  );
}
