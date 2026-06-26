"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
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

          {/* ── Right: Lottie ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="hidden lg:flex items-center justify-center"
          >
            <Player
              autoplay
              loop
              src="https://lottie.host/9e8934b0-d6d8-4abe-8cf1-a821b1f8b87e/cMpUhBsq0N.json"
              style={{ width: "100%", maxWidth: 480, height: 480 }}
            />
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
