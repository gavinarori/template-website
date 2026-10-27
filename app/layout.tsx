import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Cursor } from "@/components/motion/Cursor";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css"; 
 
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});
 
export const metadata: Metadata = {
  title: "SITECRAFT | Sculptural lighting",
  description: "Everyday lighting turned into softly illuminated, sculptural objects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className={`${jakarta.variable} overflow-x-clip bg-paper font-sitecraft text-ink antialiased`}>
        <MotionProvider>
        <SmoothScroll />
        <Cursor />
        {children}
      </MotionProvider>
      </body>
    </html>
  );
}