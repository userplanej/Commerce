import clsx from 'clsx';
import { SanityModuleCallout } from 'lib/sanity/types';
import { useColorTheme } from 'lib/theme';
import LinkButton from '../elements/link-button';

type Props = {
  module: SanityModuleCallout;
};

export default function CalloutModule({ module }: Props) {
  const colorTheme = useColorTheme();

  return (
    <div className="mr-auto flex flex-col items-start" style={{ color: colorTheme?.text }}>
      {/* Text */}
      <div
        className={clsx(
          'max-w-[60rem] text-2xl', //
          'md:text-4xl'
        )}
      >
        {module.text}
      </div>

      {/* Link */}
      {module.link && (
        <div className="mt-4">
          <LinkButton backgroundColor={colorTheme?.text} link={module.link} />
        </div>
      )}
    </div>
  );
}
