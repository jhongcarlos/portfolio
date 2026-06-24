import { Metadata } from "next";
import { ScrollFadeIn } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Download,
  ExternalLink,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "About — John Harold Carlos",
  description:
    "John Harold Carlos — full-stack web developer with 8+ years experience. WordPress, Next.js, PHP/Laravel, and enterprise web applications from Manila, Philippines.",
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        {/* Bio section */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div>
              <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
                About Me
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl font-semibold mb-6 leading-tight">
                Developer, problem-solver,{" "}
                <span className="gradient-text">builder.</span>
              </h1>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Manila, Philippines · Open to Remote
                </span>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m <strong className="text-foreground">John Harold Carlos</strong>, a
                  full-stack web developer based in Manila, Philippines with 8+
                  years of experience building websites and web applications for
                  clients across the US and Southeast Asia.
                </p>
                <p>
                  I specialize in{" "}
                  <strong className="text-foreground">WordPress development</strong> and
                  modern JavaScript frameworks — React and Next.js — with a
                  strong background in{" "}
                  <strong className="text-foreground">PHP and full-stack web application
                  development</strong>. I&apos;ve worked across digital marketing
                  agencies, enterprise companies, and product platforms, which
                  means I&apos;m comfortable handling everything from a
                  fast-turnaround agency site to a complex internal business
                  system.
                </p>
                <p>
                  Currently, I work remotely with{" "}
                  <strong className="text-foreground">Underdog Digital</strong>, a marketing
                  agency in South Carolina, where I manage development for
                  25–30 active clients. I&apos;m also open to full-time
                  opportunities and freelance projects where I can bring real
                  value.
                </p>
              </div>
            </div>

            {/* Stats + availability */}
            <div className="flex flex-col gap-5">
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "8+", label: "Years of Experience" },
                    { value: "25–30", label: "Active Clients" },
                    { value: "50+", label: "Projects Delivered" },
                    { value: "7", label: "CMS Platforms" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-heading text-3xl font-semibold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                  Currently Available For
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Freelance projects (short & long-term)",
                    "Full-time remote positions",
                    "Agency dev partnerships",
                    "Technical consulting & code reviews",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium hover:bg-secondary transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Skills grid */}
        <ScrollFadeIn>
          <div className="mb-20">
            <h2 className="font-heading text-2xl font-semibold mb-8">
              Skills &amp; Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillCategories.map((cat) => (
                <div
                  key={cat.category}
                  className="p-5 rounded-xl border border-border bg-card"
                >
                  <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`text-xs font-mono border ${colorMap[cat.color]}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        <Separator className="mb-20" />

        {/* Experience timeline */}
        <ScrollFadeIn>
          <h2 className="font-heading text-2xl font-semibold mb-10">
            Experience
          </h2>
        </ScrollFadeIn>

        <div className="relative mb-20">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-5">
            {experiences.map((item, idx) => (
              <ScrollFadeIn key={item.company + item.period} delay={idx * 0.06}>
                <div className="sm:pl-12 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-4 w-5 h-5 rounded-full border-2 border-primary bg-background hidden sm:flex items-center justify-center">
                    <Briefcase className="w-2.5 h-2.5 text-primary" />
                  </div>

                  <div className="p-5 rounded-xl border border-border bg-card card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-heading font-semibold">
                            {item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors inline-flex items-center gap-1"
                              >
                                {item.company}
                                <ExternalLink className="w-3 h-3 text-muted-foreground" />
                              </a>
                            ) : (
                              item.company
                            )}
                          </h3>
                        </div>
                        <p className="text-sm text-primary">{item.role}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                          {item.period}
                        </span>
                        <p className="text-xs text-muted-foreground/60 mt-0.5">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {item.summary}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>

        {/* Education */}
        <ScrollFadeIn>
          <h2 className="font-heading text-2xl font-semibold mb-6">
            Education
          </h2>
          <div className="sm:pl-12 relative">
            <div className="absolute left-2 top-4 w-5 h-5 rounded-full border-2 border-primary/60 bg-background hidden sm:flex items-center justify-center">
              <GraduationCap className="w-2.5 h-2.5 text-primary/60" />
            </div>
            <div className="p-5 rounded-xl border border-border bg-card">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading font-semibold">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-primary">{education.school}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {education.period}
                </span>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

      </div>
    </div>
  );
}
