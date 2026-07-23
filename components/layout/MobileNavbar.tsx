"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

import AnimatedMenuButton from "./AnimatedMenuButton";

interface MobileNavbarProps {
  menuOpen: boolean;
  onMenuOpen: () => void;
  onSearchOpen?: () => void;
}

export default function MobileNavbar({
  menuOpen,
  onMenuOpen,
  onSearchOpen,
}: MobileNavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className={`
        fixed
        inset-x-0
        top-8
        z-[80]
        lg:hidden
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-white/20 bg-white/75 shadow-xl backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-950/75"
            : "bg-transparent"
        }
      `}
    >
      <div
        className={`
          mx-auto
          flex
          max-w-screen-xl
          items-center
          justify-between
          px-5
          transition-all
          duration-300
          ${scrolled ? "h-14" : "h-16"}
        `}
      >
        {/* ✅ FIXED: Only Logo Image - No text */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            animate={{
              scale: scrolled ? 0.92 : 1,
            }}
            transition={{
              duration: 0.25,
            }}
            className="flex items-center"
          >
            {/* Only the logo image - removed text */}
            <div className="w-8 h-8 rounded-full overflow-hidden shadow-lg shadow-primary/20 flex-shrink-0">
              <Image
                src="/logos/logo.png"
                alt="Intracenet Solutions"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <motion.button
            whileHover={{
              y: -2,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.92,
            }}
            onClick={() => onSearchOpen?.()}
            aria-label="Search"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200/70
              bg-white/70
              text-slate-700
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-primary/30
              hover:bg-primary/10
              hover:text-primary
              dark:border-slate-700
              dark:bg-slate-900/70
              dark:text-slate-300
            "
          >
            <Search className="h-4 w-4" />
          </motion.button>

          {/* Menu */}
          <AnimatedMenuButton
            open={menuOpen}
            onClick={onMenuOpen}
          />
        </div>
      </div>

      {/* Animated Brand Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: scrolled ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          h-[2px]
          origin-left
          bg-gradient-to-r
          from-primary
          via-sky-500
          to-green-500
        "
      />
    </motion.header>
  );
}