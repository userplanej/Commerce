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
    console.log('#########HandleOnTransition');
    const elem = document.getElementById('sectionintregue');
    elem && elem.classList.remove('sticky');
    elem && elem.classList.remove('top-0');
    elem && elem.classList.remove('left-0');
    elem && elem.classList.add('absolute');
    elem && elem.scrollIntoView();
  };
  return (
    <>
      <div
        id="sectionintregue"
        className=" sticky top-0 hidden h-screen w-full  items-center justify-center sm:flex "
      >
        <div ref={ref} className="h-screen w-full">
          {inView ? (
            <>
              <div id="Hero" className="flex h-screen w-full items-center justify-center">
                <video
                  controls={false}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className="hidden h-screen w-full animate-videoFadeIn sm:block"
                >
                  <source src="LVMH-Hero.mp4" type="video/webm" />
                </video>
              </div>
              <div id="MHero" className="flex h-screen w-full items-center justify-center">
                <video
                  controls={false}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  className=" h-screen  w-full animate-videoFadeIn sm:hidden"
                >
                  <source src="LVMH-MHero.mp4" type="video/webm" />
                </video>
              </div>
            </>
          ) : (
            <div id="Hero" className="flex h-screen w-full items-center justify-center">
              <video
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
                className="hidden h-[73%] w-[73%] animate-videoFadeIn opacity-25 sm:block"
              >
                <source src="LVMH-Hero.mp4" type="video/webm" />
              </video>
            </div>
          )}
        </div>
      </div>
      <div className=" relative flex  h-screen  w-full items-center justify-center">
        {inView ? (
          <div
            onAnimationEnd={(e: AnimationEvent<HTMLDivElement>) => handleTransitionEnd(e)}
            className="relative w-[60%] animate-longStickyFadeIn"
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
            <button className="m-4 text-white"> Action Button </button>
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
            <button className="m-4 text-white"> Action Button </button>
          </div>
        )}
      </div>
    </>
  );
}
