import {
  Network,
  ShieldCheck,
  Cloud,
  Camera,
  Cable,
  Zap,
  Building2,
  Hospital,
  Factory,
} from "lucide-react";

export const services = [
  {
    title: "Enterprise Networking",
    description: "LAN, WAN & WiFi infrastructure",
    href: "/services/networking",
    icon: Network,
  },
  {
    title: "Cyber Security",
    description: "Protect business assets",
    href: "/services/security",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Solutions",
    description: "Azure, AWS & Microsoft 365",
    href: "/services/cloud",
    icon: Cloud,
  },
  {
    title: "Fiber Infrastructure",
    description: "Structured cabling & fiber",
    href: "/services/fiber",
    icon: Cable,
  },
  {
    title: "CCTV Systems",
    description: "IP Surveillance",
    href: "/services/cctv",
    icon: Camera,
  },
  {
    title: "Electrical Engineering",
    description: "Power & electrical solutions",
    href: "/services/electrical",
    icon: Zap,
  },
];

export const solutions = [
  {
    title: "Enterprise IT",
    description: "Complete business infrastructure",
    href: "/solutions/enterprise",
    icon: Building2,
  },
  {
    title: "Healthcare",
    description: "Hospital ICT solutions",
    href: "/solutions/healthcare",
    icon: Hospital,
  },
];

export const industries = [
  {
    title: "Manufacturing",
    description: "Industrial networking",
    href: "/industries/manufacturing",
    icon: Factory,
  },
  {
    title: "Commercial Buildings",
    description: "Smart building solutions",
    href: "/industries/commercial",
    icon: Building2,
  },
];