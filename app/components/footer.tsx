'use client';

import { useState, useEffect } from 'react';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function links_items(name: string, href: string) {
  return (
    <li>
      <a
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href={href}
      >
        <ArrowIcon />
        <p className="ml-2 h-7">{name}</p>
      </a>
    </li>
  );
}

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {links_items('github', 'https://github.com/DenisGremaud')}
        {links_items('linkedin', 'https://www.linkedin.com/in/denisgre/')}
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {currentYear} MIT Licensed
      </p>
    </footer>
  );
}
