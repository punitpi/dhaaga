import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Dhaaga by Nayana | Handmade Crochet",
  description: "Handmade crochet flowers, plushies, coasters, accessories, and cute gifts made with love by Nayana.",
  openGraph: {
    title: "Dhaaga by Nayana",
    description: "Handmade crochet flowers, plushies, coasters, and accessories.",
    url: "https://dhaaga.nayanamurthy.com",
    siteName: "Dhaaga by Nayana",
    images: [
      {
        url: "/products/IMG_2433 Medium.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
      </body>
    </html>
  );
}
