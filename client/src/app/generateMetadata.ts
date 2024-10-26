import { getHomePageProps } from '@/api/pages/getHomePageProps';
import { SeoInstance } from '@/core/components/SEO/SeoInstance';
import { ImageInstance } from '@/core/models/ImageInstance';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { pageData } = await getHomePageProps();

    if (!pageData?.seo) {
      throw new Error('No seo component in Home page data');
    }

    const instance = new SeoInstance(pageData.seo);
    const image = pageData.hero.image.data?.attributes
      ? new ImageInstance(pageData.hero.image.data?.attributes)
      : null;

    return {
      title: instance.title,
      description: instance.description,
      openGraph: {
        title: instance.openGraph.title,
        description: instance.openGraph.description,
        images: instance.openGraph.images,
      },
      alternates: {
        canonical: '/',
      },
      keywords: instance.keywords,
      robots: instance.robots,
      other: {
        type: '',
      },
      icons: {
        other: [
          {
            rel: 'preconnect',
            url: 'https://facetkazmajzy.pl/',
          },
          {
            rel: 'dns-prefetch',
            url: 'https://facetkazmajzy.pl/',
          },
        ],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Strona Główna | Korepetycje z matematyki',
      description:
        'Skontaktuj się z Facetką z Majzy w sprawie korepetycji z matematyki.',
      alternates: {
        canonical: '/',
      },
    };
  }
}
