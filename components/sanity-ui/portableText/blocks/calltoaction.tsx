import type { PortableTextBlock } from '@portabletext/types';
import clsx from 'clsx';

import CallToActionModule from 'components/sanity-ui/modules/calltoaction';
import { SanityModuleCallToAction } from 'lib/sanity/types';

type Props = {
  centered?: boolean;
  value: PortableTextBlock & SanityModuleCallToAction;
};

export default function CallToActionBlock({ centered, value }: Props) {
  console.log('###PortableText calls CallToActionBlock');
  return (
    <div
      className={clsx(
        'first:mt-0 last:mb-0', //
        'relative my-12 w-screen px-6',
        'md:px-8',
        centered ? 'left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]' : '-ml-6 md:-ml-8'
      )}
    >
      <div className={clsx(centered && 'mx-auto w-full max-w-[1400px]')}>
        <CallToActionModule module={value} />
      </div>
    </div>
  );
}
