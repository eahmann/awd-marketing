import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"

import LocaleSwitch from "../LocaleSwitch"
import ThemeToggle from "../ThemeToggle"
import CustomLink from "@/components/shared/CustomLink"
import NextImage from "@/components/shared/NextImage"

const footerNavigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
}

const Footer = ({
  contactInfo,
  social,
  logo,
  smallText,
  columns,
  pageContext,
  navbar,
}) => {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 mx-auto mt-6 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid">
          <div className=" mx-auto ">
            <NextImage width="220" height="100" media={logo} />
          </div>
        </div>
        <LocaleSwitch pageContext={pageContext} />
        <nav
          className="flex flex-wrap justify-center -my-2"
          aria-label="Footer"
        >
          {navbar.items.map((item) => (
            <div key={item.label} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-200 hover:text-gray-100"
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <div className="flex space-x-6">
            {social.facebook && (
              <CustomLink
                link={{
                  href: "http://www.facebook.com/" + social.facebook,
                  newTab: true,
                }}
                className="text-gray-100 hover:text-gray-200"
              >
                <span className="sr-only">{social.facebook}</span>
                <FaFacebookSquare className="w-6 h-6" aria-hidden="true" />
              </CustomLink>
            )}
            {social.instagram && (
              <CustomLink
                link={{
                  href: "http://www.instagram.com/" + social.instagram,
                  newTab: true,
                }}
                className="text-gray-100 hover:text-gray-200"
              >
                <span className="sr-only">{social.instagram}</span>
                <FaInstagramSquare className="w-6 h-6" aria-hidden="true" />
              </CustomLink>
            )}
            {social.twitter && (
              <CustomLink
                link={{
                  href: "http://www.twitter.com/" + social.twitter,
                  newTab: true,
                }}
                className="text-gray-100 hover:text-gray-200"
              >
                <span className="sr-only">{social.twitter}</span>
                <FaTwitterSquare className="w-6 h-6" aria-hidden="true" />
              </CustomLink>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-center py-6">
          <ThemeToggle />
        </div>

        <div className="pt-4">
          <p className="text-base text-center text-gray-100">
            &copy; 2021 Atomic Web Development All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
