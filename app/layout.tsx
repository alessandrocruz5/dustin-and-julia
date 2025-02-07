import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "dustin & julia",
  description: "Welcome to our wedding website!",
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
