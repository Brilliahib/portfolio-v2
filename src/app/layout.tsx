import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/organisms/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import GlobalProvider from "@/components/organisms/GlobalProvider";
import Navbar from "@/components/atoms/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ahib Ibrilli | Software Engineer",
  description:
    "Software Engineer. A Computer Engineering Student who like learning new things even though my hobby is just playing Tiktok.",
  icons: [
    { rel: "icon", url: "/images/favicon.ico", sizes: "16x16" },
    { rel: "icon", url: "/images/favicon-32x32.png", sizes: "32x32" },
    {
      rel: "apple-touch-icon",
      url: "/images/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      url: "/images/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      url: "/images/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} antialiased`}
      >
        <main className="font">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <GlobalProvider>
              <TooltipProvider>
                <NextTopLoader />
                <main className="flex w-full justify-center px-5 pb-12 pt-24 sm:px-0">
                  <div className="w-full max-w-sm">
                    {children}
                    <Navbar />
                    <Footer />
                  </div>
                </main>
              </TooltipProvider>
            </GlobalProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
