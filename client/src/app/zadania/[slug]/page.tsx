import { getBlogPostPageProps } from '@/api/pages/getBlogPostPageProps';
import { Layout } from '@/core/components/Layout/Layout';
import PostAnswer from '@/core/components/PostAnswer/PostAnswer';
import { PostContent } from '@/core/components/PostContent/PostContent';
import PostHeader from '@/core/components/PostHeader/PostHeader';
import PostSource from '@/core/components/PostSource/PostSource';
import PostVideo from '@/core/components/PostVideo/PostVideo';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { pageData } = await getBlogPostPageProps(params.slug);

  if (!pageData) {
    notFound();
  }

  const {
    menu,
    title,
    category,
    sub_category,
    tags,
    slug,
    content,
    answer,
    source,
    video,
  } = pageData;

  return (
    <Layout menu={menu}>
      <PostHeader
        title={title}
        category={category}
        sub_category={sub_category}
        tags={tags}
        slug={slug}
      />
      <PostContent content={content || []} />
      <PostAnswer TEX={answer?.TEX} image={answer?.image} />
      <PostSource source={source} />
      <PostVideo video={video} />
    </Layout>
  );
}
