import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/theme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(link|button|input|image|chip|card|pagination|spacer|navbar|accordion|divider).js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
      },
      keyframes: {
        progressColors: {
          '0%': { backgroundColor: 'rgba(255, 192, 203)' }, // Light Pink
          '16.66%': { backgroundColor: 'rgba(255, 174, 185)' }, // Lighter Hot Pink
          '33.33%': { backgroundColor: 'rgba(255, 105, 180)' }, // Hot Pink
          '50%': { backgroundColor: 'rgba(255, 85, 170)' }, // Deeper Pink
          '66.66%': { backgroundColor: 'rgba(219, 112, 147)' }, // Pale Violet Red
          '83.33%': { backgroundColor: 'rgba(221, 160, 221)' }, // Plum
          '91.66%': { backgroundColor: 'rgba(128, 0, 128)' }, // Purple
          '100%': { backgroundColor: 'rgba(255, 192, 203)' }, // Smooth transition back to Light Pink
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
        'progress-bar': 'progressColors 10s linear infinite',
        fadeInUp: 'fadeInUp 0.5s forwards',
        fadeOutDown: 'fadeOutDown 0.5s forwards',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: '#f7ede2',
            foreground: '#222222',
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
