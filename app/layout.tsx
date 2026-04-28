import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/src/components/layout/Footer";
import { FloatingSocialBar } from "@/src/components/layout/FloatingSocialBar";

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

const siteTitle = "Sino Africa";
const siteDescription =
  "Sino Africa connects technology, infrastructure, and partners across markets.";

function resolveMetadataBase(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    try {
      return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
    } catch {
      /* fall through */
    }
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [{ url: "/brand/logo.svg", type: "image/svg+xml" }],
    shortcut: "/brand/logo.svg",
    apple: "/brand/logo.svg",
  },
  openGraph: {
    type: "website",
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-zinc-50 dark:bg-black"
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative flex min-h-full flex-col">
            {children}
            <FloatingSocialBar />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
