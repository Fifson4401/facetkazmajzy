import { MetaTag } from "next-seo/lib/types";
import { ImageProps } from "next/image";

export type SEO = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string | null;
  metaRobots: string | null;
  structuredData:
    | BasicStructuredDataAttributes[]
    | BasicStructuredDataAttributes
    | null;
  metaViewport: string | null;
  canonicalURL: string | null;
  metaImage: ImageProps;
  pageType: string | null;
  twitterCardType: string | null;
  noindex: boolean | null;
  customMetaTags?: MetaTag[] | [];
};

export type BasicStructuredDataAttributes = {
  name?: string;
  "@type": string;
};
