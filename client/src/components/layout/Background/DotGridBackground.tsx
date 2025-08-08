'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { PAPER_MAX_WIDTH } from '@/core/config/constants';

const paperMaxWidth = PAPER_MAX_WIDTH;

const DOT_SIZE = 4; // Rozmiar kropki w pikselach

export const DotGridBackground = () => {
  const numDots = 5000;

  return (
    <div
      className="absolute inset-0 -z-20 hidden h-full w-full overflow-hidden md:block"
      style={{
        maskImage: `linear-gradient(
          to right,
          black 0,
          black calc(50% - (${paperMaxWidth} / 2)),
          transparent calc(50% - (${paperMaxWidth} / 2)),
          transparent calc(50% + (${paperMaxWidth} / 2)),
          black calc(50% + (${paperMaxWidth} / 2)),
          black 100%
        )`,
      }}
    >
      <div
        style={{ gridTemplateColumns: `repeat(auto-fill, minmax(2rem, 1fr))` }}
        className="grid h-full"
      >
        {Array.from({ length: numDots }).map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="flex h-8 w-8 items-center justify-center"
          >
            <div
              className="rounded-full bg-blue-950"
              style={{
                width: `${DOT_SIZE}px`,
                height: `${DOT_SIZE}px`,
              }}
            ></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
