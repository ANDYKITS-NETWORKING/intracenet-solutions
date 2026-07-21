import { motion } from "framer-motion";
import React from "react";

// ============================================================
// TYPES
// ============================================================
interface FloatingCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className: string;
  delay?: number;
}

interface ConnectionLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
}

// ============================================================
// FLOATING CARD
// ============================================================
function FloatingCard({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
}: FloatingCardProps) {
  return (
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
        absolute group w-64 overflow-hidden rounded-3xl
        border border-white/20 bg-white/65 backdrop-blur-3xl p-6
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-green-500/10" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 h-1 w-full scale-x-0 bg-gradient-to-r from-primary via-blue-500 to-green-500 transition-transform duration-500 group-hover:scale-x-100 origin-left" />

      <div className="relative">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
          <Icon className="h-7 w-7 text-primary" />
        </div>

        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================================
// CONNECTION LINE
// ============================================================
function ConnectionLine({ x1, y1, x2, y2, delay = 0 }: ConnectionLineProps) {
  return (
    <>
      {/* Static line */}
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

      {/* Animated packet */}
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
}

// ============================================================
// PULSING NODE
// ============================================================
function PulsingNode({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    >
      <div className="h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary" />
      <motion.div
        animate={{ scale: [1, 3], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-primary"
      />
    </motion.div>
  );
}

// ============================================================
// ORBITING CORE
// ============================================================
function OrbitingCore() {
  return (
    <div className="mt-8 flex justify-center relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="relative h-44 w-44 rounded-full border border-primary/20"
      >
        <div className="absolute inset-5 rounded-full border border-primary/20" />
        <div className="absolute inset-10 rounded-full border border-primary/20" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-1/2 w-[2px] origin-left bg-gradient-to-r from-primary to-transparent"
        />
      </motion.div>
    </div>
  );
}

// ============================================================
// HERO SECTION
// ============================================================
export default function HeroSection() {
  const floatingCards = [
    { icon: () => <span>🌐</span> },
    { icon: () => <span>🛡️</span> },
    { icon: () => <span>☁️</span> },
    { icon: () => <span>🔗</span> },
    { icon: () => <span>📹</span> },
    { icon: () => <span>⚡</span> },
  ];

  const nodePositions = [
    { x: 180, y: 120 },
    { x: 730, y: 150 },
    { x: 760, y: 520 },
    { x: 180, y: 560 },
    { x: 250, y: 350 },
    { x: 650, y: 310 },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        {/* ===== FLOATING CARDS ===== */}
        <FloatingCard
          delay={0.2}
          title="Enterprise Networking"
          description="LAN • WAN • Campus Networks"
          icon={floatingCards[0].icon}
          className="-left-10 top-8"
        />
        <FloatingCard
          delay={0.4}
          title="Cyber Security"
          description="Firewalls • SOC • Endpoint Security"
          icon={floatingCards[1].icon}
          className="-right-8 top-16"
        />
        <FloatingCard
          delay={0.6}
          title="Cloud Infrastructure"
          description="Azure • AWS • Hybrid Cloud"
          icon={floatingCards[2].icon}
          className="right-0 bottom-24"
        />
        <FloatingCard
          delay={0.8}
          title="Fiber Infrastructure"
          description="FTTH • Backbone • Splicing"
          icon={floatingCards[3].icon}
          className="-left-4 bottom-8"
        />
        <FloatingCard
          delay={1.0}
          title="CCTV & Surveillance"
          description="IP Cameras • Monitoring"
          icon={floatingCards[4].icon}
          className="left-20 top-56"
        />
        <FloatingCard
          delay={1.2}
          title="Electrical Engineering"
          description="Power • Solar • Structured Cabling"
          icon={floatingCards[5].icon}
          className="right-20 bottom-64"
        />

        {/* ===== SVG NETWORK ===== */}
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

        {/* ===== PULSING NODES ===== */}
        {nodePositions.map((node, i) => (
          <PulsingNode key={i} x={node.x} y={node.y} delay={i * 0.25} />
        ))}

        {/* ===== ORBITING CORE ===== */}
        <OrbitingCore />

        {/* ===== CENTER RING ===== */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-8 top-16 flex h-20 w-20 items-center justify-center rounded-full border border-primary/20"
        >
          <div className="h-3 w-3 rounded-full bg-primary" />
          <div className="absolute h-12 w-12 rounded-full border border-green-500/30" />
          <div className="absolute h-20 w-20 rounded-full border border-primary/20" />
        </motion.div>
      </div>
    </section>
  );
}