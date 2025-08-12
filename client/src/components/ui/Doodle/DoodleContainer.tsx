import React from 'react';
import { Doodle } from './doodle.types';
import { DoodleImage } from './DoodleImage';

const DoodleContainer: React.FC<{
  children: React.ReactNode;
  doodles?: Doodle[];
}> = ({ children, doodles = [] }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      {doodles.map((doodle, index) => (
        <DoodleImage key={index} doodle={doodle} />
      ))}
    </div>
  );
};

export default DoodleContainer;