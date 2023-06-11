import { PortableTextBlock } from '@portabletext/types';
import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  value: PortableTextBlock;
};

export default function Block({ children, value }: Props) {
  if (value.style === 'h2') {
    return (
      <h2
        className={clsx(
          'first:mt-0 last:mb-0', //
          'mb-4 mt-16 text-xl font-bold'
        )}
      >
        {children}
      </h2>
    );
  }

  if (value.style === 'h1') {
    return (
      <div className="relative left-1/2 right-1/2 my-12 ml-[-50vw] mr-[-50vw] w-screen px-6 first:mt-0 last:mb-0 md:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mr-auto flex flex-col items-start">
            <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-8xl font-extrabold text-transparent">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Pragraphs
  return (
    <p
      className={clsx(
        'first:mt-0 last:mb-0', //
        'leading-paragraph relative my-4'
      )}
    >
      {children}
    </p>
  );
}
