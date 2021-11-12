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
        "group  rounded focus:outline-none focus:ring-2  focus:ring-brand-500 p-2",
        isActive
          ? "text-gray-700 dark:text-brand-500 bg-gray-100 dark:bg-transparent ring-2 ring-brand-500 "
          : "text-gray-100 "
      )}
    >
      <span className="text-base font-medium group-hover:text-brand-500">
        {item.label}
      </span>
    </CustomLinkV2>
  )
}

export default NavLink
