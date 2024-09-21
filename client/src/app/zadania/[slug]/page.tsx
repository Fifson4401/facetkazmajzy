import { searchParams } from "@/api/collections/getBlogPosts";
import { getBlogPageProps } from "@/api/pages/getBlogPageProps";
import { getBlogPostPageProps } from "@/api/pages/getBlogPostPageProps";
import ClientBlogPage from "@/core/components/ClientBlogPage/ClientBlogPage";
import { Layout } from "@/core/components/Layout/Layout";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPost({ params }: BlogPostPageProps) {

  const { pageData } = await getBlogPostPageProps(params.slug)

  // if (!pageData) {
  //   notFound()
  // }

  // const { menu } = pageData

  return (
    <></>
    // <Layout menu={menu}>
    // </Layout>
  );
}
