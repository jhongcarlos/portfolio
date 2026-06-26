import { Metadata } from "next";
import Link from "next/link";
import {
  Globe, Code2, Layout, TrendingUp, Wrench, Sparkles,
  Server, ShoppingCart, CheckCircle2, ArrowRight,
} from "lucide-react";
import { ScrollFadeIn } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services — John Harold Carlos",
  description:
    "WordPress development, web app development, CMS builds, SEO, maintenance, DNS & server management, e-commerce, and AI-assisted development by John Harold Carlos.",
};

const services = [
  {
    icon: Globe,
    accent: "from-sky-500 to-blue-600",
    iconBg: "bg-sky-500/10 text-sky-500",
    title: "WordPress Development",
    description:
      "Custom theme development, plugin customization, WooCommerce setup, speed optimization, security hardening, and ongoing maintenance. WordPress is my primary platform — I've built and maintained 50+ sites across agencies and direct clients.",
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
    accent: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/10 text-violet-500",
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
    icon: ShoppingCart,
    accent: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-500/10 text-emerald-500",
    title: "E-Commerce Development",
    description:
      "End-to-end online store builds on WooCommerce and Shopify — product catalog setup, payment gateway integration, checkout optimization, inventory management, and conversion-focused design.",
    deliverables: [
      "WooCommerce & Shopify store setup",
      "Payment gateway integration",
      "Product catalog & inventory setup",
      "Checkout flow optimization",
      "Order management & automation",
      "Conversion rate optimization",
    ],
    tags: ["WooCommerce", "Shopify", "Stripe", "PayPal", "PHP"],
  },
  {
    icon: Layout,
    accent: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/10 text-amber-500",
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
    accent: "from-green-500 to-lime-600",
    iconBg: "bg-green-500/10 text-green-500",
    title: "SEO & Performance",
    description:
      "On-page SEO, metadata optimization, heading structure, Core Web Vitals, Google Analytics 4 + GTM setup, and SEMrush audits. I make sites rank and load fast.",
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
    icon: Server,
    accent: "from-slate-500 to-zinc-600",
    iconBg: "bg-slate-500/10 text-slate-400",
    title: "DNS & Server Management",
    description:
      "Domain configuration, DNS record management, web server setup on Linux/Apache/Nginx, SSL certificate installation, cPanel/WHM administration, and cloud infrastructure on AWS.",
    deliverables: [
      "DNS zone setup & record management",
      "Linux server provisioning",
      "Apache / Nginx configuration",
      "SSL certificate installation",
      "cPanel / WHM administration",
      "AWS EC2, S3, Route 53 setup",
    ],
    tags: ["Linux", "Apache", "Nginx", "AWS", "cPanel", "DNS"],
  },
  {
    icon: Wrench,
    accent: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500/10 text-orange-500",
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
    accent: "from-pink-500 to-rose-600",
    iconBg: "bg-pink-500/10 text-pink-500",
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
    description: "Understand your goals, audience, and requirements. I ask the right questions upfront to avoid surprises later.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Propose the right stack, structure, and timeline. Clear scope, clear milestones, clear pricing.",
  },
  {
    step: "03",
    title: "Build",
    description: "Develop, test, and iterate with regular check-ins. You see progress early and often — not just at the end.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploy, configure, and hand off with documentation so you or your team can confidently manage the project going forward.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 bg-background">

      {/* ── Hero header ── */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08]"
            style={{ background: "oklch(0.55 0.24 30)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
          <ScrollFadeIn>
            <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">Services</p>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-5 text-foreground leading-tight">
              What I can<br />
              <span className="gradient-text">build for you.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-8">
              8 services covering the full web development lifecycle — from initial design to deployment, maintenance, and beyond.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)] cursor-pointer">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:bg-secondary transition-colors cursor-pointer">
                View My Work
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        {/* ── Services grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-28">
          {services.map((service, idx) => (
            <ScrollFadeIn key={service.title} delay={idx * 0.06}>
              <div className="group relative flex flex-col p-7 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 h-full overflow-hidden">

                {/* Subtle gradient top accent */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground/40 mt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <div className="mb-5 p-4 rounded-xl bg-secondary/40 border border-border/50">
                  <h3 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-mono rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* ── Process ── */}
        <ScrollFadeIn>
          <div className="mb-10">
            <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">How I Work</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              My Process
            </h2>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-28">
          {process.map((step, idx) => (
            <ScrollFadeIn key={step.step} delay={idx * 0.08}>
              <div className="relative p-6 rounded-2xl border border-border bg-card h-full overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute top-4 right-4 font-mono text-5xl font-bold text-primary/[0.06] leading-none select-none">
                  {step.step}
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="font-heading font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        {/* ── CTA ── */}
        <ScrollFadeIn>
          <div className="relative rounded-3xl bg-foreground overflow-hidden px-10 py-16 sm:px-16 sm:py-20 text-center">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 25% 50%, oklch(0.62 0.19 30 / 0.3) 0%, transparent 60%)" }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 80% 50%, oklch(0.50 0.20 280 / 0.15) 0%, transparent 60%)" }} />
            <div className="relative">
              <p className="text-xs font-mono text-background/40 uppercase tracking-widest mb-4">Ready to start?</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-background mb-4">
                Let&apos;s build something great.
              </h2>
              <p className="text-background/50 mb-8 max-w-md mx-auto text-lg">
                Available for new projects. I&apos;ll get back to you within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)]"
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
