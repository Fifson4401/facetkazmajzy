import { getHomePageProps } from '@/api/pages/getHomePageProps';
import { SeoInstance } from '@/core/components/SEO/SeoInstance';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { pageData } = await getHomePageProps();

    if (!pageData?.seo) {
      throw new Error('No seo component in Home page data');
    }

    const instance = new SeoInstance(pageData.seo);

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
