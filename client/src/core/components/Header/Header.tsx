'use client';

import { MenuArray } from '@/api/interfaces/defaults';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';
import { useSearchParams } from 'next/navigation';
import { FC, useMemo, useState } from 'react';

interface HeaderProps {
  menu: MenuArray;
}

const Header: FC<HeaderProps> = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchParams = useSearchParams();

  const menuItems = menu.data[0].attributes.menuItems;

  const queryURL = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );

  if (!Array.isArray(menuItems) || menuItems.length < 1) {
    return null;
  }

  return (
    <Navbar
      id="header"
      position="static"
      className="h-14 bg-background shadow-sm md:h-20"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/" color="foreground">
            <Image
              as={NextImage}
              src="/logo.webp"
              alt="Facetka Z Majzy Logo"
              width={58}
              height={58}
              priority
            />
            <p className="ml-2 md:ml-6">Facetka z Majzy</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-5 lg:flex" justify="center">
        {menuItems.map((item, index) => {
          const isActive = queryURL?.category ? queryURL?.category === item.category?.data?.id.toString() : false;

          return (
            <NavbarItem key={`${item.text}-${index}`} isActive={isActive}>
              <Link
                color="foreground"
                href={item.url ? item.url : `/zadania?category=${item?.category?.data.id}`}
                className="max-w-40 text-wrap text-center"
              >
                {item.text}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end" className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarMenu className="mt-5">
        {menuItems.map((item, index) => {
          const isActive = queryURL?.category ? queryURL?.category === item.category?.data?.id.toString() : false;

          return (
            <NavbarMenuItem key={`${item.text}-${index}`}>
              <Link
                color={
                  isActive
                    ? 'primary'
                    : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                className="w-full"
                href={item.url}
                size="lg"
              >
                {item.text}
              </Link>
            </NavbarMenuItem>
          )
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
