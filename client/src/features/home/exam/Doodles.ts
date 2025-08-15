import { Doodle } from '@/components/ui/Doodle/doodle.types';

export const titleDoodles: Doodle[] = [
  {
    src: '/assets/doodles/sun-1.svg',
    width: { base: '1.44rem', sm: '3rem', lg: '5rem' },
    aspectRatio: 1, 
    bottom: { base: '1rem', sm: '.5rem', lg: '0rem' },
    right: { base: '0rem', md: '-2rem', lg: '10rem' },
  },
];

export const bottomButtonDoodles: Doodle[] = [
  {
    src: '/assets/doodles/youtube-tv-1.svg',
    height: { base: '4rem', md: '6rem', lg: '7rem', xl: '8rem', '2xl': '9rem' }, 
    aspectRatio: 1, 
    bottom: { base: '-0.5rem', lg: '-1.5rem', xl: '-2rem' },
    right: { base: '-12rem', md: '-15em', lg: '-20em', xl: '-23em' },
  },
  {
    src: '/assets/doodles/arrow-right-1.svg',
    width: { base: '4rem', md: '6rem', lg: '7rem' }, 
    aspectRatio: 2, 
    top: { base: '0rem', lg: '.5rem' },
    right: { base: '-6rem', md: '-8rem', lg: '-10rem' },
  }
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
