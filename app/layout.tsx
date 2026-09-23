import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: "Samet KINAZ | Spor Fotoğrafçısı",
  description: "Amatör liglerin ruhunu, futbolun hızını ve mücadelesini profesyonel bir gözle dijitale taşıyorum.",
  openGraph: {
    title: "Samet KINAZ | Spor Fotoğrafçısı",
    description: "Amatör liglerin ruhunu, futbolun hızını ve mücadelesini profesyonel bir gözle dijitale taşıyorum.",
    url: "/",
    siteName: "Samet KINAZ Portfolyo",
    images: [
      {
        url: "/kapak.jpg",
        width: 1200,
        height: 630,
        alt: "Samet KINAZ Saha Kenarı Çekimi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samet KINAZ | Spor Fotoğrafçısı",
    description: "Amatör liglerin ruhunu, futbolun hızını ve mücadelesini profesyonel bir gözle dijitale taşıyorum.",
    images: ["/kapak.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Analytics />
      <GoogleAnalytics gaId="G-JNMS85F20H" />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}