import { ReactNode } from 'react';

export function CtaBanner({
  ctaText,
  ctaTo,
  description,
  headline,
  variant = 'primary'
}: {
  ctaText: ReactNode;
  ctaTo: string;
  description: ReactNode;
  headline: ReactNode;
  variant: 'primary' | 'secondary';
}) {
  return (
    <article className=" relative border-t border-zinc-700 bg-gray-50 px-4 py-24 text-zinc-900 xl:flex xl:px-6 xl:py-32">
      <h1 className="max-w-lg flex-1 text-6xl font-bold xl:text-right">{headline}</h1>

      <div className="mt-3 flex-1 xl:mx-2 ">
        <div className="mx-4 xl:absolute xl:top-2 xl:h-full">
          <div className="flex  h-full  items-center justify-center">
            <p className=" font-serif text-xl ">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
