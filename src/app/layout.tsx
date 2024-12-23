import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WFLAer.space - Enhancing Educational Experience",
  description: "WFLAer.space is a non-profit organization focused on enhancing educational experience at WFLA International through innovative technology solutions.",
  keywords: ["education", "WFLA International", "technology", "learning", "innovation"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
