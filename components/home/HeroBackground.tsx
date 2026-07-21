"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";
import { HeroBackgroundProps } from "./hero-types";

interface Props extends HeroBackgroundProps {
  children: ReactNode;
}

export default function HeroBackground({ children }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 40,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 40,
    damping: 30,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set((e.clientX - rect.width / 2) / 35);
    mouseY.set((e.clientY - rect.height / 2) / 35);
  }

  return (
    <section
      onMouseMove={handleMove}
      className="
        relative
        overflow-hidden
        bg-white
        dark:bg-[#030712]
      "
    >
      {/* ---------------------------------------------------------------- */}
      {/* Aurora */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        style={{
          x,
          y,
        }}
        className="
          absolute
          left-[-200px]
          top-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/15
          blur-[120px]
        "
      />

      <motion.div
        style={{
          x: x.get() * -0.6,
          y: y.get() * -0.6,
        }}
        className="
          absolute
          bottom-[-200px]
          right-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-green-500/15
          blur-[120px]
        "
      />

      {/* ---------------------------------------------------------------- */}
      {/* Grid */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          dark:opacity-[0.08]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right,#64748b 1px,transparent 1px),
            linear-gradient(to bottom,#64748b 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Noise */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,#ffffff 1px,transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Top Fade */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-white
          to-transparent
          dark:from-[#030712]
        "
      />

      {/* ---------------------------------------------------------------- */}
      {/* Bottom Fade */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-white
          to-transparent
          dark:from-[#030712]
        "
      />

      {/* ---------------------------------------------------------------- */}
      {/* Content */}
      {/* ---------------------------------------------------------------- */}

      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
}