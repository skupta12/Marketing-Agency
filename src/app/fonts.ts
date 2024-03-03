import { Inter_Tight, Playfair_Display, Oswald } from "next/font/google";

export const inter = Inter_Tight({ 
    subsets: ["latin"],
    // display: 'swap',
});
export const playfair = Playfair_Display({ 
    subsets: ["latin"], 
    style: "italic",
    // display: 'swap',
 });

export const oswald = Oswald({
    subsets: ["latin"],
})