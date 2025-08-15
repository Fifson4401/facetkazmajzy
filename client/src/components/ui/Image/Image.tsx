import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface NextImageProps {
  src: StaticImageData | string; 
  alt: string;
  width?: number;
  height?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  withBorder?: boolean;
  withShadow?: boolean;
  borderColor?: string;
}

const NextImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  objectFit = 'cover', 
  withBorder = false, 
  withShadow = false,
  borderColor = 'border-[#ffffff]'
}: NextImageProps) => {
  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain', 
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down'
  };

   const doubleShadowStyles = withShadow ? {
    boxShadow: `
      0 4px 6px -1px rgba(0, 0, 0, 0.4), 
      0 2px 4px -1px rgba(0, 0, 0, 0.3),
      0 10px 25px -3px rgba(0, 0, 0, 0.1),
      0 20px 60px -5px rgba(0, 0, 0, 0.04)
    `
  } : {};

  return (
    <div 
      className={`
        overflow-hidden w-full h-full
        ${withBorder ? `
          border-4 border-b-[20px]
          sm:border-8 sm:border-b-[30px]
          md:border-[10px] md:border-b-[40px]  
          xl:border-[14px] xl:border-b-[50px]
          ${borderColor}
        ` : ''}
      `}
      style={doubleShadowStyles}
    >
      <Image
        src={src}
        alt={alt}
        width={width || 1536}
        height={height || 2048} 
        className={`w-full h-auto max-w-full max-h-full ${objectFitClasses[objectFit]}`}
      />
    </div>
  );
};

export default NextImage;