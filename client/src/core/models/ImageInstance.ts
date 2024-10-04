//eslint-disable @typescript-eslint/no-explicit-any

import nextConfig from '../../../next.config.mjs';
export interface ImageInstanceProps {
  url: string;
  alternativeText: string;
  caption?: string;
  width: number;
  height: number;
}

export class ImageInstance {
  title: string;
  alternativeText: string;
  width: number;
  height: number;
  external: boolean;
  private _url: string;

  constructor(image: ImageInstanceProps, external = false) {
    this.title = image?.caption || '';
    this.alternativeText = image?.alternativeText;
    this._url = image?.url;
    this.width = image?.width;
    this.height = image?.height;
    this.external = external;
  }

  private get _apiHost(): string {
    return (
      process.env.NEXT_PUBLIC_API_HOST || 'https://api.revolve.healthcare/'
    );
  }

  get url(): string {
    return (!this.external ? this._apiHost : '') + this._url;
  }

  get sizes(): string {
    return (nextConfig.images?.deviceSizes || [])
      .map((size: any) => `(max-width: ${size}px) ${size}w`)
      .join(', ');
  }
}
