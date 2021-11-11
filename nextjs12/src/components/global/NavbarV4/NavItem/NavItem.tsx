import NavAccordion from "./NavAccordion"
import NavLink from "./NavLink"
import NavPopover from "./NavPopover"
import { INavItem } from "@/types/INavItem"

// Display a nav item
const Item: React.FC<NavItemProps> = ({ item, isMobile }) => {
  // Get the element
  const NavComponent: typeof NavPopover | typeof NavLink | typeof NavAccordion =
    item.children.length > 0 ? (isMobile ? NavAccordion : NavPopover) : NavLink

  if (!NavComponent) {
    return null
  }

  // Render the nav item
  return <NavComponent item={item} />
}

type NavItemProps = {
  item: INavItem
  isMobile?: boolean
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  isMobile = false,
}): JSX.Element => {
  return <Item item={item} isMobile={isMobile} />
}

export default NavItem
