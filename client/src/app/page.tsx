export const dynamic = 'force-dynamic';

import { getHomePageProps } from '@/api/pages/getHomePageProps';
import Hero from '@/core/components/Hero/Hero';
import { Layout } from '@/core/components/Layout/Layout';
import SearchHome from '@/core/components/SearchHome/SearchHome';
import { notFound } from 'next/navigation';

export default async function Home() {
  const { pageData } = await getHomePageProps();

  if (!pageData) {
    notFound();
  }

  return (
    <Layout menu={pageData.menu}>
      <SearchHome {...pageData.search} />
      <Hero {...pageData.hero} />
    </Layout>
  );
}
