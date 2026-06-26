import { Metadata } from "next";
import { ScrollFadeIn } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, GraduationCap, Download, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { skillCategories } from "@/data/skills";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "About — John Harold Carlos",
  description:
    "John Harold Carlos — full-stack web developer with 8+ years experience. WordPress, Next.js, PHP/Laravel, and enterprise web applications from Manila, Philippines.",
};

const colorMap: Record<string, string> = {
  blue:   "bg-blue-500/10 text-blue-400 border-blue-500/20",
  purple: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  green:  "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  cyan:   "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  pink:   "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

const STATS = [
  { value: "8+",    label: "Years of Experience" },
  { value: "25–30", label: "Active Clients" },
  { value: "100+",  label: "Projects Delivered" },
  { value: "7",     label: "CMS Platforms" },
];

const AVAILABLE_FOR = [
  "Freelance projects (short & long-term)",
  "Full-time remote positions",
  "Agency dev partnerships",
  "Technical consulting & code reviews",
];

export default function AboutPage() {
  return (
    <div className="pt-16 bg-background">

      {/* ── Hero header ── */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] right-[0%] w-[600px] h-[600px] rounded-full blur-[130px] opacity-[0.08]"
            style={{ background: "oklch(0.55 0.24 30)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: bio */}
            <ScrollFadeIn>
              <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">About Me</p>
              <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-5 leading-tight text-foreground">
                Developer,<br />
                <span className="gradient-text">builder,</span><br />
                problem-solver.
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Manila, Philippines · Open to Remote
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  I&apos;m <strong className="text-foreground">John Harold Carlos</strong>, a
                  full-stack web developer based in Manila with 8+ years of experience
                  building websites and web applications for clients across the US and Southeast Asia.
                </p>
                <p>
                  I specialize in <strong className="text-foreground">WordPress development</strong> and
                  modern JavaScript frameworks — React and Next.js — with a strong background in{" "}
                  <strong className="text-foreground">PHP and full-stack web application development</strong>.
                  I&apos;ve worked across digital marketing agencies, enterprise companies, and product
                  platforms — comfortable handling everything from a fast agency site to a complex
                  internal business system.
                </p>
                <p>
                  Currently working remotely with{" "}
                  <strong className="text-foreground">Underdog Digital</strong>, a marketing
                  agency in South Carolina, managing development for 25–30 active clients.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/John_Harold_Carlos_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:bg-secondary transition-colors cursor-pointer"
                >
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollFadeIn>

            {/* Right: stats + availability */}
            <ScrollFadeIn delay={0.1}>
              <div className="flex flex-col gap-4">

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="p-5 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
                      <div className="font-heading text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Availability card */}
                <div className="p-5 rounded-2xl border border-border bg-card">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      Currently Available For
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {AVAILABLE_FOR.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-24">

        {/* ── Skills ── */}
        <ScrollFadeIn>
          <div>
            <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Skills</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-10 text-foreground">
              Technologies &amp; Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.category}
                  className="p-5 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-4 rounded-full bg-gradient-to-b from-primary to-rose-500" />
                    <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <Badge key={skill} variant="outline"
                        className={`text-xs font-mono border rounded-full ${colorMap[cat.color]}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        {/* ── Experience ── */}
        <div>
          <ScrollFadeIn>
            <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Career</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12 text-foreground">Experience</h2>
          </ScrollFadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden sm:block" />

            <div className="space-y-4">
              {experiences.map((item, idx) => (
                <ScrollFadeIn key={item.company + item.period} delay={idx * 0.06}>
                  <div className="sm:pl-10 relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-primary/20 border border-primary/40 hidden sm:flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>

                    <div className="group p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="font-heading font-semibold text-foreground">
                            {item.url ? (
                              <a href={item.url} target="_blank" rel="noopener noreferrer"
                                className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
                                {item.company}
                                <ExternalLink className="w-3 h-3 text-muted-foreground" />
                              </a>
                            ) : item.company}
                          </h3>
                          <p className="text-sm text-primary font-medium mt-0.5">{item.role}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary border border-border text-xs font-mono text-muted-foreground">
                            {item.period}
                          </span>
                          <p className="text-xs text-muted-foreground/50 mt-1">{item.location}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* ── Education ── */}
        <ScrollFadeIn>
          <div>
            <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Education</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8 text-foreground">Academic Background</h2>
            <div className="relative sm:pl-10">
              <div className="absolute left-0 top-5 w-4 h-4 rounded-full bg-primary/20 border border-primary/40 hidden sm:flex items-center justify-center">
                <GraduationCap className="w-2.5 h-2.5 text-primary" />
              </div>
              <div className="p-5 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{education.degree}</h3>
                    <p className="text-sm text-primary font-medium mt-0.5">{education.school}</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary border border-border text-xs font-mono text-muted-foreground">
                    {education.period}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

      </div>
    </div>
  );
}
