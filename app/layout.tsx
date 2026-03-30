import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/src/components/layout/Footer";

import "./globals.css";
import { Providers } from "./providers";

const outfit = localFont({
  src: "../public/fonts/outfit/OutfitVariableFont_wght1.ttf",
  variable: "--font-outfit",
  display: "swap",
});

const nataSans = localFont({
  src: "../public/fonts/Nata_Sans/NataSans-VariableFont_wght.ttf",
  variable: "--font-nata-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sino Africa",
  description:
    "Sino Africa connects technology, infrastructure, and partners across markets.",
  icons: {
    icon: [{ url: "/brand/logo.svg", type: "image/svg+xml" }],
    shortcut: "/brand/logo.svg",
    apple: "/brand/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${nataSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="relative flex min-h-full flex-col">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
