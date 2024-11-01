import clsx from 'clsx';
import Image from 'next/image';

import Label from 'components/label';
import { ForwardedRef, forwardRef } from 'react';

export function GridTileImage({
  isInteractive = true,
  active,
  labels,
  verticalWriteMode,
  decorate = false,
  ...props
}: {
  isInteractive?: boolean;
  verticalWriteMode?: boolean;
  decorate?: boolean;
  active?: boolean;
  labels?: {
    position?: 'center' | 'bottom';
    title: string;
    amount: string;
    currencyCode: string;
    isSmall?: boolean;
  };
} & React.ComponentProps<typeof Image>) {
  const title = labels!.title ? labels!.title.split('|')[1] : null,
    brand = labels!.title ? labels!.title.split('|')[0] : null;

  return (
    <div className="h-full w-full bg-transparent">
      {verticalWriteMode ? (
        <div>{labels!.title ? <div className="writing-mode-h">{brand}</div> : null}</div>
      ) : null}

      <div className="flex h-full w-full flex-row bg-transparent">
        {verticalWriteMode ? (
          labels!.title ? (
            <div className="writing-mode-v">{title}</div>
          ) : null
        ) : null}

        <div
          className={clsx(
            'group flex h-[90%] w-[90%] items-center justify-center overflow-hidden rounded-lg border bg-transparent hover:border-blue-600 dark:bg-black',
            {
              relative: labels,
              'border-2 border-blue-600': active,
              'border-neutral-200 dark:border-neutral-800': !active
            }
          )}
        >
          <Image
            className={clsx('relative object-contain', {
              'transition duration-300 ease-in-out hover:scale-105': isInteractive
            })}
            {...props}
            alt={props.title || ''}
          />

          {labels ? (
            <Label
              title={labels.title}
              amount={labels.amount}
              currencyCode={labels.currencyCode}
              position={labels.position}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export const RefGridImage = forwardRef(
  (
    {
      isInteractive = true,
      background,
      active,
      labels,
      ...props
    }: {
      isInteractive?: boolean;
      background?: 'white' | 'pink' | 'purple' | 'black' | 'purple-dark' | 'blue' | 'cyan' | 'gray';
      active?: boolean;
      labels?: {
        title: string;
        amount: string;
        currencyCode: string;
        isSmall?: boolean;
      };
    } & React.ComponentProps<typeof Image>,
    ref: ForwardedRef<HTMLImageElement>
  ) => {
    return (
      <div ref={ref}>
        <div
          className={clsx(
            '  relative mt-3 flex h-0  flex-col items-center  justify-center  pt-[100%]',
            {
              'bg-white dark:bg-white': background === 'white',
              'bg-[#ff0080] dark:bg-[#ff0080]': background === 'pink',
              'bg-[#7928ca] dark:bg-[#7928ca]': background === 'purple',
              'bg-gray-900 dark:bg-gray-900': background === 'black',
              'bg-violetDark dark:bg-violetDark': background === 'purple-dark',
              'bg-blue-500 dark:bg-blue-500': background === 'blue',
              'bg-cyan-500 dark:bg-cyan-500': background === 'cyan',
              'bg-gray-100 dark:bg-gray-100': background === 'gray',
              'bg-gray-100 dark:bg-gray-900': !background,
              relative: labels
            }
          )}
        >
          <div className="absolute left-10 top-0 h-full w-full  bg-white">
            <Image
              className={clsx('block  h-[80%] w-[80%] rounded-3xl ', {
                'transition duration-300 ease-in-out hover:scale-105': isInteractive
              })}
              {...props}
              alt={props.title || ''}
            />
          </div>
        </div>
      </div>
    );
  }
);
RefGridImage.displayName = 'RefGridImage';
