import { Carousel } from 'components/carousel';
import { CtaBanner } from 'components/cta-banner';
import { ThreeItemGrid } from 'components/grid/three-items';
import { LVMHMoodBoard } from 'components/moodboard';
import { SpaceEnergySection } from 'components/spaceenergy';
import { Suspense } from 'react';
import { getTranslations } from './translations.server';

// export const runtime = 'edge';

// export const metadata = {
//   description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
//   openGraph: {
//     images: [
//       {
//         url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
//         width: 1200,
//         height: 630
//       }
//     ],
//     type: 'website'
//   }
// };

export default async function HomePage() {
  const translations = await getTranslations([
    'MockCTADescription',
    'MockCTAHeadline',
    'MockCTALink',
    'Add to wishlist',
    'Remove from wishlist'
  ]);

  return (
    <>
      <div className="bg-gradient-to-b from-orange-500/10 via-white/50 to-sky-900/80">
        <ThreeItemGrid />
      </div>

      <Carousel />

      <CtaBanner
        headline={translations.MockCTAHeadline}
        description={translations.MockCTADescription}
        ctaText={translations.MockCTALink}
        ctaTo="/"
        variant="secondary"
      />
      <Suspense>
        <LVMHMoodBoard />
      </Suspense>

      <Suspense>
        <SpaceEnergySection />
      </Suspense>
    </>
  );
}
