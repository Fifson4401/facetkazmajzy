import { getHomePageProps } from "@/api/pages/getHomePageProps";
import Hero from "@/core/components/Hero/Hero";
import { Layout } from "@/core/components/Layout/Layout";
import Search from "@/core/components/Search/Search";
import { notFound } from "next/navigation";

export default async function Home() {
  const { pageData } = await getHomePageProps();

  if (!pageData) {
    console.log('tu wpadam');
    notFound()

  }

  return (
    <Layout menu={pageData.menu}>
      <Search {...pageData.search} />
      <Hero {...pageData.header} />
    </Layout>
  );
}
