'use client';

import type { AnimationEvent } from 'react';

import Image from 'next/image';

import { Button } from '@tremor/react';

import { useInView } from 'react-intersection-observer';

export function FerrariInterior({}: {}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    root: null,
    // rootMargin: '0px -60px',
    threshold: 0.9
  });

  const handleTransitionEnd = (e: AnimationEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('#########HandleOnTransition');
    const elem = document.getElementById('ferrariInterior');
    elem && elem.classList.remove('sticky');
    elem && elem.classList.remove('top-0');
    elem && elem.classList.remove('left-0');
    elem && elem.classList.add('absolute');

    const elm2 = document.getElementById('sectioncaption');
    elm2 && elm2.scrollIntoView();
  };

  return (
    <>
      <div id="ferrariInterior" className="sticky  top-0  h-screen w-full sm:flex">
        <div className="grid h-full w-full grid-cols-7 grid-rows-2 gap-1">
          <div className=" col-span-7 row-span-2 overflow-hidden">
            <Image
              src="/interior-ferrari4.webp"
              alt="interior-1"
              fill={true}
              sizes="1200"
              className="relative"
            />
          </div>
        </div>
      </div>

      <div
        ref={ref}
        id="sectioncaption"
        className="relative z-30  hidden h-screen    w-full items-center justify-center sm:flex"
      >
        {inView ? (
          <div
            onAnimationEnd={(e: AnimationEvent<HTMLDivElement>) => handleTransitionEnd(e)}
            className="relative w-[60%] animate-stickyFadeIn"
          >
            <h1 className="m-4 scroll-m-20 text-5xl font-extrabold tracking-tight text-white lg:text-5xl ">
              Sample Heading
            </h1>
            <p className="m-4 leading-7  text-white">
              Lorem ipsum dolor sit amet, minim mentitum qui cu, id malis suscipiantur qui, no quo
              mutat oporteat vulputate. Eos ex malis numquam electram. Dictas sententiae definiebas
              ius in. Dico tota antiopam qui ne. Agam dolores id pro. Vis an quodsi elaboraret, ius
              augue torquatos cu.
            </p>
            <Button size="xl" className="m-4 text-white">
              {' '}
              Action Button{' '}
            </Button>
          </div>
        ) : (
          <div className="relative w-[60%]">
            <h1 className="m-4 scroll-m-20 text-5xl font-extrabold tracking-tight text-amber-200 text-opacity-25">
              Sample Heading
            </h1>
            <p className="m-4 font-[400] leading-7 text-white  text-opacity-25 ">
              Lorem ipsum dolor sit amet, minim mentitum qui cu, id malis suscipiantur qui, no quo
              mutat oporteat vulputate. Eos ex malis numquam electram. Dictas sententiae definiebas
              ius in. Dico tota antiopam qui ne. Agam dolores id pro. Vis an quodsi elaboraret, ius
              augue torquatos cu.
            </p>
            <Button size="xl" className="m-4 text-white">
              {' '}
              Action Button{' '}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
