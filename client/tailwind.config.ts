import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { heroui } from '@heroui/react';
import { type PluginAPI } from 'tailwindcss/types/config';
import { PAPER_MAX_WIDTH } from './src/core/config/constants';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        paper: PAPER_MAX_WIDTH,
      },
      fontFamily: {
        heading: ['var(--font-special-elite)', 'sans-serif'],
        body: ['var(--font-courier-prime)', 'monospace'],
      },
      // ROZWIĄZANIE: Definiujemy każdą wartość marginesu osobno.
      // To jest "bezpieczniejsza" składnia, która unika problemu z Twoim narzędziem budującym.
      spacing: {
        'paper-margin': '3rem', // Domyślna wartość
        'paper-margin-sm': '5rem',
        'paper-margin-md': '6.5rem',
        'paper-margin-lg': '8rem',
        'paper-margin-2xl': '10rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      prefix: 'hero',
      addCommonColors: false,
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            background: '#f8fafc',
            foreground: '#000000',
            paper: '#ffffff',
            grid: '#e2e8f0',
            accent: '#ef4444',
          } as Record<string, string>,
        },
        dark: {
          colors: {
            background: '#0f172a',
            foreground: '#e2e8f0',
            paper: '#222222',
            grid: '#475569',
            accent: '#ef4444',
          } as Record<string, string>,
        },
      },
    }),
    // ZMIANA: Plugin jest teraz dostosowany do nowej struktury spacing.
    plugin(function ({ addUtilities, theme }: PluginAPI) {
      const paperStyles = {
        '.bg-graph-paper': {
          background: `
            linear-gradient(${theme('colors.accent')}, ${theme('colors.accent')}) no-repeat calc(100% - ${theme('spacing.paper-margin')}) center / 2px 100%,
            linear-gradient(to right, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 0.75rem 0.75rem,
            linear-gradient(to bottom, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 0.75rem 0.75rem,
            ${theme('colors.paper')}
          `,
        },
        '@screen sm': {
          '.bg-graph-paper': {
            background: `
              linear-gradient(${theme('colors.accent')}, ${theme('colors.accent')}) no-repeat calc(100% - ${theme('spacing.paper-margin-sm')}) center / 2px 100%,
              linear-gradient(to right, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 0.85rem 0.85rem,
              linear-gradient(to bottom, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 0.85rem 0.85rem,
              ${theme('colors.paper')}
            `,
          },
        },
        '@screen md': {
          '.bg-graph-paper': {
            background: `
              linear-gradient(${theme('colors.accent')}, ${theme('colors.accent')}) no-repeat calc(100% - ${theme('spacing.paper-margin-md')}) center / 2px 100%,
              linear-gradient(to right, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 1rem 1rem,
              linear-gradient(to bottom, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 1rem 1rem,
              ${theme('colors.paper')}
            `,
          },
        },
        '@screen lg': {
            '.bg-graph-paper': {
              background: `
                linear-gradient(${theme('colors.accent')}, ${theme('colors.accent')}) no-repeat calc(100% - ${theme('spacing.paper-margin-lg')}) center / 2px 100%,
                linear-gradient(to right, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 1.2rem 1.2rem,
                linear-gradient(to bottom, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 1.2rem 1.2rem,
                ${theme('colors.paper')}
              `,
            },
        },
        '@screen 2xl': {
            '.bg-graph-paper': {
              background: `
                linear-gradient(${theme('colors.accent')}, ${theme('colors.accent')}) no-repeat calc(100% - ${theme('spacing.paper-margin-2xl')}) center / 2px 100%,
                linear-gradient(to right, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 1.5rem 1.5rem,
                linear-gradient(to bottom, ${theme('colors.grid')} 1px, transparent 1px) repeat center / 1.5rem 1.5rem,
                ${theme('colors.paper')}
              `,
            },
        },
      };
      addUtilities(paperStyles);
    }),
  ],
};

export default config;
