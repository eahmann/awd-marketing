import Footer from "./global/Footer"
import NavbarV4 from "./global/NavbarV4"
import PreviewBanner from "./global/PreviewBanner"

const Layout = ({ children, global, preview, pageContext }) => {
  const { navbar, footer, contactInfo, social } = global
  return (
    <div className="flex flex-col justify-between min-h-screen bg-indigo-600 dark:bg-indigo-dark transition-all  duration-500 ease-in-out">
      {/* Aligned to the top */}
      {preview && <PreviewBanner />}
      <NavbarV4 navbar={navbar} pageContext={pageContext} />
      <main className="flex-1">{children}</main>
      {/* Aligned to the bottom */}
      <Footer
        contactInfo={contactInfo}
        pageContext={pageContext}
        social={social}
        navbar={navbar}
        {...footer}
      />
    </div>
  )
}

export default Layout
