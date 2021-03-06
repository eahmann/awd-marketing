import { Popover } from "@headlessui/react"
import { MenuIcon } from "@heroicons/react/outline"
import Link from "next/link"

import MobileNav from "./MobileNav"
import NavItem from "./NavItem"
import NextImage from "@/components/shared/NextImage"

const NavbarV4 = ({ navbar, pageContext }) => {
  return (
    <Popover as="header" className="relative ">
      {({ open, close }) => (
        <>
          {/* Mobile nav overlay */}
          <Popover.Overlay
            className={`${
              open
                ? "opacity-50 fixed inset-0 z-10 transition-opacity duration-400 w-screen h-screen"
                : "opacity-0"
            } bg-black`}
          />
          <div className="px-4 mx-auto max-w-8xl sm:px-6">
            <div className="flex items-center justify-center py-2 sm:flex-wrap md:justify-start md:pt-6">
              <div className="mx-auto lg:mx-0">
                {/* START: Logo */}
                <div className="mr-2">
                  <Link href="/">
                    <a>
                      <span className="sr-only">{navbar.logo.alt}</span>
                      <NextImage width="275" height="75" media={navbar.logo} />
                    </a>
                  </Link>
                </div>
                {/* END: Logo */}
              </div>

              {/* START: Mobile nav button */}
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <Popover.Overlay
                className={`${
                  open ? "opacity-30 fixed inset-0" : "opacity-0"
                } bg-black`}
              />
              {/* END: Mobile nav button */}

              {/* START: Desktop nav button group */}

              <div className="hidden mx-auto md:block lg:mx-0 lg:ml-6">
                <Popover.Group
                  as="nav"
                  className="flex flex-row items-baseline space-x-4 lg:space-x-6"
                >
                  {navbar.items.map((item) => (
                    <NavItem key={item.label} item={item} />
                  ))}
                </Popover.Group>
              </div>
              {/* END: Desktop nav button group */}
            </div>
          </div>

          {/* Mobile Nav */}
          <MobileNav navbar={navbar} close={close} open={open} />
        </>
      )}
    </Popover>
  )
}

export default NavbarV4
