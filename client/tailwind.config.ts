import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { heroui } from '@heroui/react';
import { type PluginAPI } from 'tailwindcss/types/config';
// ZMIANA: Importujemy naszą nową stałą
import { PAPER_MAX_WIDTH } from './src/core/config/constants';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        // ZMIANA: Używamy stałej zamiast statycznej wartości
        paper: PAPER_MAX_WIDTH,
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
            foreground: '#1e293b',
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
    plugin(function ({ addUtilities }) {
      const paperStyles = {
        '.bg-graph-paper': {
          background: `
            linear-gradient(#ef4444, #ef4444) no-repeat calc(100% - 3rem) center / 2px 100%,
            linear-gradient(to right, #e2e8f0 1px, transparent 1px) repeat center / 0.75rem 0.75rem,
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px) repeat center / 0.75rem 0.75rem,
            #fdfdfd
          `,
        },
        '@screen sm': {
          '.bg-graph-paper': {
            background: `
              linear-gradient(#ef4444, #ef4444) no-repeat calc(100% - 5rem) center / 2px 100%,
              linear-gradient(to right, #e2e8f0 1px, transparent 1px) repeat center / 0.85rem 0.85rem,
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px) repeat center / 0.85rem 0.85rem,
              #fdfdfd
            `,
          },
        },
        '@screen md': {
          '.bg-graph-paper': {
            background: `
              linear-gradient(#ef4444, #ef4444) no-repeat calc(100% - 6.5rem) center / 2px 100%,
              linear-gradient(to right, #e2e8f0 1px, transparent 1px) repeat center / 1rem 1rem,
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px) repeat center / 1rem 1rem,
              #fdfdfd
            `,
          },
        },
        '@screen lg': {
          '.bg-graph-paper': {
            background: `
              linear-gradient(#ef4444, #ef4444) no-repeat calc(100% - 8rem) center / 2px 100%,
              linear-gradient(to right, #e2e8f0 1px, transparent 1px) repeat center / 1.2rem 1.2rem,
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px) repeat center / 1.2rem 1.2rem,
              #fdfdfd
            `,
          },
        },
        '@screen 2xl': {
          '.bg-graph-paper': {
            background: `
              linear-gradient(#ef4444, #ef4444) no-repeat calc(100% - 10rem) center / 2px 100%,
              linear-gradient(to right, #e2e8f0 1px, transparent 1px) repeat center / 1.5rem 1.5rem,
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px) repeat center / 1.5rem 1.5rem,
              #fdfdfd
            `,
          },
        },
      };
      addUtilities(paperStyles);
    }),
  ],
};
export default config;
