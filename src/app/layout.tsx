import ChatHero from "@/components/intro/ChatHero";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julian - Frontend Engineer",
  description: "Frontend Engineer",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChatHero />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
