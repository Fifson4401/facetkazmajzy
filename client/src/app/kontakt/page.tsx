export const dynamic = 'force-dynamic';

import { getContactPageProps } from '@/api/pages/getContactPageProps';
import ContactHero from '@/core/components/ContactHero/ContactHero';
import ContactInfo from '@/core/components/ContactInfo/ContactInfo';
import ContactLinks from '@/core/components/ContactLinks/ContactLinks';
import ContactPetsSlider from '@/core/components/ContactPetsSlider/ContactPetsSlider';
import { Layout } from '@/core/components/Layout/Layout';
import { Seo } from '@/core/components/SEO/SEO';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export { generateMetadata } from './generateMetadata';

export default async function Contact() {
  const { pageData } = await getContactPageProps();

  if (!pageData) {
    notFound();
  }

  return (
    <Layout menu={pageData.menu}>
      <Seo seo={pageData.seo} />
      <ContactHero {...pageData.hero} />
      <ContactInfo {...pageData.contactInfo} />
      <ContactLinks {...pageData.socialLinks} />
      <ContactPetsSlider {...pageData.pets} />
    </Layout>
  );
}
