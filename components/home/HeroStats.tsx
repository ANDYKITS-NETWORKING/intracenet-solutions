"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

import { heroStats } from "./hero-data";

function CountUp({
  end,
  duration = 1500,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
}

export default function HeroStats() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.7,
        duration: 0.7,
      }}
      className="
        mt-12
        grid
        grid-cols-2
        gap-5
        lg:grid-cols-4
      "
    >
      {heroStats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2 + index * 0.12,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/30
            bg-white/70
            p-6
            backdrop-blur-2xl
            shadow-xl
            transition-all
            dark:border-slate-700
            dark:bg-slate-900/70
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-primary/5
              via-transparent
              to-green-500/5
              opacity-0
              transition
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Accent */}

          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-1
              bg-gradient-to-b
              from-primary
              to-green-500
            "
          />

          <div className="relative">
            {/* Icon */}

            <div
              className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
              "
            >
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>

            {/* Number */}

            <div className="flex items-end gap-1">
              <span
                className="
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-900
                  dark:text-white
                "
              >
                <CountUp
                  end={Number(stat.value)}
                />
              </span>

              {stat.suffix && (
                <span
                  className="
                    mb-1
                    text-xl
                    font-bold
                    text-primary
                  "
                >
                  {stat.suffix}
                </span>
              )}
            </div>

            {/* Label */}

            <p
              className="
                mt-3
                text-sm
                leading-relaxed
                text-slate-500
                dark:text-slate-400
              "
            >
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}