import "@/app/globals.css";
import Navbar from "@/components/nav/navbar";
import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Plamory",
  description: "Your memories, your way",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
