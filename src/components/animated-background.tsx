"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { x: 12, y: 18, size: 2, delay: 0,    dur: 6 },
  { x: 28, y: 42, size: 1, delay: 0.8,  dur: 8 },
  { x: 45, y: 15, size: 3, delay: 1.5,  dur: 7 },
  { x: 62, y: 68, size: 1, delay: 0.3,  dur: 9 },
  { x: 78, y: 30, size: 2, delay: 2.1,  dur: 6 },
  { x: 90, y: 55, size: 1, delay: 1.0,  dur: 8 },
  { x: 35, y: 80, size: 2, delay: 0.5,  dur: 7 },
  { x: 55, y: 48, size: 1, delay: 1.8,  dur: 9 },
  { x: 8,  y: 62, size: 2, delay: 2.4,  dur: 6 },
  { x: 70, y: 85, size: 1, delay: 0.2,  dur: 8 },
  { x: 22, y: 35, size: 3, delay: 1.2,  dur: 7 },
  { x: 85, y: 12, size: 1, delay: 0.9,  dur: 9 },
  { x: 48, y: 92, size: 2, delay: 2.0,  dur: 6 },
  { x: 15, y: 75, size: 1, delay: 1.6,  dur: 8 },
  { x: 92, y: 40, size: 2, delay: 0.7,  dur: 7 },
  { x: 38, y: 58, size: 1, delay: 1.3,  dur: 9 },
  { x: 68, y: 22, size: 3, delay: 0.4,  dur: 6 },
  { x: 5,  y: 45, size: 1, delay: 2.2,  dur: 8 },
  { x: 58, y: 72, size: 2, delay: 1.7,  dur: 7 },
  { x: 82, y: 65, size: 1, delay: 0.6,  dur: 9 },
];

/** Soft pastel gradient background — light mode hero */
export function PastelMeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-background" />

      {/* Blob 1 — soft sage green, top-left */}
      <div
        className="mesh-blob-1 absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle at 40% 40%, oklch(0.88 0.09 150) 0%, transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.75,
        }}
      />

      {/* Blob 2 — soft sky blue, top-right */}
      <div
        className="mesh-blob-2 absolute -top-20 -right-40 w-[650px] h-[650px] rounded-full"
        style={{
          background: "radial-gradient(circle at 60% 40%, oklch(0.88 0.08 215) 0%, transparent 65%)",
          filter: "blur(90px)",
          opacity: 0.65,
        }}
      />

      {/* Blob 3 — soft peach/warm, bottom-center */}
      <div
        className="mesh-blob-3 absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 60%, oklch(0.90 0.07 55) 0%, transparent 65%)",
          filter: "blur(100px)",
          opacity: 0.55,
        }}
      />
    </div>
  );
}

/** Dark cinematic mesh — dark mode */
export function MeshGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-background" />

      <div
        className="mesh-blob-1 absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full opacity-[0.22]"
        style={{
          background: "radial-gradient(circle at 40% 40%, oklch(0.65 0.24 30) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="mesh-blob-2 absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.18]"
        style={{
          background: "radial-gradient(circle at 60% 50%, oklch(0.68 0.22 45) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="mesh-blob-3 absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.16]"
        style={{
          background: "radial-gradient(circle at 50% 60%, oklch(0.55 0.22 18) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="absolute inset-0 dot-grid opacity-50" />
    </div>
  );
}

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size * 2}px`,
            height: `${p.size * 2}px`,
            background:
              i % 3 === 0
                ? "oklch(0.65 0.24 30 / 0.7)"
                : i % 3 === 1
                ? "oklch(0.68 0.22 45 / 0.6)"
                : "oklch(0.55 0.22 18 / 0.5)",
            boxShadow:
              p.size >= 2
                ? `0 0 ${p.size * 4}px ${p.size}px oklch(0.65 0.24 30 / 0.3)`
                : "none",
          }}
          animate={{
            y: [0, -16, -8, -22, 0],
            x: [0, 4, -3, 2, 0],
            opacity: [0.3, 0.8, 0.5, 0.9, 0.3],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function GlowDivider() {
  return (
    <div className="relative w-full h-px my-0" aria-hidden>
      <div className="glow-line-x w-full h-full glow-pulse" />
    </div>
  );
}

export function Vignette() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden
      style={{
        background: "radial-gradient(ellipse at center, transparent 60%, oklch(0.05 0.01 30 / 0.6) 100%)",
      }}
    />
  );
}
