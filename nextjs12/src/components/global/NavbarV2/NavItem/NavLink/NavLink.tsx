import classNames from "classnames"
import { useRouter } from "next/router"

import CustomLinkV2 from "@/components/shared/CustomLink/CustomLink"

const NavLink = ({ href, label, isMobile }) => {
  const { query } = useRouter()
  const link = { href }

  // This will need adjusting if we have defined paths besides [[...slug]]
  const isActive = query["slug"] ? "/" + query["slug"] === href : href === "/"

  return (
    <CustomLinkV2
      link={link}
      className={classNames(
        "px-2 md:px-2 rounded-lg group", //Default
        isActive ? "bg-gray-100 focus:bg-gray-100" : "",
        isMobile
          ? "inline-block w-full" // Mobile only
          : "leading-8 focus:ring-brand-500 focus:ring-offset-indigo-500 " // Desktop only
      )}
    >
      <span
        className={classNames(
          "font-medium leading-10 group-hover:border-brand-500",
          isActive
            ? "text-gray-700"
            : "text-gray-100 group-hover:text-gray-200",
          isActive && isMobile ? "bg-gray-100 focus:bg-gray-100" : "",

          isMobile ? "block" : "border-b-2 border-transparent md:text-base "
        )}
      >
        {label}
      </span>
    </CustomLinkV2>
  )
}

export default NavLink
