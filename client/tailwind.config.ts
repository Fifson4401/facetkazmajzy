import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');
const { heroui } = require('@heroui/react');
import { type PluginAPI } from 'tailwindcss/types/config';

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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'progress-gradient':
          'linear-gradient(90deg, rgba(255,192,203,1) 0%, rgba(255,105,180,1) 25%, rgba(219,112,147,1) 50%, rgba(128,0,128,1) 75%, rgba(255,192,203,1) 100%)',
      },
      keyframes: {
        moveGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
      },
      animation: {
        'progress-bar': 'moveGradient 10s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.5s forwards',
        fadeOutDown: 'fadeOutDown 0.5s forwards',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      prefix: 'hero',
      addCommonColors: false,
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            background: '#f7ede2',
            foreground: '#222222',
          },
        },
        dark: {
          layout: {},
          colors: {
            background: '#222222',
            foreground: '#f7ede2',
          },
        },
      },
    }),
    // NOWA WTYCZKA DO TŁA W KRATKĘ
    plugin(function ({ addUtilities, theme }: PluginAPI) {
      addUtilities({
        '.bg-graph-paper': {
          'background-image': `
        linear-gradient(${theme('colors.red.500')}, ${theme('colors.red.500')}),
        linear-gradient(to bottom, ${theme('colors.slate.200')} 1px, transparent 1px),
        linear-gradient(to right, ${theme('colors.slate.200')} 1px, transparent 1px),
        linear-gradient(${theme('colors.white')}, ${theme('colors.white')})
      `,
          'background-size': '2px 100%, 0.75rem 0.75rem, 0.75rem 0.75rem, auto',
          'background-position':
            'calc(100% - 3rem) center, center, calc(100% - 3rem) center, center',
          'background-repeat': 'no-repeat, repeat, repeat, no-repeat',
        },
        '@screen sm': {
          '.bg-graph-paper': {
            'background-size':
              '2px 100%, 0.85rem 0.85rem, 0.85rem 0.85rem, auto',
            'background-position':
              'calc(100% - 5rem) center, center, calc(100% - 5rem) center, center',
          },
        },
        '@screen md': {
          '.bg-graph-paper': {
            'background-size': '2px 100%, 1rem 1rem, 1rem 1rem, auto',
            'background-position':
              'calc(100% - 6.5rem) center, center, calc(100% - 6.5rem) center, center',
          },
        },
        '@screen lg': {
          '.bg-graph-paper': {
            'background-size': '2px 100%, 1.2rem 1.2rem, 1.2rem 1.2rem, auto',
            'background-position':
              'calc(100% - 8rem) center, center, calc(100% - 8rem) center, center',
          },
        },
        '@screen 2xl': {
          '.bg-graph-paper': {
            'background-size': '2px 100%, 1.5rem 1.5rem, 1.5rem 1.5rem, auto',
            'background-position':
              'calc(100% - 10rem) center, center, calc(100% - 10rem) center, center',
          },
        },
      });
    }),
  ],
};
export default config;
