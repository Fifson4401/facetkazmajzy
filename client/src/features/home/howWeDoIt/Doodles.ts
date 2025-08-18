import { Doodle } from '@/components/ui/Doodle/doodle.types';

export const titleDoodles: Doodle[] = [
  {
    src: '/assets/doodles/exclamation-mark-2.svg',
    width: { base: '1rem', sm: '2rem', lg: '3rem' },
    aspectRatio: 1,
    top: { base: '-4rem', sm: '-6rem', lg: '-9rem' },
    right: { base: '75%' },
  },
  {
    src: '/assets/doodles/exclamation-mark-3.svg',
    width: { base: '1.44rem', sm: '2.5rem', lg: '3.5rem' },
    aspectRatio: 1,
    top: { base: '-4rem', sm: '-6rem', lg: '-9rem' },
    right: { base: '50%', sm: '40%' },
  },
  {
    src: '/assets/doodles/exclamation-mark-1.svg',
    width: { base: '1.7rem', sm: '3rem', lg: '4rem', xl: '5rem' },
    aspectRatio: 1,
    top: { base: '-3.5rem', sm: '-6rem', lg: '-8rem' },
    right: { base: '20%', sm: '0%' },
  },
  {
    src: '/assets/doodles/car-1.svg',
    width: { base: '6rem', sm: '10rem', lg: '15rem' },
    aspectRatio: 2,
    top: { base: '100%', sm:'120%' },
    right: { base: '32%', md: '24%', xl: '10rem' },
  },
];

export const bottomButtonDoodles: Doodle[] = [
  {
    src: '/assets/doodles/youtube-tv-1.svg',
    height: { base: '4rem', md: '6rem', lg: '7rem', xl: '8rem', '2xl': '9rem' },
    aspectRatio: 1,
    bottom: { base: '-0.5rem', lg: '-1.5rem', xl: '-2rem' },
    right: { base: '-10rem', md: '-15em', lg: '-20em', xl: '-23em' },
  },
  {
    src: '/assets/doodles/arrow-right-1.svg',
    width: { base: '4rem', md: '6rem', lg: '7rem' },
    aspectRatio: 2,
    top: { base: '0rem', lg: '.5rem' },
    right: { base: '-5rem', md: '-8rem', lg: '-10rem' },
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
