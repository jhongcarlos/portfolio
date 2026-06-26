"use client";

import { useState } from "react";
import { ExternalLink, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";

const FILTERS: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All",              value: "all" },
  { label: "WordPress",        value: "wordpress" },
  { label: "Web Apps",         value: "web-app" },
  { label: "CMS & Builders",   value: "webflow-builders" },
  { label: "Internal Tools",   value: "internal-tool" },
];

const BRAND = "rgb(232, 68, 28)";

export default function ProjectsClient() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.category.includes(active));

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
              active === f.value
                ? "bg-white text-black shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)]"
                : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto self-center text-xs text-muted-foreground font-mono">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" layout>
          {filtered.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
            >
              {project.isConfidential ? (
                <article className="group flex flex-col rounded-2xl border border-border bg-card h-full overflow-hidden opacity-75 hover:opacity-90 transition-opacity">
                  {/* Top accent bar */}
                  <div className="h-0.5 w-full" style={{ background: BRAND }} />
                  <div className="flex flex-col p-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1 bg-secondary/50">
                        <Lock className="w-3 h-3" />
                        Confidential
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                        {project.category[0]}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold mb-1 text-foreground">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{project.client}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="pt-3 border-t border-border mb-4">
                      <p className="text-xs text-muted-foreground italic">↳ {project.highlight}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-mono rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ) : (
                <article className="group flex flex-col rounded-2xl border border-border bg-card h-full overflow-hidden hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300">
                  {/* Top accent bar */}
                  <div className="h-0.5 w-full" style={{ background: BRAND }} />
                  <div className="flex flex-col p-6 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">
                          {project.client}
                        </span>
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-full border border-border bg-secondary text-muted-foreground hover:text-foreground transition-all cursor-pointer flex-shrink-0"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-border mb-4">
                      <p className="text-xs text-primary/70 font-medium">↳ {project.highlight}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-mono rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
