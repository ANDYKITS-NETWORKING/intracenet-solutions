"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ShieldCheck,
  Cable,
  Sun,
  Cloud,
  Network,
} from "lucide-react";
import { useEffect, useState } from "react";

const announcements = [
  {
    icon: ShieldCheck,
    text: "24/7 Enterprise ICT Support",
  },
  {
    icon: Cable,
    text: "Fiber Infrastructure Specialists",
  },
  {
    icon: Cloud,
    text: "Cloud & Hybrid Solutions",
  },
  {
    icon: Sun,
    text: "Commercial Solar Engineering",
  },
  {
    icon: Network,
    text: "Enterprise Networking Experts",
  },
];

export default function MobileTopBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % announcements.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const Item = announcements[index];
  const Icon = Item.icon;

  return (
    <div
      className="
        lg:hidden
        fixed
        top-0
        inset-x-0
        z-[70]
        h-8
        overflow-hidden
        border-b
        border-primary/10
        bg-slate-950
        text-white
      "
    >
      <div className="flex h-full items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.35,
            }}
            className="flex items-center gap-2 text-xs font-medium tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <Icon className="h-3.5 w-3.5 text-primary" />

            <span>{Item.text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}