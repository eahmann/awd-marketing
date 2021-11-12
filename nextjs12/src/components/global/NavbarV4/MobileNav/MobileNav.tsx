import { Fragment } from "react"
import { useEffect } from "react"

import { Popover, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useRouter } from "next/router"

import NavItem from "../NavItem"
import NextImage from "@/components/shared/NextImage/NextImage"

const MobileNav = ({ navbar, close, open }) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      close()
    })
  })

  useEffect(() => {
    open && (document.body.style.overflow = "hidden")
    !open && (document.body.style.overflow = "auto")
  }, [open])

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute z-10 flex flex-col flex-grow w-screen h-full min-h-screen -mx-4 -my-4 -mt-2 inset-x-4 top-1 transform">
        <div className="m-4 overflow-scroll rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="sticky inset-0 z-40 p-4 bg-indigo-700">
            {" "}
            <div className="flex items-center justify-between">
              <Link href="/">
                <a>
                  <span className="sr-only">{navbar.logo.alt}</span>
                  <NextImage width="225" height="50" media={navbar.logo} />
                </a>
              </Link>
              <div className="p-1">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="relative px-5 py-6 bg-indigo-500 grid gap-6 sm:gap-8 sm:p-8">
            <nav className="grid gap-y-6">
              {navbar.items.map((item) => (
                <NavItem key={item.label} item={item} isMobile={true} />
              ))}
            </nav>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

export default MobileNav
