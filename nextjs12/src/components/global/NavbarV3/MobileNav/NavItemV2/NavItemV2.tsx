import NavAccordion from "./NavAccordion"
import NavLink from "@/components/global/NavbarV3/MobileNav/NavItemV2/NavLinkV2"

// Display a nav item
const Item = ({ item, close }) => {
  // Get the element
  const NavComponent: typeof NavAccordion | typeof NavLink =
    item.children.length > 0 ? NavAccordion : NavLink

  if (!NavComponent) {
    return null
  }

  // Render the nav item
  return <NavComponent item={item} close={close} />
}

const NavItemV2 = ({ item, close }) => {
  return <Item item={item} close={close} />
}

export default NavItemV2
