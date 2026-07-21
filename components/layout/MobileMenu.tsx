"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Search,
  Phone,
  Mail,
} from "lucide-react";

import MobileAccordion from "./MobileAccordion";
import {
  services,
  solutions,
  industries,
} from "./mobile-menu-data";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed right-0 top-0 z-[100] flex h-screen w-full max-w-md flex-col bg-white dark:bg-slate-950"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Intracenet
                </h2>

                <p className="text-sm text-slate-500">
                  Enterprise Solutions
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Search */}

            <div className="p-6">
              <button
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-3
                  text-left
                  text-slate-500
                  transition-all
                  hover:border-primary
                  hover:bg-primary/5
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                <Search className="h-5 w-5" />
                Search services...
              </button>
            </div>

            {/* Navigation */}

            <div className="flex-1 overflow-y-auto px-6 pb-6">
              <nav className="space-y-4">
                <Link
                  href="/"
                  onClick={onClose}
                  className="block rounded-2xl px-5 py-4 text-lg font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  Home
                </Link>

                <MobileAccordion
                  title="Services"
                  items={services}
                />

                <MobileAccordion
                  title="Solutions"
                  items={solutions}
                />

                <MobileAccordion
                  title="Industries"
                  items={industries}
                />

                <Link
                  href="/projects"
                  onClick={onClose}
                  className="block rounded-2xl px-5 py-4 text-lg font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  Projects
                </Link>

                <Link
                  href="/about"
                  onClick={onClose}
                  className="block rounded-2xl px-5 py-4 text-lg font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block rounded-2xl px-5 py-4 text-lg font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Footer */}

            <div className="border-t border-slate-200 p-6 dark:border-slate-800">
              <Link
                href="/contact"
                onClick={onClose}
                className="
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary
                  px-6
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  hover:scale-[1.02]
                  hover:shadow-xl
                "
              >
                Request Consultation
              </Link>

              <div className="mt-6 space-y-4 text-sm text-slate-500">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  +254 XXX XXX XXX
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  info@intracenet.co.ke
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}