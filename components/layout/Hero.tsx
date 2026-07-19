"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Cloud,
  Network,
  Activity,
  Wifi,
  Server,
  Zap,
  Globe,
  ChevronDown,
  Sparkles,
  Lock,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  className?: string;
}

const Hero = ({ className = "" }: HeroProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    { icon: ShieldCheck, label: "Cybersecurity", color: "from-blue-500 to-indigo-500" },
    { icon: Cloud, label: "Cloud Infrastructure", color: "from-cyan-500 to-blue-500" },
    { icon: Network, label: "Enterprise Networking", color: "from-purple-500 to-pink-500" },
    { icon: Wifi, label: "Wireless Solutions", color: "from-emerald-500 to-teal-500" },
    { icon: Server, label: "Data Centers", color: "from-orange-500 to-red-500" },
    { icon: Zap, label: "Fiber Optics", color: "from-yellow-500 to-amber-500" },
  ];

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 ${className}`}>
      
      {/* Interactive 3D Background */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      >
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-30%] right-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-r from-blue-300/5 to-indigo-300/5 blur-3xl" />
        
        {/* Grid Pattern - Fixed version without inline SVG */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating Particles */}
        <motion.div
  animate={{
    y: [0, -20, 0],
    opacity: [0.3, 1, 0.3],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
  }}
/>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            
            {/* Animated Badge */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="group relative inline-flex">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                <span className="relative inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-slate-700 border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Enterprise ICT Solutions
                  <Sparkles className="h-4 w-4 text-blue-500" />
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className={`transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
                Connecting
                <span className="relative block">
                  Businesses with
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                      Smarter Technology
                    </span>
                    {/* Underline animation */}
                    <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full scale-x-0 origin-left animate-expand-width" style={{ animationDelay: '1.5s' }} />
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className={`max-w-xl text-lg leading-relaxed text-slate-600 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Intracenet Solutions delivers enterprise networking,
              cybersecurity, cloud infrastructure, fiber deployment,
              wireless networking and managed IT services across Kenya.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" size={20} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
              </Link>

              <Link
                href="/services"
                className="group relative overflow-hidden rounded-xl border-2 border-slate-200 bg-white/70 backdrop-blur-sm px-8 py-4 font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Explore Services
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            {/* Stats with animated cards */}
            <div className={`grid grid-cols-3 gap-6 pt-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {[
                { number: "250+", label: "Projects Completed", icon: CheckCircle, color: "from-blue-500 to-cyan-500" },
                { number: "99.9%", label: "Network Uptime", icon: Activity, color: "from-emerald-500 to-teal-500" },
                { number: "24/7", label: "Support Available", icon: Globe, color: "from-orange-500 to-red-500" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm`} />
                  
                  <div className="relative">
                    <div className={`inline-flex rounded-lg bg-gradient-to-r ${stat.color} p-2.5 mb-3 shadow-lg`}>
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">
                      {stat.number}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Interactive Services Grid */}
          <div className={`relative hidden lg:block transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            
            {/* Floating 3D Card */}
            <div 
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg)`,
              }}
            >
              <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/60 p-8 shadow-2xl shadow-slate-200/40">
                
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-xl" />
                
                {/* Header */}
                <div className="relative mb-6 text-center">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Our Expertise
                  </h3>
                  <div className="mt-2 h-0.5 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
                </div>

                {/* Services Grid */}
                <div className="relative grid grid-cols-3 gap-4">
                  {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={idx}
                        className="group relative"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className="relative rounded-2xl bg-white border border-slate-200/60 p-5 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-transparent cursor-pointer">
                          
                          {/* Animated gradient background on hover */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                          
                          {/* Icon container */}
                          <div className={`relative mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${service.color} shadow-lg shadow-blue-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          
                          <p className="relative text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                            {service.label}
                          </p>
                          
                          {/* Bottom indicator bar */}
                          <div className="relative mt-2 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full mx-auto rounded-full" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Decorative Connection Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  <svg className="w-full h-full">
                    <line x1="33%" y1="30%" x2="66%" y2="30%" className="stroke-blue-400 stroke-2 stroke-dasharray-4" />
                    <line x1="50%" y1="20%" x2="50%" y2="80%" className="stroke-cyan-400 stroke-2 stroke-dasharray-4" />
                    <line x1="33%" y1="70%" x2="66%" y2="70%" className="stroke-purple-400 stroke-2 stroke-dasharray-4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating trust badge */}
            <div className="absolute -right-6 top-10 animate-float-slow">
              <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/60 p-4 shadow-xl shadow-slate-200/40">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Trusted by 100+</p>
                    <p className="text-xs text-slate-500">companies across Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech badge */}
            <div className="absolute -left-6 bottom-20 animate-float-slower">
              <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/60 p-4 shadow-xl shadow-slate-200/40">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 p-2">
                    <Lock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">ISO 27001</p>
                    <p className="text-xs text-slate-500">Certified Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-float-slow">
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-xs font-medium uppercase tracking-widest text-slate-400">Scroll to explore</span>
          <div className="h-10 w-6 rounded-full border-2 border-slate-300 flex items-start justify-center p-1 bg-white/50 backdrop-blur-sm">
            <div className="h-2 w-1.5 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500 animate-scroll-bounce" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
        @keyframes expand-width {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-scroll-bounce {
          animation: scroll-bounce 1.5s ease-in-out infinite;
        }
        .animate-expand-width {
          animation: expand-width 0.8s ease-out forwards;
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;