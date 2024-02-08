import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const inter = Inter_Tight({ subsets: ["latin"] });
export const playfair = Playfair_Display({ subsets: ["latin"], style: "italic" });

export const metadata: Metadata = {
  title: "Marketing Agency",
  description: "Marketing Agency - React and Next.js Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex flex-col min-h-screen">
          {/* <Providers> */}
          <Header />
          <div className="flex-grow flex-1">
            {children}
          </div>
          <CTA />
          <Footer />
          {/* </Providers> */}
        </main>
      </body>
    </html>
  );
}
