import { Fragment } from "react"

import { Popover, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import Link from "next/link"

import NavItem from "../NavItem"
import NextImage from "@/components/shared/NextImage/NextImage"

const MobileNav = ({ navbar }) => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 z-10 p-2 transition transform origin-top-right md:hidden"
      >
        {({ close }) => (
          <div className="bg-indigo-600 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a>
                      <span className="sr-only">{navbar.logo.alt}</span>
                      <NextImage width="225" height="50" media={navbar.logo} />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-6">
                  {navbar.items.map((item) => (
                    <NavItem key={item.label} item={item} isMobile={true} />
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </Popover.Panel>
    </Transition>
  )
}

export default MobileNav
