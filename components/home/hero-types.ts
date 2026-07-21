import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*                                   STATS                                    */
/* -------------------------------------------------------------------------- */

export interface HeroStat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

/* -------------------------------------------------------------------------- */
/*                                 SERVICES                                   */
/* -------------------------------------------------------------------------- */

export interface HeroService {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
  featured?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                                   BUTTONS                                  */
/* -------------------------------------------------------------------------- */

export interface HeroButton {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: LucideIcon;
}

/* -------------------------------------------------------------------------- */
/*                                  BADGES                                    */
/* -------------------------------------------------------------------------- */

export interface HeroBadge {
  id: string;
  label: string;
  icon?: LucideIcon;
}

/* -------------------------------------------------------------------------- */
/*                              NETWORK NODES                                 */
/* -------------------------------------------------------------------------- */

export interface NetworkNode {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

export interface NetworkConnection {
  from: number;
  to: number;
}

/* -------------------------------------------------------------------------- */
/*                              PARTICLE SYSTEM                               */
/* -------------------------------------------------------------------------- */

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

/* -------------------------------------------------------------------------- */
/*                            FLOATING ENTERPRISE CARD                        */
/* -------------------------------------------------------------------------- */

export interface FloatingCard {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
}

/* -------------------------------------------------------------------------- */
/*                             HERO SECTION PROPS                             */
/* -------------------------------------------------------------------------- */

export interface HeroSectionProps {
  className?: string;
}

export interface HeroBackgroundProps {
  children: ReactNode;
}

export interface HeroContentProps {
  className?: string;
}

export interface HeroServicesProps {
  className?: string;
}

export interface HeroStatsProps {
  className?: string;
}

export interface HeroButtonsProps {
  className?: string;
}

export interface HeroBadgeProps {
  className?: string;
}

export interface HeroParticlesProps {
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*                               ANIMATION TYPES                              */
/* -------------------------------------------------------------------------- */

export type AnimationVariant =
  | "hidden"
  | "visible"
  | "hover"
  | "tap";

/* -------------------------------------------------------------------------- */
/*                              THEME COLOURS                                 */
/* -------------------------------------------------------------------------- */

export type BrandColor =
  | "primary"
  | "secondary"
  | "green"
  | "blue"
  | "slate";