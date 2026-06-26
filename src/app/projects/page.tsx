import ProjectsClient from "@/components/projects/projects-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — John Harold Carlos",
  description:
    "WordPress development, web apps, Webflow builds, and enterprise internal tools delivered by John Harold Carlos over 8+ years.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-12">
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
            Portfolio
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            A selection of real client work — WordPress sites, web apps, CMS
            builds, and enterprise internal tools across the US, Singapore, and
            the Philippines.
          </p>
        </div>

        <ProjectsClient />
      </div>
    </div>
  );
}
