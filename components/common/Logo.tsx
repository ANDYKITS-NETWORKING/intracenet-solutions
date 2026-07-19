"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center transition-all duration-300"
    >
     <Image
        src="/logos/logo.png"
        alt="Intracenet Solutions"
        width={280}
        height={70}
        priority
        className="
          h-12
          w-auto
          transition-all
          duration-300
          group-hover:scale-[1.02]
        "
      />
    </Link>
  );
}