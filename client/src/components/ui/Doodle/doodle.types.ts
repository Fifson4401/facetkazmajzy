export type ResponsiveValue = {
  base: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  '2xl'?: string | number;
};

export type Doodle = {
  src: string;
  width?: string | ResponsiveValue;
  height?: string | ResponsiveValue;
  top?: string | ResponsiveValue;
  bottom?: string | ResponsiveValue;
  left?: string | ResponsiveValue;
  right?: string | ResponsiveValue;
  rotate?: number | ResponsiveValue;
  scale?: number | ResponsiveValue;
  aspectRatio?: number;
};