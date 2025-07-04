import { getHomePageProps } from '@/api/pages/getHomePageProps';
import { isProductionEnvironment } from '@/core/analytics';
import Hero from '@/core/components/Hero/Hero';
import { Layout } from '@/core/components/Layout/Layout';
import { Seo } from '@/core/components/SEO/SEO';
import SearchHome from '@/core/components/SearchHome/SearchHome';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export { /* @next-codemod-error `generateMetadata` export is re-exported. Check if this component uses `params` or `searchParams`*/
generateMetadata } from './generateMetadata';

export default async function Home() {
  const { pageData } = await getHomePageProps();

  if (!pageData) {
    notFound();
  }

  return (
    <Layout menu={pageData.menu}>
      {isProductionEnvironment ? <Seo seo={pageData.seo} /> : ''}
      <SearchHome {...pageData.search} />
      <Hero {...pageData.hero} />
    </Layout>
  );
}
