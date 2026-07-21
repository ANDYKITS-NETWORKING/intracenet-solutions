"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { heroButtons } from "./hero-data";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.4,
        duration: 0.6,
      }}
      className="flex flex-col gap-4 sm:flex-row"
    >
      {heroButtons.map((button) => {
        const Icon = button.icon;

        if (button.variant === "primary") {
          return (
            <motion.div
              key={button.id}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                href={button.href}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  px-7
                  py-4
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  bg-gradient-to-r
                  from-primary
                  via-blue-600
                  to-green-500
                  hover:shadow-primary/30
                "
              >
                {/* Shine */}

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative flex items-center gap-3">
                  {button.label}

                  {Icon && (
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </span>
              </Link>
            </motion.div>
          );
        }

        return (
          <motion.div
            key={button.id}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <Link
              href={button.href}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-white/70
                backdrop-blur-xl
                px-7
                py-4
                font-semibold
                text-slate-700
                shadow-lg
                transition-all
                duration-300
                hover:border-primary
                hover:bg-primary/5
                hover:text-primary
                dark:border-slate-700
                dark:bg-slate-900/70
                dark:text-slate-200
              "
            >
              {button.label}

              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}