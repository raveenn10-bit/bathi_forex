import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ACADEMY_CONFIG } from "@/data/academy";
import { COURSES } from "@/data/courses";
import { FAQS } from "@/data/faqs";
import { ThemeProvider } from "@/context/ThemeContext";

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
  metadataBase: new URL("https://lankaforex.com"),
  title: {
    default:
      "Lanka Forex — Apex Trading Academy | #1 Forex & Crypto Education in Sri Lanka",
    template: "%s | LankaForex.com",
  },
  description:
    "Lanka Forex (LankaForex.com) by Apex Trading Academy is Sri Lanka's leading institute for Forex and Cryptocurrency education. Master institutional Price Action, London & New York session liquidity, Binance P2P, and disciplined risk management with lead strategist Bhathiya Sooriarachchi.",
  keywords: ACADEMY_CONFIG.seo.keywords,
  authors: [
    { name: "Lanka Forex", url: "https://lankaforex.com" },
    { name: "Apex Trading Academy" },
    { name: "Bhathiya Sooriarachchi" },
  ],
  creator: "Lanka Forex — Apex Trading Academy",
  publisher: "Lanka Forex (LankaForex.com)",
  alternates: {
    canonical: "https://lankaforex.com",
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "google-site-verification-token-here",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://lankaforex.com",
    title:
      "Lanka Forex — Apex Trading Academy | #1 Forex & Crypto Education in Sri Lanka",
    description:
      "Lanka Forex (LankaForex.com) by Apex Trading Academy provides structured Price Action education, Sri Lanka market hours (SLST) breakdown, Binance P2P guidance, and funded trader mentorship with Bhathiya Sooriarachchi.",
    siteName: "Lanka Forex — Apex Trading Academy",
    images: [
      {
        url: "/images/trading-desk.webp",
        width: 1200,
        height: 630,
        alt: "Lanka Forex - Apex Trading Academy Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lanka Forex — Apex Trading Academy | #1 Forex & Crypto Education in Sri Lanka",
    description:
      "Master Forex and Crypto trading in Sri Lanka with structured Price Action education, risk management, and live session breakdowns.",
    creator: "@lankaforex",
    images: ["/images/trading-desk.webp"],
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
  // Comprehensive structured JSON-LD schemas for Google, Perplexity, and AI Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://lankaforex.com/#website",
        url: "https://lankaforex.com",
        name: "Lanka Forex",
        alternateName: ACADEMY_CONFIG.alternateNames,
        description:
          "Sri Lanka's premier Forex, Cryptocurrency, and institutional Price Action education portal.",
        inLanguage: ["en-LK", "si-LK"],
        publisher: {
          "@id": "https://lankaforex.com/#organization",
        },
      },
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": "https://lankaforex.com/#organization",
        name: "Lanka Forex — Apex Trading Academy",
        legalName: ACADEMY_CONFIG.legalName,
        alternateName: ACADEMY_CONFIG.alternateNames,
        url: "https://lankaforex.com",
        logo: "https://lankaforex.com/images/bhathiya-sooriarachchi.png",
        image: "https://lankaforex.com/images/trading-desk.webp",
        description:
          "Leading financial market educational institute in Sri Lanka specializing in professional Forex, Crypto derivatives, Price Action technical analysis, and risk management.",
        telephone: ACADEMY_CONFIG.displayPhone,
        email: ACADEMY_CONFIG.email,
        founder: {
          "@id": "https://lankaforex.com/#founder",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Colombo 03",
          addressLocality: "Colombo",
          addressRegion: "Western Province",
          postalCode: "00300",
          addressCountry: "LK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.9271,
          longitude: 79.8612,
        },
        priceRange: "LKR 12,500 - LKR 40,000",
        sameAs: [
          "https://t.me/bhathiforex",
          "https://youtube.com/@bhathiforex",
          "https://instagram.com/bhathiforex",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://lankaforex.com/#founder",
        name: ACADEMY_CONFIG.mentor.name,
        jobTitle: ACADEMY_CONFIG.mentor.title,
        worksFor: {
          "@id": "https://lankaforex.com/#organization",
        },
        description: ACADEMY_CONFIG.mentor.bio,
        image: "https://lankaforex.com/images/bhathiya-sooriarachchi.png",
        sameAs: [
          "https://youtube.com/@bhathiforex",
          "https://instagram.com/bhathiforex",
          "https://t.me/bhathiforex",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lankaforex.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://lankaforex.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Market Sessions (SLST)",
            item: "https://lankaforex.com/#sl-market",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Courses & Curricula",
            item: "https://lankaforex.com/#courses",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Student Community Forum",
            item: "https://lankaforex.com/#community",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "FAQ & Regulatory Clarity",
            item: "https://lankaforex.com/#faq",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://lankaforex.com/#faq",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      ...COURSES.map((course) => ({
        "@type": "Course",
        "@id": `https://lankaforex.com/#course-${course.id}`,
        name: course.name,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "Lanka Forex — Apex Trading Academy",
          sameAs: "https://lankaforex.com",
        },
        offers: {
          "@type": "Offer",
          price: course.priceLKR,
          priceCurrency: "LKR",
          availability: "https://schema.org/InStock",
          category: "Paid",
        },
      })),
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var stored = localStorage.getItem('apex_trading_academy_theme');
                if (stored === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch(e) {}
            })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F4F7FB] dark:bg-[#0B0E14] text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-sky-500/30 selection:text-slate-900 dark:selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
