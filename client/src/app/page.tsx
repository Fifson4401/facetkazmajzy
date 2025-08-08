import { getHomePageProps } from '@/api/pages/getHomePageProps';
import { isProductionEnvironment } from '@/core/analytics';
import Hero from '@/core/components/Hero/Hero';
import { Layout } from '@/components/layout/Layout/Layout';
import { Seo } from '@/core/components/SEO/SEO';
import SearchHome from '@/core/components/SearchHome/SearchHome';
import { notFound } from 'next/navigation';
import Header from '@/components/ui/Header';
import Highlight from '@/components/ui/Highlight';
import { Text } from '@/components/ui/Text';
import { TapeButton } from '@/components/ui/Button/TapeButton';

export const revalidate = 3600;

export default async function Home() {
  return (
    <Layout>
      {isProductionEnvironment ? <Seo /> : ''}
      {/* <SearchHome {...pageData.search} /> */}
      {/* <Hero {...pageData.hero} /> */}
      <Header level={1} text="Matma nie musi boleć." withHighlighter />
      <Header level={1} text="Matma nie musi boleć." withHighlighter />
      <Text>
        Baza zadań z rozwiązaniami, sztuczna inteligencja,{' '}
        <Highlight>która ogarnie</Highlight> zadanie ze zdjęcia i korepetycje,
        które ratują życie. Wszystko, czego potrzebujesz, żeby wreszcie
        odetchnąć z ulgą.
      </Text>
      <TapeButton>
          Baza zadań
      </TapeButton>
    </Layout>
  );
}
