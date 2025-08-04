import { getHomePageProps } from '@/api/pages/getHomePageProps';
import { SeoInstance } from '@/core/components/SEO/SeoInstance';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { pageData } = await getHomePageProps();

    if (!pageData) {
      throw new Error('No pageData found for Home page');
    }

    const instance = pageData.seo ? new SeoInstance(pageData.seo) : null;

    return {
      title: instance?.title ?? 'Strona Główna | Korepetycje z matematyki',
      description: instance?.description ?? 'Skontaktuj się z Facetką z Majzy w sprawie korepetycji z matematyki.',
      openGraph: {
        title: instance?.openGraph?.title ?? instance?.title ?? 'Strona Główna',
        description: instance?.openGraph?.description ?? instance?.description ?? 'Skontaktuj się...',
        images: instance?.openGraph?.images ?? [],
      },
      alternates: {
        canonical: '/',
      },
      keywords: instance?.keywords,
      robots: instance?.robots,
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
      description: 'Skontaktuj się z Facetką z Majzy w sprawie korepetycji z matematyki.',
      alternates: {
        canonical: '/',
      },
    };
  }
}