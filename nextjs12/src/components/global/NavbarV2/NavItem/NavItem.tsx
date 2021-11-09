import NavLink from "./NavLink"
import NavPopover from "./NavPopover"

// Display a nav item
const Item = ({ item, isMobile }) => {
  // Get the element
  const NavComponent: typeof NavPopover | typeof NavLink =
    item.children.length > 0 ? NavPopover : NavLink

  return NavComponent ? <NavComponent {...item} isMobile={isMobile} /> : null
}

const NavItem = ({ item, isMobile }) => {
  console.log(isMobile)

  const props = { item, isMobile }

  return <Item item={item} isMobile={isMobile} />
}

export default NavItem
