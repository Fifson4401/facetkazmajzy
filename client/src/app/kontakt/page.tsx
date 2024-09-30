import { getContactPageProps } from '@/api/pages/getContactPageProps';
import Hero from '@/core/components/Hero/Hero';
import { Layout } from '@/core/components/Layout/Layout';
import { notFound } from 'next/navigation';

export default async function Contact() {
  const { pageData } = await getContactPageProps();

  if (!pageData) {
    notFound();
  }

  return (
    <Layout menu={pageData.menu}>
      <Hero {...pageData.hero} />
    </Layout>
  );
}
