import { Doodle } from '@/components/ui/Doodle/doodle.types';

export const homeDoodles: Doodle[] = [
  {
    src: '/assets/doodles/group-of-dots-1.svg',
    width: { base: '3rem', sm: '4rem', md: '5rem', lg: '7rem', '2xl': '9rem' }, // 38px
    height: { base: '3rem', sm: '4rem', md: '5rem', lg: '7rem', '2xl': '9rem' }, // 40px
    aspectRatio: 1.0,
    top: { base: '11%', sm: '12%', md: '13%' },
    right: {
      base: `0rem`,
      sm: `1rem`,
      md: `1rem`,
      lg: `1rem`,
    },
  },
  {
    src: '/assets/doodles/cat-1.svg',
    width: { base: '2.2rem', sm: '3rem', md: '3.8rem', '2xl': '5.8rem' }, // 31px
    height: { base: '3.6rem', sm: '4.4rem', md: '5.2rem', '2xl': '7.2rem' }, // 39px
    aspectRatio: 0.61,
    top: { base: '22%', sm: '24%', md: '30%', lg: '35%' },
    right: {
      base: `${0.3}rem`,
      sm: `1rem`,
      md: `1.3rem`,
      lg: `2rem`,
    },
  },
  {
    src: '/assets/doodles/cat-2.svg',
    width: { base: '1.3rem', sm: '2.2rem', md: '3.5rem', '2xl': '4.5rem' }, // 31px
    height: { base: '1.6rem', sm: '2.7rem', md: '3.8rem', '2xl': '4.8rem' }, // 39px
    aspectRatio: 0.81,
    top: { base: '35%', sm: '39%', md: '53%' },
    right: {
      base: `1.7rem`,
      sm: `3rem`,
      md: `3.3rem`,
      lg: `4.7rem`,
      '2xl': `6rem`,
    },
  },
  {
    src: '/assets/doodles/cat-3.svg',
    width: { base: '1.3rem', sm: '2.2rem', md: '3.5rem', '2xl': '4.5rem' }, // 31px
    height: { base: '2rem', sm: '2.7rem', md: '3.8rem', '2xl': '4.8rem' }, // 39px
    aspectRatio: 0.65,
    top: { base: '30%', sm: '34%', md: '48%' },
    right: {
      base: `0rem`,
      sm: `-.3rem`,
      md: `-0.6rem`,
    },
  },
  {
    src: '/assets/doodles/cat-4.svg',
    width: { base: '2.2rem', sm: '3rem', md: '3.8rem', '2xl': '5.8rem' }, // 31px
    height: { base: '3.6rem', sm: '4.4rem', md: '5.2rem', '2xl': '7.2rem' }, // 39px
    aspectRatio: 0.61,
    top: { base: '42%', sm: '46%', md: '63%', lg: '70%' },
    right: {
      base: `${0.4}rem`,
      sm: `0.8rem`,
      md: `1rem`,
      lg: `1rem`,
      '2xl': `3rem`,
    },
  },
];
