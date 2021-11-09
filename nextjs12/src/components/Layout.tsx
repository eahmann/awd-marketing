import Footer from "./global/Footer"
import NavbarV3 from "./global/NavbarV3/NavbarV3"
import PreviewBanner from "./global/PreviewBanner"

const Layout = ({ children, global, preview, pageContext }) => {
  const { navbar, footer, contactInfo, social } = global
  return (
    <div className="flex flex-col justify-between min-h-screen bg-indigo-600">
      {/* Aligned to the top */}
      {preview && <PreviewBanner />}
      <NavbarV3 navbar={navbar} pageContext={pageContext} />
      <main className="flex-1">{children}</main>
      {/* Aligned to the bottom */}
      <Footer
        contactInfo={contactInfo}
        pageContext={pageContext}
        social={social}
        {...footer}
      />
    </div>
  )
}

export default Layout
