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
