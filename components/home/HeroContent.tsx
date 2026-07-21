"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

import { heroContent } from "./hero-data";

export default function HeroContent() {
  const titleParts = heroContent.title.split(
    heroContent.highlight
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative z-20 max-w-3xl"
    >
      {/* ------------------------------------------------ */}
      {/* Logo */}
      {/* ------------------------------------------------ */}

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
        className="mb-8"
      >
        <Image
          src="/logos/logo.png"
          alt="Intracenet Solutions"
          width={230}
          height={70}
          priority
          className="h-auto w-auto"
        />
      </motion.div>

      {/* ------------------------------------------------ */}
      {/* Badge */}
      {/* ------------------------------------------------ */}

      <div className="mb-8">
        <HeroBadge />
      </div>

      {/* ------------------------------------------------ */}
      {/* Heading */}
      {/* ------------------------------------------------ */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
          text-5xl
          font-black
          leading-tight
          tracking-tight
          text-slate-900
          dark:text-white
          sm:text-6xl
          lg:text-7xl
        "
      >
        {titleParts[0]}

        <span
          className="
            bg-gradient-to-r
            from-primary
            via-blue-600
            to-green-500
            bg-clip-text
            text-transparent
          "
        >
          {heroContent.highlight}
        </span>

        {titleParts[1]}
      </motion.h1>

      {/* ------------------------------------------------ */}
      {/* Description */}
      {/* ------------------------------------------------ */}

      <motion.p
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.35,
        }}
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
          lg:text-xl
        "
      >
        {heroContent.description}
      </motion.p>

      {/* ------------------------------------------------ */}
      {/* Availability */}
      {/* ------------------------------------------------ */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
        }}
        className="
          mt-6
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-green-500/20
          bg-green-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-green-700
          dark:text-green-400
        "
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />

          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>

        {heroContent.availability}
      </motion.div>

      {/* ------------------------------------------------ */}
      {/* Buttons */}
      {/* ------------------------------------------------ */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.55,
        }}
        className="mt-10"
      >
        <HeroButtons />
      </motion.div>

      {/* ------------------------------------------------ */}
      {/* Stats */}
      {/* ------------------------------------------------ */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
        }}
        className="mt-14"
      >
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}