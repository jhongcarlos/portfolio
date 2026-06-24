"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Circle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MeshGradientBackground, FloatingParticles, Vignette } from "@/components/animated-background";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const rotatingTitles = [
  "WordPress Expert",
  "React Developer",
  "Agency Partner",
  "Full-Stack Developer",
];

const codeLines = [
  { indent: 0, content: "const developer = {",         color: "text-blue-400" },
  { indent: 1, content: "name: 'John Harold Carlos',", color: "text-emerald-400" },
  { indent: 1, content: "exp: '8+ years',",            color: "text-yellow-300" },
  { indent: 1, content: "stack: [",                    color: "text-blue-400" },
  { indent: 2, content: "'Next.js', 'WordPress',",     color: "text-orange-300" },
  { indent: 2, content: "'PHP', 'React', 'Laravel',",  color: "text-orange-300" },
  { indent: 1, content: "],",                          color: "text-blue-400" },
  { indent: 1, content: "location: 'Manila, PH 🇵🇭',", color: "text-emerald-400" },
  { indent: 1, content: "available: true,",            color: "text-purple-400" },
  { indent: 0, content: "};",                          color: "text-blue-400" },
];

const techBadges = [
  { label: "Next.js",   x: "6%",  y: "16%", delay: 1.0 },
  { label: "WordPress", x: "68%", y: "6%",  delay: 1.2 },
  { label: "Laravel",   x: "74%", y: "76%", delay: 1.4 },
  { label: "AWS",       x: "2%",  y: "70%", delay: 1.6 },
  { label: "React",     x: "50%", y: "88%", delay: 1.8 },
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 200);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <MeshGradientBackground />
      <FloatingParticles />
      <Vignette />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* ── Left: Text ── */}
          <StaggerContainer initialDelay={0.1}>
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-sm text-primary mb-8">
                <Circle className="w-2 h-2 fill-green-400 text-green-400" />
                <span>Available for freelance &amp; full-time</span>
                <Sparkles className="w-3 h-3 text-primary/60" />
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-[4rem] font-semibold tracking-tight leading-[1.05] mb-4">
                Full-Stack<br />
                <span className="gradient-text">Web Developer</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <div className="h-12 mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={rotatingTitles[titleIndex]}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="font-heading text-2xl sm:text-3xl font-medium text-muted-foreground"
                  >
                    &amp; {rotatingTitles[titleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3 max-w-lg">
                8+ years building fast, scalable websites and web applications for
                agencies and enterprise clients across the{" "}
                <span className="text-foreground font-medium">US</span>,{" "}
                <span className="text-foreground font-medium">Singapore</span>, and{" "}
                <span className="text-foreground font-medium">Philippines</span>.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-10">
                <MapPin className="w-3.5 h-3.5" />
                <span>Manila, Philippines · Open to Remote</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-3 mb-14">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-blue"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/60 backdrop-blur-sm text-foreground font-medium hover:bg-secondary transition-colors"
                >
                  Get In Touch
                </Link>
                <a
                  href="/John_Harold_Carlos_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-4 gap-4 pt-8 border-t border-border/60 max-w-sm">
                {[
                  { value: "8+",    label: "Years" },
                  { value: "60+",   label: "Clients" },
                  { value: "100+",  label: "Projects" },
                  { value: "7",     label: "Platforms" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-xl sm:text-2xl font-semibold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* ── Right: Terminal + floating badges ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:block"
          >
            <div className="relative w-full max-w-[460px] mx-auto">

              {/* Ambient glow behind card */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-50 blur-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, oklch(0.65 0.22 264 / 0.2) 0%, oklch(0.68 0.20 200 / 0.1) 60%, transparent 100%)",
                }}
              />

              {/* Terminal window */}
              <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden"
                style={{ boxShadow: "0 0 0 1px oklch(0.65 0.22 264 / 0.15), 0 32px 64px -16px oklch(0 0 0 / 0.5)" }}
              >
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-background/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs font-mono text-muted-foreground">portfolio.ts</span>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/60" />
                    <div className="w-1 h-1 rounded-full bg-primary/40" />
                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                  </div>
                </div>

                {/* Line numbers + code */}
                <div className="flex font-mono text-sm leading-relaxed p-0 min-h-[280px]">
                  {/* Gutter */}
                  <div className="flex flex-col px-4 py-5 text-muted-foreground/30 text-right select-none border-r border-border/40 bg-background/20 min-w-[2.5rem]">
                    {codeLines.map((_, i) => (
                      <span key={i} className={i < visibleLines ? "opacity-100" : "opacity-0"} style={{ lineHeight: "1.75rem" }}>
                        {i + 1}
                      </span>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="flex-1 px-5 py-5 overflow-hidden">
                    {codeLines.slice(0, visibleLines).map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.18 }}
                        className={`${line.color}`}
                        style={{ paddingLeft: `${line.indent * 1.5}rem`, lineHeight: "1.75rem" }}
                      >
                        {line.content}
                      </motion.div>
                    ))}
                    {visibleLines < codeLines.length && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-2 h-[1.1em] bg-primary align-middle ml-0.5"
                        style={{ paddingLeft: `${(codeLines[visibleLines]?.indent ?? 0) * 1.5}rem` }}
                      />
                    )}
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-background/30 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">● TypeScript</span>
                    <span>UTF-8</span>
                  </div>
                  <span>Ln {Math.min(visibleLines, codeLines.length)}, Col 1</span>
                </div>
              </div>

              {/* Floating tech badges */}
              {techBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  className="absolute px-3 py-1.5 rounded-full border border-primary/25 bg-card/90 backdrop-blur-sm text-xs font-mono font-medium text-primary shadow-lg"
                  style={{ left: badge.x, top: badge.y, zIndex: 20 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -7, 0],
                  }}
                  transition={{
                    opacity: { delay: badge.delay, duration: 0.3 },
                    scale:   { delay: badge.delay, duration: 0.3, type: "spring", stiffness: 200 },
                    y:       { delay: badge.delay + 0.4, duration: 3 + badge.delay * 0.5, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}

              {/* Open to work badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.4 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-green-500/30 bg-card/95 backdrop-blur-sm text-xs font-medium shadow-xl whitespace-nowrap"
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
      </div>
    </section>
  );
}
