import { isProductionEnvironment } from '@/core/analytics';
import { Layout } from '@/components/layout/Layout/Layout';
import { Seo } from '@/core/components/SEO/SEO';
import Hero from '@/features/home/hero/Hero';
import { MarginDoodles } from '@/components/ui/Doodle/MarginDoodle';
import { homeDoodles } from '@/features/home/Doodles';
import Exam from '@/features/home/exam/Exam';

export const revalidate = 3600;

export default async function Home() {
  return (
    <Layout>
      {isProductionEnvironment ? <Seo /> : ''}
      <MarginDoodles doodles={homeDoodles} />
      <Hero />
      <Exam />
    </Layout>
  );
}
