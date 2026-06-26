"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const rotatingTitles = ["WordPress Expert", "React Developer", "Agency Partner"];

const STACK = [
  "WordPress", "React", "Next.js", "PHP", "Laravel", "AWS",
  "Webflow", "Framer", "GoHighLevel", "MySQL", "Elementor", "Umbraco",
  "WordPress", "React", "Next.js", "PHP", "Laravel", "AWS",
  "Webflow", "Framer", "GoHighLevel", "MySQL", "Elementor", "Umbraco",
];

const AVATARS = [
  { bg: "bg-orange-400", initials: "AC" },
  { bg: "bg-sky-400",    initials: "BM" },
  { bg: "bg-emerald-400",initials: "RD" },
  { bg: "bg-violet-400", initials: "KL" },
];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease },
  };
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTitleIndex((i) => (i + 1) % rotatingTitles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-background">

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.18]"
          style={{ background: "oklch(0.55 0.24 30)" }} />
        <div className="absolute bottom-[-10%] right-[-8%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.10]"
          style={{ background: "oklch(0.58 0.20 264)" }} />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 py-20">

        {/* Available pill */}
        <motion.div {...fadeUp(0.05)} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-medium text-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for Work
            <span className="opacity-30">·</span>
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-muted-foreground">Manila, PH</span>
          </div>
        </motion.div>

        {/* Giant headline */}
        <motion.div {...fadeUp(0.15)} className="text-center mb-5">
          <h1 className="font-heading font-bold tracking-tight leading-[1.0] text-foreground">
            <span className="block text-[clamp(3.2rem,9vw,6.5rem)]">
              Full-Stack
            </span>
            <span
              className="block text-[clamp(3.2rem,9vw,6.5rem)] gradient-text"
              style={{ WebkitTextStroke: "0px" }}
            >
              Web Developer
            </span>
          </h1>
        </motion.div>

        {/* Rotating subtitle */}
        <motion.div {...fadeUp(0.25)} className="flex justify-center h-8 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={rotatingTitles[titleIndex]}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.28, ease }}
              className="font-heading text-base sm:text-lg text-muted-foreground font-medium"
            >
              &amp; {rotatingTitles[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.32)}
          className="text-center text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          8+ years building fast, scalable websites and web apps for agencies
          and enterprise clients across the{" "}
          <span className="text-foreground font-medium">US</span>,{" "}
          <span className="text-foreground font-medium">Singapore</span>, and{" "}
          <span className="text-foreground font-medium">Philippines</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 cursor-pointer"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
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
            className="inline-flex items-center gap-2 px-5 py-3.5 text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Social proof + stats */}
        <motion.div {...fadeUp(0.48)} className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-10 border-b border-border/40">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATARS.map((a) => (
                <div key={a.initials}
                  className={`w-8 h-8 rounded-full ${a.bg} border-2 border-background flex items-center justify-center text-[10px] font-bold text-white`}>
                  {a.initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">60+ clients</span> worked with globally
            </span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-border" />

          <div className="flex items-center gap-6 text-sm">
            {[
              { value: "8+",   label: "Years" },
              { value: "100+", label: "Projects" },
              { value: "7",    label: "Platforms" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="font-heading font-bold gradient-text text-lg">{s.value}</span>
                <span className="text-muted-foreground ml-1 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scrolling marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10 w-full overflow-hidden pb-10"
      >
        <div className="flex gap-0">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-6 whitespace-nowrap will-change-transform"
          >
            {STACK.map((tech, i) => (
              <span key={i} className="flex items-center gap-6">
                <span className="text-sm font-mono text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  {tech}
                </span>
                <span className="text-border text-xs">✦</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </motion.div>

    </section>
  );
}
