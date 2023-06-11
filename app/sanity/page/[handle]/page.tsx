import clsx from 'clsx';
import Footer from 'components/layout/footer';
import PageHero from 'components/sanity-ui/heroes/page';
import PortableText from 'components/sanity-ui/portableText/portable-text';
import { clientFetch } from 'lib/sanity/sanity-rsc-config';
import { SANITY_PAGE_QUERY } from 'lib/sanity/sanity.queries';
export const runtime = 'edge';

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
  const page = await clientFetch(SANITY_PAGE_QUERY, { slug: params.handle });

  //console.log('SANITY_PAGE_QUERY : ' + SANITY_PAGE_QUERY);

  return (
    <section>
      {/* Page hero */}
      <PageHero fallbackTitle={page.title} hero={page.hero} />
      {/* Body */}
      {page.body && (
        <PortableText
          blocks={page.body}
          centered
          className={clsx(
            'mx-auto flex  max-w-[660px] flex-col px-4 pb-24 pt-8', //
            'md:px-8'
          )}
        />
      )}
      {/* @ts-expect-error Server Component */}
      <Footer />
    </section>
  );
}
