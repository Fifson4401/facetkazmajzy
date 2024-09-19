import qs from "qs";

import client from "../client";
import { StrapiFindAllResponse } from "../interfaces/strapiResponse";
import { BlogPageProps } from "../interfaces/blog";
import { PostTileProps } from "../interfaces/collections/blogPosts";

export type searchParams = Record<string, string | undefined>;

export const getBlogPosts = async (
  searchParams: searchParams
): Promise<Pick<BlogPageProps, "pages" | "serverPagination">> => {
  const {
    page = 1,
    search = undefined,
    category = undefined,
    subCategory = undefined,
    tag = undefined,
  } = searchParams;

  try {
    const query = qs.stringify(
      {
        fields: ["slug", "title", "description"],
        populate: {
          header: {
            populate: {
              title: { populate: "*" },
              bgImage: { populate: "*" },
              postAuthor: {
                populate: {
                  blogPostAuthor: { populate: "*" },
                },
              },
            },
          },
          category: { populate: { name: { populate: "*" } } },
          sub_category: { populate: { name: { populate: "*" } } },
          tags: {
            populate: {
              name: { populate: "*" },
            },
          },
        },
        pagination: {
          page: page,
          pageSize: 9,
        },
        filters: {
          contentText: {
            $containsi: search,
          },
          categories: { id: { $eq: category } },
          sub_categories: { id: { $eq: subCategory } },
          tags: { name: { $eq: tag } },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    const {
      data: {
        data: pages,
        meta: { pagination: serverPagination },
      },
    } = await client.get<StrapiFindAllResponse<PostTileProps>>(
      `/api/blog-posts?${query}`
    );

    return { pages, serverPagination };
  } catch {
    return { pages: [] };
  }
};
