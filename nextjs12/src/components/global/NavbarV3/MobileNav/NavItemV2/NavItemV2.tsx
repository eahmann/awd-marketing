import NavAccordion from "./NavAccordion"
import NavLink from "@/components/global/NavbarV3/MobileNav/NavItemV2/NavLinkV2"

// Display a nav item
const Item = ({ item }) => {
  // Get the element
  const NavComponent: typeof NavAccordion | typeof NavLink =
    item.children.length > 0 ? NavAccordion : NavLink

  if (!NavComponent) {
    return null
  }

  // Render the nav item
  return <NavComponent item={item} />
}

const NavItemV2 = ({ item }) => {
  return <Item item={item} />
}

export default NavItemV2
