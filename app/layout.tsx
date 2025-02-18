import "@/app/globals.css";
import Navbar from "@/components/nav/navbar";
import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Plamory",
  description: "Your memories, your way",
  metadataBase: new URL("https://plamory.com"),
  openGraph: {
    title: "Plamory",
    description: "Your memories, your way",
    url: "https://plamory.com",
    siteName: "Plamory",
    images: "/opengraph-image.jpg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} antialiased`}>
        <Script id="microsoft-clarity">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qbf7v2kr7w");
          `}
        </Script>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
