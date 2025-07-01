import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import ErrorBoundary from '@/core/components/ErrorBoundries/ErrorBoundries';

const golos = Golos_Text({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Facetka z Majzy',
  description: 'Korepetycje z matematyki',
  icons: {
    icon: '/logo.webp',
  },
  metadataBase: new URL('https://facetkazmajzy.pl'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="light">
      <body className={golos.className}>
        <div className="relative isolate min-h-screen">
          <div className="absolute inset-0 -z-10 bg-graph-paper"></div>
           <ErrorBoundary>
            <Providers>{children}</Providers>
          </ErrorBoundary>
        </div>
      </body>
    </html>
  );
}