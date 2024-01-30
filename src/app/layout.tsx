import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter = Inter_Tight({ subsets: ["latin"] });
export const playfair = Playfair_Display({ subsets: ["latin"], style: "italic" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          {/* <Footer /> */}
          {/* </Providers> */}
        </main>
      </body>
    </html>
  );
}
