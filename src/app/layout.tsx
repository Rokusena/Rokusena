import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rokusena.xyz"),
  title: "Rokas Stasiūnas — Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Rokas Stasiūnas, a Full-Stack Developer & AI Engineer based in Vilnius, Lithuania. Building AI-powered products that ship.",
  openGraph: {
    title: "Rokas Stasiūnas — Full-Stack Developer & AI Engineer",
    description: "I build AI-powered products that ship.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[var(--font-inter)] antialiased">{children}</body>
    </html>
  );
}
