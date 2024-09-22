'use client';

import { Pagination, Spacer } from '@nextui-org/react';
import { FC } from 'react';
import { BlogPageAttributes } from '@/api/interfaces/blog';
import { useBlog } from './hooks';
import PostList from '../PostList/PostList';
import Search from '../Search/Search';
import CategoryPicker from '../CategoryPicker/CategoryPicker';
import SubCategoryPicker from '../SubCategoryPicker/SubCategoryPicker';
import TagsList from '../TagsList/TagsList';
import useSubCategory from '../SubCategoryPicker/hooks';

const ClientBlogPage: FC<Omit<BlogPageAttributes, 'menu'>> = ({
  categories,
  search,
  serverPagination,
  pages,
  tags,
  title,
  description,
}) => {
  const { query, setRouteTo, clearAllQueries } = useBlog();

  const { subCategories } = useSubCategory({ query });

  return (
    <div className="flex w-full flex-col">
      <h1 className="text-center text-3xl">{title}</h1>
      <Spacer y={5} />
      {description && <h2 className="text-l text-center">{description}</h2>}
      <Spacer y={10} />
      <CategoryPicker
        setFilter={setRouteTo}
        categories={categories}
        query={query}
      />
      <SubCategoryPicker
        setFilter={setRouteTo}
        query={query}
        subCategories={subCategories}
      />
      <TagsList
        tags={tags}
        setFilter={setRouteTo}
        show={!!query?.category}
        query={query}
      />
      <Search
        setFilter={setRouteTo}
        placeholder={search.placeholder}
        query={query}
        tags={tags}
        clearAll={() => clearAllQueries()}
        categories={categories}
        subCategories={subCategories}
      />
      <Spacer y={5} />
      <PostList pages={pages} />
      {serverPagination && serverPagination?.pageCount > 1 && (
        <Pagination total={serverPagination.pageCount} initialPage={1} />
      )}
    </div>
  );
};

export default ClientBlogPage;
