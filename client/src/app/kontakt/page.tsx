import { getContactPageProps } from '@/api/pages/getContactPageProps';
import ContactHero from '@/core/components/ContactHero/ContactHero';
import { Layout } from '@/core/components/Layout/Layout';
import { notFound } from 'next/navigation';

export default async function Contact() {
  const { pageData } = await getContactPageProps();

  if (!pageData) {
    notFound();
  }

  return (
    <Layout menu={pageData.menu}>
      <ContactHero {...pageData.hero} />
    </Layout>
  );
}
