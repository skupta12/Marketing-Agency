import { inter } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <main className="relative flex flex-col">
          <div className="flex-grow flex-1">
            {children}  
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
