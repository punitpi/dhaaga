import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dhaaga.nayanamurthy.com"),
  title: "Dhaaga by Nayana | Handmade Crochet",
  description: "Handmade crochet flowers, plushies, coasters, accessories, and cute gifts made with love by Nayana.",
  openGraph: {
    title: "Dhaaga by Nayana",
    description: "Handmade crochet flowers, plushies, coasters, and accessories.",
    url: "https://dhaaga.nayanamurthy.com",
    siteName: "Dhaaga by Nayana",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200, // Logo is likely square
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
