import { Special_Elite, Courier_Prime } from 'next/font/google';

// Definiujemy czcionkę dla nagłówków i przycisków
export const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'], // Special Elite ma tylko wagę 400 (Regular)
  variable: '--font-special-elite', // Definiujemy zmienną CSS
  display: 'swap',
});

// Definiujemy czcionkę dla paragrafów i reszty tekstu
export const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'], // Wczytujemy wagę Regular i Bold
  variable: '--font-courier-prime', // Definiujemy zmienną CSS
  display: 'swap',
});
