import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import StructuredData from "@/components/StructuredData";
import RatingModal from "@/components/RatingModal/RatingModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "MD Digital Solutions - Professional Graphics Designer",
  description: "Portfolio of Aduragnemi Michael - Professional Graphics Designer specializing in branding, social media design, flyers, and posters. Transform your brand with creative visual solutions.",
  keywords: ["graphics designer", "top quality graphic designer", "professional graphic designer", "brand identity", "logo design", "social media design", "flyer design", "poster design", "branding", "visual identity", "marketing materials", "graphic design services", "creative designer", "brand design", "print design", "digital design", "portfolio"],
  authors: [{ name: "Aduragnemi Michael" }],
  creator: "Aduragnemi Michael",
  publisher: "MD Digital Solutions",
  metadataBase: new URL("https://md-porfolio.vercel.app"),
  alternates: {
    canonical: "https://md-porfolio.vercel.app",
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/image/logo.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/image/logo.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/image/logo.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://md-porfolio.vercel.app",
    title: "MD Digital Solutions - Professional Graphics Designer",
    description: "Portfolio of Aduragnemi Michael - Professional Graphics Designer specializing in branding, social media design, flyers, and posters.",
    siteName: "MD Digital Solutions",
    images: [
      {
        url: "/image/logo.jpg",
        width: 1200,
        height: 630,
        alt: "MD Digital Solutions - Professional Graphics Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Digital Solutions - Professional Graphics Designer",
    description: "Portfolio of Aduragnemi Michael - Professional Graphics Designer specializing in branding, social media design, flyers, and posters.",
    images: ["/image/logo.jpg"],
    creator: "@Md_digitals01",
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StructuredData />
        <Sidebar />
        <main className="main-content">{children}</main>
        <RatingModal />
      </body>
    </html>
  );
}
