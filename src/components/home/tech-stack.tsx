"use client";

import { motion } from "framer-motion";
import { techLogoBar } from "@/data/skills";

const logos = [...techLogoBar, ...techLogoBar];

export default function TechStack() {
  return (
    <section className="py-14 border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-5">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-center">
          Technologies &amp; Platforms I Work With
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {logos.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card shadow-sm text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-md transition-all whitespace-nowrap cursor-default select-none"
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
