import { Fragment } from "react"

import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import ButtonLink from "@/components/shared/ButtonLink"
import NextImage from "@/components/shared/NextImage/NextImage"

import NavItem from "./NavItem"

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
]

const NavbarV2 = ({ navbar, pageContext }) => {
  return (
    <Popover as="header" className="relative">
      <div className="pb-4">
        <nav
          className="relative flex items-center justify-between px-4 mx-auto max-w-8xl sm:px-2"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <div className="w-auto h-8 sm:h-20">
                  <NextImage width="275" height="75" media={navbar.logo} />
                </div>
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navbar.items.map((item) => (
                <NavItem key={item.label} item={item} />
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

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="px-5 mt-6">
                <a
                  href="#"
                  className="block w-full px-4 py-3 font-medium text-center text-white shadow rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                >
                  Start free trial
                </a>
              </div>
              <div className="px-5 mt-6">
                <p className="text-base font-medium text-center text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-gray-900 hover:underline">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default NavbarV2
