"use client";

import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";

import DesktopNav from "./DesktopNav";
import CTAButton from "./CTAButton";
import TopBar from "./TopBar";

export default function Navbar() {
  const scrolled = true;

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "glass border-b border-border shadow-enterprise"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopNav />
          <TopBar />
        

          <CTAButton />
        </nav>
      </Container>
    </header>
    
  );
}