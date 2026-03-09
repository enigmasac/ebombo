"use client";

import { useState } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

export default function MobileNav({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-ebombo-dark transition-colors hover:text-ebombo-primary md:hidden"
        aria-label="Toggle menu"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 448 512">
          {open ? (
            <path d="M400 145.49L366.51 112 224 254.49 81.49 112 48 145.49 190.51 288 48 430.51 81.49 464 224 321.49 366.51 464 400 430.51 257.49 288z" />
          ) : (
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          )}
        </svg>
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-full border-t border-ebombo-light-purple bg-white px-[5%] py-4 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-poppins text-base text-ebombo-dark transition-colors hover:text-ebombo-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
