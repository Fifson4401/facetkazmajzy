import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import ErrorBoundary from '@/core/components/ErrorBoundries/ErrorBoundries';
import { DotGridBackground } from '@/core/components/Background/DotGridBackground';

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
        <div className="relative min-h-screen w-full bg-hero-background text-hero-foreground">
          <DotGridBackground />

          {/* ZMIANA: Dodano `min-h-screen`, aby kartka zawsze miała co najmniej wysokość ekranu.
              Dodano również `flex flex-col`, aby zapewnić prawidłowe rozciąganie. */}
          <main className="relative z-10 mx-auto flex min-h-screen max-w-paper flex-col bg-graph-paper px-6 py-16 shadow-xl sm:px-12 md:py-24">
            <ErrorBoundary>
              <Providers>{children}</Providers>
            </ErrorBoundary>
          </main>
        </div>
      </body>
    </html>
  );
}
