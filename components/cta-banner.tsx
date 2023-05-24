import Link from 'next/link';
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
    <article className="  text-zinc-900 ">
      <div className="">
        <div className="lg:grid lg:grid-cols-6">
          <h1 className="max-w-lg text-3xl font-bold lg:col-span-2  lg:h-auto lg:lg:border-2 lg:border-gray-800 lg:text-right">
            <p className="">{headline}</p>
          </h1>

          <div className=" h-auto lg:col-span-4 lg:border-2 lg:border-gray-800">
            <p className="text-xl font-light">{description}</p>
            <p>
              <Link className="group inline-flex items-center" href={ctaTo}>
                <span className="text-xl font-semibold hover:underline focus:underline group-hover:underline group-focus:underline">
                  {ctaText}
                </span>
                <svg
                  className="h-6 w-6 motion-safe:group-hover:animate-pulse motion-safe:group-focus:animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
