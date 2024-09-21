'use client'

import { Button, Input } from "@nextui-org/react";
import { FC, useMemo, useState, useCallback } from "react";
import { IoMdSearch, IoMdTrash } from "react-icons/io";
import { RouteToProps } from "@/api/interfaces/blog";
import { TagsArray } from "@/api/interfaces/collections/tags";
import useChips from "./hooks";
import TagChip from "../TagChip/TagChip";
import { CategoriesArray } from "@/api/interfaces/collections/categories";
import { StrapiResponse } from "@/api/interfaces/strapiResponse";
import { SubCategoryAttributes } from "@/api/interfaces/collections/subCategories";
import { getDisplayCategory } from "../CategoryChip/utils";

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
  subCategories
}) => {
  // Lokalny stan dla wartości wyszukiwania
  const [searchValue, setSearchValue] = useState<string>(query?.search || '');

  // Użycie custom hooka do filtrowania tagów
  const { filteredTags } = useChips({ query, tags });

  // Wyliczenie, czy pokazać przycisk "Usuń wszystkie filtry"
  const showDeleteAll = useMemo(() => Object.keys(query || {}).length > 1, [query]);

  // Wyliczenie nazwy kategorii na podstawie query i dostępnych kategorii
  const categoryName = useMemo(() => {
    const categoryId = query?.category ? Object.values(query.category)[0] : undefined;
    const category = categories?.data.find(item => item.id.toString() === categoryId);
    return category?.attributes.name;
  }, [query, categories]);

  // Wyliczenie nazwy subkategorii na podstawie query i dostępnych subkategorii
  const subCategoryName = useMemo(() => {
    const subCategoryId = query?.subCategory ? Object.values(query.subCategory)[0] : undefined;
    const subCategory = subCategories?.find(item => item.id.toString() === subCategoryId);
    return subCategory ? getDisplayCategory(subCategory.attributes.name || '') : undefined;
  }, [query, subCategories]);

  // Funkcja obsługująca wyczyszczenie pola wyszukiwania
  const handleClear = useCallback(() => {
    setFilter({ name: 'search', value: undefined });
    setSearchValue("");
  }, [setFilter]);

  // Funkcje obsługujące zamykanie poszczególnych filtrów
  const handleCloseTag = useCallback((id: number) => {
    setFilter({ name: 'tag', value: id.toString() });
  }, [setFilter]);

  const handleCloseCategory = useCallback(() => {
    setFilter({ name: 'category', value: undefined });
  }, [setFilter]);

  const handleCloseSubCategory = useCallback(() => {
    setFilter({ name: 'subCategory', value: undefined });
  }, [setFilter]);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setFilter({ name: 'search', value: searchValue });
    }}>
      {/* Sekcja z tagami kategorii i subkategorii */}
      <div className="flex md:px-11 justify-end flex-wrap gap-2 mt-4">
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

      {/* Główna sekcja wyszukiwania */}
      <div className="flex flex-row items-center justify-center md:px-11 w-full gap-5 pb-2 pt-2">
        {showDeleteAll && (
          <Button
            color="danger"
            className="text-white shadow-xl max-w-3 bg-[#ED0C0C]"
            startContent={<IoMdTrash size={20} />}
            aria-description="Usuń parametry wyszukiwania"
            onClick={clearAll}
          />
        )}
        <div className="flex items-center justify-center w-full">
          <Input
            isClearable
            type="text"
            variant="bordered"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder={placeholder}
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-[#595b60] dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "border-[#ab3e3d83]",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-[#f6f7f3]",
                "dark:hover:bg-default/70",
                "group-data-[hover=true]:border-[#cc3266]",
                "group-data-[focus=true]:bg-[#f6f7f3]",
                "group-data-[focus=true]:border-[#cc3266]",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            onClear={handleClear}
          />
        </div>
        <Button
          type="submit"
          disabled={searchValue.trim() === ''}
          className="bg-[#cc3266] text-white shadow-xl"
          startContent={<IoMdSearch size={25} />}
          aria-description="Szukaj"
        />
      </div>

      {/* Sekcja z tagami filtrów */}
      {filteredTags.length > 0 && (
        <div className="flex md:px-11 justify-end flex-wrap gap-2">
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
