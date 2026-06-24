"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerContainer viewport staggerDelay={0.06} initialDelay={0}>
          <StaggerItem>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
                  Selected Work
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold">
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                See All Projects
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </StaggerItem>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <article className="group relative flex flex-col p-6 rounded-xl border border-border bg-card card-hover glow-card h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div />
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">{project.client}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
