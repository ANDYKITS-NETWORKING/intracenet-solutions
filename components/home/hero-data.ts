import {
  ArrowRight,
  ShieldCheck,
  Network,
  Cloud,
  Cable,
  Camera,
  Zap,
  Building2,
  Activity,
  Globe,
  Award,
} from "lucide-react";

import type {
  HeroBadge,
  HeroButton,
  HeroService,
  HeroStat,
  FloatingCard,
  NetworkConnection,
  NetworkNode,
} from "./hero-types";

/* -------------------------------------------------------------------------- */
/*                                   BADGE                                    */
/* -------------------------------------------------------------------------- */

export const heroBadge: HeroBadge = {
  id: "enterprise",
  label: "Trusted Enterprise ICT Partner",
  icon: Award,
};

/* -------------------------------------------------------------------------- */
/*                                  BUTTONS                                   */
/* -------------------------------------------------------------------------- */

export const heroButtons: HeroButton[] = [
  {
    id: "consultation",
    label: "Request Consultation",
    href: "/contact",
    variant: "primary",
    icon: ArrowRight,
  },
  {
    id: "services",
    label: "Explore Services",
    href: "/services",
    variant: "secondary",
  },
];

/* -------------------------------------------------------------------------- */
/*                                    STATS                                   */
/* -------------------------------------------------------------------------- */

export const heroStats: HeroStat[] = [
  {
    id: "projects",
    value: "250",
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    id: "clients",
    value: "120",
    suffix: "+",
    label: "Business Clients",
  },
  {
    id: "support",
    value: "24",
    suffix: "/7",
    label: "Technical Support",
  },
  {
    id: "uptime",
    value: "99.99",
    suffix: "%",
    label: "Network Availability",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  SERVICES                                  */
/* -------------------------------------------------------------------------- */

export const heroServices: HeroService[] = [
  {
    id: "networking",
    title: "Enterprise Networking",
    description:
      "LAN, WAN, WiFi, routing, switching and structured infrastructure.",
    icon: Network,
    color: "primary",
    href: "/services/networking",
    featured: true,
  },

  {
    id: "security",
    title: "Cyber Security",
    description:
      "Enterprise protection with modern security architecture.",
    icon: ShieldCheck,
    color: "green",
    href: "/services/security",
  },

  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Microsoft 365, Azure, backup and cloud transformation.",
    icon: Cloud,
    color: "blue",
    href: "/services/cloud",
  },

  {
    id: "fiber",
    title: "Fiber Infrastructure",
    description:
      "Fiber optic deployment and structured cabling.",
    icon: Cable,
    color: "primary",
    href: "/services/fiber",
  },

  {
    id: "cctv",
    title: "CCTV & Surveillance",
    description:
      "Smart surveillance systems for modern organizations.",
    icon: Camera,
    color: "green",
    href: "/services/cctv",
  },

  {
    id: "electrical",
    title: "Electrical Engineering",
    description:
      "Reliable commercial and industrial electrical solutions.",
    icon: Zap,
    color: "blue",
    href: "/services/electrical",
  },
];

/* -------------------------------------------------------------------------- */
/*                              FLOATING CARDS                                */
/* -------------------------------------------------------------------------- */

export const floatingCards: FloatingCard[] = [
  {
    id: "cloud",
    title: "Cloud Ready",
    subtitle: "Azure & Microsoft 365",
    icon: Cloud,
    color: "blue",
  },
  {
    id: "security",
    title: "Protected",
    subtitle: "Enterprise Cybersecurity",
    icon: ShieldCheck,
    color: "green",
  },
  {
    id: "connectivity",
    title: "Always Connected",
    subtitle: "Reliable Network Infrastructure",
    icon: Globe,
    color: "primary",
  },
  {
    id: "monitoring",
    title: "24/7 Monitoring",
    subtitle: "Proactive Network Support",
    icon: Activity,
    color: "primary",
  },
];

/* -------------------------------------------------------------------------- */
/*                            NETWORK TOPOLOGY                                */
/* -------------------------------------------------------------------------- */

export const networkNodes: NetworkNode[] = [
  { id: 1, x: 12, y: 18, delay: 0.1, size: 8 },
  { id: 2, x: 38, y: 30, delay: 0.2, size: 10 },
  { id: 3, x: 65, y: 15, delay: 0.3, size: 9 },
  { id: 4, x: 82, y: 40, delay: 0.4, size: 12 },
  { id: 5, x: 25, y: 60, delay: 0.5, size: 9 },
  { id: 6, x: 55, y: 70, delay: 0.6, size: 10 },
  { id: 7, x: 85, y: 78, delay: 0.7, size: 8 },
];

/* -------------------------------------------------------------------------- */
/*                          NETWORK CONNECTIONS                               */
/* -------------------------------------------------------------------------- */

export const networkConnections: NetworkConnection[] = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 2, to: 5 },
  { from: 3, to: 4 },
  { from: 5, to: 6 },
  { from: 6, to: 7 },
  { from: 2, to: 6 },
  { from: 3, to: 6 },
];

/* -------------------------------------------------------------------------- */
/*                               HERO CONTENT                                 */
/* -------------------------------------------------------------------------- */

export const heroContent = {
  title: "Engineering Reliable Digital Infrastructure",

  highlight: "Digital Infrastructure",

  description:
    "Intracenet Solutions delivers enterprise networking, cybersecurity, cloud, fiber infrastructure and electrical engineering solutions that empower businesses across East Africa.",

  availability: "Available Across East Africa",
};