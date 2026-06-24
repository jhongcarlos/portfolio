import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Code2,
  Layout,
  TrendingUp,
  Wrench,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ScrollFadeIn } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Services — John Harold Carlos",
  description:
    "WordPress development, web app development, CMS builds, SEO, maintenance, and AI-assisted development by John Harold Carlos.",
};

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Custom theme development, plugin customization, WooCommerce setup, speed optimization, security hardening, and ongoing maintenance. WordPress is my primary platform — I've built and maintained 50+ WordPress sites across agencies and direct clients.",
    deliverables: [
      "Custom WordPress theme from scratch",
      "Plugin development & customization",
      "WooCommerce store setup",
      "Speed & Core Web Vitals optimization",
      "Security hardening",
      "Ongoing maintenance packages",
    ],
    tags: ["WordPress", "PHP", "WooCommerce", "Elementor", "ACF"],
  },
  {
    icon: Code2,
    title: "Web App Development",
    description:
      "Full-stack web applications with PHP/Laravel backend and React/Next.js frontend. API integrations, database design, server deployment on AWS. From internal business tools to customer-facing platforms.",
    deliverables: [
      "PHP / Laravel backend",
      "React / Next.js frontend",
      "Database design (MySQL / PostgreSQL)",
      "Third-party API integrations",
      "AWS cloud deployment",
      "Authentication & user management",
    ],
    tags: ["Next.js", "React", "PHP", "Laravel", "MySQL", "AWS"],
  },
  {
    icon: Layout,
    title: "CMS & Website Builders",
    description:
      "Webflow, Wix, Squarespace, GoHighLevel, Framer, and Umbraco. New builds, redesigns, migrations, and CMS training for clients who want to manage their own content.",
    deliverables: [
      "New builds on any major platform",
      "Redesign & migration",
      "Custom components & interactions",
      "GoHighLevel funnels & automation",
      "CMS training & documentation",
      "Hosting & domain setup",
    ],
    tags: ["Webflow", "Wix", "Squarespace", "GoHighLevel", "Framer", "Umbraco"],
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    description:
      "On-page SEO, metadata optimization, heading structure, keyword placement, internal linking, Core Web Vitals, Google Analytics 4 + GTM setup, and SEMrush audits.",
    deliverables: [
      "On-page SEO audit & implementation",
      "Google Analytics 4 setup",
      "Google Tag Manager configuration",
      "Core Web Vitals optimization",
      "SEMrush / Hotjar setup",
      "SEO reporting & recommendations",
    ],
    tags: ["SEO", "Google Analytics", "GTM", "Hotjar", "SEMrush"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Ongoing support packages — plugin updates, backups, uptime monitoring, security patches, content updates, and emergency fixes. Ideal for agencies and businesses that need a reliable dev on call.",
    deliverables: [
      "Regular plugin & theme updates",
      "Daily or weekly backups",
      "Uptime monitoring",
      "Security patches & malware removal",
      "Content updates",
      "Emergency support",
    ],
    tags: ["WordPress", "Maintenance", "Support", "Monitoring"],
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    description:
      "Faster project delivery using AI tools and prompt engineering to accelerate development, automate repetitive tasks, and deliver more in less time — without cutting corners on quality.",
    deliverables: [
      "AI-accelerated development workflow",
      "Automated code generation & review",
      "AI-powered content workflows",
      "Prompt engineering consultation",
      "Faster turnaround on standard tasks",
      "Quality-checked output",
    ],
    tags: ["AI", "Claude", "Prompt Engineering", "Automation"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understand your goals, audience, and requirements. I ask the right questions upfront to avoid surprises later.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Propose the right stack, structure, and timeline. Clear scope, clear milestones, clear pricing.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop, test, and iterate with regular check-ins. You see progress early and often — not just at the end.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Deploy, configure, and hand off with documentation so you or your team can confidently manage the project going forward.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        {/* Header */}
        <ScrollFadeIn>
          <div className="mb-16 max-w-2xl">
            <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
              Services
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold mb-4">
              Let&apos;s Build Something Together
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Available for freelance projects — WordPress development, web
              apps, CMS builds, and ongoing maintenance.
            </p>
          </div>
        </ScrollFadeIn>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {services.map((service, idx) => (
            <ScrollFadeIn key={service.title} delay={idx * 0.07}>
              <div className="flex flex-col p-7 rounded-xl border border-border bg-card card-hover h-full">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>

                <h2 className="font-heading text-xl font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <div className="mb-5">
                  <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-mono"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <Separator className="mb-24" />

        {/* Process */}
        <ScrollFadeIn>
          <div className="mb-12">
            <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
              How I Work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold">
              My Process
            </h2>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {process.map((step, idx) => (
            <ScrollFadeIn key={step.step} delay={idx * 0.08}>
              <div className="p-6 rounded-xl border border-border bg-card h-full">
                <div className="font-mono text-4xl font-semibold text-primary/20 mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* CTA */}
        <ScrollFadeIn>
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden p-10 sm:p-14 text-center">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, oklch(0.62 0.19 264 / 0.07) 0%, transparent 65%)",
              }}
            />
            <div className="relative">
              <h2 className="font-heading text-3xl font-semibold mb-3">
                Ready to start your project?
              </h2>
              <p className="text-muted-foreground mb-7 max-w-md mx-auto">
                Let&apos;s talk about what you&apos;re building. I&apos;m
                available for new projects — reach out and I&apos;ll get back
                to you within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity cursor-pointer glow-blue"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollFadeIn>

      </div>
    </div>
  );
}
