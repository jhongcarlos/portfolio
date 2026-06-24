export interface SkillCategory {
  category: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    color: "blue",
    skills: ["HTML5", "CSS3", "JavaScript", "PHP"],
  },
  {
    category: "Frameworks",
    color: "purple",
    skills: ["React.js", "Next.js", "Laravel", "CodeIgniter", "Bootstrap"],
  },
  {
    category: "CMS & Builders",
    color: "green",
    skills: [
      "WordPress",
      "Webflow",
      "Wix",
      "Squarespace",
      "Umbraco",
      "GoHighLevel",
      "Framer",
    ],
  },
  {
    category: "Infrastructure",
    color: "orange",
    skills: [
      "AWS",
      "DNS Management",
      "Cloudflare",
      "Server Deployment",
      "Linux",
    ],
  },
  {
    category: "Analytics & SEO",
    color: "cyan",
    skills: [
      "Google Analytics",
      "Google Tag Manager",
      "Hotjar",
      "SEMrush",
      "On-page SEO",
    ],
  },
  {
    category: "Tools",
    color: "pink",
    skills: ["Jira", "Trello", "Git", "Canva", "Claude", "AI Prompt Engineering"],
  },
];

// Flat list of all tech logos for the scrolling bar
export const techLogoBar = [
  "WordPress",
  "Next.js",
  "React",
  "PHP",
  "Laravel",
  "Webflow",
  "Wix",
  "Squarespace",
  "Framer",
  "GoHighLevel",
  "Umbraco",
  "AWS",
  "Cloudflare",
  "Git",
];
