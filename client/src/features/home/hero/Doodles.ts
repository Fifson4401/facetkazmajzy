import { Doodle } from "@/components/ui/Doodle/doodle.types";

export const topButtonDoodles: Doodle[] = [
  {
    src: '/assets/doodles/highlight-1.svg',
    width: { base: '1.44rem', md: '2.5rem', lg: '3rem' }, // 23px
    height: { base: '1.06rem', md: '1.5rem', lg:'2rem' }, // 17px
    top: { base: '-1em', md: '-1.2em', lg: '-2rem' },
    right: { base: '-0.8em', md: '-1em', lg: '-1.5rem' },
  },
  {
    src: '/assets/doodles/highlight-2.svg',
    width: { base: '0.69rem', md: '0.8rem' }, // 11px
    height: { base: '1.44rem', md: '1.6rem' }, // 23px
    top: { base: '-1.5em' },
    left: { base: '-1em', md: '-1.2em' },
  },
  {
    src: '/assets/doodles/group-of-hearts-1.svg',
    width: { base: '3rem', md: '3.94rem' }, // 63px
    height: { base: '3rem', md: '3.94rem' },
    top: { base: '-1em', md: '-1.5em' },
    right: { base: '-4.5em', md: '-7em' },
  },
];

export const bottomButtonDoodles: Doodle[] = [
  {
    src: '/assets/doodles/highlight-corner-1.svg',
    width: '1.75rem', // 28px
    height: '1.44rem', // 23px
    bottom: { base: '-1em' },
    left: { base: '-1em' },
  },
  {
    src: '/assets/doodles/highlight-corner-2.svg',
    width: '1.63rem', // 26px
    height: '1.63rem',
    top: { base: '-1em' },
    right: { base: '-1em' },
  },
  {
    src: '/assets/doodles/tic-tac-toe-1.svg',
    width: { base: '2.8rem', md: '3.38rem' }, // 54px
    height: { base: '2.6rem', md: '3.13rem' }, // 50px
    bottom: { base: '-0.2em', md: '-0.5em' },
    left: { base: '-5em', md: '-7em' },
  },
];