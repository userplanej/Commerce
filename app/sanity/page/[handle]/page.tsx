import Footer from 'components/layout/footer';
import { sanityClient } from 'lib/sanity/sanity-rsc-config';
import { SANITY_PAGE_QUERY } from 'lib/sanity/sanity.queries';
import { SanityPage } from 'lib/sanity/types';
//export const runtime = 'edge';

// TODO : sanity doc 으로부터 seo 세그먼트 읽어와서 반영
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
  //const page = await clientFetch(SANITY_PAGE_QUERY, { slug: params.handle });
  const { handle } = await params;
  const page = await sanityClient.fetch<SanityPage>({
    query: SANITY_PAGE_QUERY,
    params: {
      slug: handle
    },
    config: {
      next: { revalidate: 60 }
    }
  });

  // console.log('SANITY_PAGE_QUERY : ' + SANITY_PAGE_QUERY);

  return (
    <section>
      {/* Page hero */}

      {/* Body */}

      {/* @ts-expect-error Server Component */}
      <Footer />
    </section>
  );
}
