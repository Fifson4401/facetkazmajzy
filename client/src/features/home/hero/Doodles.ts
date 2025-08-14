import { Doodle } from '@/components/ui/Doodle/doodle.types';

export const topButtonDoodles: Doodle[] = [
  {
    src: '/assets/doodles/highlight-1.svg',
    width: { base: '1.44rem', md: '2.5rem', lg: '3rem' },
    aspectRatio: 1.36, 
    top: { base: '-1em', md: '-2.2em', lg: '-2rem' },
    right: { base: '-0.8em', md: '-2em', lg: '-2.5rem' },
  },
  {
    src: '/assets/doodles/highlight-2.svg',
    width: { base: '0.69rem', md: '1rem', lg: '1.2rem' }, 
    aspectRatio: 0.48, 
    top: { base: '-1.5rem', md: '-2rem' },
    left: { base: '-1em', md: '-1.2em' },
  },
  {
    src: '/assets/doodles/group-of-hearts-1.svg',
    width: { base: '3rem', md: '5rem', lg: '6rem', xl: '7rem' }, 
    aspectRatio: 1.0, 
    top: { base: '-1em', md: '-1.5em' },
    right: { base: '-4.5em', md: '-8em', lg: '-10em', xl: '-12em' },
  },
];

export const bottomButtonDoodles: Doodle[] = [
  {
    src: '/assets/doodles/highlight-corner-1.svg',
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
