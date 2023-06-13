import { PortableTextBlock } from '@portabletext/types';
import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  value: PortableTextBlock;
};

export default function Block({ children, value }: Props) {
  if (value.style === 'h1') {
    return (
      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h2>
    );
  }
  if (value.style === 'h2') {
    return (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {children}
      </h2>
    );
  }
  if (value.style === 'h2-purple') {
    return (
      <div className="relative left-1/2 right-1/2 my-12 ml-[-50vw] mr-[-50vw] w-screen px-6 first:mt-0 last:mb-0 md:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mr-auto flex flex-col items-start ">
            <h2 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-3xl font-semibold  text-transparent ">
              {children}
            </h2>
          </div>
        </div>
      </div>
    );
  }
  if (value.style === 'h2-green') {
    return (
      <div className="relative left-1/2 right-1/2 my-12 ml-[-50vw] mr-[-50vw] w-screen px-6 first:mt-0 last:mb-0 md:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mr-auto flex flex-col items-start ">
            <h2 className="bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-3xl font-semibold  text-transparent ">
              {children}
            </h2>
          </div>
        </div>
      </div>
    );
  }
  if (value.style === 'h3') {
    return <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h2>;
  }
  if (value.style === 'code') {
    return (
      <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {children}
      </code>
    );
  }
  if (value.style === 'elabo-purple') {
    return (
      <div className="relative left-1/2 right-1/2 my-12 ml-[-50vw] mr-[-50vw] w-screen px-6 first:mt-0 last:mb-0 md:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="mr-auto flex flex-col items-start">
            <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent">
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
        'leading-7 [&:not(:first-child)]:mt-6' //
      )}
    >
      {children}
    </p>
  );
}
