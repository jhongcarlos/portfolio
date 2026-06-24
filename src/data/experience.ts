export interface Experience {
  company: string;
  url?: string;
  role: string;
  period: string;
  summary: string;
  location: string;
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    company: "Underdog Digital",
    url: "https://underdogdigital.co",
    role: "Web Developer",
    period: "Dec 2024 – Present",
    summary:
      "WordPress, Wix, and Squarespace development for 25–30 agency clients. Remote position based in the USA.",
    location: "Remote · South Carolina, USA",
    type: "work",
  },
  {
    company: "USA Notary",
    role: "Web App Developer",
    period: "May 2023 – Dec 2024",
    summary:
      "Architected and launched a full-stack online notary platform using PHP/Laravel and AWS. End-to-end ownership from backend to deployment.",
    location: "Remote · Virginia, USA",
    type: "work",
  },
  {
    company: "Adapt",
    role: "Web Developer",
    period: "Jul 2023 – Feb 2024",
    summary:
      "WordPress and Webflow development across 15–20 concurrent client projects for a US-based digital agency.",
    location: "Remote · USA",
    type: "work",
  },
  {
    company: "Digital Radar Marketing",
    role: "WordPress Expert",
    period: "Oct 2021 – Jul 2023",
    summary:
      "Delivered 20+ WordPress and Webflow websites for US-based clients spanning service businesses, agencies, and e-commerce brands.",
    location: "Remote · USA",
    type: "work",
  },
  {
    company: "Metro Pacific Investments Corporation",
    role: "Senior Assistant Developer",
    period: "Oct 2019 – Apr 2023",
    summary:
      "Built enterprise-grade internal tools for one of the Philippines' largest conglomerates — HRIS, RFP & Accounting System, and Shareholder's Database used across multiple subsidiaries.",
    location: "On-site · Manila, Philippines",
    type: "work",
  },
  {
    company: "Osdoro",
    url: "https://osdoro.com.sg",
    role: "Web Developer",
    period: "Jul 2018 – Oct 2019",
    summary:
      "Built and maintained WordPress websites for Asia's #1 coworking marketplace, including listing functionality, lead capture, and SEO across Singapore's key business districts.",
    location: "Remote · Singapore",
    type: "work",
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "STI College Caloocan",
  period: "2015 – 2019",
  type: "education" as const,
};
