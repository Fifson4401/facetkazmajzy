'use client'

import { Pagination } from "@nextui-org/react";
import { FC } from "react";
import { BlogPageAttributes } from "@/api/interfaces/blog";
import { useBlog } from "./hooks";
import PostList from "../PostList/PostList";
import Search from "../Search/Search";

const ClientBlogPage: FC<Omit<BlogPageAttributes, 'menu'>> = ({ categories, search, slug, serverPagination, pages, }) => {

  const { query, setRouteTo } = useBlog()

  return (
    <div className="flex w-full flex-col">
      <Search setFilter={setRouteTo} placeholder={search.placeholder} searchText={query.search} />
      <PostList pages={pages} />
      {serverPagination && serverPagination?.pageCount > 1 && <Pagination total={serverPagination.pageCount} initialPage={1} />}
    </div>
  );
};

export default ClientBlogPage;
