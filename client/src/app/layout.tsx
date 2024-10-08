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
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="light">
      <body className={`${golos.className} bg-background text-foreground`}>
        <ErrorBoundary>
          <Providers>{children}</Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
