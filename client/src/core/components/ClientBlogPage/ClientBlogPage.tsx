'use client';

import { Pagination } from "@heroui/pagination";
import { Spacer } from "@heroui/spacer";
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
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">{title}</h1>
      <Spacer y={5} />
      {description && (
        <p className="md:text-l text-center text-sm lg:text-xl">
          {description}
        </p>
      )}
      <Spacer y={10} id="category" />
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
        placeholder={search?.placeholder}
        query={query}
        tags={tags}
        clearAll={() => clearAllQueries()}
        categories={categories}
        subCategories={subCategories}
      />
      <Spacer y={5} />
      <PostList pages={pages} />
      <div className="flex justify-center pt-6">
        {serverPagination && serverPagination?.pageCount > 1 && (
          <Pagination
            total={serverPagination.pageCount}
            initialPage={1}
            classNames={{
              item: 'border-2 border-[#a40066]',
              cursor: 'bg-[#a40066]',
            }}
            size="lg"
            onChange={(page) =>
              setRouteTo({ name: 'page', value: page.toString() })
            }
            page={parseInt(query?.page || '1')}
          />
        )}
      </div>
    </div>
  );
};

export default ClientBlogPage;
