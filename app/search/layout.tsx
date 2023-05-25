import Loading from 'app/search/loading';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className=" mb-14 mr-1.5 mt-14  block w-full overflow-hidden bg-white  pl-7  text-black dark:bg-black dark:text-white">
        {/*
        <div className="order-first flex-none md:w-1/6">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        <div className="order-none md:order-last md:w-1/6 md:flex-none">
          <FilterList list={sorting} title="Sort by" />
        </div>
      */}
        <div className="">{children}</div>
      </div>

      {/* @ts-expect-error Server Component */}
      <Footer />
    </Suspense>
  );
}
