'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import MyLogo from 'app/assets/logo';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';

const navItems = {
  '/': { name: 'home' },
  '/about': { name: 'about' },
  '/projects': { name: 'projects' },
  // '/blog': { name: 'blog' },
};

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
      <div className="w-full max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <MyLogo className="h-10 w-auto transition-all hover:scale-110" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-lg">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className={`transition-all px-3 py-2 rounded-md ${
                  pathname === path
                    ? 'text-neutral-900 dark:text-white font-medium bg-neutral-100 dark:bg-neutral-800'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
            <div className="px-4 py-2 space-y-1">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className={`block px-2 py-3 transition-all ${
                    pathname === path
                      ? 'text-neutral-900 dark:text-white font-medium bg-neutral-100 dark:bg-neutral-800 rounded-md'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Navbar;
