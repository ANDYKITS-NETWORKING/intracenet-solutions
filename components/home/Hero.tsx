"use client";

import Container from "@/components/common/Container";

import HeroBackground from "./HeroBackground";
import HeroNetwork from "./HeroNetwork";
import HeroContent from "./HeroContent";
import HeroServices from "./HeroServices";

export default function Hero() {
  return (
    <HeroBackground>
      <section
        className="
          relative
          overflow-hidden
          min-h-screen
          flex
          items-center
          py-24
          lg:py-32
        "
      >
        {/* Enterprise Network Animation */}

        <HeroNetwork />

        <Container>
          <div
            className="
              relative
              z-20
              grid
              items-center
              gap-20
              lg:grid-cols-2
            "
          >
            {/* Left Side */}

            <HeroContent />

            {/* Right Side */}

            <HeroServices />
          </div>
        </Container>
      </section>
    </HeroBackground>
  );
}