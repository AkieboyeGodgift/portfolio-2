// src/app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk, Geist } from "next/font/google";
import Loader from "@/components/ui/Loader"; // Import loader here
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Akieboye Godgift | Software Engineer",
  description: "Building AI Products, SaaS Platforms & Scalable Web Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geistSans.variable} dark`}>
      <body className="bg-zinc-950 text-zinc-100 antialiased font-body min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
        {/* Render premium entry loader overlay */}
        <Loader />
        
        <div className="relative w-full overflow-hidden flex flex-col flex-grow">
          <div className="glow-bg" />
          <main className="relative z-10 flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}