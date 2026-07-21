"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

export interface AccordionItem {
  title: string;
  href: string;
  description?: string;
  icon: LucideIcon;
}

interface MobileAccordionProps {
  title: string;
  items: AccordionItem[];
}

export default function MobileAccordion({
  title,
  items,
}: MobileAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-lg font-semibold">{title}</span>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden"
          >
            <div className="space-y-2 border-t border-slate-200 p-3 dark:border-slate-800">
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-start gap-4 rounded-xl p-3 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <div className="rounded-xl bg-primary/10 p-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-medium transition group-hover:text-primary">
                          {item.title}
                        </h4>

                        {item.description && (
                          <p className="mt-1 text-sm text-slate-500">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}