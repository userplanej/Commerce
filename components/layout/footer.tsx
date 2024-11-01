import Link from 'next/link';

import LogoIcon from 'components/icons/logo';
import VercelIcon from 'components/icons/vercel';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';

const { SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <footer className="relative bg-gradient-to-b from-orange-500/10 via-white/50 to-sky-900/80">
      <div className="mx-auto w-full max-w-7xl overflow-hidden px-6">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-700 py-12 transition-colors duration-150 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-3">
            <a
              className="flex flex-initial items-center font-bold md:mr-24"
              href="http://www.userplane.co.kr"
            >
              <span className="mr-2">
                <LogoIcon className="h-8" />
              </span>
              <span>{SITE_NAME}</span>
            </a>
          </div>
          {menu.length ? (
            <nav className="col-span-1 lg:col-span-7">
              <ul className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
                {menu.map((item: Menu) => (
                  <li key={item.title} className="py-3 md:py-0 md:pb-4">
                    <Link
                      href={item.path}
                      className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 pb-10 pt-6 text-sm md:flex-row">
          <p>
            &copy; {copyrightDate} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-white dark:text-black">
            <span className="text-black dark:text-white">Powered by</span>
            <a
              rel="noopener noreferrer"
              href="https://vercel.com"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-black dark:text-white"
            >
              <VercelIcon className="ml-3 inline-block h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
