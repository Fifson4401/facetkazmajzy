import { ImageProps } from './defaults';

export type SEO = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string | null;
  metaRobots: string | null;
  structuredData: structuredDataAttributes;
  metaViewport: string | null;
  canonicalURL: string | null;
  metaImage: ImageProps;
};

export type structuredDataAttributes =
  | BasicStructuredDataAttributes[]
  | BasicStructuredDataAttributes
  | null;

export type BasicStructuredDataAttributes = {
  name?: string;
  '@type': string;
};
