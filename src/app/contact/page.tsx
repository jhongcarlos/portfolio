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
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manila, Philippines · Open to Remote",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Link2,
    label: "LinkedIn",
    href: "https://linkedin.com/in/john-harold-carlos-79b612148",
    handle: "john-harold-carlos-79b612148",
  },
  {
    icon: Briefcase,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~016478f04ddd6a4878",
    handle: "upwork.com/freelancers/~016478f04ddd6a4878",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        {/* Header */}
        <ScrollFadeIn>
          <div className="mb-14 max-w-xl">
            <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
              Contact
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold mb-4">
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
          <div className="lg:col-span-2 space-y-5">
            <ScrollFadeIn delay={0.1}>
              <div className="p-6 rounded-xl border border-border bg-card space-y-5">
                <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Contact Details
                </h2>
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <info.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-foreground hover:text-primary transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.15}>
              <div className="p-6 rounded-xl border border-border bg-card">
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
                      <div className="w-8 h-8 rounded-md border border-border bg-background flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors flex-shrink-0">
                        <social.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">
                          {social.label}
                        </p>
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors truncate">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <div className="p-5 rounded-xl border border-border bg-card/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">Currently Available</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  I typically respond within 24 hours. Prefer email? Reach me
                  directly at{" "}
                  <a
                    href="mailto:carlosjohnharold@outlook.com"
                    className="text-primary hover:underline"
                  >
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
