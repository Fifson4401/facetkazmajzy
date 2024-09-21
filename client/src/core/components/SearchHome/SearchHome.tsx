'use client'
import { ImageProps } from "@/api/interfaces/defaults";
import { Button, Input } from "@nextui-org/react";
import { FC, useState } from "react";
import { ImageHandler } from "../ImageHandler";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchHomeProps {
  placeholder: string,
  image: ImageProps,
}

const SearchHome: FC<SearchHomeProps> = ({ image, placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>('')

  const router = useRouter()

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (searchValue) {
        router.push(`/zadania?search=${searchValue}`)
      }
    }} className="flex flex-row items-center justify-center px-11 max-h-16 w-full gap-5">
      <div className="rounded-xl hidden md:block aria-hidden">
        <Link href={'/'}>
          <ImageHandler image={image.data?.attributes} priority removeWrapper imageClassName="rounded-2xl max-w-9" />
        </Link>
      </div>
      <div className="flex items-center justify-center w-[80vw]">
        <Input
          isClearable
          type="text"
          variant="bordered"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target['value'])}
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
          onClear={() => { setSearchValue("") }}
        />
      </div>
      <Button type="submit" disabled={searchValue === undefined} className="bg-[#cc3266] text-white shadow-xl" startContent={<IoMdSearch size={25} />} aria-description="Szukaj" />
    </form>
  );
};

export default SearchHome;