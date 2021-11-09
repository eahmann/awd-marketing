import { Fragment } from "react"

import { Popover, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"

import NavItem from "../NavItem"
import NextImage from "@/components/shared/NextImage/NextImage"

const MobilePopover = ({ navbar }) => {
  return (
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
        className="absolute inset-x-0 top-0 z-20 p-2 transition transform origin-top md:hidden"
      >
        <div className="overflow-hidden bg-indigo-600 rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <NextImage width="200" height="75" media={navbar.logo} />
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
              {navbar.items.map((item) => (
                <div className="block" key={item.label}>
                  <NavItem item={item} isMobile={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

export default MobilePopover
