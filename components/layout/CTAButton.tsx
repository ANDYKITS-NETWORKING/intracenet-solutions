"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAButton() {
  return (
    <Link
      href="/contact"
      className="
        hidden
        lg:inline-flex
        items-center
        gap-2
        rounded-full
        bg-primary
        px-6
        py-3
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
      "
    >
      Contact Us

      <ArrowRight size={18} />
    </Link>
  );
}