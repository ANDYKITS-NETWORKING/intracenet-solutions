"use client";

import { motion } from "framer-motion";

interface AnimatedMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function AnimatedMenuButton({
  open,
  onClick,
}: AnimatedMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Menu"
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        bg-primary
        text-white
        shadow-lg
        shadow-primary/30
      "
    >
      <div className="relative h-5 w-5">
        {/* Top */}

        <motion.span
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 8 : 2,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            left-0
            h-[2.5px]
            w-5
            rounded-full
            bg-white
          "
        />

        {/* Middle */}

        <motion.span
          animate={{
            opacity: open ? 0 : 1,
            x: open ? -10 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            absolute
            left-0
            top-[9px]
            h-[2.5px]
            w-5
            rounded-full
            bg-white
          "
        />

        {/* Bottom */}

        <motion.span
          animate={{
            rotate: open ? -45 : 0,
            y: open ? -8 : 16,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            left-0
            h-[2.5px]
            w-5
            rounded-full
            bg-white
          "
        />
      </div>
    </button>
  );
}