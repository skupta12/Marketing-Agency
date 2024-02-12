import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <Footer />
          {/* </Providers> */}
        </main>
      </body>
    </html>
  );
}
