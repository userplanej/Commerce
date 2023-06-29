'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useInView } from 'react-intersection-observer';

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
        opacity: 0.25,
        y: 60,
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

  // moodBoardGsapDescriptionMobile

  useEffect(() => {
    const element = ref_moodboard.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector('.moodBoardGsapDescriptionMobile'),
      {
        opacity: 0.25,
        y: 60,
        ease: 'power3'
      },
      {
        opacity: 1,
        y: 0,
        ease: 'power3',
        scrollTrigger: {
          // @ts-ignore
          trigger: element.querySelector('.moodBoardGsapBoundMobile'),
          start: 'top 60%', // moodBoardGsapDescriptionMobile
          end: 'bottom 100%',
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
        opacity: 0.25,
        y: 0,
        ease: 'power3'
      },
      {
        opacity: 1,
        y: -30,
        ease: 'power3',
        scrollTrigger: {
          // @ts-ignore
          trigger: element.querySelector('.moodBoardGsapBound'),
          start: 'top 30%', // pMoodBoardVideo
          end: 'bottom 20%',
          scrub: true
        }
      }
    );
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6
  });

  return (
    <div ref={ref_moodboard}>
      <section id="MoodBoardSection" className="moodBoardGsapBound m-0 flex p-0 sm:my-10 sm:py-10">
        <div ref={ref} id="media" className="inset-0 hidden w-[56.6vw] sm:block ">
          {inView ? (
            <Image
              src="/lvmh-moodboard-left.avif"
              alt="interior-1"
              width="900"
              height="1200"
              sizes="60vw"
              className="relative animate-flipIn"
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <Image
              src="/lvmh-moodboard-left-placeholder-s.webp"
              alt="interior-1"
              width="900"
              height="1200"
              sizes="60vw"
              className="animate-fadeIn"
              style={{ objectFit: 'contain' }}
            />
          )}
        </div>

        <div
          id="description"
          className=" flex w-full flex-col-reverse  p-0 sm:w-[40vw] sm:flex-col "
        >
          <div
            id="descriptionContainer"
            className=" moodBoardGsapBoundMobile relative mb-1 flex  h-[50vh] w-full flex-col items-center justify-center sm:mb-40 sm:h-[33vh] sm:items-end sm:justify-center "
          >
            <div className="  mr-2  flex h-full w-[80vw] flex-col items-center justify-center sm:h-[196px] sm:w-[313px] sm:items-start sm:justify-end sm:leading-7">
              <p
                className="moodBoardGsapDescription hidden sm:block"
                style={{
                  transform: 'translateY(60px)',
                  opacity: 0.25
                }}
              >
                An enduring feminine icon, the Capucines symbolizes the quintessence of Louis
                Vuitton, crafted with An intuitive blend of elegance, versatility, and savoir-faire.
                Reimagined in a vibrant spring hue, Zendaya showcases the iconic handbag in Topaz
                blue.
              </p>
              <p
                className="moodBoardGsapDescriptionMobile block sm:hidden"
                style={{
                  transform: 'translateY(60px)',
                  opacity: 0.25
                }}
              >
                An enduring feminine icon, the Capucines symbolizes the quintessence of Louis
                Vuitton, crafted with An intuitive blend of elegance, versatility, and savoir-faire.
                Reimagined in a vibrant spring hue, Zendaya showcases the iconic handbag in Topaz
                blue.
              </p>
            </div>
          </div>

          <div className="relative sm:h-[67vh] sm:pl-7">
            <div id="Hero2" className="hidden sm:block">
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
                  transform: 'translateY(0px)'
                }}
                className="pMoodBoardVideo"
              >
                <source src="LVMH-mood-small.webm" type="video/webm" />
              </video>
            </div>
            <div className=" block sm:hidden">
              <Image
                src="/lvmh.webp"
                alt="interior-1"
                width="400"
                height="500"
                sizes="100vw"
                className="pMoodBoardVideo"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
