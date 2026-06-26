"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[150px] opacity-[0.12]"
          style={{ background: "oklch(0.55 0.24 30)" }} />
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.07]"
          style={{ background: "oklch(0.58 0.20 264)" }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8">

        {/* Available pill */}
        <motion.div {...fadeUp(0.05)} className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for Work
          </span>
        </motion.div>

        {/* Name — the focal point */}
        <motion.div {...fadeUp(0.12)}>
          <h1 className="font-heading font-bold leading-[0.92] tracking-tight mb-8">
            <span className="block text-[clamp(3.8rem,11vw,8rem)] text-foreground">
              John
            </span>
            <span className="block text-[clamp(3.8rem,11vw,8rem)] text-foreground">
              Harold
            </span>
            <span className="block text-[clamp(3.8rem,11vw,8rem)] gradient-text">
              Carlos.
            </span>
          </h1>
        </motion.div>

        {/* Role + meta — horizontal, understated */}
        <motion.div {...fadeUp(0.22)}>
          <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-6">
            Full-Stack Developer &nbsp;·&nbsp; 8+ Years &nbsp;·&nbsp; Manila, Philippines
          </p>
        </motion.div>

        {/* One-liner */}
        <motion.p
          {...fadeUp(0.30)}
          className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10"
        >
          I build fast, scalable websites and web applications for agencies and
          enterprise clients across the US, Singapore, and Philippines.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.38)} className="flex flex-wrap items-center gap-4">
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
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}
