import { Fragment } from "react"

import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import classNames from "classnames"
import { useRouter } from "next/router"

import NavLink from "@/components/global/NavbarV4/NavItem/NavLink"

const NavPopover = ({ item }) => {
  const { query } = useRouter()

  const childrenSlugs = item.children.map((child) => {
    return child.href
  })

  const isChildActive = childrenSlugs.includes("/" + query["slug"])

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              isChildActive
                ? "outline-none ring-2 ring-offset-2 ring-offset-indigo-600 ring-brand-500"
                : "",
              "group text-gray-100 px-2 rounded-md inline-flex items-center font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-brand-500"
            )}
          >
            <span className=" border-t-2 border-b-2 border-transparent group-hover:border-b-brand-500 ">
              {item.label}
            </span>
            <ChevronDownIcon
              className={classNames(
                open ? "transform rotate-180" : "",
                "ml-2 h-5 w-5 group-hover:text-gray-100"
              )}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-20 max-w-md px-2 mt-3 -ml-4 w-max transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              {({ close }) => (
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative px-5 py-6 bg-indigo-700 grid gap-6 sm:gap-8 sm:p-8">
                    {item.children.map((item) => (
                      <div
                        className={"flex"}
                        key={item.id}
                        onMouseUp={() => close()}
                      >
                        <NavLink key={item.id} item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default NavPopover
