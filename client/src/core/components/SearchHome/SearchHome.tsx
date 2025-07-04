'use client';
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { FC, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useRouter } from 'next/navigation';

interface SearchHomeProps {
  placeholder: string;
}

const SearchHome: FC<SearchHomeProps> = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const router = useRouter();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchValue) {
          router.push(`/zadania?search=${searchValue}`);
        }
      }}
      className="flex w-full flex-row items-center justify-center gap-5 max-md:flex-col sm:px-11 md:max-h-16"
    >
      <div className="flex w-full items-center justify-center md:w-[80vw]">
        <Input
          isClearable
          type="text"
          variant="bordered"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target['value'])}
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
          onClear={() => {
            setSearchValue('');
          }}
        />
      </div>
      <Button
        type="submit"
        disabled={searchValue === undefined}
        className="flex w-full bg-[#cc3266] text-white shadow-xl md:w-fit"
        startContent={<IoMdSearch size={25} />}
        aria-label="Szukaj"
      />
    </form>
  );
};

export default SearchHome;
