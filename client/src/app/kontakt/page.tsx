import { getContactPageProps } from '@/api/pages/getContactPageProps';
import { isProductionEnvironment } from '@/core/analytics';
import ContactHero from '@/core/components/ContactHero/ContactHero';
import ContactInfo from '@/core/components/ContactInfo/ContactInfo';
import ContactLinks from '@/core/components/ContactLinks/ContactLinks';
import ContactPetsSlider from '@/core/components/ContactPetsSlider/ContactPetsSlider';
import { Layout } from '@/components/layout/Layout/Layout';
import { Seo } from '@/core/components/SEO/SEO';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export { /* @next-codemod-error `generateMetadata` export is re-exported. Check if this component uses `params` or `searchParams`*/
generateMetadata } from './generateMetadata';

export default async function Contact() {
  const { pageData } = await getContactPageProps();

  if (!pageData) {
    notFound();
  }

  return (
    <Layout menu={pageData.menu}>
      {isProductionEnvironment ? <Seo seo={pageData.seo} /> : ''}
      <ContactHero {...pageData.hero} />
      <ContactInfo {...pageData.contactInfo} />
      <ContactLinks {...pageData.socialLinks} />
      <ContactPetsSlider {...pageData.pets} />
    </Layout>
  );
}
