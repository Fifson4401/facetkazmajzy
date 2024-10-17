import { SEO } from '@/api/interfaces/seo';
import { ImageInstance } from '@/core/models/ImageInstance';

export class SeoInstance {
  private _seo: SEO;

  get title(): string {
    return this._seo.metaTitle;
  }

  get description(): string {
    return this._seo.metaDescription;
  }

  get canonical(): string | undefined {
    return this._seo.canonicalURL || undefined;
  }

  get keywords(): string | undefined {
    return this._seo.keywords || undefined;
  }

  get robots(): string | undefined {
    return this._seo.metaRobots || undefined;
  }

  private get _images(): {
    url: string;
    width: number;
    height: number;
    alt: string;
  }[] {
    const images = [];

    if (this._seo.metaImage?.data) {
      const image = new ImageInstance(this._seo.metaImage.data.attributes);

      images.push({
        url: image.url,
        width: image.width,
        height: image.height,
        alt: image.alternativeText,
      });
    }
    return images;
  }

  get openGraph() {
    return {
      title: this.title,
      description: this.description,
      images: this._images,
    };
  }

  constructor(seoResponse: SEO) {
    this._seo = seoResponse;
  }
}
