import { getBlogPageProps } from '@/api/pages/getBlogPageProps';
import { SeoInstance } from '@/core/components/SEO/SeoInstance';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { pageData } = await getBlogPageProps({});

    if (!pageData?.seo) {
      throw new Error('No seo component in Blog page data');
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
        canonical: '/zadania',
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
      title: 'Zadania | Korepetycje z matematyki',
      description:
        'Wyszukaj zadania z ostanich egzaminów maturalnych i 8-klasisty.',
      alternates: {
        canonical: '/zadania',
      },
    };
  }
}
