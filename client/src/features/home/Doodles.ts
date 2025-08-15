import { Doodle } from '@/components/ui/Doodle/doodle.types';

export const homeDoodles: Doodle[] = [
  {
    src: '/assets/doodles/group-of-dots-1.svg',
    width: { base: '3rem', sm: '4rem', md: '5rem', lg: '7rem' },
    aspectRatio: 1.0,
    top: { base: '4.6rem', sm: '5.0rem', md: '5.4rem' },
    right: {
      base: `0rem`,
      sm: `1rem`,
      md: `1rem`,
      lg: `1rem`,
    },
  },
  {
    src: '/assets/doodles/cat-1.svg',
    width: { base: '2.2rem', sm: '3rem', xl: '3.8rem' },
    aspectRatio: 0.61,
    top: {
      base: '9.2rem',
      sm: '10.0rem',
      md: '12.5rem',
      lg: '14.6rem',
      xl: '16.2rem',
    },
    right: {
      base: `${0.3}rem`,
      sm: `1rem`,
      md: `1.3rem`,
      lg: `2rem`,
    },
  },
  {
    src: '/assets/doodles/cat-2.svg',
    width: { base: '1.3rem', sm: '2.2rem', '2xl': '2.5rem' },
    aspectRatio: 0.81,
    top: { base: '14.6rem', sm: '16.2rem', md: '22rem' },
    right: {
      base: `1.7rem`,
      sm: `3rem`,
      md: `4.5rem`,
      lg: `6rem`,
      '2xl': `7.5rem`,
    },
  },
  {
    src: '/assets/doodles/cat-3.svg',
    width: { base: '1.3rem', sm: '2.2rem', '2xl': '2.5rem' },
    aspectRatio: 0.65,
    top: { base: '12.5rem', sm: '14.1rem', md: '21.0rem' },
    right: {
      base: `0rem`,
     
    },
  },
  {
    src: '/assets/doodles/cat-4.svg',
    width: { base: '2.2rem', sm: '3rem', md: '3.8rem' },
    aspectRatio: 0.61,
    top: { base: '17.5rem', sm: '19.2rem', md: '26.2rem', lg: '29.2rem' },
    right: {
      base: `${0.4}rem`,
      sm: `0.8rem`,
      md: `1rem`,
      lg: `1rem`,
      '2xl': `3rem`,
    },
  },
];
