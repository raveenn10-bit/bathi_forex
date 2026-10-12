import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ACADEMY_CONFIG } from "@/data/academy";
import { COURSES } from "@/data/courses";

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

export const metadata: Metadata = {
  title: "Apex Trading Academy — A TO Z TRADING | Premium Forex & Crypto Academy",
  description:
    "Master Forex and Cryptocurrency trading with Apex Trading Academy. Structured 4-phase education covering market foundations, price action technical analysis, and institutional risk management led by Bhathiya Sooriarachchi.",
  keywords: [
    "Apex Trading Academy",
    "Forex Trading Sri Lanka",
    "Crypto Trading Education Sri Lanka",
    "Bhathiya Sooriarachchi",
    "A to Z Trading",
    "Forex Course Sri Lanka",
    "Technical Analysis Course",
    "Risk Management Forex",
    "Binance Bybit Trading Course",
  ],
  authors: [{ name: "Apex Trading Academy" }, { name: "Bhathiya Sooriarachchi" }],
  creator: "Apex Trading Academy",
  publisher: "Apex Trading Academy",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://apextradingacademy.com",
    title: "Apex Trading Academy — A TO Z TRADING | Premium Forex & Crypto Academy",
    description:
      "Structured Forex and cryptocurrency trading education. Learn price action, session dynamics, and disciplined risk management.",
    siteName: "Apex Trading Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Trading Academy — A TO Z TRADING",
    description:
      "Master Forex and Crypto trading from beginner to advanced with structured, disciplined education.",
    creator: "@apextrading",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured schema for Google search
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://bhathiforex.com/#organization",
        name: ACADEMY_CONFIG.brandName,
        legalName: ACADEMY_CONFIG.legalName,
        url: "https://bhathiforex.com",
        description:
          "Professional Forex and Cryptocurrency trading education academy based in Sri Lanka.",
        telephone: ACADEMY_CONFIG.displayPhone,
        email: ACADEMY_CONFIG.email,
        address: {
          "@type": "PostalAddress",
          addressCountry: "LK",
        },
      },
      ...COURSES.map((course) => ({
        "@type": "Course",
        "@id": `https://bhathiforex.com/#course-${course.id}`,
        name: course.name,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: ACADEMY_CONFIG.brandName,
          sameAs: "https://bhathiforex.com",
        },
        offers: {
          "@type": "Offer",
          price: course.priceLKR,
          priceCurrency: "LKR",
          availability: "https://schema.org/InStock",
        },
      })),
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}
