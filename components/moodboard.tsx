'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function LVMHMoodBoard({}: {}) {
  gsap.registerPlugin(ScrollTrigger);

  const ref_moodboard = useRef(null);

  // moodBoardGsapDescription
  useEffect(() => {
    const element = ref_moodboard.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector('.moodBoardGsapDescription'),
      {
        opacity: 0,
        y: 50,
        duration: 1.6,
        ease: 'power3'
      },
      {
        opacity: 1,
        y: 0,
        ease: 'power3',
        scrollTrigger: {
          // @ts-ignore
          trigger: element.querySelector('.moodBoardGsapBound'),
          start: 'top 80%', // moodBoardGsapDescription
          end: 'top 40%',
          scrub: true
        }
      }
    );
  }, []);

  // pMoodBoardVideo
  useEffect(() => {
    const element = ref_moodboard.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector('.pMoodBoardVideo'),
      {
        opacity: 0.5,
        y: -50,
        duration: 1.6,
        ease: 'power3'
      },
      {
        opacity: 1,
        y: 0,
        ease: 'power3',
        scrollTrigger: {
          // @ts-ignore
          trigger: element.querySelector('.moodBoardGsapBound'),
          start: 'top 30%', // pMoodBoardVideo
          end: 'bottom 80%',
          scrub: true
        }
      }
    );
  }, []);

  return (
    <>
      <section ref={ref_moodboard} id="MoodBoardSection" className="my-10 flex py-10">
        <div id="media" className="moodBoardGsapBound inset-0 w-[56.6vw] ">
          <Image
            src="/lvmh-moodboard-left.avif"
            alt="interior-1"
            width="900"
            height="1200"
            sizes="60vw"
            className="relative"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div id="description" className=" flex w-[40vw] flex-col p-0 ">
          <div className=" relative mb-40  flex  h-[33vh] items-start justify-end">
            <div className="  mr-2  h-[196px] w-[313px] leading-7">
              <p
                className="moodBoardGsapDescription"
                style={{
                  transform: 'translateY(50px)',
                  opacity: 0
                }}
              >
                An enduring feminine icon, the Capucines symbolizes the quintessence of Louis
                Vuitton, crafted with An intuitive blend of elegance, versatility, and savoir-faire.
                Reimagined in a vibrant spring hue, Zendaya showcases the iconic handbag in Topaz
                blue.
              </p>
            </div>
          </div>

          <div className="relative h-[67vh] pl-7">
            <div
              id="Hero2"
              style={{
                // We position the video wrapper absolutely
                // to the top of the parent element
                // (the div in the `App` component).
                // This only works because we set a `position` in `App`.
                // position: 'absolute',
                // top: 0,

                // To make sure the video is
                // rendered underneath both banners.
                zIndex: -1,

                // Flex box with these "center" styles to
                // always center the video, both horizontally
                // and vertically.
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                // 100% width/height for the horizontal/vertical
                // alignments with flex to work nicely.
                width: '100%',
                height: '100%',

                // Hide any overflow, in case the video sticks-out
                // below the second banner, which can happen if
                // the screen size gets too wide.
                overflow: 'hidden'
              }}
            >
              <video
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
                style={{
                  // The video is allowed to scale it's width
                  // to the width of the wrapper.
                  width: '100%',
                  // But the height should auto adjust
                  // to keep the aspect-ratio.
                  // Note, 'auto' is the default value anyway,
                  // so you could actually leave this `height` out.
                  height: 'auto',
                  transform: 'translateY(-50px)',
                  opacity: 0.5
                }}
                className="pMoodBoardVideo"
              >
                <source src="LVMH-mood-small.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
