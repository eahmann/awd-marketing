import { Popover } from "@headlessui/react"
import { MenuIcon } from "@heroicons/react/outline"
import Link from "next/link"

import MobilePopover from "./MobilePopover"
import NavItem from "./NavItem"
import ButtonLink from "@/components/shared/ButtonLink"
import NextImage from "@/components/shared/NextImage/NextImage"

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

const NavbarV3 = ({ navbar, pageContext }) => {
  return (
    <Popover as="header" className="relative">
      <div className="pt-2 pb-4">
        <nav
          className="relative flex items-center justify-between px-4 mx-auto max-w-8xl sm:px-2"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">Workflow</span>
                  <div className="w-auto h-8 sm:h-20 md:hidden">
                    <NextImage width="200" height="75" media={navbar.logo} />
                  </div>
                  <div className="hidden w-auto h-8 md:block sm:h-20">
                    <NextImage width="275" height="75" media={navbar.logo} />
                  </div>
                </a>
              </Link>
              <div className="flex items-center -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navbar.items.map((item) => (
                <NavItem key={item.label} item={item} isMobile={false} />
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navbar.buttons.map((button) => (
              <ButtonLink key={button.id} button={button} />
            ))}
          </div>
        </nav>
      </div>

      <MobilePopover navbar={navbar} />
    </Popover>
  )
}

export default NavbarV3
