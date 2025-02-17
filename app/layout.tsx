import "@/app/globals.scss";
import Navbar from "@/components/nav/navbar";
import { createClientServer } from "@/lib/supabase";
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
  const supabase = await createClientServer();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log("===>> error", error);
  }

  if (data?.user) {
    const user = {
      name: data.user.user_metadata.name!,
      email: data.user.email!,
      avatar: data.user.user_metadata.avatar_url!,
    };

    console.log("===>> user", user);
  }

  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
