"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

// ── Easing ──────────────────────────────────────────────────────────────────
const ease = [0.21, 0.47, 0.32, 0.98] as const;

// ── FadeIn (mount-time) ──────────────────────────────────────────────────────
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({ children, delay = 0, className, direction = "up" }: FadeInProps) {
  const offset = { up: { y: 28, x: 0 }, down: { y: -28, x: 0 }, left: { y: 0, x: 28 }, right: { y: 0, x: -28 }, none: { y: 0, x: 0 } };
  return (
    <motion.div
      initial={{ opacity: 0, ...offset[direction] }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── ScrollFadeIn (viewport-triggered) ───────────────────────────────────────
export function ScrollFadeIn({ children, delay = 0, className, direction = "up" }: FadeInProps) {
  const offset = { up: { y: 32, x: 0 }, down: { y: -32, x: 0 }, left: { y: 0, x: 32 }, right: { y: 0, x: -32 }, none: { y: 0, x: 0 } };
  return (
    <motion.div
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerContainer ─────────────────────────────────────────────────────────
interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  viewport?: boolean;
}

export function StaggerContainer({ children, className, staggerDelay = 0.08, initialDelay = 0, viewport = false }: StaggerProps) {
  const variants = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay, delayChildren: initialDelay } },
  };
  const props = viewport
    ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-60px" } }
    : { initial: "hidden", animate: "visible" };

  return (
    <motion.div variants={variants} {...props} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── ParallaxSection ──────────────────────────────────────────────────────────
export function ParallaxSection({ children, className, speed = 0.15 }: { children: ReactNode; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 80}px`, `-${speed * 80}px`]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// ── Re-export motion ─────────────────────────────────────────────────────────
export { motion };
