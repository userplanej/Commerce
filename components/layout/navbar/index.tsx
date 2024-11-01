import Link from 'next/link';

import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import MobileMenu from './mobile-menu';
import Search from './search';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex w-full items-center justify-between overflow-hidden bg-transparent sm:p-4 lg:px-6 lg:pt-7">
      <div className="block w-1/3 md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
        <div className="md:mr-4">
          <Link href="/" aria-label="Go back home">
            <div className="flex ">
              <LogoIcon className="h-8 transition-transform hover:scale-110" />
              <div className="h-1 w-2"></div>
              <p> Space Odyssey </p>
            </div>
          </Link>
        </div>
        {menu.length ? (
          <ul className="hidden md:flex">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="hidden w-1/3 md:block">
        <Search />
      </div>
    </nav>
  );
}
