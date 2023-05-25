import Grid from 'components/grid';

export default function Loading() {
  console.log('Loading............');
  return (
    <Grid className="grid-cols-3 lg:grid-cols-4">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return (
            <Grid.Placehollder key={index} className="animate-pulse bg-gray-100 dark:bg-gray-900" />
          );
        })}
    </Grid>
  );
}
