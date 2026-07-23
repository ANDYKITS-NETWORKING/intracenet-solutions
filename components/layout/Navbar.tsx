"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
                scale: scrolled ? 0.95 : 1,
              }}
              transition={{
                duration: 0.25,
              }}
              className="flex items-center"
            >
              {/* Only the logo image - removed text */}
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg shadow-primary/20 flex-shrink-0">
                <Image
                  src="/logos/logo.png"
                  alt="Intracenet Solutions"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
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