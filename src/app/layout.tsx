
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
  description: 'Explore my work as a full-stack developer — featuring projects, skills, and real-world experiences in building smart and modern web applications.',
  icons: {
    icon: '/favicon.ico',          // Place your favicon at /public/favicon.ico
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png' // Optional: for Apple devices, place in /public
  },
  openGraph: {
    title: 'DevFlow | Creative Portfolio',
    description: 'Explore projects and experiences by Arijeet — full-stack development, smart systems, and intuitive design.',
    images: [
      {
        url: '/og-image.png',       // Place a shareable image in /public
        width: 1200,
        height: 630,
        alt: 'DevFlow Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevFlow | Creative Portfolio',
    description: 'Explore projects and experiences by Arijeet — full-stack development, smart systems, and intuitive design.',
    images: ['/og-image.png'],     // Reuse the same image or use a Twitter-specific one
  },
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
