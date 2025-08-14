import { Doodle } from '@/components/ui/Doodle/doodle.types';

export const titleDoodles: Doodle[] = [
  {
    src: '/assets/doodles/sun-1.svg',
    width: { base: '1.44rem', sm: '3rem', lg: '3rem' },
    aspectRatio: 1, 
    top: { base: '1rem', md: '-1.2rem', lg: '-2rem' },
    right: { base: '-0.8em', md: '-2em', lg: '-2.5rem' },
  },
];

export const bottomButtonDoodles: Doodle[] = [
  {
    src: '/assets/doodles/youtube-tv-1.svg',
    height: { base: '4rem', md: '6rem' }, 
    aspectRatio: 1, 
    bottom: { base: '-0.5rem', md: '-1.5em', lg: '-2em' },
    right: { base: '-12rem', md: '-1.5em', lg: '-2em'},
  },
  {
    src: '/assets/doodles/arrow-right-1.svg',
    width: { base: '4rem', md: '6rem', lg: '2rem' }, 
    aspectRatio: 2, 
    top: { base: '0rem', md: '-1.5em' },
    right: { base: '-6rem', md: '-1.5em', lg: '-2em' },
  }
];
export const imageDoodles: Doodle[] = [
  {
    src: '/assets/doodles/triple-dimond-1.svg',
    height: { base: '1.4rem', md: '2rem' }, 
    aspectRatio: 1.22, 
    bottom: { base: '-1em', md: '-1.5em', lg: '-2em' },
    left: { base: '-1em', md: '-1.5em', lg: '-2em'},
  },
  {
    src: '/assets/doodles/highlight-corner-2.svg',
    width: { base: '1.63rem', md: '1.8rem', lg: '2rem' }, 
    aspectRatio: 1.0, 
    top: { base: '-1em', md: '-1.5em' },
    right: { base: '-1em', md: '-1.5em', lg: '-2em' },
  },
  {
    src: '/assets/doodles/tic-tac-toe-1.svg',
    height: { base: '2.6rem', md: '3.13rem', lg: '3.5rem', xl: '4rem', '2xl': '4.5rem' }, 
    aspectRatio: 1.08, 
    bottom: { base: '-0.2em', md: '-0.5em', lg: '-1em', xl: '-1.5em' },
    left: { base: '-5em', md: '-7em', lg: '-8em', xl: '-10em' },
  },
];
