import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import ClientProvider from "@/utils/ClientProvider";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SpaFinder - Find Massage & Spa Services Near You",
  description:
    "Discover and book the best massage and spa services in your area.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden`}
      >
      <SessionProvider>

        <ClientProvider>

          <Menu />
          {children}
          <Footer />
        </ClientProvider>
      </SessionProvider>
      </body>
    </html>
  );
}
