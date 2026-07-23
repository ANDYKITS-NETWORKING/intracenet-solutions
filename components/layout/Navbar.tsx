"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import DesktopNav from "./DesktopNav";
import CTAButton from "./CTAButton";
import TopBar from "./TopBar";

export default function Navbar() {
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
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        hidden lg:block
        ${
          scrolled
            ? "glass border-b border-white/20 bg-white/75 shadow-xl backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-950/75"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo - Small Professional Version */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              animate={{
                scale: scrolled ? 0.95 : 1,
              }}
              transition={{
                duration: 0.25,
              }}
              className="flex items-center gap-3"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-lg tracking-tight">I</span>
              </div>
              
              {/* Brand Name */}
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900 dark:text-white leading-none tracking-tight">
                  Intracenet
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 leading-none">
                  Solutions
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* CTA Button */}
          <CTAButton />
        </nav>
      </Container>

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
    </header>
  );
}