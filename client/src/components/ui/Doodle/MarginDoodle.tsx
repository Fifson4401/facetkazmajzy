import { FC } from 'react';
import { Doodle } from './doodle.types';
import { DoodleImage } from './DoodleImage';

export const MarginDoodles: FC<{ doodles: Doodle[] }> = ({ doodles }) => {
  return (
    <div className="absolute top-0 right-0 h-full w-0">
      {doodles.map((doodle, index) => (
        <DoodleImage key={index} doodle={doodle} />
      ))}
    </div>
  );
};