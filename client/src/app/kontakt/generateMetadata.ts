import { getContactPageProps } from '@/api/pages/getContactPageProps';
import { SeoInstance } from '@/core/components/SEO/SeoInstance';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { pageData } = await getContactPageProps();

    if (!pageData?.seo) {
      throw new Error('No seo component in Kontakt page data');
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
        canonical: '/kontakt',
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
      title: 'Kontakt | Korepetycje z matematyki',
      description:
        'Skontaktuj się z Facetką z Majzy w sprawie korepetycji z matematyki.',
      alternates: {
        canonical: '/kontakt',
      },
    };
  }
}
