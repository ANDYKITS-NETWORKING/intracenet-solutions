"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { heroBadge } from "./hero-data";

export default function HeroBadge() {
  const Icon = heroBadge.icon;

  return (
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
        duration: 0.6,
        ease: "easeOut",
      }}
      className="inline-flex"
    >
      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-full
          border
          border-primary/20
          bg-white/80
          px-5
          py-3
          shadow-lg
          backdrop-blur-xl
          dark:border-primary/30
          dark:bg-slate-900/70
        "
      >
        {/* Background Glow */}

        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-green-500/5 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex items-center gap-3">
          {/* Animated Status */}

          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </div>

          {/* Icon */}

          {Icon && (
            <div className="rounded-full bg-primary/10 p-1.5">
              <Icon className="h-4 w-4 text-primary" />
            </div>
          )}

          {/* Text */}

          <span className="font-medium text-slate-700 dark:text-slate-200">
            {heroBadge.label}
          </span>

          {/* Verified */}

          <CheckCircle2 className="h-4 w-4 text-green-500" />
        </div>
      </motion.div>
    </motion.div>
  );
}