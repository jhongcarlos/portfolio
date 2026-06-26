import { Metadata } from "next";
import { Mail, MapPin, Link2, Briefcase } from "lucide-react";
import { ScrollFadeIn } from "@/components/motion-wrapper";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact — John Harold Carlos",
  description:
    "Get in touch with John Harold Carlos for WordPress development, web app projects, or full-time opportunities.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "carlosjohnharold@outlook.com",
    href: "mailto:carlosjohnharold@outlook.com",
    iconBg: "bg-orange-500/10 text-orange-400",
    accent: "from-orange-500 to-rose-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manila, Philippines · Open to Remote",
    href: null,
    iconBg: "bg-sky-500/10 text-sky-400",
    accent: "from-sky-500 to-blue-500",
  },
];

const socialLinks = [
  {
    icon: Link2,
    label: "LinkedIn",
    href: "https://linkedin.com/in/john-harold-carlos-79b612148",
    handle: "john-harold-carlos",
    iconBg: "bg-blue-500/10 text-blue-400",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    icon: Briefcase,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~016478f04ddd6a4878",
    handle: "upwork.com/freelancers/~0164…",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    accent: "from-emerald-500 to-teal-500",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16 bg-background">

      {/* ── Hero header ── */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08]"
            style={{ background: "oklch(0.55 0.24 30)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
          <ScrollFadeIn>
            <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">Contact</p>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold mb-5 text-foreground leading-tight">
              Let&apos;s work <span className="gradient-text">together.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Have a project in mind, a full-time role to discuss, or just want to say hi?
              My inbox is always open.
            </p>
          </ScrollFadeIn>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── Contact form ── */}
          <div className="lg:col-span-3">
            <ScrollFadeIn>
              <ContactForm />
            </ScrollFadeIn>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 space-y-4">

            {/* Contact details */}
            <ScrollFadeIn delay={0.1}>
              <div className="rounded-2xl border border-border bg-card">
                <div className="p-6 space-y-5">
                  <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Contact Details
                  </h2>
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-xl ${info.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            {/* Social links */}
            <ScrollFadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card">
                <div className="p-6">
                  <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                    Find Me Online
                  </h2>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group cursor-pointer p-2.5 rounded-xl hover:bg-secondary/50 transition-colors -mx-2.5"
                      >
                        <div className={`w-9 h-9 rounded-xl ${social.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <social.icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">{social.label}</p>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Available card */}
            <ScrollFadeIn delay={0.2}>
              <div className="rounded-2xl border border-border bg-card">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-semibold text-foreground">Currently Available</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    I typically respond within 24 hours. Prefer email? Reach me directly at{" "}
                    <a href="mailto:carlosjohnharold@outlook.com" className="text-primary hover:underline">
                      carlosjohnharold@outlook.com
                    </a>
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

          </div>
        </div>
      </div>
    </div>
  );
}
