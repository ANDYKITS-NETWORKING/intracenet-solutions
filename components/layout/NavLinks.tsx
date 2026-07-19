"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Solutions",
    href: "/solutions",
    megaMenu: true,
  },
  {
    title: "Services",
    href: "/services",
    megaMenu: true,
  },
  {
    title: "Industries",
    href: "/industries",
    megaMenu: true,
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
    dropdown: true,
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function NavLinks() {
  return (
    <ul className="flex items-center gap-8">
      {navigation.map((item) => (
        <li
          key={item.title}
          className="group relative"
        >
          <Link
            href={item.href}
            className="
              flex items-center gap-1
              py-8
              text-[15px]
              font-semibold
              tracking-wide
              text-slate-700
              transition-all
              duration-300
              hover:text-primary
            "
          >
            {item.title}

            {(item.megaMenu || item.dropdown) && (
              <ChevronDown
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-180
                "
              />
            )}
          </Link>

          <span
            className="
              absolute
              bottom-6
              left-0
              h-[2px]
              w-0
              rounded-full
              bg-primary
              transition-all
              duration-300
              group-hover:w-full
            "
          />

          {/* MegaMenu goes here */}

          {/* Dropdown goes here */}
        </li>
      ))}
    </ul>
  );
}