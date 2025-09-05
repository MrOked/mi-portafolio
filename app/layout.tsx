import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import GradientBackground from "@/components/gradient";



const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Javier Valdes Landing Page 👾",
  description: "Landing Page made by Javier Valdes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        
        
        
        <Navbar />
        <Header/>
        {children}
      </body>
    </html>
  );
}