import React from 'react';
import Image from 'next/image';

export type Doodle = {
  src: string;
  width: number | string; 
  height?: number | string; 
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  rotate?: number;
  scale?: number;
  aspectRatio?: string;
};

type DoodleContainerProps = {
  children: React.ReactNode;
  doodles?: Doodle[];
};

const DoodleContainer: React.FC<DoodleContainerProps> = ({
  children,
  doodles = [],
}) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      {doodles.map((doodle, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: doodle.top,
            left: doodle.left,
            right: doodle.right,
            bottom: doodle.bottom,
            width: doodle.width,
            height: doodle.height,
            transform: `rotate(${doodle.rotate || 0}deg) scale(${doodle.scale || 1})`,
            pointerEvents: 'none',
            aspectRatio: doodle.aspectRatio || 'auto',
          }}
        >
          <Image
            src={doodle.src}
            alt="doodle-decoration"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default DoodleContainer;
