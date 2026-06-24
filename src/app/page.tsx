import Hero from "@/components/home/hero";
import TechStack from "@/components/home/tech-stack";
import StatsStrip from "@/components/home/stats-strip";
import FeaturedProjects from "@/components/home/featured-projects";
import ServicesSnippet from "@/components/home/services-snippet";
import CTASection from "@/components/home/cta-section";
import { GlowDivider } from "@/components/animated-background";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GlowDivider />
      <TechStack />
      <GlowDivider />
      <StatsStrip />
      <GlowDivider />
      <FeaturedProjects />
      <GlowDivider />
      <ServicesSnippet />
      <GlowDivider />
      <CTASection />
    </>
  );
}
