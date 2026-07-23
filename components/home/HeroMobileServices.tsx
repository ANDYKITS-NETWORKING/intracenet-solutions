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
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

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
  },
];

// Service details for expanded view
const serviceDetails = {
  "Enterprise Networking": {
    features: ["Zero-touch provisioning", "AI-driven analytics", "Multi-cloud connectivity"],
    cta: "Schedule Network Audit",
  },
  "Cyber Security": {
    features: ["Real-time threat detection", "Compliance monitoring", "Incident response"],
    cta: "Get Security Assessment",
  },
  "Cloud Infrastructure": {
    features: ["Auto-scaling", "Disaster recovery", "Cost optimization"],
    cta: "Start Cloud Migration",
  },
  "Fiber Infrastructure": {
    features: ["High-speed backbone", "Last-mile connectivity", "Future-proof design"],
    cta: "Request Fiber Survey",
  },
  "CCTV & Surveillance": {
    features: ["AI-powered analytics", "Remote monitoring", "Night vision"],
    cta: "Get Security Quote",
  },
  "Electrical Engineering": {
    features: ["Energy-efficient", "Smart grid", "Sustainable solutions"],
    cta: "Book Consultation",
  },
};

// ============================================================
// DESKTOP NETWORK VISUALIZATION COMPONENT
// ============================================================
function DesktopNetworkVisualization() {
  // Connection Line Component
  const ConnectionLine = ({ x1, y1, x2, y2, delay = 0 }: any) => (
    <>
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay }}
      />
      <motion.circle
        r="4"
        fill="#22c55e"
        filter="url(#packetGlow)"
        initial={{ cx: x1, cy: y1 }}
        animate={{ cx: [x1, x2], cy: [y1, y2] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay }}
      />
    </>
  );

  // Pulsing Node Component
  const PulsingNode = ({ x, y, delay }: any) => (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    >
      <div className="h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary" />
      <motion.div
        animate={{ scale: [1, 3], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
        className="absolute inset-0 rounded-full bg-primary"
      />
    </motion.div>
  );

  // Floating Card for Desktop
  const DesktopFloatingCard = ({ title, description, icon: Icon, className, delay = 0 }: any) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [0, 4, -4, 0],
        y: [0, -10, 6, 0],
        rotate: [0, 0.5, -0.5, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        x: { delay, duration: 6, repeat: Infinity, ease: "easeInOut" },
        y: { delay, duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotate: { delay, duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{
        scale: 1.05,
        y: -10,
        rotateX: 6,
        rotateY: -6,
      }}
      className={`
        absolute group w-56 overflow-hidden rounded-3xl
        border border-white/20 bg-white/65 backdrop-blur-3xl p-5
        shadow-xl transition-all duration-500
        hover:border-primary/40 hover:shadow-[0_30px_80px_rgba(37,99,235,.22)]
        dark:border-slate-700 dark:bg-slate-900/70
        ${className}
      `}
    >
      {/* Glass reflection */}
      <motion.div
        animate={{ x: ["-120%", "180%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay }}
        className="absolute inset-y-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h4 className="text-base font-bold text-slate-900 dark:text-white">
          {title}
        </h4>
        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );

  const nodePositions = [
    { x: 180, y: 120 },
    { x: 730, y: 150 },
    { x: 760, y: 520 },
    { x: 180, y: 560 },
    { x: 250, y: 350 },
    { x: 650, y: 310 },
  ];

  return (
    <div className="relative hidden lg:block min-h-[600px] w-full">
      {/* Floating Cards - Desktop Version */}
      <DesktopFloatingCard
        delay={0.2}
        title="Enterprise Networking"
        description="LAN • WAN • WiFi • SD-WAN"
        icon={Network}
        className="-left-10 top-8"
      />
      <DesktopFloatingCard
        delay={0.4}
        title="Cyber Security"
        description="Firewalls • SOC • Zero Trust"
        icon={ShieldCheck}
        className="-right-8 top-16"
      />
      <DesktopFloatingCard
        delay={0.6}
        title="Cloud Infrastructure"
        description="Azure • AWS • Hybrid Cloud"
        icon={Cloud}
        className="right-0 bottom-24"
      />
      <DesktopFloatingCard
        delay={0.8}
        title="Fiber Infrastructure"
        description="FTTH • Backbone • Splicing"
        icon={Cable}
        className="-left-4 bottom-8"
      />
      <DesktopFloatingCard
        delay={1.0}
        title="CCTV & Surveillance"
        description="IP Cameras • Monitoring"
        icon={Camera}
        className="left-20 top-56"
      />
      <DesktopFloatingCard
        delay={1.2}
        title="Electrical Engineering"
        description="Solar • Power • Cabling"
        icon={Zap}
        className="right-20 bottom-64"
      />

      {/* Network SVG */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 720">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <filter id="packetGlow">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        <ConnectionLine x1={450} y1={360} x2={180} y2={120} delay={0} />
        <ConnectionLine x1={450} y1={360} x2={730} y2={150} delay={0.4} />
        <ConnectionLine x1={450} y1={360} x2={760} y2={520} delay={0.8} />
        <ConnectionLine x1={450} y1={360} x2={180} y2={560} delay={1.2} />
        <ConnectionLine x1={450} y1={360} x2={250} y2={350} delay={1.6} />
        <ConnectionLine x1={450} y1={360} x2={650} y2={310} delay={2.0} />
      </svg>

      {/* Pulsing Nodes */}
      {nodePositions.map((node, i) => (
        <PulsingNode key={i} x={node.x} y={node.y} delay={i * 0.25} />
      ))}

      {/* Center Core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative flex h-32 w-32 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-primary/20" />
          <div className="absolute inset-4 rounded-full border border-primary/20" />
          <div className="absolute inset-8 rounded-full border border-primary/20" />
          
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute h-32 w-32"
          >
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" />
          </motion.div>
          
          <div className="relative z-10 text-center">
            <div className="text-2xl font-bold text-primary">Intracenet</div>
            <div className="text-xs font-semibold text-slate-500">Solutions</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT - Mobile + Desktop
// ============================================================
export default function HeroMobileServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [bookmarked, setBookmarked] = useState<string[]>([]);
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

  // Scroll to specific card
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

  // Handle next/prev navigation
  const handleNext = useCallback(() => {
    const nextIndex = Math.min(activeIndex + 1, services.length - 1);
    scrollToCard(nextIndex);
    if (navigator.vibrate) navigator.vibrate(5);
  }, [activeIndex, scrollToCard]);

  const handlePrev = useCallback(() => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToCard(prevIndex);
    if (navigator.vibrate) navigator.vibrate(5);
  }, [activeIndex, scrollToCard]);

  // Handle card tap with haptic feedback
  const handleCardTap = useCallback((index: number, title: string) => {
    if (navigator.vibrate) navigator.vibrate(10);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_service_card', {
        service: title,
        position: index + 1,
      });
    }
  }, []);

  // Toggle bookmark
  const toggleBookmark = useCallback((e: React.MouseEvent, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    setBookmarked(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
    
    if (navigator.vibrate) navigator.vibrate(5);
  }, []);

  // Toggle expand
  const toggleExpand = useCallback((title: string) => {
    setExpandedId(prev => prev === title ? null : title);
    if (navigator.vibrate) navigator.vibrate(10);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Auto-play
  useEffect(() => {
    if (isDragging || expandedId) return;
    
    const interval = setInterval(() => {
      if (activeIndex === services.length - 1) {
        scrollToCard(0);
      } else {
        handleNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, handleNext, scrollToCard, isDragging, expandedId]);

  return (
    <>
      {/* ===== DESKTOP VERSION ===== */}
      <DesktopNetworkVisualization />

      {/* ===== MOBILE VERSION ===== */}
      <section className="lg:hidden mt-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-6 flex items-center justify-between"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs uppercase tracking-[0.35em] text-primary font-semibold"
            >
              Our Expertise
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-2xl font-bold text-slate-900 dark:text-white"
            >
              Enterprise Solutions
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2"
          >
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
          </motion.div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="hidden sm:flex justify-between mb-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            disabled={isAtStart}
            className={`p-2 rounded-full border border-slate-200 dark:border-slate-700 transition-all ${
              isAtStart ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/10'
            }`}
            aria-label="Previous card"
          >
            <ChevronLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={isAtEnd}
            className={`p-2 rounded-full border border-slate-200 dark:border-slate-700 transition-all ${
              isAtEnd ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/10'
            }`}
            aria-label="Next card"
          >
            <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-400" />
          </motion.button>
        </div>

        {/* Cards Carousel */}
        <div
          ref={containerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide relative -mx-4 px-4"
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setTimeout(() => setIsDragging(false), 100)}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setTimeout(() => setIsDragging(false), 100)}
          role="list"
          aria-label="Services carousel"
        >
          {/* Gradient Fade Indicators */}
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
            const details = serviceDetails[service.title as keyof typeof serviceDetails];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="min-w-[300px] max-w-[300px] snap-center flex-shrink-0 relative"
                role="listitem"
              >
                <Link href={service.href} onClick={() => handleCardTap(index, service.title)}>
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-2xl p-6 shadow-xl transition-all duration-500 dark:border-slate-700 dark:bg-slate-900/80 hover:shadow-2xl">
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${service.color}`}
                      style={{ mixBlendMode: "soft-light" }}
                    />

                    {/* Animated Background Pattern */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl group-hover:scale-150 transition-transform duration-700" />

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

                    {/* Bookmark Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => toggleBookmark(e, service.title)}
                      className="absolute top-4 left-4 z-10 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="h-4 w-4 text-primary" />
                      ) : (
                        <Bookmark className="h-4 w-4 text-slate-400" />
                      )}
                    </motion.button>

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.1,
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="h-8 w-8 text-primary" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {service.title}
                      </h4>

                      <p className="mt-2 leading-7 text-slate-500 dark:text-slate-400">
                        {service.description}
                      </p>

                      {/* Stats */}
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

                      {/* Expandable Details */}
                      <AnimatePresence>
                        {isExpanded && details && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 space-y-2 overflow-hidden"
                          >
                            {details.features.map((feature, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                            
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="mt-2 w-full py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold hover:bg-primary/20 transition-colors"
                            >
                              {details.cta}
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between relative">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-primary">
                          Learn More
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          #{index + 1}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Expand Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleExpand(service.title);
                          }}
                          className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          aria-label={isExpanded ? "Show less" : "Show more"}
                        >
                          <span className="text-xs text-slate-400">
                            {isExpanded ? '−' : '+'}
                          </span>
                        </motion.button>

                        <motion.div
                          whileHover={{
                            x: 4,
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight className="h-5 w-5 text-primary" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Animated Top Border */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{
                        duration: 0.35,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className={`absolute left-0 top-0 h-1 w-full origin-left bg-gradient-to-r ${service.color}`}
                    />

                    {/* Tag */}
                    <div className="absolute bottom-4 right-4">
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

        {/* Footer Controls */}
        <div className="mt-6 space-y-4">
          {/* Progress Bar */}
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

          {/* Navigation Dots + Counter + Share */}
          <div className="flex items-center justify-center gap-4">
            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Intracenet Enterprise Solutions',
                    text: 'Check out our enterprise solutions!',
                    url: window.location.href,
                  });
                }
              }}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Share services"
            >
              <Share2 className="h-4 w-4 text-slate-400" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {services.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    scrollToCard(i);
                    if (navigator.vibrate) navigator.vibrate(5);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? 'bg-primary shadow-lg shadow-primary/30' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                  animate={i === activeIndex ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                  transition={{ repeat: i === activeIndex ? Infinity : 0, duration: 2 }}
                  aria-label={`Go to card ${i + 1}`}
                  aria-current={i === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="text-xs font-mono text-slate-400 min-w-[30px] text-center">
              {activeIndex + 1}/{services.length}
            </span>
          </div>

          {/* Scroll Hint */}
          <AnimatePresence>
            {showScrollHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-center"
              >
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-3 w-3" />
                  </motion.div>
                  <span>Swipe to explore</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Accessibility */}
          <div className="sr-only" aria-live="polite">
            Currently viewing card {activeIndex + 1} of {services.length}: {services[activeIndex].title}
          </div>
        </div>

        {/* Keyboard Navigation Hint */}
        <div className="hidden sm:block mt-2 text-center">
          <span className="text-xs text-slate-400">
            Use ← → arrow keys to navigate
          </span>
        </div>
      </section>
    </>
  );
}