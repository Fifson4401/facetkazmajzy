import { getBlogPostPageProps } from '@/api/pages/getBlogPostPageProps';
import { SeoInstance } from '@/core/components/SEO/SeoInstance';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { pageData } = await getBlogPostPageProps(slug);

    if (!pageData?.seo) {
      throw new Error(`No seo component in Blog Post slug: ${slug}`);
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
        canonical: `/zadania/${slug}`,
      },
      keywords: instance.keywords,
      robots: instance.robots,
      other: {
        type: '',
      },
    };
  } catch (error) {
    const { slug } = await params;
    console.error('Error generating metadata:', error);
    return {
      title: 'Zadanie | Korepetycje z matematyki',
      description:
        'Skontaktuj się z Facetką z Majzy w sprawie korepetycji z matematyki.',
      alternates: {
        canonical: `/zadania/${slug}`,
      },
    };
  }
}