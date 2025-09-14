import type { Metadata } from "next";
import { Rubik, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/organisms/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import GlobalProvider from "@/components/organisms/GlobalProvider";
import Navbar from "@/components/atoms/navbar/Navbar";
import { getMetadata } from "@/lib/metadata";

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

export const metadata: Metadata = getMetadata({
  title: "Muhammad Ahib Ibrilli | Software Engineer",
  description:
    "Muhammad Ahib Ibrilli is a Software Engineer based in Semarang, Indonesia. Expert in building modern, scalable, and high-performance websites that help businesses and individuals grow online.",
  url: "https://brilliahib.tech",
  image: "https://brilliahib.tech/images/brilly.jpg",
  keywords: [
    "Muhammad Ahib Ibrilli",
    "brilliahib",
    "brilly",
    "software engineer",
    "web developer",
    "website developer",
    "website development",
    "frontend developer",
    "fullstack developer",
    "software engineer Semarang",
    "web developer Semarang",
    "software engineer Indonesia",
    "freelance web developer Semarang",
    "professional website development",
    "modern web development Indonesia",
  ],
  siteName: "Muhammad Ahib Ibrilli | Software Engineer",
  type: "website",
});

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
