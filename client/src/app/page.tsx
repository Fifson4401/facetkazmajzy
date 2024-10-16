export const dynamic = 'force-dynamic';

import { getHomePageProps } from '@/api/pages/getHomePageProps';
import Hero from '@/core/components/Hero/Hero';
import { Layout } from '@/core/components/Layout/Layout';
import { Seo } from '@/core/components/SEO/SEO';
import SearchHome from '@/core/components/SearchHome/SearchHome';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export { generateMetadata } from './generateMetadata';

export default async function Home() {
  const { pageData } = await getHomePageProps();

  if (!pageData) {
    notFound();
  }

  return (
    <Layout menu={pageData.menu}>
      <Seo seo={pageData.seo} />
      <SearchHome {...pageData.search} />
      <Hero {...pageData.hero} />
    </Layout>
  );
}
