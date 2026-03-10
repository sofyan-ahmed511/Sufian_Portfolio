import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles
import ProgressBar from '@/components/ProgressBar';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Sufian Ahmed | Front-End Developer',
  description: 'Portfolio of Sufian Ahmed, Front-End Developer with 3 years of experience in React, Next.js, and Tailwind CSS.',
  keywords: ['Front-End Developer', 'React Developer', 'Next.js', 'Tailwind CSS', 'Web Development', 'Portfolio', 'Sufian Ahmed'],
  authors: [{ name: 'Sufian Ahmed' }],
  creator: 'Sufian Ahmed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sufianahmed.com',
    title: 'Sufian Ahmed | Front-End Developer',
    description: 'Portfolio of Sufian Ahmed, Front-End Developer with 3 years of experience in React, Next.js, and Tailwind CSS.',
    siteName: 'Sufian Ahmed Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sufian Ahmed | Front-End Developer',
    description: 'Portfolio of Sufian Ahmed, Front-End Developer with 3 years of experience in React, Next.js, and Tailwind CSS.',
    creator: '@sufianahmed',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#050505] text-white font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <ProgressBar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
