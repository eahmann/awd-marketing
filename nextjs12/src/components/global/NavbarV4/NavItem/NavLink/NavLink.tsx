import classNames from "classnames"
import { useRouter } from "next/router"

import CustomLinkV2 from "@/components/shared/CustomLink/CustomLink"
import { INavItem } from "@/types/INavItem"

type NavLinkProps = {
  item: INavItem
  onMouseUp?: MouseEvent
}

const NavLink: React.FC<NavLinkProps> = ({ item, onMouseUp }) => {
  const { query } = useRouter()

  // This will need adjusting if we have defined paths besides [[...slug]]
  const isActive = query["slug"]
    ? "/" + query["slug"] === item.href
    : item.href === "/"

  return (
    <CustomLinkV2
      link={item}
      className={classNames(
        "group  rounded-lg focus:outline-none focus:ring-offset-2  focus:ring-offset-indigo-600",
        isActive ? "" : ""
      )}
    >
      <div
        className={classNames(
          "font-medium rounded-lg px-2 py-1 group-focus:ring-2 group-focus:ring-brand-500 ",
          isActive
            ? "text-gray-700 bg-gray-100 ring-2 ring-brand-500 "
            : "text-gray-100 group-hover:text-gray-200"
        )}
      >
        <span className="border-t-2 border-b-2 border-transparent py-[2px] group-hover:border-b-brand-500">
          {item.label}
        </span>
      </div>
    </CustomLinkV2>
  )
}

export default NavLink
