import NavLink from "./NavLink"
import NavPopover from "./NavPopover"

// Display a nav item
const Item = ({ item }) => {
  // Get the element
  const NavComponent: typeof NavPopover | typeof NavLink =
    item.children.length > 0 ? NavPopover : NavLink

  if (!NavComponent) {
    return null
  }

  // Render the nav item
  return <NavComponent item={item} />
}

const NavItem = ({ item }) => {
  return <Item item={item} />
}

export default NavItem
