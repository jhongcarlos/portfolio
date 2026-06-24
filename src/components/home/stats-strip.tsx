"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sub: string;
}

const stats: Stat[] = [
  { value: 8,  suffix: "+", label: "Years Experience", sub: "Full-stack web development" },
  { value: 25,  suffix: "+", label: "Active Clients",   sub: "Via Underdog Digital agency" },
  { value: 100, suffix: "+", label: "Projects Shipped", sub: "WordPress, web apps, builders" },
  { value: 7,  suffix: "",  label: "CMS Platforms",    sub: "WP, Webflow, Framer & more" },
];

function AnimatedNumber({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.65 0.22 264 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              {/* Number */}
              <div className="font-heading text-5xl sm:text-6xl font-bold gradient-text mb-2 tabular-nums">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>

              {/* Glow line */}
              <div className="w-10 h-0.5 rounded-full bg-primary/40 mb-3 group-hover:w-16 group-hover:bg-primary/70 transition-all duration-300" />

              {/* Label */}
              <div className="font-heading font-semibold text-sm text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>

              {/* Vertical divider (except last) */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-border/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
