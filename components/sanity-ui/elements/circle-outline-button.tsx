import clsx from 'clsx';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLButtonElement>;

export default function CircleOutlineButton(props: Props) {
  const { className, ...rest } = props;

  return (
    <button
      className={clsx(
        'border-offBlack fill-offBlack aspect-square w-[2.375rem] place-content-center rounded-full border text-sm font-bold duration-200',
        'hover:border-opacity-50',
        className
      )}
      type="button"
      {...rest}
    />
  );
}
