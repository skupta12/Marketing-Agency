import { inter } from "./fonts";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">
            {children}
            <CTA />  
          </div>
        
        </main>
        <Footer />
      </body>
    </html>
  );
}
