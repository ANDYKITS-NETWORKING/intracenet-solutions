// constants/navigation.ts

export interface NavItem {
  label: string;
  href: string;
  dropdown?: {
    label: string;
    href: string;
    description?: string;
    icon?: string;
  }[];
}

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Enterprise Networking", href: "/services/networking" },
      { label: "Fiber Infrastructure", href: "/services/fiber" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Electrical Engineering", href: "/services/electrical" },
      { label: "Solar Solutions", href: "/services/solar" },
      { label: "Smart Security", href: "/services/security" },
      { label: "Cloud Services", href: "/services/cloud" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Network Solutions", href: "/solutions/network" },
      { label: "Security Solutions", href: "/solutions/security" },
      { label: "Cloud Solutions", href: "/solutions/cloud" },
      { label: "Energy Solutions", href: "/solutions/energy" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { label: "Telecommunications", href: "/industries/telecom" },
      { label: "Banking & Finance", href: "/industries/finance" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "Government", href: "/industries/government" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Company Overview", href: "/about" },
      { label: "Leadership Team", href: "/about/team" },
      { label: "Careers", href: "/about/careers" },
      { label: "News & Insights", href: "/about/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
];