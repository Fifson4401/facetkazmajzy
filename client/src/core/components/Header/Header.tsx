import { MenuArray } from "@/api/interfaces/defaults";
import { Link, Navbar, NavbarBrand } from "@nextui-org/react"
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { FC } from "react";

interface HeaderProps {
  menu: MenuArray
}

const Header: FC<HeaderProps> = ({ menu }) => {
  return (
    <Navbar id="header" position="static" className="md:h-20 h-14 bg-background shadow-sm">
      <NavbarBrand>
        <Link href="/" color="foreground">
          <Image
            as={NextImage}
            src="/logo.png"
            alt="Facetka Z Majzy Logo"
            width={58}
            height={58}
            priority
          />
          <p className="ml-2 md:ml-6">Facetka z Majzy</p>
        </Link>
      </NavbarBrand>

    </Navbar>
  )
}

export default Header
