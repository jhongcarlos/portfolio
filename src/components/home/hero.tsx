"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Star, Zap, Globe, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PastelMeshBackground } from "@/components/animated-background";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const rotatingTitles = [
  "WordPress Expert",
  "React Developer",
  "Agency Partner",
];

const AVATARS = [
  { bg: "bg-orange-400", initials: "AC" },
  { bg: "bg-sky-400",    initials: "BM" },
  { bg: "bg-emerald-400",initials: "RD" },
  { bg: "bg-violet-400", initials: "KL" },
];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease },
  };
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <PastelMeshBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Announcement pill */}
            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground text-background text-xs font-semibold mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for Work
                <span className="opacity-40 mx-0.5">·</span>
                <span className="opacity-70 font-normal">Manila, PH</span>
                <ArrowRight className="w-3 h-3 opacity-60" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div {...fadeUp(0.2)}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.05] mb-4 text-foreground">
                Full-Stack<br />
                <span className="gradient-text">Web Developer</span>
              </h1>
            </motion.div>

            {/* Rotating subtitle */}
            <motion.div {...fadeUp(0.3)}>
              <div className="h-10 mb-5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={rotatingTitles[titleIndex]}
                    initial={{ y: 32, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -32, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="font-heading text-xl sm:text-2xl font-medium text-muted-foreground"
                  >
                    &amp; {rotatingTitles[titleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div {...fadeUp(0.38)}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3 max-w-lg">
                8+ years building fast, scalable websites and web applications for
                agencies and enterprise clients across the{" "}
                <span className="text-foreground font-medium">US</span>,{" "}
                <span className="text-foreground font-medium">Singapore</span>, and{" "}
                <span className="text-foreground font-medium">Philippines</span>.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.44)}>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
                <MapPin className="w-3.5 h-3.5" />
                <span>Manila, Philippines · Open to Remote</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)}>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-85 transition-opacity shadow-sm cursor-pointer"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-white/70 backdrop-blur-sm text-foreground font-semibold text-sm hover:bg-secondary transition-colors shadow-sm cursor-pointer"
                >
                  Get In Touch
                </Link>
                <a
                  href="/John_Harold_Carlos_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-colors text-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div {...fadeUp(0.58)}>
              <div className="flex items-center gap-4 pt-6 border-t border-border/60">
                <div className="flex -space-x-2">
                  {AVATARS.map((a) => (
                    <div
                      key={a.initials}
                      className={`w-8 h-8 rounded-full ${a.bg} border-2 border-background flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}
                    >
                      {a.initials}
                    </div>
                  ))}
                </div>
                <div>
                  <span className="font-semibold text-foreground text-sm">60+ clients</span>
                  <span className="text-muted-foreground text-sm"> worked with globally</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="hidden lg:block"
          >
            <div className="relative w-full max-w-[480px] mx-auto">

              {/* Main project showcase card */}
              <div className="relative rounded-2xl border border-border bg-card shadow-[0_8px_48px_-12px_rgba(0,0,0,0.14)] overflow-hidden">

                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/50">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <div className="ml-3 flex-1 bg-background rounded-md px-3 py-1 text-[11px] text-muted-foreground border border-border font-mono truncate">
                    ourrelationship.app
                  </div>
                </div>

                {/* Mock website UI */}
                <div className="bg-card p-5 space-y-3">
                  {/* Nav */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 w-20 rounded-full bg-foreground" />
                    <div className="flex gap-2">
                      <div className="h-2.5 w-10 rounded-full bg-border" />
                      <div className="h-2.5 w-10 rounded-full bg-border" />
                      <div className="h-2.5 w-14 rounded-full bg-primary" />
                    </div>
                  </div>

                  {/* Hero block */}
                  <div className="rounded-xl p-5 bg-primary/5 border border-primary/10">
                    <div className="h-3 w-32 rounded-full bg-primary/70 mb-2" />
                    <div className="h-2 w-48 rounded-full bg-muted-foreground/30 mb-1" />
                    <div className="h-2 w-36 rounded-full bg-muted-foreground/20 mb-4" />
                    <div className="flex gap-2">
                      <div className="h-7 w-20 rounded-full bg-foreground" />
                      <div className="h-7 w-20 rounded-full border border-border" />
                    </div>
                  </div>

                  {/* Cards row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: Globe, color: "bg-sky-100 text-sky-600 dark:bg-sky-900/40 dark:text-sky-400", w: "w-14" },
                      { icon: Layers, color: "bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400", w: "w-10" },
                      { icon: Zap, color: "bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400", w: "w-12" },
                    ].map(({ icon: Icon, color, w }, i) => (
                      <div key={i} className="rounded-lg border border-border p-3 bg-secondary/40">
                        <div className={`w-6 h-6 rounded-md ${color} flex items-center justify-center mb-2`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className={`h-2 ${w} rounded-full bg-muted-foreground/30 mb-1`} />
                        <div className="h-1.5 w-8 rounded-full bg-muted-foreground/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating card: Star review */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5, ease }}
                className="absolute -right-8 top-6 bg-card rounded-xl shadow-[0_4px_24px_-6px_rgba(0,0,0,0.12)] border border-border p-3.5 w-52"
              >
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-foreground leading-snug mb-1">
                  &ldquo;Best execution I&apos;ve seen.&rdquo;
                </p>
                <p className="text-[11px] text-muted-foreground">— Alex W., Underdog Digital</p>
              </motion.div>

              {/* Floating card: Experience badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5, ease }}
                className="absolute -left-8 bottom-10 bg-card rounded-xl shadow-[0_4px_24px_-6px_rgba(0,0,0,0.12)] border border-border p-3.5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    8+
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">Years of</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>
              </motion.div>

              {/* Open to work badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.4, ease }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card shadow-lg text-xs font-medium text-foreground whitespace-nowrap"
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                Open to work · Manila, PH
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5, ease }}
          className="mt-24 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
        >
          {[
            { value: "8+",   label: "Years" },
            { value: "60+",  label: "Clients" },
            { value: "100+", label: "Projects" },
            { value: "7",    label: "Platforms" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
