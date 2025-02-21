import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://dustin-&-julia.vercel.app";

export const metadata: Metadata = {
  title: "Dustin & Julia",
  description: "Join us to celebrate our special day on May 5, 2025",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Dustin & Julia",
    description: "Join us to celebrate our special day on May 5, 2025",
    url: "https://yourweddingdomain.com",
    siteName: "Dustin & Julia",
    images: [
      {
        url: "/JUDU ENGAGEMENT-63.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable}`}>
      <body className="font-ebGaramond">{children}</body>
    </html>
  );
}
