import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/utils/provider/Providers"
import { poppins } from "@/utils/font";
import FooterComp from "@/components/footerComp";
import GoogleAnalytics from '@bradgarropy/next-google-analytics'

export const metadata: Metadata = {
  title: "OpenSearch AI",
  description: "OpenSearch is a powerful personalized AI search engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <head>
            <GoogleAnalytics measurementId="G-9PEYYVCD2G"/>
          </head>
          {children}
          <FooterComp/>
        </Providers>
        </body>
    </html>
  );
}
