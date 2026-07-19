"use client";

import NavLinks from "./NavLinks";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center">
      <NavLinks />
    </nav>
  );
}