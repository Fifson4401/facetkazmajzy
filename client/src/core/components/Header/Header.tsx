'use client';

import { MenuArray } from '@/api/interfaces/defaults';
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { usePathname, useSearchParams } from 'next/navigation';
import { FC, useEffect, useMemo, useState } from 'react';
import NextImage from 'next/image';

interface HeaderProps {
  menu?: MenuArray;
}

const Header: FC<HeaderProps> = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);

  const searchParams = useSearchParams();
  const menuItems = menu?.data[0].attributes.menuItems;

  const queryURL = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );

  const path = usePathname();

  useEffect(() => {
    if (!Array.isArray(menuItems) || menuItems.length < 1) {
      setShowMenuItems(false);
      return;
    }
    setShowMenuItems(true);
  }, [menuItems]);

  return (
    <Navbar
      id="header"
      position="static"
      className="h-14 bg-background shadow-sm md:h-20"
      onMenuOpenChange={setIsMenuOpen}
      aria-label="Menu nawigacyjne"
    >
      <NavbarContent justify="start" aria-label="Logo witryny">
        <NavbarBrand className="h-full">
          <Link
            href="/"
            color="foreground"
            className="flex h-full items-center"
          >
            <Image
              as={NextImage}
              src="/logo.webp"
              alt="Facetka Z Majzy Logo"
              width={58}
              height={58}
              className="h-full w-auto min-w-12 object-contain py-1 md:py-0"
              priority
            />
            <p className="ml-2 md:ml-6">Facetka z Majzy</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {!!showMenuItems && !!menuItems?.length && (
        <>
          <NavbarContent
            className="hidden gap-5 lg:flex"
            justify="center"
            aria-label="Strony nawigacji"
          >
            {menuItems.map((item, index) => {
              const isActive = queryURL?.category
                ? queryURL?.category === item.category?.data?.id.toString()
                : path.includes(item.text.toLowerCase());

              const itemUrl = item.url
                ? item.url
                : `/zadania?category=${item?.category?.data?.id || 1}`;

              return (
                <NavbarItem key={`${item.text}-${index}`} isActive={isActive}>
                  <Link
                    color="foreground"
                    href={itemUrl}
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
          <NavbarMenu
            className="md:mt-5"
            aria-label="Rozwijane menu stron nawigacji"
            aria-expanded={isMenuOpen ? true : false}
          >
            {menuItems.map((item, index) => {
              const isActive = queryURL?.category
                ? queryURL?.category === item.category?.data?.id.toString()
                : false;

              const itemUrl = item.url
                ? item.url
                : `/zadania?category=${item?.category?.data?.id || 1}`;

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
                    href={itemUrl}
                    size="lg"
                  >
                    {item.text}
                  </Link>
                </NavbarMenuItem>
              );
            })}
          </NavbarMenu>
        </>
      )}
    </Navbar>
  );
};

export default Header;
