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
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manila, Philippines · Open to Remote",
    href: null,
    iconBg: "bg-sky-100 text-sky-600",
  },
];

const socialLinks = [
  {
    icon: Link2,
    label: "LinkedIn",
    href: "https://linkedin.com/in/john-harold-carlos-79b612148",
    handle: "john-harold-carlos",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: Briefcase,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~016478f04ddd6a4878",
    handle: "upwork.com/freelancers/~0164…",
    iconBg: "bg-green-100 text-green-600",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        {/* Header */}
        <ScrollFadeIn>
          <div className="mb-14 max-w-xl">
            <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
              Contact
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Let&apos;s Work Together
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a project in mind, a full-time role to discuss, or just want
              to say hi? My inbox is always open.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact form */}
          <div className="lg:col-span-3">
            <ScrollFadeIn>
              <ContactForm />
            </ScrollFadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollFadeIn delay={0.1}>
              <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-5">
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
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.15}>
              <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
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
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className={`w-9 h-9 rounded-xl ${social.iconBg} flex items-center justify-center flex-shrink-0 group-hover:opacity-80 transition-opacity`}>
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
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <div className="p-5 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Currently Available</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  I typically respond within 24 hours. Prefer email? Reach me
                  directly at{" "}
                  <a href="mailto:carlosjohnharold@outlook.com" className="text-primary hover:underline">
                    carlosjohnharold@outlook.com
                  </a>
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>

      </div>
    </div>
  );
}
