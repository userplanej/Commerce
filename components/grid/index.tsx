import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={clsx('grid grid-flow-row ', props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li {...props} className={clsx('relative h-full w-full transition-opacity', props.className)}>
      {props.children}
    </li>
  );
}

function GridPlaceholderRect(props: React.ComponentProps<'li'>) {
  return (
    <li {...props} className={clsx('relative h-full w-full transition-opacity', props.className)}>
      <div className=" mx-4 my-4  h-20 w-20  bg-gray-50"></div>
    </li>
  );
}

function GridPlaceholderLine(props: React.ComponentProps<'li'>) {
  return (
    <li {...props} className={clsx('relative h-full w-full transition-opacity', props.className)}>
      <div className=" mx-4 my-4  h-64 w-64  bg-gray-50"></div>
    </li>
  );
}

Grid.PlacehollderRect = GridPlaceholderRect;
Grid.Item = GridItem;
export default Grid;
