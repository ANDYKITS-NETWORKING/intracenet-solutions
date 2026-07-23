"use client";

import Container from "@/components/common/Container";

import HeroBackground from "./HeroBackground";
import HeroNetwork from "./HeroNetwork";
import HeroContent from "./HeroContent";
import HeroServices from "./HeroServices";
import HeroMobileServices from "./HeroMobileServices";

export default function Hero() {
  return (
    <HeroBackground>
      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          py-20
          lg:flex
          lg:items-center
          lg:py-32
        "
      >
        {/* Desktop Network Visualization */}

        <div className="hidden lg:block">
          <HeroNetwork />
        </div>

        <Container>
          <div
            className="
              relative
              z-20
              grid
              items-center
              gap-16
              lg:grid-cols-2
              lg:gap-20
            "
          >
            {/* =======================================================
                LEFT SIDE
            ======================================================= */}

            <div className="flex flex-col">
              <HeroContent />

              {/* Mobile Services */}

              <div className="mt-10 lg:hidden">
                <HeroMobileServices />
              </div>
            </div>

            {/* =======================================================
                RIGHT SIDE (Desktop Only)
            ======================================================= */}

            <div className="hidden lg:flex justify-end">
              <HeroServices />
            </div>
          </div>
        </Container>
      </section>
    </HeroBackground>
  );
}