import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WFLAer.space - Enhancing WFLA International Education',
  description: 'WFLAer.space is a non-profit organization focused on enhancing educational experiences at WFLA International through innovative technology solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="py-8 border-t">
            <div className="container mx-auto px-4">
              <div className="text-center text-muted-foreground">
                <p>© 2024 WFLAer.space. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}