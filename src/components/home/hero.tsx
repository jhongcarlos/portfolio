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

      {/* Animated mesh gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "12%", "-8%", "0%"], y: ["0%", "12%", "8%", "0%"], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", borderRadius: "50%", filter: "blur(60px)",
            width: "70vw", height: "70vw", maxWidth: 780, maxHeight: 780,
            top: "-25%", left: "-15%",
            background: "oklch(0.55 0.24 30)",
            opacity: 0.25,
          }}
        />
        <motion.div
          animate={{ x: ["0%", "-12%", "8%", "0%"], y: ["0%", "-10%", "12%", "0%"], scale: [1, 1.2, 0.88, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", borderRadius: "50%", filter: "blur(60px)",
            width: "55vw", height: "55vw", maxWidth: 620, maxHeight: 620,
            top: "15%", right: "-20%",
            background: "oklch(0.50 0.22 280)",
            opacity: 0.15,
          }}
        />
        <motion.div
          animate={{ x: ["0%", "-10%", "6%", "0%"], y: ["0%", "-14%", "4%", "0%"], scale: [1, 1.18, 0.92, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", borderRadius: "50%", filter: "blur(60px)",
            width: "45vw", height: "45vw", maxWidth: 500, maxHeight: 500,
            bottom: "-5%", left: "25%",
            background: "oklch(0.52 0.22 50)",
            opacity: 0.12,
          }}
        />
      </div>

      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[70rem] mx-auto px-6 sm:px-8 py-20">

        {/* Badge */}
        <motion.div {...fadeUp(0.05)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for Work · Manila, Philippines
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-heading font-bold tracking-tight leading-[1.06] mb-6"
        >
          <span className="block text-[clamp(2.8rem,7vw,5rem)] text-foreground">
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
          <span className="text-foreground font-medium">US</span>,{" "}
          <span className="text-foreground font-medium">Singapore</span>, and{" "}
          <span className="text-foreground font-medium">Philippines</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.33)} className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)] cursor-pointer"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:bg-secondary transition-colors cursor-pointer"
          >
            Get In Touch
          </Link>
          <a
            href="/John_Harold_Carlos_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
          {STATS.map((s) => (
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

    </section>
  );
}
