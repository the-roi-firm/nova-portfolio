import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = "https://novastyleloungekandy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Nova Style Lounge Kandy | Private, Appointment-Only Grooming",
    template: "%s | Nova Style Lounge Kandy",
  },
  description:
    "Kandy's private, appointment-only grooming experience. Haircuts, beard styling, hair setting, braiding and head massage, handled personally by Shan at the lounge or your hotel.",
  keywords: [
    "salon Kandy",
    "barber Kandy",
    "haircut Kandy",
    "luxury salon Kandy",
    "private salon Kandy",
    "beard styling Kandy",
    "appointment salon Kandy",
    "grooming Kandy",
    "Nova Style Lounge",
    "Shan stylist Kandy",
    "hotel hair service Kandy",
  ],
  authors: [{ name: "Nova Style Lounge, Kandy" }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: SITE_URL,
    siteName: "Nova Style Lounge Kandy",
    title: "Nova Style Lounge | Private Grooming Experience | Kandy",
    description:
      "Kandy's appointment-only private grooming experience. Personally handled by Shan. Limited sessions, at the lounge or your hotel.",
    images: [
      {
        url: "/images/og-nova-kandy.jpg",
        width: 1200,
        height: 630,
        alt: "Nova Style Lounge interior, a private grooming lounge in Kandy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Style Lounge | Private Grooming | Kandy",
    description:
      "Appointment-only grooming by Shan. Kandy's quiet luxury experience.",
    images: ["/images/og-nova-kandy.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#100d09",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "Nova Style Lounge",
  alternateName: "Nova Style Lounge Kandy",
  description:
    "Kandy's appointment-only private grooming experience. Personally handled by Shan. Haircuts, beard styling, hair setting, braiding and head massage, at the lounge or your hotel.",
  url: SITE_URL,
  telephone: "+94710409535",
  priceRange: "LKR $$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hideout Lounge",
    addressLocality: "Kandy",
    addressRegion: "Central Province",
    postalCode: "20000",
    addressCountry: "LK",
  },
  geo: { "@type": "GeoCoordinates", latitude: "7.2906", longitude: "80.6337" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Friday"],
      opens: "18:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Grooming Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Haircut, Ladies and Gents" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beard Styling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Setting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Braiding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Head Massage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "In-Suite Hotel Grooming" } },
    ],
  },
  areaServed: [
    { "@type": "City", name: "Kandy" },
    { "@type": "State", name: "Central Province, Sri Lanka" },
  ],
  sameAs: [
    "https://www.instagram.com/shan_winchester",
    "https://www.tiktok.com/@shanwinchester0",
  ],
  slogan: "Some things are better private.",
  foundingDate: "2025",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
