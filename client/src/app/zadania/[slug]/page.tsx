import { getBlogPostPageProps } from "@/api/pages/getBlogPostPageProps";
import { Layout } from "@/core/components/Layout/Layout";
import PostHeader from "@/core/components/PostHeader/PostHeader";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPost({ params }: BlogPostPageProps) {

  const { pageData } = await getBlogPostPageProps(params.slug)

  if (!pageData) {
    notFound()
  }

  const { menu, title, category, sub_category, tags, slug } = pageData

  console.log(sub_category);


  return (
    <Layout menu={menu}>
      <PostHeader title={title} category={category} sub_category={sub_category} tags={tags} slug={slug} />
    </Layout>
  );
}
