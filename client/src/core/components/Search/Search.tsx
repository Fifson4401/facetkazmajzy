'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { FC, useState, useCallback } from 'react';
import { IoMdSearch, IoMdTrash } from 'react-icons/io';
import { RouteToProps } from '@/api/interfaces/blog';
import { TagsArray } from '@/api/interfaces/collections/tags';
import useChips from './useChips';
import TagChip from '../TagChip/TagChip';
import { CategoriesArray } from '@/api/interfaces/collections/categories';
import { StrapiResponse } from '@/api/interfaces/strapiResponse';
import { SubCategoryAttributes } from '@/api/interfaces/collections/subCategories';
import useSearch from './useSearch';

interface SearchProps {
  placeholder: string;
  setFilter: (data: RouteToProps) => void;
  clearAll: () => void;
  categories?: CategoriesArray;
  subCategories?: StrapiResponse<SubCategoryAttributes>[];
  tags?: TagsArray;
  query?: Record<string, string | undefined>;
}

const Search: FC<SearchProps> = ({
  placeholder,
  setFilter,
  query,
  tags,
  clearAll,
  categories,
  subCategories,
}) => {
  const [searchValue, setSearchValue] = useState<string>(query?.search || '');

  const { filteredTags } = useChips({ query, tags });

  const { categoryName, showDeleteAll, subCategoryName } = useSearch({
    query,
    categories,
    subCategories,
  });

  const handleClear = useCallback(() => {
    setFilter({ name: 'search', value: undefined });
    setSearchValue('');
  }, [setFilter]);

  const handleCloseTag = useCallback(
    (id: number) => {
      setFilter({ name: 'tag', value: id.toString() });
    },
    [setFilter]
  );

  const handleCloseCategory = useCallback(() => {
    setFilter({ name: 'category', value: undefined });
  }, [setFilter]);

  const handleCloseSubCategory = useCallback(() => {
    setFilter({ name: 'subCategory', value: undefined });
  }, [setFilter]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setFilter({ name: 'search', value: searchValue });
      }}
    >
      <div className="mt-4 flex flex-wrap justify-end gap-2 md:px-11">
        {categoryName && (
          <TagChip
            key="Search_tag_category"
            name={categoryName}
            size="md"
            variant="bordered"
            onClose={handleCloseCategory}
            onClick={handleCloseCategory}
          />
        )}
        {subCategoryName && (
          <TagChip
            key="Search_tag_SubCategory"
            name={subCategoryName}
            size="md"
            variant="bordered"
            onClose={handleCloseSubCategory}
            onClick={handleCloseSubCategory}
          />
        )}
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-3 pb-2 pt-2 md:flex-row md:gap-5 md:px-11">
        {showDeleteAll && (
          <Button
            color="danger"
            className="order-3 flex w-full bg-[#ED0C0C] text-white shadow-xl md:order-1 md:w-fit md:max-w-3"
            startContent={<IoMdTrash size={20} />}
            aria-label="Usuń parametry wyszukiwania"
            onClick={clearAll}
          />
        )}
        <div className="order-1 flex w-full items-center justify-center md:order-2">
          <Input
            isClearable
            type="text"
            variant="bordered"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder={placeholder}
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-[#595b60] dark:placeholder:text-white/60',
              ],
              innerWrapper: 'bg-transparent',
              inputWrapper: [
                'shadow-xl',
                'bg-default-200/50',
                'border-[#ab3e3d83]',
                'dark:bg-default/60',
                'backdrop-blur-xl',
                'backdrop-saturate-200',
                'hover:bg-[#f6f7f3]',
                'dark:hover:bg-default/70',
                'group-data-[hover=true]:border-[#cc3266]',
                'group-data-[focus=true]:bg-[#f6f7f3]',
                'group-data-[focus=true]:border-[#cc3266]',
                'dark:group-data-[focus=true]:bg-default/60',
                '!cursor-text',
              ],
            }}
            onClear={handleClear}
          />
        </div>
        <Button
          type="submit"
          disabled={searchValue.trim() === ''}
          className="order-2 flex w-full bg-[#cc3266] text-white shadow-xl md:order-3 md:w-fit"
          startContent={<IoMdSearch size={25} />}
          aria-label="Szukaj"
        />
      </div>
      {filteredTags.length > 0 && (
        <div className="flex flex-wrap justify-end gap-2 md:px-11">
          {filteredTags.map((item) => (
            <TagChip
              key={`Search_tag_${item.id}`}
              tag={item.attributes}
              variant="bordered"
              onClose={() => handleCloseTag(item.id)}
              onClick={() => handleCloseTag(item.id)}
            />
          ))}
        </div>
      )}
    </form>
  );
};

export default Search;
