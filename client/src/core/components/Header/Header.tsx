"use client"

import { MenuArray } from "@/api/interfaces/defaults";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { FC, useState } from "react";

interface HeaderProps {
  menu: MenuArray
}

const Header: FC<HeaderProps> = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = menu.data[0].attributes.MenuItem

  if (!Array.isArray(menuItems) || menuItems.length < 1) {
    return null
  }

  return (
    <Navbar id="header" position="static" className="md:h-20 h-14 bg-background shadow-sm" onMenuOpenChange={setIsMenuOpen}>
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
      <NavbarContent className="hidden lg:flex gap-5" justify="center">
        {menuItems.map((item, index) => {
          const isActive = false
          //TODO active and aria
          return (
            <NavbarItem key={`${item.text}-${index}`} isActive={isActive} >
              <Link color="foreground" href={item.url} className="max-w-40 text-wrap text-center	">
                {item.text}
              </Link>
            </NavbarItem>
          )
        })}
      </NavbarContent>
      <NavbarContent justify="end" className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="mt-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.text}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
