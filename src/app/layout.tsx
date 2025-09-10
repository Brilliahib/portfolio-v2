import type { Metadata } from "next";
import { Rubik, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/organisms/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import GlobalProvider from "@/components/organisms/GlobalProvider";
import Navbar from "@/components/atoms/navbar/Navbar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
      <body className={`${rubik.variable} ${jakartaSans.variable} antialiased`}>
        <main className="font-rubik">
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
                  <div className="w-full max-w-md">
                    {children}
                    <Navbar />
                  </div>
                </main>
                <Footer />
              </TooltipProvider>
            </GlobalProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
