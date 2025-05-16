
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Changed from Inter to Poppins
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { CustomCursor } from '@/components/effects/CustomCursor';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Added common weights
  variable: '--font-poppins', // CSS variable for Poppins
});

export const metadata: Metadata = {
  title: 'DevFlow | Creative Portfolio',
  description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
