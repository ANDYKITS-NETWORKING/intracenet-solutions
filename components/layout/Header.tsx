"use client";

import { useEffect, useState } from "react";

import TopBar from "./TopBar";
import Navbar from "./Navbar";

import MobileTopBar from "./MobileTopBar";
import MobileNavbar from "./MobileNavbar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Prevent background scrolling while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ==========================================================
          DESKTOP HEADER
      ========================================================== */}

      <div className="hidden lg:block">
        <TopBar />
        <Navbar />
      </div>

      {/* ==========================================================
          MOBILE HEADER
      ========================================================== */}

      <div className="lg:hidden">
        <MobileTopBar />

        <MobileNavbar
          menuOpen={menuOpen}
          onMenuOpen={() => setMenuOpen(!menuOpen)}
          onSearchOpen={() => setSearchOpen(true)}
        />
      </div>

      {/* ==========================================================
          MOBILE MENU
      ========================================================== */}

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* ==========================================================
          SEARCH OVERLAY
          (Temporary - we'll move this into SearchDialog.tsx later)
      ========================================================== */}

      {searchOpen && (
        <div
          className="
            fixed
            inset-0
            z-[150]
            flex
            items-center
            justify-center
            bg-black/60
            backdrop-blur-lg
            px-6
          "
        >
          <div
            className="
              w-full
              max-w-lg
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-2xl
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <h3 className="mb-5 text-lg font-semibold">
              Search Intracenet
            </h3>

            <input
              autoFocus
              placeholder="Search services, solutions..."
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-5
                py-4
                outline-none
                transition
                focus:border-primary
                focus:ring-2
                focus:ring-primary/20
                dark:border-slate-700
                dark:bg-slate-800
              "
            />

            <button
              onClick={() => setSearchOpen(false)}
              className="
                mt-6
                w-full
                rounded-2xl
                bg-primary
                py-3
                font-semibold
                text-white
                transition
                hover:opacity-90
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}