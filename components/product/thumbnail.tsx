import Image from 'next/image';

export function ThumbnailImage({
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
} & React.ComponentProps<typeof Image>) {
  return (
    <div>
      <div className="relative block aspect-square overflow-hidden">
        <Image {...props} alt={props.title || ''} fill={true} />
      </div>
    </div>
  );
}
