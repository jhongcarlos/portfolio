"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { ScrollFadeIn } from "@/components/motion-wrapper";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollFadeIn>
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden p-10 sm:p-16 text-center">
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.62 0.19 264 / 0.07) 0%, transparent 65%)",
              }}
            />

            <div className="relative">
              <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">
                Open to Opportunities
              </p>
              <h2 className="font-heading text-3xl sm:text-5xl font-semibold mb-4 max-w-2xl mx-auto leading-tight">
                Available for freelance projects and{" "}
                <span className="gradient-text">full-time opportunities.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Whether you need a custom WordPress site, a full-stack web app,
                or an agency dev partner — I&apos;m here to help you build and ship.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity cursor-pointer glow-blue"
                >
                  Hire Me
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="/John_Harold_Carlos_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-secondary transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
