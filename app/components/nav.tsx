'use client';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import MyLogo from 'app/assets/logo';
import Link from 'next/link';

const navItems = {
  '/': { name: 'home' },
  '/about': { name: 'about' },
  '/projects': { name: 'projects' },
  '/blog': { name: 'blog' },
};

export function Navbar() {
  const pathname = usePathname(); // Get the current path

  return (
    <aside className="bg-backgroundLight dark:bg-backgroundDark">
      <div className="w-full max-w-7xl mx-auto">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <MyLogo className="h-10 w-auto transition-all hover:scale-110" />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-lg font-medium">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className={`transition-all ${
                  pathname === path
                    ? 'text-accent font-bold' // Highlight active link
                    : 'text-textLight dark:text-textDark hover:text-accent dark:hover:text-accent'
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
