import Skeleton from 'components/skeleton';

export default function Loading() {
  return (
    <div className="flex gap-6 overflow-auto">
      <Skeleton className="h-[156px] sm:h-48" />
      <Skeleton className="h-[156px] sm:h-48" />
      <Skeleton className="h-[156px] sm:h-48" />
    </div>
  );
}
