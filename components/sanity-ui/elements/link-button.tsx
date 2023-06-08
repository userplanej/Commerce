import clsx from 'clsx';

import type { SanityLink } from 'lib/sanity/types';
import { defaultButtonStyles } from './button';
import SanityLinkUtil from './link';

type Props = {
  backgroundColor?: string;
  className?: string;
  link: SanityLink;
  textColor?: string;
};

export default function LinkButton({ backgroundColor, className, link, textColor }: Props) {
  if (!link.title) {
    return null;
  }

  return (
    <SanityLinkUtil
      className={clsx(defaultButtonStyles(), className)}
      link={link}
      style={{ background: backgroundColor, color: textColor }}
    >
      {link.title}
    </SanityLinkUtil>
  );
}
