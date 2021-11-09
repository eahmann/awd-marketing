import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"
import classNames from "classnames"
import NavLinkV2 from "../NavLinkV2"

const NavAccordion = ({ item }) => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <div className={classNames(open && "bg-indigo-700 rounded-md")}>
              <Disclosure.Button className="flex justify-between w-full px-2 py-2 font-medium text-left text-gray-100 text-md focus:outline-none focus-visible:ring">
                <span>{item.label}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-gray-100`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 text-gray-500 grid gap-y-8">
                {item.children.map((item) => (
                  <NavLinkV2 key={item.label} item={item} />
                ))}
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default NavAccordion
