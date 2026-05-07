import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://rokusena.xyz";

// Get this value from Google Search Console → Add property → rokusena.xyz →
// Choose "HTML tag" verification → copy only the content="..." value below.
// URL: https://search.google.com/search-console/welcome
const GOOGLE_VERIFICATION = "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rokas Stasiūnas | Full-Stack Developer & AI Engineer",
  description:
    "Full-stack developer and AI engineer based in Vilnius, Lithuania. Building AI-powered SaaS products, LLM pipelines, and web applications.",
  keywords: [
    "Rokusena",
    "Rokas Stasiūnas",
    "Full-Stack Developer Vilnius",
    "AI Engineer Lithuania",
    "Next.js developer",
    "Python developer",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Rokas Stasiūnas | Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer and AI engineer based in Vilnius, Lithuania. Building AI-powered SaaS products, LLM pipelines, and web applications.",
    url: SITE_URL,
    siteName: "Rokusena — Rokas Stasiūnas",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rokas Stasiūnas — Full-Stack Developer & AI Engineer based in Vilnius, Lithuania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rokas Stasiūnas | Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer and AI engineer based in Vilnius, Lithuania. Building AI-powered SaaS products, LLM pipelines, and web applications.",
    images: ["/og-image.png"],
  },
  verification: {
    google: GOOGLE_VERIFICATION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rokas Stasiūnas",
  alternateName: "Rokusena",
  url: SITE_URL,
  email: "StasiunasRokas@gmail.com",
  jobTitle: "Full-Stack Developer & AI Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Vilnius Tech (VGTU)",
  },
  knowsAbout: [
    "Next.js",
    "Python",
    "AI Systems",
    "Machine Learning",
    "RAG",
    "LangChain",
  ],
  sameAs: [
    "https://github.com/Rokusena",
    "https://linkedin.com/in/rokas-stasiunas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[var(--font-inter)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
