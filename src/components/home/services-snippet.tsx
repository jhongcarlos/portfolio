"use client";

import Link from "next/link";
import { ArrowRight, Code2, Globe, Layout } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Custom themes, plugin development, WooCommerce, speed optimization, security hardening, and ongoing maintenance. 50+ WordPress sites delivered.",
  },
  {
    icon: Code2,
    title: "Web App Development",
    description:
      "Full-stack applications with PHP/Laravel backend and React/Next.js frontend. API integrations, database design, and cloud deployment on AWS.",
  },
  {
    icon: Layout,
    title: "CMS & Website Builders",
    description:
      "Webflow, Wix, Squarespace, GoHighLevel, Framer, and Umbraco. New builds, redesigns, migrations, and CMS training.",
  },
];

export default function ServicesSnippet() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerContainer viewport staggerDelay={0.07} initialDelay={0}>
          <StaggerItem>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
                  What I Do
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold">
                  Services
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
              >
                See All Services
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </StaggerItem>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group p-6 rounded-xl border border-border bg-card card-hover glow-card h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
