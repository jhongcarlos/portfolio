"use client";

import { motion } from "framer-motion";
import { techLogoBar } from "@/data/skills";

// Duplicate for seamless loop
const logos = [...techLogoBar, ...techLogoBar];

export default function TechStack() {
  return (
    <section className="py-14 border-y border-border overflow-hidden bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-5">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-center">
          Technologies &amp; Platforms I Work With
        </p>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {logos.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors whitespace-nowrap cursor-default select-none"
            >
              <span className="font-mono text-primary text-xs">▸</span>
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
