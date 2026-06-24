import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Harold Carlos — Full-Stack Web Developer & WordPress Expert",
  description:
    "Full-stack web developer with 8+ years of experience based in Manila, Philippines. WordPress, React/Next.js, PHP/Laravel, and web app development for agencies and enterprise clients.",
  keywords: [
    "full-stack developer",
    "WordPress developer",
    "web developer",
    "Next.js developer",
    "PHP developer",
    "Manila Philippines",
    "freelance web developer",
    "Webflow developer",
    "agency developer",
  ],
  authors: [{ name: "John Harold Carlos" }],
  openGraph: {
    title: "John Harold Carlos — Full-Stack Web Developer & WordPress Expert",
    description:
      "8+ years building fast, scalable websites and web applications for agencies and enterprise clients across the US and Philippines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
