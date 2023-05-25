export default function Loading() {
  console.log('Loading............');
  return (
    <div className="flex animate-pulse flex-col">
      <ul>
        {Array(2)
          .fill(0)
          .map((_, index) => {
            return (
              <li className="relative h-full w-full transition-opacity">
                <div className=" mx-4 my-4  h-20 w-20  bg-gray-50"></div>
              </li>
            );
          })}
        {Array(8)
          .fill(0)
          .map((_, index) => {
            return (
              <li className="relative h-full w-full transition-opacity">
                <div className=" mx-4 my-4  h-8  w-auto  bg-gray-50"></div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
