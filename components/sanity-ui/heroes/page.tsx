'use client';

import clsx from 'clsx';
import type { SanityHeroPage } from 'lib/sanity/types';
import { useColorTheme } from 'lib/theme';
import HeroContent from './hero-content';

type Props = {
  fallbackTitle: string;
  hero: SanityHeroPage;
};

export default function PageHero({ fallbackTitle, hero }: Props) {
  const colorTheme = useColorTheme();

  if (!hero) {
    return (
      <h1
        className={clsx(
          'pt-34 mx-auto max-w-[60rem] px-4 pb-8 text-center text-3xl',
          'md:px-8 md:text-4xl'
        )}
      >
        {fallbackTitle}
      </h1>
    );
  }

  return (
    <div
      className={clsx(
        'bg-peach rounded-b-xl px-4 pb-4 pt-24', //
        'md:pt-34 md:px-8 md:pb-8'
      )}
      style={{ background: colorTheme?.background }}
    >
      {/* Hero content */}
      {hero.content && (
        <div className="mt-8">
          {/* Title */}

          {/*hero.title && (
            <h1
              className={clsx(
                'max-w-[60rem] whitespace-pre-line text-2xl',
                'md:text-4xl',
              )}
              style={{color: colorTheme?.text || 'black'}}
            >
              {hero.title}
            </h1>
              )*/}
          <HeroContent title={hero.title} content={hero.content[0]} />
        </div>
      )}
    </div>
  );
}
