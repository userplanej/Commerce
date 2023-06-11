import type { PortableTextBlock } from '@portabletext/types';
import getYouTubeID from 'get-youtube-id';

import { SanityModuleYoutube } from 'lib/sanity/types';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

type Props = {
  centered?: boolean;
  value: PortableTextBlock & SanityModuleYoutube;
};

export default function YoutubeBlock({ centered, value }: Props) {
  const url = value.url;
  const id = getYouTubeID(url)!;

  return <LiteYouTubeEmbed id={id} title={'test'} muted={true} />;
}
