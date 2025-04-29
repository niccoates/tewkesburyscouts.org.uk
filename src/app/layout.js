import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Tewkesbury Scouts - Empowering Young People",
    template: "%s | Tewkesbury Scouts",
  },
  description: "Tewkesbury Scouts offers fun, challenging adventures for young people aged 4-25, helping them learn new skills and make a positive impact in their communities.",
  keywords: ["Tewkesbury Scouts", "Scouting", "youth programs", "adventure activities", "community service", "skills development"], // Add relevant keywords
  robots: {
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.tewkesburyscouts.org.ukm",
  },
  openGraph: {
    title: {
      default: "Tewkesbury Scouts - Empowering Young People",
      template: "%s | Tewkesbury Scouts",
    },
    description: "Tewkesbury Scouts offers fun, challenging adventures for young people aged 4-25, helping them learn new skills and make a positive impact in their communities.",
    url: "https://www.tewkesburyscouts.org.uk",
    siteName: "Tewkesbury Scouts",
    images: [
      {
        url: "https://www.tewkesburyscouts.org.uk/images/og.png",
        width: 1200,
        height: 630,
        alt: "Tewkesbury Scouts",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Tewkesbury Scouts - Empowering Young People",
      template: "%s | Tewkesbury Scouts",
    },
    description: "Tewkesbury Scouts offers fun, challenging adventures for young people aged 4-25, helping them learn new skills and make a positive impact in their communities.",
    images: ["https://www.tewkesburyscouts.org.uk/images/og.png"], 
    creator: "@TewkesburyScouts",
  },
  icons: {
    icon: "/favicon.ico", // Path to favicon
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased bg-white`}>
        <Header />
        {children}
        <Footer />
        <Script
          src="https://cdn.seline.so/seline.js"
          data-token="870108b77523d9d"
          strategy="afterInteractive"
          async
        />
        <Script
          src="https://status.tewkesburyscouts.org.uk/script.js"
          async
          defer
        />
      </body>
    </html>
  );
}