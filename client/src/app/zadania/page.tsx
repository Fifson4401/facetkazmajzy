import { searchParams } from '@/api/collections/getBlogPosts';
import { getBlogPageProps } from '@/api/pages/getBlogPageProps';
import { isProductionEnvironment } from '@/core/analytics';
import ClientBlogPage from '@/core/components/ClientBlogPage/ClientBlogPage';
import { Layout } from '@/core/components/Layout/Layout';
import { Seo } from '@/core/components/SEO/SEO';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  searchParams: searchParams;
}

export const revalidate = 3600;

export { generateMetadata } from './generateMetadata';

export default async function Blog({ searchParams }: BlogPageProps) {
  const { pageData } = await getBlogPageProps(searchParams);

  if (!pageData) {
    notFound();
  }

  const { menu, seo, ...clientSideProps } = pageData;

  return (
    <Layout menu={menu}>
      {isProductionEnvironment ? <Seo seo={seo} /> : ''}
      <ClientBlogPage {...clientSideProps} />
    </Layout>
  );
}
