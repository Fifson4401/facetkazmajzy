import { Link, Navbar, NavbarBrand } from "@nextui-org/react"
import Image from "next/image";


const Header = () => {


  return (
    <Navbar id="header" position="static" className="md:h-32 bg-background shadow-lg">
      <NavbarBrand>
        <Link href="/" color="foreground">
          <Image
            src="/logo.png"
            alt="Facetka Z Majzy Logo"
            className="md:size-20 size-14 mx-2"
            width={100}
            height={100}
            priority
          />
          <p>FzM</p>
        </Link>
      </NavbarBrand>

    </Navbar>
  )
}

export default Header
