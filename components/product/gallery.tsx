'use client';

import { useRef, useState } from 'react';

import clsx from 'clsx';
import { GridTileImage } from 'components/grid/tile';
import ArrowLeftIcon from 'components/icons/arrow-left';
import { flushSync } from 'react-dom';

export function Gallery({
  title,
  amount,
  currencyCode,
  images
}: {
  title: string;
  amount: string;
  currencyCode: string;
  images: { src: string; altText: string }[];
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const GalleryRef = useRef<HTMLImageElement>(null);

  function handleNavigate(direction: 'next' | 'previous') {
    // if (direction === 'next') {
    //   setCurrentImage(currentImage + 1 < images.length ? currentImage + 1 : 0);
    // } else {
    //   setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    // }
    const displayNewImage = () => {
      if (direction === 'next') {
        setCurrentImage(currentImage + 1 < images.length ? currentImage + 1 : 0);
      } else {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
      }
    };
    // Fallback for browsers that don't support View Transitions:
    /* @ts-expect-error  Server Component */
    if (!document.startViewTransition) {
      displayNewImage();
      return;
    }
    /* @ts-expect-error Server Component */
    const transition = document.startViewTransition(() => displayNewImage());
  }

  const buttonClassName =
    'px-9 cursor-pointer ease-in-and-out duration-200 transition-bg bg-[#7928ca] hover:bg-violetDark';

  function updateView(index: number) {
    const displayNewImage = () => {
      flushSync(() => {
        setCurrentImage(index);
      });
    };
    // Fallback for browsers that don't support View Transitions:
    /* @ts-expect-error Server Component */
    if (!document.startViewTransition) {
      displayNewImage();
      return;
    }
    /* @ts-expect-error Server Component */
    const transition = document.startViewTransition(() => displayNewImage());
  }

  function updateRef(index: number) {
    const displayNewImage = () => {
      console.log(GalleryRef.current);
      // futureGalleryRefInner = getFutureGalleryRefInner()
      // GalleryRef.current!.innerHTML = futureGalleryRefInner
      GalleryRef.current!.innerHTML = '<p>abc</p>';
    };
    // Fallback for browsers that don't support View Transitions:

    // if (!document.startViewTransition) {
    //   displayNewImage();
    //   return;
    // }

    // state 업데이트 하지 않고 , html 을 직접 변경하는 이유는
    // document.startViewTransition() API 사용 시, View Transition 을 위해 정의한
    // 스타일을 그대로 적용하기 위함.
    // TODO 범용적으로 사용할 수 있는 구조인지 확인

    /* @ts-expect-error Server Component */
    const transition = document.startViewTransition(() => displayNewImage());
  }

  return (
    <div className="h-full justify-center align-middle">
      <div className="relative h-full max-h-[600px] max-w-[750px] overflow-hidden">
        {images[currentImage] && (
          <GridTileImage
            src={images[currentImage]?.src as string}
            alt={images[currentImage]?.altText as string}
            width={600}
            height={600}
            isInteractive={false}
            priority={true}
            background="purple"
            labels={{
              title,
              amount,
              currencyCode
            }}
          />
        )}
        {/*images[currentImage] && (
            <RefGridImage
              src={images[currentImage]?.src as string}
              alt={images[currentImage]?.altText as string}
              width={600}
              height={600}
              isInteractive={false}
              priority={true}
              background="purple"
              labels={{
                title,
                amount,
                currencyCode
              }}
              ref = {GalleryRef}
            />
            )*/}
        {images.length > 1 ? (
          <div className="absolute bottom-10 right-10 flex h-12 flex-row border border-white text-white shadow-xl dark:border-black dark:text-black">
            <button
              aria-label="Previous product image"
              className={clsx(buttonClassName, 'border-r border-white dark:border-black')}
              onClick={() => handleNavigate('previous')}
            >
              <ArrowLeftIcon className="h-6" />
            </button>
            <button
              aria-label="Next product image"
              className={clsx(buttonClassName)}
              onClick={() => handleNavigate('next')}
            >
              <ArrowLeftIcon className="h-6 rotate-180" />
            </button>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="flex">
          {images.map((image, index) => {
            const isActive = index === currentImage;
            return (
              <button
                aria-label="Enlarge product image"
                key={image.src}
                className="h-full w-1/4"
                onClick={() => updateView(index)}
              >
                <GridTileImage
                  alt={image?.altText}
                  src={image.src}
                  width={600}
                  height={600}
                  background="purple-dark"
                  active={isActive}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
