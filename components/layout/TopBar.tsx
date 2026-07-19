"use client";

import Link from "next/link";
import {
  Headphones,
  Network,
  ShieldCheck,
  Zap,
  Workflow,
  Sun,
  Camera,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ANNOUNCEMENTS = [
  {
    title: "Enterprise Networking",
    description: "Routing • Switching • MPLS • SD-WAN",
    icon: Network,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Fiber Infrastructure",
    description: "Backbone • GPON • OTDR • Fiber Splicing",
    icon: Workflow,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    title: "Cybersecurity",
    description: "Fortinet • Sophos • VPN • NAC",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    title: "Electrical Engineering",
    description: "UPS • ATS • Generator • Power Systems",
    icon: Zap,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    title: "Solar Solutions",
    description: "Residential • Commercial • Hybrid Systems",
    icon: Sun,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    title: "Smart Security",
    description: "CCTV • Access Control • Intercom",
    icon: Camera,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
  },
  {
    title: "Cloud Services",
    description: "Microsoft 365 • Google Workspace • Backup",
    icon: Cloud,
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
  },
];

export default function TopBar() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const item = ANNOUNCEMENTS[active];
  const Icon = item.icon;

  return (
    <>
      {/* Brand Accent */}
      <div className="hidden xl:block h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-green-500" />

      <div className="hidden xl:block border-b border-slate-800 bg-slate-950 text-slate-300">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
          
          {/* CENTER - Announcement Ticker */}
          <div className="flex flex-1 items-center justify-center">
            <div className="max-w-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex items-center justify-center gap-4"
                >
                  <div className={`rounded-lg ${item.bgColor} p-2 ${item.color} flex-shrink-0`}>
                    <Icon size={16} strokeWidth={1.75} />
                  </div>

                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-sm font-semibold text-white whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-400 truncate">
                      {item.description}
                    </span>
                  </div>

                  <div className={`h-1.5 w-1.5 rounded-full ${item.color.replace('text-', 'bg-')} flex-shrink-0`} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT - Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/support"
              className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm font-medium transition hover:border-primary/50 hover:bg-primary/10 hover:text-white whitespace-nowrap"
            >
              <Headphones size={14} />
              Support
            </Link>

            <Link
              href="/portal"
              className="flex items-center gap-1 text-sm font-medium text-slate-300 transition hover:text-white whitespace-nowrap"
            >
              Portal
              <ArrowUpRight size={14} className="text-primary" />
            </Link>

            <div className="h-5 w-px bg-slate-700" />

            <Link
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-slate-700 bg-slate-900 p-1.5 transition hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
            >
              <FaFacebookF size={12} />
            </Link>

            <Link
              href="#"
              aria-label="LinkedIn"
              className="rounded-full border border-slate-700 bg-slate-900 p-1.5 transition hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            >
              <FaLinkedinIn size={12} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}