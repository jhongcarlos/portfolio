"use client";

import { ExternalLink, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        layout
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
          >
            {project.isConfidential ? (
              <article className="flex flex-col p-6 rounded-xl border border-border bg-card h-full opacity-90">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5">
                    <Lock className="w-2.5 h-2.5" />
                    Confidential
                  </span>
                </div>
                <h3 className="font-heading font-semibold mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{project.client}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="pt-3 border-t border-border mb-4">
                  <p className="text-xs text-muted-foreground italic">↳ {project.highlight}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            ) : (
              <article className="group flex flex-col p-6 rounded-xl border border-border bg-card card-hover h-full">
                <div className="flex items-center justify-between mb-3">
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
                <h3 className="font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{project.client}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-3">
                  {project.description}
                </p>
                <div className="pt-3 border-t border-border mb-4">
                  <p className="text-xs text-muted-foreground italic">↳ {project.highlight}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            )}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
