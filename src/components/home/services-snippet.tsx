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
    iconBg: "bg-sky-100 text-sky-600",
  },
  {
    icon: Code2,
    title: "Web App Development",
    description:
      "Full-stack applications with PHP/Laravel backend and React/Next.js frontend. API integrations, database design, and cloud deployment on AWS.",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    icon: Layout,
    title: "CMS & Website Builders",
    description:
      "Webflow, Wix, Squarespace, GoHighLevel, Framer, and Umbraco. New builds, redesigns, migrations, and CMS training.",
    iconBg: "bg-amber-100 text-amber-600",
  },
];

export default function ServicesSnippet() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <StaggerContainer viewport staggerDelay={0.07} initialDelay={0}>
          <StaggerItem>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
                  What I Do
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
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
                <div className="group p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center mb-4`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2 text-foreground">{service.title}</h3>
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
