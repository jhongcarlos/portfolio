export type ProjectCategory =
  | "wordpress"
  | "webflow-builders"
  | "web-app"
  | "internal-tool";

export interface Project {
  slug: string;
  title: string;
  url?: string;
  category: ProjectCategory[];
  stack: string[];
  description: string;
  highlight: string;
  image?: string;
  featured: boolean;
  isConfidential: boolean;
  client?: string;
  accentColor?: string;
}

export const projects: Project[] = [
  // ─── WordPress / CMS ──────────────────────────────────────────────────────
  {
    slug: "ourrelationship",
    title: "OurRelationship",
    url: "https://www.ourrelationship.com",
    category: ["wordpress"],
    stack: ["WordPress", "WPBakery", "PHP", "GTM", "SEO"],
    client: "Couples therapy & marriage counseling platform · USA",
    description:
      "Maintained and developed a large-scale WordPress platform for a research-backed online couples therapy service. Handled content updates, plugin management, performance optimization, and SEO improvements across a high-traffic site serving active users across the US.",
    highlight: "High-traffic production site with real user base — security, performance, and uptime critical.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=450&fit=crop&auto=format",
    accentColor: "from-rose-500/20 to-pink-600/10",
    featured: false,
    isConfidential: false,
  },
  {
    slug: "osdoro",
    title: "Osdoro — Asia's #1 Coworking Platform",
    url: "https://osdoro.com.sg",
    category: ["wordpress"],
    stack: ["WordPress", "WP Rocket", "PHP", "SEO", "GTM"],
    client: "Coworking space marketplace · Singapore",
    description:
      "Built and maintained custom WordPress websites for Osdoro, a coworking and serviced office marketplace in Singapore. Focused on property listing functionality, office search, lead capture, and SEO optimization to drive bookings across Singapore's CBD and key districts.",
    highlight: "International client, marketplace-style listings, multilocation scale.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop&auto=format",
    accentColor: "from-blue-500/20 to-indigo-600/10",
    featured: true,
    isConfidential: false,
  },
  {
    slug: "underdog-digital",
    title: "Underdog Digital",
    url: "https://underdogdigital.co",
    category: ["wordpress"],
    stack: ["WordPress", "Elementor", "PHP", "SEO", "GTM"],
    client: "Digital marketing agency · South Carolina, USA",
    description:
      "Built and actively maintain the primary website for Underdog Digital, a local marketing agency in South Carolina. Handles ongoing content updates, SEO, performance optimization, and new feature implementation as the agency grows its client base.",
    highlight: "Current employer — ongoing active maintenance across 25–30 agency clients.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&auto=format",
    accentColor: "from-orange-500/20 to-yellow-600/10",
    featured: true,
    isConfidential: false,
  },
  {
    slug: "southern-steel-engineers",
    title: "Southern Steel Engineers",
    url: "https://www.southernsteelengineers.com",
    category: ["wordpress"],
    stack: ["WordPress", "PHP", "GTM", "SEO"],
    client: "Structural engineering firm · USA (licensed in 46 states)",
    description:
      "Developed a professional B2B WordPress site for a structural engineering firm specializing in steel connection and delegated design. Implemented Google Tag Manager for analytics tracking and optimized the site for lead generation across a nationally licensed practice.",
    highlight: "Technical B2B industry client, GTM implementation, lead-gen focused.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=450&fit=crop&auto=format",
    accentColor: "from-slate-500/20 to-zinc-600/10",
    featured: false,
    isConfidential: false,
  },
  // ─── Webflow & Builders ───────────────────────────────────────────────────
  {
    slug: "humanise-design",
    title: "Humanise Design",
    url: "https://humanise.design",
    category: ["webflow-builders"],
    stack: ["Framer", "SEO"],
    client: "Product design & development agency",
    description:
      "Built a bold, visually striking Framer website for Humanise Design, a subscription-based product design agency offering unlimited design and development for $2,999/month. Focused on strong hero design, clear service positioning, and booking flow integration via Cal.com.",
    highlight: "Framer build, modern design agency aesthetic, booking integration.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop&auto=format",
    accentColor: "from-violet-500/20 to-purple-600/10",
    featured: false,
    isConfidential: false,
  },
  // ─── Web Apps ─────────────────────────────────────────────────────────────
  {
    slug: "usa-notary-platform",
    title: "USA Notary Platform",
    url: "https://www.usanotary.net/",
    category: ["web-app"],
    stack: ["PHP", "Laravel", "JavaScript", "MySQL", "AWS", "Cloudflare"],
    client: "Online notary service · Virginia, USA",
    description:
      "Architected and launched a full-stack online notary platform from the ground up. Built the PHP/Laravel backend, JavaScript frontend, and handled complete cloud deployment on AWS. Integrated third-party APIs for identity verification, document signing, and payment processing.",
    highlight: "Full-stack, end-to-end ownership, real user transactions, API integrations.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop&auto=format",
    accentColor: "from-emerald-500/20 to-teal-600/10",
    featured: true,
    isConfidential: false,
  },
  // ─── Internal Tools ───────────────────────────────────────────────────────
  {
    slug: "metro-pacific-hris",
    title: "Metro Pacific HRIS",
    category: ["internal-tool"],
    stack: ["PHP", "JavaScript", "MySQL", "Linux", "Server Management"],
    client: "Metro Pacific Investments Corporation · Philippines",
    description:
      "Developed an in-house Human Resource Information System (HRIS) for one of the Philippines' largest conglomerates and its subsidiaries. Built role-based access control, employee data management, and HR workflow automation used daily by teams across multiple subsidiary companies.",
    highlight: "Enterprise scale, role-based permissions, multi-subsidiary deployment.",
    accentColor: "from-blue-500/20 to-cyan-600/10",
    featured: false,
    isConfidential: true,
  },
  {
    slug: "metro-pacific-rfp",
    title: "Metro Pacific RFP & Accounting System",
    category: ["internal-tool"],
    stack: ["PHP", "JavaScript", "MySQL", "Linux"],
    client: "Metro Pacific Investments Corporation · Philippines",
    description:
      "Built an internal RFP and accounting system to digitize and streamline procurement approval workflows across Metro Pacific and its subsidiaries. Implemented multi-level approval chains, role-based access, and financial reporting features used by finance and operations teams.",
    highlight: "Approval workflow automation, financial reporting, multi-level permissions.",
    accentColor: "from-indigo-500/20 to-blue-600/10",
    featured: false,
    isConfidential: true,
  },
  {
    slug: "metro-pacific-shareholders",
    title: "Metro Pacific Shareholder's Database",
    category: ["internal-tool"],
    stack: ["PHP", "JavaScript", "MySQL", "Linux"],
    client: "Metro Pacific Investments Corporation · Philippines",
    description:
      "Designed and developed a shareholder's database system for secure management of shareholder records across Metro Pacific's corporate structure. Focused on data integrity, access control, and reliable retrieval of sensitive financial records.",
    highlight: "Sensitive data handling, access control, corporate-grade data integrity.",
    accentColor: "from-slate-500/20 to-blue-600/10",
    featured: false,
    isConfidential: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
