import { PostTileProps } from "./collections/blogPosts";
import { PropsWithCategories } from "./collections/categories";
import { PropsWithTags } from "./collections/tags";
import { MenuArray, PageAttributes } from "./defaults";
import { StrapiResponse } from "./strapiResponse";

export type BlogPageAttributes = PageAttributes & {
  title: string;
  description?: string;
  search: BlogSearchAttributes;
  serverPagination?: PaginationProps;
} & PropsWithBlogPages &
  PropsWithTags &
  PropsWithCategories;

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

export type PaginationProps = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
  setPage?: (data: RouteToAttributes) => void;
};

export type RouteToAttributes = {
  name: NameOfRouteProps;
  value: ValueOfRouteProps;
  slug?: string;
};

export type UseBlogProps = {
  query: Record<string, string | undefined>;
  setRouteTo: (data: RouteToProps) => void;
  clearAllQueries: () => void;
};

export type RouteToProps = {
  name: NameOfRouteProps;
  value: ValueOfRouteProps;
};

export type NameOfRouteProps =
  | "page"
  | "category"
  | "search"
  | "subCategory"
  | "tag";

type ValueOfRouteProps = string | string[] | undefined;
