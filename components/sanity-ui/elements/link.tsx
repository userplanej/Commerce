import { SanityLink } from 'lib/sanity/types';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

type Props = {
  link: SanityLink;
} & HTMLAttributes<HTMLElement>;

export default function SanityLinkUtil({ children, link, ...rest }: Props) {
  if (link._type === 'linkExternal') {
    return (
      <a href={link.url} rel="noreferrer" target={link.newWindow ? '_blank' : '_self'} {...rest}>
        {children}
      </a>
    );
  }

  if (link._type === 'linkInternal' && link.slug) {
    return (
      <Link href={link.slug} {...rest}>
        {children}
      </Link>
    );
  }

  return null;
}
