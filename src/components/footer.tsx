import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://linkedin.com/in/john-harold-carlos-79b612148",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "mailto:carlosjohnharold@outlook.com",
    label: "Email",
    Icon: Mail,
  },
];

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
              <Image
                src="/logo.svg"
                alt="johnc. Web Development"
                width={110}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              Full-Stack Developer · Manila, Philippines
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex items-center gap-4 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social */}
          <ul className="flex items-center gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {year} John Harold Carlos
        </div>
      </div>
    </footer>
  );
}
