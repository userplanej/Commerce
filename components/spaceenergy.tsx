'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Gradient } from 'lib/MeshGradient.js';

export function SpaceEnergySection({}: {}) {
  gsap.registerPlugin(ScrollTrigger);

  const ref_spaceEnergy = useRef(null);

  useEffect(() => {
    const gradient = new Gradient();
    // @ts-ignore
    gradient.initGradient('#gradient-canvas');
  }, []);

  // spaceEnergyGsappContent
  useEffect(() => {
    const element = ref_spaceEnergy.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector('.spaceEnergyGsappContent'),
      {
        opacity: 0.25,
        y: 60,
        duration: 1.6,
        ease: 'power3'
      },
      {
        opacity: 1,
        y: 0,
        ease: 'power3',
        scrollTrigger: {
          // @ts-ignore
          trigger: element.querySelector('.spaceEnergyGsapBound'),
          start: 'top 60%',
          end: 'bottom 100%',
          scrub: true
        }
      }
    );
  }, []);

  // spaceEnergyGsapMedia
  useEffect(() => {
    const element = ref_spaceEnergy.current;
    gsap.fromTo(
      // @ts-ignore
      element.querySelector('.spaceEnergyGsapMedia'),
      {
        opacity: 0.25,
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
          trigger: element.querySelector('.spaceEnergyGsapBound'),
          start: 'top 60%',
          end: 'bottom 100%',
          scrub: true
        }
      }
    );
  }, []);

  return (
    <>
      <div ref={ref_spaceEnergy} id="SpaceEnergySection" className="relative h-screen w-full">
        <canvas className="gradientStyles" id="gradient-canvas" data-transition-in />

        <div className="spaceEnergyGsapBound flex h-full w-full items-center justify-between align-middle ">
          <div className="container  flex h-[33vh] items-start justify-center ">
            <div className="  mr-2 h-[196px] w-[313px] leading-7">
              <p
                className="spaceEnergyGsappContent"
                style={{
                  transform: 'translateY(100px)',
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

          <div className=" flex-1">
            <Image
              src="/vulgari1.webp"
              alt="interior-1"
              width="810"
              height="542"
              sizes="50vw"
              className="spaceEnergyGsapMedia"
              style={{ transform: 'translateY(-0px)', opacity: 0.8 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
