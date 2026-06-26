"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

// Code lines for the VS Code-style card
const codeLines = [
  { tokens: [{ text: "const ", color: "text-violet-400" }, { text: "developer", color: "text-sky-300" }, { text: " = {", color: "text-slate-300" }] },
  { tokens: [{ text: "  name", color: "text-sky-300" }, { text: ": ", color: "text-slate-400" }, { text: '"John Harold Carlos"', color: "text-emerald-400" }, { text: ",", color: "text-slate-400" }] },
  { tokens: [{ text: "  role", color: "text-sky-300" }, { text: ": ", color: "text-slate-400" }, { text: '"Full-Stack Developer"', color: "text-emerald-400" }, { text: ",", color: "text-slate-400" }] },
  { tokens: [{ text: "  location", color: "text-sky-300" }, { text: ": ", color: "text-slate-400" }, { text: '"Manila, Philippines"', color: "text-emerald-400" }, { text: ",", color: "text-slate-400" }] },
  { tokens: [{ text: "  experience", color: "text-sky-300" }, { text: ": ", color: "text-slate-400" }, { text: '"8+ years"', color: "text-emerald-400" }, { text: ",", color: "text-slate-400" }] },
  { tokens: [] }, // blank line
  { tokens: [{ text: "  stack", color: "text-sky-300" }, { text: ": [", color: "text-slate-400" }] },
  { tokens: [{ text: "    ", color: "" }, { text: '"WordPress"', color: "text-amber-300" }, { text: ", ", color: "text-slate-400" }, { text: '"React"', color: "text-amber-300" }, { text: ", ", color: "text-slate-400" }, { text: '"Next.js"', color: "text-amber-300" }, { text: ",", color: "text-slate-400" }] },
  { tokens: [{ text: "    ", color: "" }, { text: '"PHP"', color: "text-amber-300" }, { text: ", ", color: "text-slate-400" }, { text: '"Laravel"', color: "text-amber-300" }, { text: ", ", color: "text-slate-400" }, { text: '"AWS"', color: "text-amber-300" }] },
  { tokens: [{ text: "  ]", color: "text-slate-400" }, { text: ",", color: "text-slate-400" }] },
  { tokens: [] }, // blank line
  { tokens: [{ text: "  clients", color: "text-sky-300" }, { text: ": ", color: "text-slate-400" }, { text: "60", color: "text-orange-400" }, { text: ",", color: "text-slate-400" }] },
  { tokens: [{ text: "  available", color: "text-sky-300" }, { text: ": ", color: "text-slate-400" }, { text: "true", color: "text-violet-400" }] },
  { tokens: [{ text: "}", color: "text-slate-300" }] },
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
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 80);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-[120px] opacity-20"
          style={{ width: 600, height: 600, top: "-10%", left: "-5%", background: "oklch(0.55 0.24 30)" }}
        />
        <div
          className="absolute rounded-full blur-[160px] opacity-10"
          style={{ width: 500, height: 500, bottom: "0%", right: "5%", background: "oklch(0.62 0.19 264)" }}
        />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Pill */}
            <motion.div {...fadeUp(0.05)}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-secondary/60 backdrop-blur-sm text-xs font-medium text-foreground mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for Work
                <span className="text-muted-foreground/50 mx-0.5">·</span>
                <span className="text-muted-foreground">Manila, PH</span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.15)}
              className="font-heading text-5xl sm:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] font-bold tracking-tight leading-[1.04] mb-5 text-foreground"
            >
              Full-Stack<br />
              <span className="gradient-text">Web Developer</span>
            </motion.h1>

            {/* Rotating subtitle */}
            <motion.div {...fadeUp(0.25)}>
              <div className="h-9 mb-5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={rotatingTitles[titleIndex]}
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -28, opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="font-heading text-lg sm:text-xl font-medium text-muted-foreground"
                  >
                    &amp; {rotatingTitles[titleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p {...fadeUp(0.32)} className="text-base text-muted-foreground leading-relaxed mb-2 max-w-md">
              8+ years building fast, scalable websites and web applications for
              agencies and enterprise clients across the{" "}
              <span className="text-foreground font-medium">US</span>,{" "}
              <span className="text-foreground font-medium">Singapore</span>, and{" "}
              <span className="text-foreground font-medium">Philippines</span>.
            </motion.p>

            <motion.div {...fadeUp(0.38)} className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
              <MapPin className="w-3.5 h-3.5" />
              <span>Open to Remote</span>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.44)} className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md cursor-pointer"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:bg-secondary transition-colors shadow-sm cursor-pointer"
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
            </motion.div>

            {/* Social proof */}
            <motion.div {...fadeUp(0.52)} className="flex items-center gap-4 pt-6 border-t border-border/50">
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
            </motion.div>
          </div>

          {/* ── Right: VS Code card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-[0_20px_80px_-12px_rgba(0,0,0,0.4)] bg-[#0d1117]">

              {/* Editor title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/[0.06]">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 flex gap-1">
                  <div className="px-3 py-1 rounded-t text-[11px] font-mono text-slate-300 bg-[#0d1117] border-t border-x border-white/[0.08]">
                    developer.ts
                  </div>
                  <div className="px-3 py-1 rounded-t text-[11px] font-mono text-slate-500">
                    README.md
                  </div>
                </div>
              </div>

              {/* Code body */}
              <div className="p-5 font-mono text-[13px] leading-7 min-h-[320px]">
                {/* Line numbers + code */}
                <div className="flex gap-4">
                  {/* Line numbers */}
                  <div className="select-none text-right text-[11px] leading-7 text-slate-600 min-w-[1.5rem]">
                    {codeLines.slice(0, visibleLines).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>

                  {/* Code lines */}
                  <div className="flex-1 overflow-hidden">
                    {codeLines.slice(0, visibleLines).map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.18 }}
                        className="whitespace-pre leading-7"
                      >
                        {line.tokens.length === 0 ? (
                          <span>&nbsp;</span>
                        ) : (
                          line.tokens.map((tok, j) => (
                            <span key={j} className={tok.color}>{tok.text}</span>
                          ))
                        )}
                      </motion.div>
                    ))}
                    {/* Blinking cursor */}
                    {visibleLines < codeLines.length && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-primary/80 align-middle ml-0.5"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-1.5 bg-primary/90 text-white/80 text-[10px] font-mono">
                <div className="flex items-center gap-3">
                  <span>⎇ main</span>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                  <span>available for hire</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5, ease }}
          className="mt-20 pt-8 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
        >
          {[
            { value: "8+",   label: "Years" },
            { value: "60+",  label: "Clients" },
            { value: "100+", label: "Projects" },
            { value: "7",    label: "Platforms" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
