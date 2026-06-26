import ProjectsClient from "@/components/projects/projects-client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — John Harold Carlos",
  description:
    "WordPress development, web apps, Webflow builds, and enterprise internal tools delivered by John Harold Carlos over 8+ years.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 bg-background">

      {/* ── Hero header ── */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-40%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.07]"
            style={{ background: "oklch(0.55 0.24 30)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
          <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">Portfolio</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-5 text-foreground leading-tight">
            Work that <span className="gradient-text">ships.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-8">
            A selection of real client work — WordPress sites, web apps, CMS builds,
            and enterprise tools across the US, Singapore, and the Philippines.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)] cursor-pointer"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── Projects grid ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <ProjectsClient />
      </div>

    </div>
  );
}
