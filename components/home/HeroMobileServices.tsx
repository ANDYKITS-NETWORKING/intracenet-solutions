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

// ============================================================
// IMPROVED SAFE GTAG FUNCTION - FIXED
// ============================================================
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
      // Track share event
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
// HERO HEADER COMPONENT
// ============================================================
function HeroHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 relative z-10"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-block mb-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-blue-500 to-emerald-500 bg-clip-text text-transparent">
          Intracenet
        </h1>
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 font-semibold mt-1">
          Solutions • Connecting You Faster
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
      >
        <span className="inline-block bg-primary/10 px-4 py-1 rounded-full text-primary font-semibold text-sm mb-2">
          Trusted Enterprise ICT Partner
        </span>
        <br />
        <span className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-white">
          Engineering Infrastructure
        </span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base"
      >
        Intracenet Solutions delivers enterprise networking, cybersecurity, cloud, 
        fiber infrastructure and electrical engineering solutions that empower 
        businesses across East Africa.
      </motion.p>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12"
      >
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-primary/10">
            <Building2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800 dark:text-white">250+</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Projects Delivered</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-emerald-500/10">
            <Headphones className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800 dark:text-white">24/7</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Technical Support</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-blue-500/10">
            <Users className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800 dark:text-white">99.99%</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Network Availability</div>
          </div>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl transition-all flex items-center gap-2"
          >
            Request Consultation
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </Link>
        
        <Link href="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-primary/20 text-primary rounded-full font-semibold hover:bg-primary/5 transition-all"
          >
            Explore Services
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

// ============================================================
// TECHNICAL BACKGROUND ANIMATION - FIXED
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
// MOBILE SERVICES CAROUSEL - FIXED HYDRATION
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

  // Track scroll position and active card
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
    
    // Track navigation
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
    
    // Track navigation
    safeGtag('event', 'carousel_navigate', {
      direction: 'prev',
      current_index: activeIndex,
      next_index: prevIndex,
    });
  }, [activeIndex, scrollToCard]);

  const handleCardTap = useCallback((index: number, title: string) => {
    safeVibrate(10);
    
    // Track service view with improved gtag
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
    
    // Track bookmark with improved gtag
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
    
    // Track expand with improved gtag
    safeGtag('event', 'toggle_card_expand', {
      service: title,
      action: isExpanding ? 'expand' : 'collapse',
      category: 'engagement',
    });
  }, [expandedId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // AUTO SLIDE RIGHT TO LEFT - INFINITE LOOP
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
      className="mt-12 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => setIsAutoPlaying(false)}
      onTouchEnd={() => setTimeout(() => setIsAutoPlaying(true), 3000)}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">
            Our Expertise
          </p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Enterprise Solutions
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {isAutoPlaying && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="hidden sm:flex items-center gap-1"
            >
              <span className="text-[8px] uppercase tracking-wider text-emerald-500 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                Auto
              </span>
            </motion.div>
          )}
          <span className="hidden sm:inline rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {activeIndex + 1} / {services.length}
          </span>
          <motion.span
            animate={showScrollHint ? { x: [0, 10, 0] } : { opacity: 0 }}
            transition={{ repeat: showScrollHint ? Infinity : 0, duration: 1.5 }}
            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
          >
            Swipe →
          </motion.span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden sm:flex justify-between mb-4 relative z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-primary/10 transition-all"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-primary/10 transition-all"
          aria-label="Next card"
        >
          <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-400" />
        </motion.button>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide relative -mx-4 px-4"
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
              whileHover={{ y: -6, scale: 1.02 }}
              className="min-w-[300px] max-w-[300px] snap-center flex-shrink-0 relative"
              role="listitem"
            >
              <Link href={service.href} onClick={() => handleCardTap(index, service.title)}>
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-2xl p-6 shadow-xl transition-all duration-500 dark:border-slate-700 dark:bg-slate-900/80 hover:shadow-2xl">
                  
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90 dark:from-slate-950/95 dark:to-slate-900/95" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {ServiceIcon && <ServiceIcon className="w-32 h-32 text-white/5" />}
                    </div>
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 30% 40%, rgba(37,99,235,0.1) 0%, transparent 60%)`,
                    }} />
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${service.color}`}
                    style={{ mixBlendMode: "soft-light" }}
                  />

                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl group-hover:scale-150 transition-transform duration-700" />

                  {/* Animated Circuit Pattern in Background - FIXED: No Math.random() */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06] pointer-events-none">
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
                    className="absolute top-4 right-4 z-10"
                  >
                    <span className={`text-[10px] font-mono font-semibold px-2 py-1 rounded-full ${
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
                    className="absolute top-4 left-4 z-10 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="h-4 w-4 text-primary" />
                    ) : (
                      <Bookmark className="h-4 w-4 text-slate-400" />
                    )}
                  </motion.button>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h4>
                    <p className="mt-2 leading-7 text-slate-500 dark:text-slate-400">
                      {service.description}
                    </p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-2 flex items-center gap-2"
                    >
                      <TrendingUp className="h-3 w-3 text-emerald-500" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
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
                          className="mt-4 space-y-2 overflow-hidden"
                        >
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                            >
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                          
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-2 w-full py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold hover:bg-primary/20 transition-colors"
                          >
                            {service.cta}
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-primary">
                        Learn More
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        #{index + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
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
                        <ArrowRight className="h-5 w-5 text-primary" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Animated Top Border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
                    className={`absolute left-0 top-0 h-1 w-full origin-left bg-gradient-to-r ${service.color}`}
                  />

                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="text-[8px] font-mono uppercase text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
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
      <div className="mt-6 space-y-4 relative z-10">
        <div className="h-1 w-full max-w-xs mx-auto bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            style={{ width: `${scrollProgress}%` }}
            transition={{ type: "spring", damping: 30 }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg"
            style={{ left: `calc(${scrollProgress}% - 6px)` }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Share2 className="h-4 w-4 text-slate-400" />
          </motion.button>

          <div className="flex gap-2">
            {services.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  scrollToCard(i);
                  safeVibrate(5);
                }}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex 
                    ? 'bg-primary shadow-lg shadow-primary/30' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
                animate={i === activeIndex ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ repeat: i === activeIndex ? Infinity : 0, duration: 2 }}
              />
            ))}
          </div>

          <span className="text-xs font-mono text-slate-400 min-w-[30px] text-center">
            {activeIndex + 1}/{services.length}
          </span>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
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
// CONTACT SECTION
// ============================================================
function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    
    // Track form submission
    safeGtag('event', 'contact_form_submit', {
      form_name: 'contact',
      category: 'conversion',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 relative overflow-hidden"
    >
      {/* Background pattern for contact section */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
          `,
        }} />
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {/* Left Side - Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white"
          >
            Let's Build Your Next ICT Solution
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Whether you're planning a network upgrade, cloud migration, 
            cybersecurity deployment or fiber infrastructure project, 
            we'd love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-300">info@intracenetsolutions.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-300">+254 700 000 000</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-300">Nairobi, Kenya</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex gap-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
              Trusted by 250+ businesses
            </span>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Send us a Message
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Fill in the form below and one of our consultants will contact you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-sm"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-sm"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+254 700 000 000"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-sm"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                Company
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-sm"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                Service Interested In
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-sm"
              >
                <option value="">Select a Service</option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                placeholder="Tell us about your project..."
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none text-sm resize-none"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="h-4 w-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function HeroMobileServices() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Technical Background */}
      <TechnicalBackground />
      
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-20">
        {/* Hero Header */}
        <HeroHeader />

        {/* Mobile Services Carousel with Auto Slide */}
        <MobileServicesCarousel />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </section>
  );
}