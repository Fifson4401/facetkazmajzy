import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/core/components/Header/Header';
import ProgressBar from '@/core/components/ProgressBar/ProgressBar';

const golos = Golos_Text({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="light">
      <body className={`${golos.className} bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
