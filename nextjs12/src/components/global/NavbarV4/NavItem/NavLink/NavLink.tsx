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
        "px-2 group leading-8 rounded-lg md:px-2 focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-indigo-600",
        isActive ? "bg-gray-100 focus:bg-gray-100" : ""
      )}
    >
      <span
        className={classNames(
          "font-medium leading-10 border-b-2 border-transparent md:text-base  group-hover:border-brand-500",
          isActive ? "text-gray-700" : "text-gray-100 group-hover:text-gray-200"
        )}
      >
        {item.label}
      </span>
    </CustomLinkV2>
  )
}

export default NavLink
