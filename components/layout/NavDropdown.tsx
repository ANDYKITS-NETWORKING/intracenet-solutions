"use client";

import Link from "next/link";
import {
  ChevronDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  useState,
  useRef,
} from "react";

export interface DropdownItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavDropdownProps {
  title: string;
  items: DropdownItem[];
}

export default function NavDropdown({
  title,
  items,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const openMenu = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const closeMenu = () => {
    timeout.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative h-full"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
      onBlur={closeMenu}
    >
      {/* Trigger */}

      <button
        aria-expanded={open}
        className="group relative flex items-center gap-1 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-primary dark:text-slate-200"
      >
        {title}

        <ChevronDown
          className={`h-4 w-4 transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />

        <motion.span
          layoutId="nav-indicator"
          className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
            open ? "w-full" : "w-0"
          }`}
        />
      </button>

      {/* Hover Bridge */}

      <div className="absolute left-0 top-full pt-5">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                w-[430px]
                overflow-hidden
                rounded-3xl
                border
                border-white/30
                bg-white/90
                backdrop-blur-2xl
                shadow-[0_25px_80px_rgba(0,0,0,.15)]
                dark:border-slate-700
                dark:bg-slate-900/90
              "
            >
              {/* Links */}

              <div className="space-y-2 p-5">
                {items.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="
                        group
                        flex
                        items-start
                        gap-4
                        rounded-2xl
                        p-4
                        transition-all
                        hover:bg-slate-100
                        dark:hover:bg-slate-800
                      "
                    >
                      {item.icon && (
                        <div className="mt-1 text-primary">
                          {item.icon}
                        </div>
                      )}

                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-white">
                          {item.title}
                        </h4>

                        {item.description && (
                          <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          translate-y-1
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          group-hover:opacity-100
                        "
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}

              <div className="border-t border-slate-200 bg-gradient-to-r from-primary/5 to-green-500/5 p-5 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Enterprise Infrastructure
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Discover scalable networking, cybersecurity,
                      cloud and electrical solutions tailored for
                      modern businesses.
                    </p>

                    <Link
                      href="/contact"
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        font-medium
                        text-primary
                        transition-all
                        hover:gap-3
                      "
                    >
                      Request Consultation

                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}