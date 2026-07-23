"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Network,
  ShieldCheck,
  Cloud,
  Cable,
  Camera,
  Zap,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Share2,
  Bookmark,
  BookmarkCheck,
  Users,
  Headphones,
  Building2,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  CircuitBoard,
  Cpu,
  Server,
  Wifi,
  Database,
  Globe,
  PhoneCall,
  MessageCircle,
  Mail as MailIcon,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

// ============================================================
// GLOBAL TYPE DECLARATION FOR GTAG
// ============================================================
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName?: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

// ============================================================
// UTILITY FUNCTIONS FOR SAFE CLIENT-SIDE ACCESS
// ============================================================
const isClient = typeof window !== 'undefined';

const safeVibrate = (duration: number) => {
  if (isClient && navigator.vibrate) {
    navigator.vibrate(duration);
  }
};

type GtagParams = Record<string, unknown>;

const safeGtag = (
  command: string,
  eventName?: string,
  params?: GtagParams
) => {
  if (!isClient) return;
  window.gtag?.(command, eventName, params);
};

const safeShare = async (data: { title: string; text: string; url: string }) => {
  if (isClient && navigator.share) {
    try {
      await navigator.share(data);
      safeGtag('event', 'share_content', {
        method: 'web_share_api',
        title: data.title,
      });
    } catch (error) {
      console.log('Share cancelled');
    }
  }
};

// ============================================================
// SERVICES DATA - ALL 6 SERVICES
// ============================================================
const services = [
  {
    title: "Enterprise Networking",
    description: "LAN • WAN • WiFi • SD-WAN",
    icon: Network,
    href: "/services/networking",
    color: "from-blue-600 to-sky-500",
    stats: "99.9% Uptime",
    badge: "Popular",
    tag: "Network",
    features: ["Zero-touch provisioning", "AI-driven analytics", "Multi-cloud connectivity"],
    cta: "Schedule Network Audit",
  },
  {
    title: "Cyber Security",
    description: "Firewalls • SOC • Zero Trust",
    icon: ShieldCheck,
    href: "/services/security",
    color: "from-emerald-600 to-green-500",
    stats: "24/7 Monitoring",
    badge: "Critical",
    tag: "Security",
    features: ["Real-time threat detection", "Compliance monitoring", "Incident response"],
    cta: "Get Security Assessment",
  },
  {
    title: "Cloud Infrastructure",
    description: "Azure • AWS • Hybrid Cloud",
    icon: Cloud,
    href: "/services/cloud",
    color: "from-cyan-600 to-blue-500",
    stats: "Scalable",
    badge: "Enterprise",
    tag: "Cloud",
    features: ["Auto-scaling", "Disaster recovery", "Cost optimization"],
    cta: "Start Cloud Migration",
  },
  {
    title: "Fiber Infrastructure",
    description: "FTTH • Backbone • Splicing",
    icon: Cable,
    href: "/services/fiber",
    color: "from-indigo-600 to-blue-500",
    stats: "10Gbps",
    badge: "New",
    tag: "Infrastructure",
    features: ["High-speed backbone", "Last-mile connectivity", "Future-proof design"],
    cta: "Request Fiber Survey",
  },
  {
    title: "CCTV & Surveillance",
    description: "IP Cameras • Monitoring",
    icon: Camera,
    href: "/services/cctv",
    color: "from-blue-600 to-emerald-500",
    stats: "4K UHD",
    badge: "Smart",
    tag: "Security",
    features: ["AI-powered analytics", "Remote monitoring", "Night vision"],
    cta: "Get Security Quote",
  },
  {
    title: "Electrical Engineering",
    description: "Solar • Power • Cabling",
    icon: Zap,
    href: "/services/electrical",
    color: "from-yellow-500 to-green-500",
    stats: "Eco-Friendly",
    badge: "Green",
    tag: "Energy",
    features: ["Energy-efficient", "Smart grid", "Sustainable solutions"],
    cta: "Book Consultation",
  },
];

// Service icon map for backgrounds
const serviceIcons = {
  "Enterprise Networking": Network,
  "Cyber Security": ShieldCheck,
  "Cloud Infrastructure": Cloud,
  "Fiber Infrastructure": Cable,
  "CCTV & Surveillance": Camera,
  "Electrical Engineering": Zap,
};

// ============================================================
// TECHNICAL BACKGROUND PATTERNS
// ============================================================
const technicalPatterns = [
  {
    id: 1,
    icon: CircuitBoard,
    color: "from-blue-500/10 to-cyan-500/5",
    size: "w-64 h-64",
    position: "top-0 left-0",
    rotation: 0,
  },
  {
    id: 2,
    icon: Cpu,
    color: "from-purple-500/10 to-pink-500/5",
    size: "w-48 h-48",
    position: "top-20 right-0",
    rotation: 15,
  },
  {
    id: 3,
    icon: Server,
    color: "from-emerald-500/10 to-teal-500/5",
    size: "w-56 h-56",
    position: "bottom-0 left-20",
    rotation: -10,
  },
  {
    id: 4,
    icon: Wifi,
    color: "from-yellow-500/10 to-orange-500/5",
    size: "w-40 h-40",
    position: "bottom-20 right-10",
    rotation: 25,
  },
  {
    id: 5,
    icon: Database,
    color: "from-red-500/10 to-rose-500/5",
    size: "w-52 h-52",
    position: "top-1/2 left-1/4",
    rotation: -20,
  },
  {
    id: 6,
    icon: Globe,
    color: "from-indigo-500/10 to-violet-500/5",
    size: "w-60 h-60",
    position: "bottom-1/3 right-1/4",
    rotation: 30,
  },
];

// ============================================================
// FIXED CIRCUIT PATH - No Math.random() during render
// ============================================================
const circuitPaths = [
  "M0 200 L150 150 L200 250 L350 200 L400 300 L550 250",
  "M0 150 L100 200 L180 120 L280 180 L350 100 L500 150",
  "M0 250 L120 180 L200 280 L320 220 L400 320 L550 280",
  "M0 180 L80 120 L160 200 L240 140 L340 220 L480 160",
  "M0 220 L140 160 L220 240 L300 180 L420 260 L560 200",
  "M0 280 L90 220 L170 300 L250 240 L370 320 L510 260",
];

// ============================================================
// QUICK ACTION BUTTONS COMPONENT
// ============================================================
function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex items-center justify-center gap-4 mt-6"
    >
      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+254700000000"
        className="p-3 rounded-full bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all"
        aria-label="Call us"
      >
        <PhoneCall className="h-5 w-5" />
      </motion.a>
      
      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-all"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-5 w-5" />
      </motion.a>
      
      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:info@intracenetsolutions.com"
        className="p-3 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-all"
        aria-label="Email us"
      >
        <MailIcon className="h-5 w-5" />
      </motion.a>
    </motion.div>
  );
}

// ============================================================
// TRUST BADGES COMPONENT
// ============================================================
function TrustBadges() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-4"
    >
      <div className="flex items-center gap-1">
        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
        <span className="ml-1 font-medium text-slate-700 dark:text-slate-300">Trusted by Businesses</span>
      </div>
      <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
      <span>99.99% Network Uptime</span>
      <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
      <span>Serving East Africa</span>
    </motion.div>
  );
}
// ============================================================
// ============================================================
// HERO HEADER COMPONENT
// ============================================================
function HeroHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 pt-10 pb-16 md:pt-20 md:pb-24 text-center"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="inline-block mb-5"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-emerald-500 bg-clip-text text-transparent">
          Intracenet
        </h1>

        <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 font-semibold">
          Solutions • Connecting You Faster
        </p>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary mb-8"
      >
        Trusted Enterprise ICT Partner
      </motion.div>

      {/* Hero Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="
          mx-auto
          max-w-5xl
          px-4
          font-black
          tracking-tight
          leading-[0.95]
          text-[clamp(2.2rem,8vw,5.4rem)]
          text-balance
        "
      >
        <span className="block text-slate-900 dark:text-white">
          Engineering
        </span>

        <span className="block bg-gradient-to-r from-primary via-blue-500 to-emerald-500 bg-clip-text text-transparent">
          Reliable Digital
        </span>

        <span className="block text-slate-900 dark:text-white">
          Infrastructure
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="
          mx-auto
          mt-8
          max-w-2xl
          px-6
          text-sm
          leading-7
          text-slate-600
          dark:text-slate-400
          sm:text-base
          md:text-lg
        "
      >
        Intracenet Solutions delivers enterprise networking,
        cybersecurity, cloud infrastructure, fiber optic solutions and
        electrical engineering services that empower businesses across
        East Africa.
      </motion.p>

      {/* Trust Badges */}
      <TrustBadges />

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl"
          >
            Request Consultation
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </Link>

        <Link href="/services">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Explore Services →
          </motion.button>
        </Link>
      </motion.div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-10 flex justify-center gap-8 sm:gap-12"
      >
        <div className="text-center">
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            250+
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Projects
          </div>
        </div>

        <div className="h-10 w-px bg-slate-300 dark:bg-slate-700" />

        <div className="text-center">
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            24/7
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Support
          </div>
        </div>

        <div className="h-10 w-px bg-slate-300 dark:bg-slate-700" />

        <div className="text-center">
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            EA
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Coverage
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
// ============================================================
// TECHNICAL BACKGROUND ANIMATION
// ============================================================
function TechnicalBackground() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (isClient) {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]">
        <motion.path
          d="M0 100 L200 100 L250 150 L400 150 L450 100 L600 100"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0 200 L150 200 L200 250 L350 250 L400 200 L550 200"
          stroke="#22c55e"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
        <motion.path
          d="M100 400 L250 400 L300 350 L450 350 L500 400 L650 400"
          stroke="#8b5cf6"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </svg>

      {/* Floating Technical Icons */}
      {technicalPatterns.map((pattern, index) => {
        const Icon = pattern.icon;
        return (
          <motion.div
            key={pattern.id}
            className={`absolute ${pattern.position} ${pattern.size}`}
            initial={{ opacity: 0, scale: 0.5, rotate: pattern.rotation }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
              rotate: [pattern.rotation, pattern.rotation + 10, pattern.rotation],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <div className={`w-full h-full bg-gradient-to-br ${pattern.color} rounded-full blur-3xl`} />
            <Icon className="absolute inset-0 m-auto w-16 h-16 text-primary/20 dark:text-primary/30" />
          </motion.div>
        );
      })}

      {/* Floating Particles - Only render on client */}
      {isClient && windowWidth > 0 && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 dark:bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * windowWidth,
            y: Math.random() * windowHeight,
          }}
          animate={{
            x: [
              Math.random() * windowWidth,
              Math.random() * windowWidth,
              Math.random() * windowWidth,
            ],
            y: [
              Math.random() * windowHeight,
              Math.random() * windowHeight,
              Math.random() * windowHeight,
            ],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// ============================================================
// MOBILE SERVICES CAROUSEL
// ============================================================
function MobileServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
      
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft >= maxScroll - 1);
      
      const cardWidth = 300 + 20;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, services.length - 1));
      
      if (scrollLeft > 50) setShowScrollHint(false);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    
    const cardWidth = 300 + 20;
    const targetScroll = index * cardWidth;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % services.length;
    scrollToCard(nextIndex);
    safeVibrate(5);
    safeGtag('event', 'carousel_navigate', {
      direction: 'next',
      current_index: activeIndex,
      next_index: nextIndex,
    });
  }, [activeIndex, scrollToCard]);

  const handlePrev = useCallback(() => {
    const prevIndex = activeIndex === 0 ? services.length - 1 : activeIndex - 1;
    scrollToCard(prevIndex);
    safeVibrate(5);
    safeGtag('event', 'carousel_navigate', {
      direction: 'prev',
      current_index: activeIndex,
      next_index: prevIndex,
    });
  }, [activeIndex, scrollToCard]);

  const handleCardTap = useCallback((index: number, title: string) => {
    safeVibrate(10);
    safeGtag('event', 'view_service_card', {
      service: title,
      position: index + 1,
      category: 'engagement',
    });
  }, []);

  const toggleBookmark = useCallback((e: React.MouseEvent, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isBookmarked = bookmarked.includes(title);
    const newBookmarks = isBookmarked 
      ? bookmarked.filter(t => t !== title) 
      : [...bookmarked, title];
    
    setBookmarked(newBookmarks);
    safeVibrate(5);
    safeGtag('event', 'toggle_bookmark', {
      service: title,
      action: isBookmarked ? 'remove' : 'add',
      category: 'engagement',
    });
  }, [bookmarked]);

  const toggleExpand = useCallback((title: string) => {
    const isExpanding = expandedId !== title;
    setExpandedId(prev => prev === title ? null : title);
    safeVibrate(10);
    safeGtag('event', 'toggle_card_expand', {
      service: title,
      action: isExpanding ? 'expand' : 'collapse',
      category: 'engagement',
    });
  }, [expandedId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    if (!isAutoPlaying || isDragging || expandedId) return;
    
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % services.length;
      scrollToCard(nextIndex);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [activeIndex, scrollToCard, isDragging, expandedId, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const handleShare = () => {
    safeShare({
      title: 'Intracenet Enterprise Solutions',
      text: 'Check out our enterprise solutions!',
      url: isClient ? window.location.href : '',
    });
  };

  return (
    <div 
      className="mt-8 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => setIsAutoPlaying(false)}
      onTouchEnd={() => setTimeout(() => setIsAutoPlaying(true), 3000)}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary font-semibold">
            Our Expertise
          </p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Enterprise Solutions
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {isAutoPlaying && (
            <span className="text-[8px] uppercase tracking-wider text-emerald-500 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
              Auto
            </span>
          )}
          <span className="text-xs font-mono text-slate-400">
            {activeIndex + 1}/{services.length}
          </span>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide relative -mx-4 px-4"
        onTouchStart={() => {
          setIsDragging(true);
          setIsAutoPlaying(false);
        }}
        onTouchEnd={() => {
          setTimeout(() => setIsDragging(false), 100);
          setTimeout(() => setIsAutoPlaying(true), 3000);
        }}
        onMouseDown={() => {
          setIsDragging(true);
          setIsAutoPlaying(false);
        }}
        onMouseUp={() => {
          setTimeout(() => setIsDragging(false), 100);
          setTimeout(() => setIsAutoPlaying(true), 3000);
        }}
        role="list"
        aria-label="Services carousel"
      >
        {!isAtStart && (
          <div className="sticky left-0 top-0 h-full w-12 bg-gradient-to-r from-white dark:from-slate-900 to-transparent pointer-events-none z-10" />
        )}
        {!isAtEnd && (
          <div className="sticky right-0 top-0 h-full w-12 bg-gradient-to-l from-white dark:from-slate-900 to-transparent pointer-events-none z-10" />
        )}

        {services.map((service, index) => {
          const Icon = service.icon;
          const isExpanded = expandedId === service.title;
          const isBookmarked = bookmarked.includes(service.title);
          const ServiceIcon = serviceIcons[service.title as keyof typeof serviceIcons];
          const circuitPath = circuitPaths[index % circuitPaths.length];

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="min-w-[280px] max-w-[280px] snap-center flex-shrink-0 relative"
              role="listitem"
            >
              <Link href={service.href} onClick={() => handleCardTap(index, service.title)}>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-2xl p-5 shadow-lg transition-all duration-500 dark:border-slate-700 dark:bg-slate-900/80 hover:shadow-xl">
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90 dark:from-slate-950/95 dark:to-slate-900/95" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {ServiceIcon && <ServiceIcon className="w-24 h-24 text-white/5" />}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${service.color}`}
                    style={{ mixBlendMode: "soft-light" }}
                  />

                  <div className="absolute -top-20 -right-20 w-32 h-32 rounded-full bg-primary/5 blur-3xl group-hover:scale-150 transition-transform duration-700" />

                  {/* Circuit Pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.04] pointer-events-none">
                    <motion.path
                      d={circuitPath}
                      stroke="#2563eb"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 + 0.2 }}
                    className="absolute top-3 right-3 z-10"
                  >
                    <span className={`text-[8px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                      service.badge === 'Popular' ? 'bg-blue-500/20 text-blue-500' :
                      service.badge === 'Critical' ? 'bg-red-500/20 text-red-500' :
                      service.badge === 'Enterprise' ? 'bg-purple-500/20 text-purple-500' :
                      service.badge === 'New' ? 'bg-green-500/20 text-green-500' :
                      service.badge === 'Smart' ? 'bg-cyan-500/20 text-cyan-500' :
                      'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {service.badge}
                    </span>
                  </motion.div>

                  {/* Bookmark */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => toggleBookmark(e, service.title)}
                    className="absolute top-3 left-3 z-10 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="h-3.5 w-3.5 text-primary" />
                    ) : (
                      <Bookmark className="h-3.5 w-3.5 text-slate-400" />
                    )}
                  </motion.button>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {service.description}
                    </p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-2 flex items-center gap-2"
                    >
                      <TrendingUp className="h-3 w-3 text-emerald-500" />
                      <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">
                        {service.stats}
                      </span>
                    </motion.div>

                    <AnimatePresence>
                      {isExpanded && service.features && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 space-y-1.5 overflow-hidden"
                        >
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
                            >
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                          
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-2 w-full py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-semibold hover:bg-primary/20 transition-colors"
                          >
                            {service.cta}
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-primary">
                        Learn More
                      </span>
                      <span className="text-[8px] text-slate-400 font-mono">
                        #{index + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpand(service.title);
                        }}
                        className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <span className="text-xs text-slate-400">
                          {isExpanded ? '−' : '+'}
                        </span>
                      </motion.button>

                      <motion.div whileHover={{ x: 4 }}>
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Animated Top Border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
                    className={`absolute left-0 top-0 h-0.5 w-full origin-left bg-gradient-to-r ${service.color}`}
                  />

                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="text-[6px] font-mono uppercase text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-4 space-y-3 relative z-10">
        <div className="h-0.5 w-full max-w-xs mx-auto bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            style={{ width: `${scrollProgress}%` }}
            transition={{ type: "spring", damping: 30 }}
          />
        </div>

        <div className="flex items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Share2 className="h-4 w-4 text-slate-400" />
          </motion.button>

          <div className="flex gap-1.5">
            {services.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  scrollToCard(i);
                  safeVibrate(5);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === activeIndex 
                    ? 'bg-primary shadow-lg shadow-primary/30' 
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
                animate={i === activeIndex ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ repeat: i === activeIndex ? Infinity : 0, duration: 2 }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isAutoPlaying ? (
              <span className="text-xs text-slate-400">⏸</span>
            ) : (
              <span className="text-xs text-slate-400">▶</span>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// WHY CHOOSE INTRACENET SECTION
// ============================================================
function WhyChooseSection() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Enterprise Grade",
      description: "Solutions built for business-critical operations",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified engineers with years of experience",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid deployment with minimal disruption",
    },
    {
      icon: Globe,
      title: "East Africa Coverage",
      description: "Supporting businesses across the region",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <div className="text-center mb-6">
        <p className="text-[10px] uppercase tracking-[0.35em] text-primary font-semibold">
          Why Choose Intracenet
        </p>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
          Built for Enterprise
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                {reason.title}
              </h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                {reason.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function HeroMobileServices() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-100
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      {/* Background */}
      <TechnicalBackground />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <HeroHeader />

        {/* Services */}
        <div className="mt-8 md:mt-12">
          <MobileServicesCarousel />
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 md:mt-24 pb-20">
          <WhyChooseSection />
        </div>
      </div>
    </section>
  );
}