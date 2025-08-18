import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import ErrorBoundary from '@/features/error/ErrorBoundary';
import { DotGridBackground } from '@/components/layout/Background/DotGridBackground';
import { specialElite, courierPrime } from '@/core/theme/fonts';

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
      <body
        className={`${specialElite.variable} ${courierPrime.variable} font-body`}
      >
        <div className="relative min-h-screen w-full bg-hero-background text-hero-foreground">
          <DotGridBackground />
          <main className="relative z-10 mx-auto flex min-h-screen max-w-paper flex-col bg-graph-paper shadow-xl">
            <ErrorBoundary>
              <Providers>{children}</Providers>
            </ErrorBoundary>
          </main>
        </div>
      </body>
    </html>
  );
}