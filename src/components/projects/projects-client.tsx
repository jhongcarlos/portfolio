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
              <article className="flex flex-col p-6 rounded-2xl border border-gray-100 bg-white shadow-sm h-full opacity-90">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground border border-gray-200 rounded-full px-2.5 py-1 bg-gray-50">
                    <Lock className="w-2.5 h-2.5" />
                    Confidential
                  </span>
                </div>
                <h3 className="font-heading font-semibold mb-1 text-foreground">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{project.client}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="pt-3 border-t border-gray-100 mb-4">
                  <p className="text-xs text-muted-foreground italic">↳ {project.highlight}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-mono rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            ) : (
              <article className="group flex flex-col p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-8 h-8 rounded-lg opacity-20"
                    style={{ background: `linear-gradient(135deg, ${project.accentColor ?? "#E8441C"}, ${project.accentColor ?? "#F06830"})` }}
                  />
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-full border border-gray-200 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <h3 className="font-heading font-semibold mb-1 group-hover:text-primary transition-colors text-foreground">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{project.client}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-3">
                  {project.description}
                </p>
                <div className="pt-3 border-t border-gray-100 mb-4">
                  <p className="text-xs text-muted-foreground italic">↳ {project.highlight}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-mono rounded-full">
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
