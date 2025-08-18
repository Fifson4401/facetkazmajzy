import { Doodle } from '@/components/ui/Doodle/doodle.types';

export const doodles: Doodle[] = [
  {
    src: '/assets/doodles/404/1.svg',
    width: '200px',
    height: '200px',
    bottom: {
      base: '70%',
      md: '50%',
    },
    left: {
      base: '10%',
      md: '30%',
    },
    rotate: -15,
  },
  {
    src: '/assets/doodles/404/2.svg',
    width: '200px',
    height: '200px',
    top: {
      base: '10%',
      md: '20%',
    },
    right: {
      base: '10%',
      md: '20%',
    },
    rotate: 15,
  },
];
