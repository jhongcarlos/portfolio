"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease },
  };
}

const STATS = [
  { value: "8+",   label: "Years" },
  { value: "60+",  label: "Clients" },
  { value: "100+", label: "Projects" },
  { value: "7",    label: "Platforms" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-background">

      {/* Spotlight glow — centered behind headline */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 600,
          background: "radial-gradient(ellipse at center, oklch(0.55 0.24 30 / 0.13) 0%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />

      {/* Subtle noise grid */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[70rem] mx-auto px-6 sm:px-8 py-20">

        {/* Badge */}
        <motion.div {...fadeUp(0.05)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for Work · Manila, Philippines
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-heading font-bold tracking-tight leading-[1.06] mb-6"
        >
          <span className="block text-[clamp(2.8rem,7vw,5rem)] text-white/90">
            Full-Stack Web Developer
          </span>
          <span className="block text-[clamp(2.8rem,7vw,5rem)] gradient-text">
            for agencies that ship.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.25)}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10"
        >
          8+ years building WordPress sites, web apps, and everything
          in between — for clients across the{" "}
          <span className="text-white/80">US</span>,{" "}
          <span className="text-white/80">Singapore</span>, and{" "}
          <span className="text-white/80">Philippines</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.33)} className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_oklch(0.55_0.24_30_/_0.35)] cursor-pointer"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.04] text-white/80 font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition-all cursor-pointer backdrop-blur-sm"
          >
            Get In Touch
          </Link>
          <a
            href="/John_Harold_Carlos_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.42)}
          className="flex items-center justify-center gap-8 sm:gap-12"
        >
          {STATS.map((s, i) => (
            <div key={s.label}>
              <div className="font-heading font-bold text-2xl sm:text-3xl gradient-text leading-none mb-1">
                {s.value}
              </div>
              <div className="text-xs text-muted-foreground tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

    </section>
  );
}
