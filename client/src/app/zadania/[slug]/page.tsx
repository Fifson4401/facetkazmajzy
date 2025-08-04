import { getBlogPostPageProps } from '@/api/pages/getBlogPostPageProps';
import { isProductionEnvironment } from '@/core/analytics';
import { Layout } from '@/core/components/Layout/Layout';
import PostAnswer from '@/core/components/PostAnswer/PostAnswer';
import { PostContent } from '@/core/components/PostContent/PostContent';
import PostHeader from '@/core/components/PostHeader/PostHeader';
import PostSource from '@/core/components/PostSource/PostSource';
import PostVideo from '@/core/components/PostVideo/PostVideo';
import { Seo } from '@/core/components/SEO/SEO';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export { generateMetadata } from './generateMetadata';

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const { pageData } = await getBlogPostPageProps(slug);

  if (!pageData) {
    notFound();
  }

  const {
    menu,
    title,
    category,
    sub_category,
    tags,
    content,
    answer,
    source,
    video,
    seo,
  } = pageData;

  return (
    <Layout menu={menu}>
      {isProductionEnvironment ? <Seo seo={seo} /> : ''}
      <PostHeader
        title={title}
        category={category}
        sub_category={sub_category}
        tags={tags}
        slug={pageData.slug}
      />
      <PostContent content={content || []} />
      <PostAnswer answer={answer} />
      <PostSource source={source} />
      <PostVideo video={video} />
    </Layout>
  );
}