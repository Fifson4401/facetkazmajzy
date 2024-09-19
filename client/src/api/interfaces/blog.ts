import { PostTileProps } from "./collections/blogPosts";
import { CategoriesBlog } from "./collections/categories";
import { MenuArray, PageAttributes } from "./defaults";
import { StrapiResponse } from "./strapiResponse";
import { NextRouter } from "next/router";

export type BlogPageAttributes = PageAttributes & {
  search: BlogSearchAttributes;
  menu: MenuArray;
  categories?: CategoriesBlog;
  serverPagination?: PaginationProps;
} & PropsWithBlogPages;

export type BlogSearchAttributes = {
  placeholder: string;
};

export type BlogPageProps = {
  serverPagination?: PaginationProps;
} & PropsWithBlogPages &
  PropsWithCategories;

export type PropsWithBlogPages<T = object> = T & {
  pages?: StrapiResponse<PostTileProps>[];
};

export type PropsWithCategories<T = object> = T & {
  categories?: CategoriesBlog;
};

export type PaginationProps = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
  setPage?: (data: RouteToAttributes) => void;
};

export type RouteToAttributes = {
  name: "page" | "category" | "search" | undefined;
  value: string | string[] | undefined;
  slug?: string;
};

export type UseBlogProps = {
  query: Record<string, string | undefined>;
  setRouteTo: (data: RouteToProps) => void;
};

export type RouteToProps = {
  name: "page" | "category" | "search" | undefined;
  value: string | string[] | undefined;
};
