// components/layout/NavLinks.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navigation, NavItem } from "@/constants/navigation";

interface NavLinksProps {
  mobile?: boolean;
}

export default function NavLinks({ mobile = false }: NavLinksProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (mobile) {
    return (
      <div className="flex flex-col gap-2">
        {navigation.map((item) => (
          <div key={item.label}>
            {item.dropdown && item.dropdown.length > 0 ? (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="ml-4 space-y-1 border-l border-slate-700 pl-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block rounded-md px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Desktop version
  return (
    <div className="flex items-center gap-1">
      {navigation.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.dropdown && item.dropdown.length > 0 ? (
            <>
              <button
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-800 hover:text-white ${
                  openDropdown === item.label
                    ? "bg-slate-800 text-white"
                    : "text-slate-300"
                }`}
              >
                {item.label}
                <ChevronDown size={14} className="text-slate-500" />
              </button>

              {openDropdown === item.label && (
                <div className="absolute left-0 top-full mt-1 w-64 rounded-lg border border-slate-700 bg-slate-900 p-2 shadow-xl">
                  <div className="grid gap-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}