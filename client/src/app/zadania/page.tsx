import { searchParams } from "@/api/collections/getBlogPosts";
import { getBlogPageProps } from "@/api/pages/getBlogPageProps";
import ClientBlogPage from "@/core/components/ClientBlogPage/ClientBlogPage";
import { Layout } from "@/core/components/Layout/Layout";
import { notFound } from "next/navigation";

interface BlogPageProps {
  searchParams: searchParams
}

export default async function Blog({ searchParams }: BlogPageProps) {

  const { pageData } = await getBlogPageProps(searchParams)

  if (!pageData) {
    notFound()
  }

  const { menu, ...clientSideProps } = pageData

  return (
    <Layout menu={menu}>
      <ClientBlogPage {...clientSideProps} />
    </Layout>
  );
}
