'use client';

// import { Button } from '@tremor/react';
import type { AnimationEvent } from 'react';
import { useInView } from 'react-intersection-observer';

export function Intrigue({}: {}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    root: null,
    // rootMargin: '0px',
    threshold: 0.4
  });

  const handleTransitionEnd = (e: AnimationEvent<HTMLDivElement>) => {
    e.preventDefault();

    const elem = document.getElementById('sectionintregue');
    elem && elem.classList.remove('sticky');
    elem && elem.classList.remove('top-0');
    elem && elem.classList.remove('left-0');
    elem && elem.classList.add('absolute');
    const videoelem = document.getElementById('video');
    videoelem && videoelem.classList.remove('animate-videoFadeIn');
    const elm2 = document.getElementById('sectionintriguecaption');
    elm2 && elm2.scrollIntoView();
  };
  return (
    <>
      <div
        id="sectionintregue"
        className=" sticky top-0  h-screen w-full  items-center justify-center"
      >
        <div ref={ref} className="h-screen w-full items-center justify-center">
          {inView ? (
            <>
              <div id="Hero" className="hidden h-screen w-full items-center justify-center sm:flex">
                <video
                  id="video"
                  controls={false}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className="h-screen w-full animate-videoFadeIn"
                >
                  <source src="LVMH.webm" type="video/webm" />
                </video>
              </div>
              <div id="Hero" className="flex h-screen w-full items-center justify-center sm:hidden">
                <video
                  id="video"
                  controls={false}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className="h-screen w-full animate-videoFadeIn"
                >
                  <source src="LVMH-MHero.webm" type="video/webm" />
                </video>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div
        id="sectionintriguecaption"
        className=" relative flex  h-screen  w-full items-center justify-center"
      >
        {inView ? (
          <div
            onAnimationEnd={(e: AnimationEvent<HTMLDivElement>) => handleTransitionEnd(e)}
            className="relative w-[60%] animate-longStickyFadeIn"
          >
            <h1 className="m-1 scroll-m-2 text-sm tracking-tight text-white  sm:m-4 sm:scroll-m-20 sm:text-5xl sm:font-extrabold ">
              Sample Heading
            </h1>
            <p className="m-1 text-xs  text-white  sm:m-4 sm:text-base sm:leading-7">
              Lorem ipsum dolor sit amet, minim mentitum qui cu, id malis suscipiantur qui, no quo
              mutat oporteat vulputate. Eos ex malis numquam electram. Dictas sententiae definiebas
              ius in. Dico tota antiopam qui ne. Agam dolores id pro. Vis an quodsi elaboraret, ius
              augue torquatos cu.
            </p>
            <button className="m-1 text-white sm:m-4"> Action Button </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
