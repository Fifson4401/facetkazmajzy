import { Doodle } from '@/components/ui/Doodle/doodle.types';

export const bottomButtonDoodles: Doodle[] = [
  {
    src: '/assets/doodles/arrow-left-up-1.svg',
    width: { base: '2rem', sm: '3.5rem', md: '4rem', lg: '5rem' },
    top: { base: '0rem', sm:'-1rem', md:'-1rem', lg: '-1rem' },
    right: { base: '9rem', sm: '10rem', md:'13rem', lg: '16rem', xl:'18rem' },
    rotate: { base: 100, md: '100' },
  },
  {
    src: '/assets/doodles/arrow-up-1.svg',
    width: { base: '0rem', md: '4.5rem', lg: '6rem' },
    aspectRatio: 2,
    top: { base: '3rem', md:'4.5rem', lg: '5rem' },
    right: { base: '4rem', sm: '3rem', md:'5rem', lg: '5rem' },
  },
  {
    src: '/assets/doodles/arrow-right-up-1.svg',
    width: { base: '2rem', sm: '4rem', md: '4rem', lg: '5rem' },
    aspectRatio: 2,
    top: { base: '-.5rem', sm:'-2rem', md: '-1rem', lg: '-2rem' },
    right: { base: '-3rem', sm: '-7rem', md:'-6rem', lg: '-9rem' },
    rotate: { base: -120, md: -120 },
  },
  {
    src: '/assets/doodles/crown-brain-stars-1.svg',
    width: {
      base: '6rem',
      sm: '8rem',
      md: '10rem',
      lg: '12rem',
      xl: '12rem',
    },
    aspectRatio: 1,
    bottom: {
      base: '-7rem',
      sm: '-10rem',
      md: '5rem',
      lg: '5rem',
      xl: '5rem',
    },
    right: { base: '1rem', sm:'0rem'},
  },
];

export const imageDoodles: Doodle[] = [
  {
    src: '/assets/doodles/triple-dimond-1.svg',
    height: { base: '2rem', sm: '3rem', lg: '4.5rem', xl: '5rem' },
    aspectRatio: 1.2,
    bottom: { base: '-1rem', sm: '-1.5rem', lg: '-2rem', xl: '-3rem' },
    left: { base: '-1rem', sm: '-1.5rem', lg: '-2rem', xl: '-3rem' },
  },
  {
    src: '/assets/doodles/triple-dimond-1.svg',
    width: { base: '2rem', sm: '3rem', lg: '4rem', xl: '5rem' },
    aspectRatio: 1.2,
    top: { base: '-2rem', md: '-1.5rem', xl: '-4rem' },
    right: { base: '-1rem', md: '-1.5rem', lg: '-2rem', xl: '-3rem' },
  },
];
